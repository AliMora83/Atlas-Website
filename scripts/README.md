# Event Image Processing Scripts

This directory contains utility scripts for managing event photos and other media assets.

## Image Processing Script

### Overview

The `process-event-images.js` script automates the workflow for handling large collections of event photos by:

1. **Detecting duplicates** using perceptual hashing (finds images that are visually similar)
2. **Scoring quality** based on resolution, file size, and sharpness
3. **Selecting the best** images from duplicate groups
4. **Compressing** to WebP format for optimal web performance
5. **Organizing** into a clean folder structure
6. **Generating** a manifest JSON file for easy integration

### Installation

First, install the required dependency:

```bash
cd /Users/alikora/dev/AntiG/Atlas
npm install sharp --save-dev
```

### Usage

Basic usage:

```bash
node scripts/process-event-images.js /path/to/downloaded/images
```

With custom options:

```bash
node scripts/process-event-images.js /path/to/images \
  --max-images 40 \
  --max-width 1920 \
  --quality 85 \
  --similarity 90
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `--max-images <number>` | Maximum number of images to keep | 45 |
| `--max-width <number>` | Maximum width in pixels | 1920 |
| `--quality <number>` | WebP quality (1-100) | 85 |
| `--similarity <number>` | Similarity threshold % (0-100) | 90 |

### How It Works

#### 1. Duplicate Detection

The script uses **perceptual hashing** to detect similar images:
- Resizes each image to 8x8 pixels
- Converts to grayscale
- Creates a binary hash based on pixel brightness
- Compares hashes using Hamming distance
- Groups images with similarity above the threshold

This method catches:
- Exact duplicates
- Images taken 1 second apart
- Same scene with slight variations
- Different crops of the same photo

#### 2. Quality Scoring

Each image is scored based on:
- **Resolution** (40% weight) - Higher megapixels = better
- **File size** (30% weight) - Larger files often have less compression
- **Sharpness** (30% weight) - Estimated using standard deviation of pixel values

The highest-scoring image from each group is selected.

#### 3. Output

Images are saved to:
```
web/public/images/events/2025/
├── event-001.webp
├── event-002.webp
├── ...
└── manifest.json
```

The `manifest.json` contains metadata for each image:
```json
[
  {
    "filename": "event-001.webp",
    "originalName": "IMG_1234.jpg",
    "width": 1920,
    "height": 1280,
    "size": 156789,
    "qualityScore": 8.45
  }
]
```

### Example Workflow

1. **Download images** from the client's link to a folder (e.g., `~/Downloads/event-photos`)

2. **Run the script**:
   ```bash
   node scripts/process-event-images.js ~/Downloads/event-photos --max-images 45
   ```

3. **Review the output**:
   - Check `web/public/images/events/2025/` for processed images
   - Review `manifest.json` for image metadata

4. **Use in your components**:
   ```tsx
   import manifest from '@/public/images/events/2025/manifest.json';
   
   // Display images
   {manifest.map((img) => (
     <Image
       key={img.filename}
       src={`/images/events/2025/${img.filename}`}
       alt="Event photo"
       width={img.width}
       height={img.height}
     />
   ))}
   ```

### Tips

- **Higher similarity threshold** (95-98) = Only very similar images grouped
- **Lower similarity threshold** (85-90) = More aggressive duplicate detection
- **Adjust max-images** based on how many photos you want in the gallery
- **Quality setting** of 85 provides excellent quality with good compression

### Troubleshooting

**Error: "Cannot find module 'sharp'"**
- Run: `npm install sharp --save-dev`

**Images look too compressed**
- Increase quality: `--quality 90` or `--quality 95`

**Too many duplicates being kept**
- Lower similarity threshold: `--similarity 85`

**Not enough images selected**
- Increase max-images: `--max-images 60`
- Lower similarity threshold to keep more variations
