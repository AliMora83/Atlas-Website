# Image Processing Script

## Quick Start

### 1. Install Dependencies
```bash
npm install sharp --save-dev
```

### 2. Download Event Photos
Download the 100+ images from the client's link to a folder on your computer.

### 3. Run the Script
```bash
node scripts/process-event-images.js /path/to/downloaded/images
```

### 4. Review Results
Check `web/public/images/events/2025/` for your optimized images!

---

## What This Script Does

✅ **Detects duplicates** - Finds images that are the same or taken 1 second apart  
✅ **Selects best quality** - Automatically picks the highest quality from similar images  
✅ **Compresses to WebP** - Reduces file size while maintaining quality  
✅ **Organizes files** - Saves to proper folder with clean naming  
✅ **Generates manifest** - Creates JSON file with image metadata  

---

## Custom Options

```bash
# Select only 40 images instead of 45
node scripts/process-event-images.js /path/to/images --max-images 40

# Higher quality (larger files)
node scripts/process-event-images.js /path/to/images --quality 90

# More aggressive duplicate detection
node scripts/process-event-images.js /path/to/images --similarity 85
```

---

## Output

Images saved to: `web/public/images/events/2025/`
- `event-001.webp`
- `event-002.webp`
- `event-003.webp`
- ... (up to 45 images)
- `manifest.json` (metadata file)

---

For detailed documentation, see [scripts/README.md](./README.md)
