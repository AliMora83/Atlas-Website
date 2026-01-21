#!/usr/bin/env node

/**
 * Event Image Processing Script
 * 
 * This script:
 * 1. Scores images by quality (resolution, file size, sharpness)
 * 2. Selects the best quality images
 * 3. Compresses images to WebP format
 * 4. Organizes images into the proper folder structure
 * 5. Generates a manifest JSON file
 * 
 * Usage:
 *   node scripts/process-event-images.js <input-folder> [options]
 * 
 * Options:
 *   --max-images <number>    Maximum number of images to keep (default: 45)
 *   --max-width <number>     Maximum width in pixels (default: 1920)
 *   --quality <number>       WebP quality 1-100 (default: 85)
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const crypto = require('crypto');

// Configuration
const CONFIG = {
    maxImages: 45,
    maxWidth: 1920,
    quality: 85,
    similarityThreshold: 90, // Percentage similarity to consider duplicates
    outputDir: path.join(__dirname, '../web/public/images/events/2025'),
    supportedFormats: ['.jpg', '.jpeg', '.png', '.webp', '.heic']
};

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const config = { ...CONFIG };

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--max-images':
                config.maxImages = parseInt(args[++i]);
                break;
            case '--max-width':
                config.maxWidth = parseInt(args[++i]);
                break;
            case '--quality':
                config.quality = parseInt(args[++i]);
                break;
            case '--similarity':
                config.similarityThreshold = parseInt(args[++i]);
                break;
            case '--output-dir':
                config.outputDir = args[++i];
                break;
            default:
                if (!config.inputDir && !args[i].startsWith('--')) {
                    config.inputDir = args[i];
                }
        }
    }

    if (!config.inputDir) {
        console.error('❌ Error: Please provide an input folder path');
        console.log('\nUsage: node scripts/process-event-images.js <input-folder> [options]');
        process.exit(1);
    }

    return config;
}

// Calculate perceptual hash for duplicate detection
async function calculatePerceptualHash(imagePath) {
    try {
        const image = sharp(imagePath);
        const { data, info } = await image
            .resize(8, 8, { fit: 'fill' })
            .greyscale()
            .raw()
            .toBuffer({ resolveWithObject: true });

        // Calculate average pixel value
        const avg = data.reduce((sum, val) => sum + val, 0) / data.length;

        // Create hash based on whether each pixel is above or below average
        let hash = '';
        for (let i = 0; i < data.length; i++) {
            hash += data[i] > avg ? '1' : '0';
        }

        return hash;
    } catch (error) {
        console.error(`Error calculating hash for ${imagePath}:`, error.message);
        return null;
    }
}

// Calculate Hamming distance between two hashes
function hammingDistance(hash1, hash2) {
    if (!hash1 || !hash2 || hash1.length !== hash2.length) return 100;

    let distance = 0;
    for (let i = 0; i < hash1.length; i++) {
        if (hash1[i] !== hash2[i]) distance++;
    }

    return distance;
}

// Calculate similarity percentage
function calculateSimilarity(hash1, hash2) {
    const distance = hammingDistance(hash1, hash2);
    return ((hash1.length - distance) / hash1.length) * 100;
}

// Score image quality
async function scoreImageQuality(imagePath) {
    try {
        const stats = await fs.stat(imagePath);
        const metadata = await sharp(imagePath).metadata();

        // Quality factors:
        // 1. Resolution (higher is better)
        // 2. File size (larger often means less compression)
        // 3. Sharpness estimate (using image stats)

        const resolutionScore = (metadata.width * metadata.height) / 1000000; // Megapixels
        const fileSizeScore = stats.size / 1000000; // MB

        // Get image statistics for sharpness estimation
        const { channels } = await sharp(imagePath).stats();
        const sharpnessScore = channels.reduce((sum, ch) => sum + ch.stdev, 0) / channels.length;

        // Weighted score
        const totalScore = (resolutionScore * 0.4) + (fileSizeScore * 0.3) + (sharpnessScore * 0.3);

        return {
            score: totalScore,
            width: metadata.width,
            height: metadata.height,
            size: stats.size,
            format: metadata.format
        };
    } catch (error) {
        console.error(`Error scoring ${imagePath}:`, error.message);
        return { score: 0 };
    }
}

// Find all images in directory
async function findImages(dir, config) {
    const files = await fs.readdir(dir);
    const images = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);

        if (stat.isDirectory()) {
            // Recursively search subdirectories
            const subImages = await findImages(filePath, config);
            images.push(...subImages);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (config.supportedFormats.includes(ext)) {
                images.push(filePath);
            }
        }
    }

    return images;
}

// Score all images by quality
async function scoreAllImages(images, config) {
    console.log('📊 Scoring image quality...');

    const imageData = [];

    for (let i = 0; i < images.length; i++) {
        const imagePath = images[i];
        process.stdout.write(`\r   Processing ${i + 1}/${images.length}...`);

        const quality = await scoreImageQuality(imagePath);

        imageData.push({
            path: imagePath,
            quality,
            filename: path.basename(imagePath)
        });
    }
    console.log('\n');

    return imageData;
}

// Select best images by quality
function selectBestImagesByQuality(imageData, config) {
    console.log(`📊 Found ${imageData.length} images`);

    // Sort all images by quality score
    imageData.sort((a, b) => b.quality.score - a.quality.score);

    // Take top N images
    const finalSelection = imageData.slice(0, config.maxImages);

    console.log(`✅ Selected ${finalSelection.length} best images\n`);

    return finalSelection;
}

// Group similar images
async function groupSimilarImages(images, config) {
    console.log('🔍 Analyzing images for duplicates...');

    const imageData = [];

    // Calculate hashes and scores for all images
    for (let i = 0; i < images.length; i++) {
        const imagePath = images[i];
        process.stdout.write(`\r   Processing ${i + 1}/${images.length}...`);

        const hash = await calculatePerceptualHash(imagePath);
        const quality = await scoreImageQuality(imagePath);

        if (hash) {
            imageData.push({
                path: imagePath,
                hash,
                quality,
                filename: path.basename(imagePath)
            });
        }
    }
    console.log('\n');

    // Group similar images
    const groups = [];
    const processed = new Set();

    for (let i = 0; i < imageData.length; i++) {
        if (processed.has(i)) continue;

        const group = [imageData[i]];
        processed.add(i);

        for (let j = i + 1; j < imageData.length; j++) {
            if (processed.has(j)) continue;

            const similarity = calculateSimilarity(imageData[i].hash, imageData[j].hash);

            if (similarity >= config.similarityThreshold) {
                group.push(imageData[j]);
                processed.add(j);
            }
        }

        groups.push(group);
    }

    return groups;
}

// Select best images from groups
function selectBestImages(groups, config) {
    console.log(`📊 Found ${groups.length} unique images/groups`);

    // Sort each group by quality and take the best one
    const selectedImages = groups.map(group => {
        const sorted = group.sort((a, b) => b.quality.score - a.quality.score);

        if (group.length > 1) {
            console.log(`   📸 Group of ${group.length} similar images - selected best quality`);
        }

        return sorted[0];
    });

    // Sort all selected images by quality
    selectedImages.sort((a, b) => b.quality.score - a.quality.score);

    // Take top N images
    const finalSelection = selectedImages.slice(0, config.maxImages);

    console.log(`✅ Selected ${finalSelection.length} best images\n`);

    return finalSelection;
}

// Process and save images
async function processImages(selectedImages, config) {
    console.log('🔄 Processing and compressing images...');

    // Create output directory
    await fs.mkdir(config.outputDir, { recursive: true });

    const manifest = [];

    for (let i = 0; i < selectedImages.length; i++) {
        const image = selectedImages[i];
        const outputFilename = `event-${String(i + 1).padStart(3, '0')}.webp`;
        const outputPath = path.join(config.outputDir, outputFilename);

        process.stdout.write(`\r   Processing ${i + 1}/${selectedImages.length}...`);

        try {
            // Process image
            const processed = sharp(image.path);
            const metadata = await processed.metadata();

            // Resize if needed
            if (metadata.width > config.maxWidth) {
                processed.resize(config.maxWidth, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }

            // Convert to WebP and save
            await processed
                .webp({ quality: config.quality })
                .toFile(outputPath);

            const stats = await fs.stat(outputPath);

            manifest.push({
                filename: outputFilename,
                originalName: image.filename,
                width: metadata.width > config.maxWidth ? config.maxWidth : metadata.width,
                height: Math.round((metadata.width > config.maxWidth ? config.maxWidth : metadata.width) * metadata.height / metadata.width),
                size: stats.size,
                qualityScore: image.quality.score
            });
        } catch (error) {
            console.error(`\n❌ Error processing ${image.filename}:`, error.message);
        }
    }

    console.log('\n');

    // Save manifest
    const manifestPath = path.join(config.outputDir, 'manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    return manifest;
}

// Main function
async function main() {
    console.log('🎨 Event Image Processing Script\n');

    const config = parseArgs();

    console.log('Configuration:');
    console.log(`  Input:  ${config.inputDir}`);
    console.log(`  Output: ${config.outputDir}`);
    console.log(`  Max images: ${config.maxImages}`);
    console.log(`  Max width: ${config.maxWidth}px`);
    console.log(`  Quality: ${config.quality}%\n`);

    try {
        // Find all images
        console.log('🔍 Scanning for images...');
        const images = await findImages(config.inputDir, config);
        console.log(`✅ Found ${images.length} images\n`);

        if (images.length === 0) {
            console.log('❌ No images found in the specified directory');
            return;
        }

        // Score all images by quality
        const imageData = await scoreAllImages(images, config);

        // Select best images by quality
        const selectedImages = selectBestImagesByQuality(imageData, config);

        // Process and save
        const manifest = await processImages(selectedImages, config);

        // Summary
        console.log('✨ Processing complete!\n');
        console.log('Summary:');
        console.log(`  Original images: ${images.length}`);
        console.log(`  Final selection: ${manifest.length}`);
        console.log(`  Output directory: ${config.outputDir}`);
        console.log(`  Total size: ${(manifest.reduce((sum, img) => sum + img.size, 0) / 1024 / 1024).toFixed(2)} MB`);
        console.log(`\n📄 Manifest saved to: ${path.join(config.outputDir, 'manifest.json')}`);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        process.exit(1);
    }
}

// Run the script
main();
