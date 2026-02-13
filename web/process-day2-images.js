#!/usr/bin/env node

/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const INPUT_DIR = '/Users/alikora/Downloads/day2';
const OUTPUT_DIR = './public/images/events/2025/day2';
const MAX_WIDTH = 1920;
const QUALITY = 82;

console.log('🖼️  Day2 Image Processing Script');
console.log('================================\n');

// Check if cwebp is available
try {
    execSync('which cwebp', { stdio: 'ignore' });
} catch (e) {
    console.error('❌ Error: cwebp is not installed.');
    console.error('Please install it: brew install webp');
    process.exit(1);
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all JPG files from input directory
const files = fs.readdirSync(INPUT_DIR)
    .filter(f => f.toLowerCase().match(/\.(jpg|jpeg)$/i))
    .sort();

console.log(`Found ${files.length} images to process\n`);

// Process each image
const manifest = [];
let processedCount = 0;

files.forEach((filename, index) => {
    const inputPath = path.join(INPUT_DIR, filename);
    const baseNumber = String(index + 1).padStart(3, '0');

    // Determine if this should be a conference or adventure photo
    // For now, we'll default all to event- (Adventure)
    // User can rename specific ones to conference- manually
    const outputFilename = `event-${baseNumber}.webp`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    console.log(`Processing [${index + 1}/${files.length}]: ${filename} -> ${outputFilename}`);

    try {
        // Get file stats
        const stats = fs.statSync(inputPath);

        // Convert to WebP with resize
        const cmd = `cwebp -resize ${MAX_WIDTH} 0 -q ${QUALITY} "${inputPath}" -o "${outputPath}"`;
        execSync(cmd, { stdio: 'pipe' });

        // Get output file size
        const outputStats = fs.statSync(outputPath);

        // Add to manifest
        manifest.push({
            filename: outputFilename,
            originalName: filename,
            width: MAX_WIDTH,
            height: 0, // Will be calculated by aspect ratio
            size: outputStats.size,
            qualityScore: 35.0,
            tag: outputFilename.startsWith('conference-') ? 'Conference' : 'Adventure'
        });

        processedCount++;

    } catch (error) {
        console.error(`  ❌ Error processing ${filename}:`, error.message);
    }
});

// Write manifest
const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`\n✅ Processing complete!`);
console.log(`   Processed: ${processedCount}/${files.length} images`);
console.log(`   Output: ${OUTPUT_DIR}`);
console.log(`   Manifest: ${manifestPath}`);
console.log(`\n📊 Tag Summary:`);
console.log(`   Conference: ${manifest.filter(i => i.tag === 'Conference').length}`);
console.log(`   Adventure: ${manifest.filter(i => i.tag === 'Adventure').length}`);
