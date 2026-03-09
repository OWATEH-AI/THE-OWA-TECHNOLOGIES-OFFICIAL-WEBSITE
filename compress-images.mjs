import { readdir, stat, rename, unlink, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';
import sharp from 'sharp';
import { randomBytes } from 'crypto';

const PUBLIC_DIR = 'C:\\Users\\LYKART06\\OWA TECHNOLOGIES OFFICIAL\\public';
const TARGET_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

let totalSaved = 0;
let totalFiles = 0;
let errors = 0;

async function getAllImages(dir) {
    const results = [];
    try {
        const entries = await readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = join(dir, entry.name);
            if (entry.isDirectory()) {
                const sub = await getAllImages(fullPath);
                results.push(...sub);
            } else if (TARGET_EXTS.has(extname(entry.name).toLowerCase())) {
                results.push(fullPath);
            }
        }
    } catch (e) { /* skip unreadable dirs */ }
    return results;
}

async function compressImage(filePath) {
    const tmpPath = filePath + '.' + randomBytes(4).toString('hex') + '.tmp';
    try {
        const { size: before } = await stat(filePath);
        const ext = extname(filePath).toLowerCase();

        const image = sharp(filePath);
        const meta = await image.metadata();

        let pipeline = image;
        if (meta.width > 1920) {
            pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        }

        // Write compressed version to temp file first
        if (ext === '.jpg' || ext === '.jpeg') {
            await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
        } else if (ext === '.png') {
            await pipeline.png({ quality: 85, compressionLevel: 9, palette: false }).toFile(tmpPath);
        } else if (ext === '.webp') {
            await pipeline.webp({ quality: 82 }).toFile(tmpPath);
        } else {
            return;
        }

        const { size: after } = await stat(tmpPath);

        if (after < before) {
            // Replace original with compressed
            await unlink(filePath);
            await rename(tmpPath, filePath);
            const saved = before - after;
            totalSaved += saved;
            console.log(`✓ ${basename(filePath).substring(0, 50)} | ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${(saved / 1024).toFixed(0)}KB)`);
        } else {
            // Compressed is larger, keep original
            await unlink(tmpPath);
            console.log(`= ${basename(filePath).substring(0, 50)} | already optimal`);
        }
        totalFiles++;
    } catch (e) {
        errors++;
        // Clean up temp file if it exists
        try { await unlink(tmpPath); } catch (_) { }
        console.error(`✗ ${basename(filePath).substring(0, 50)}: ${e.message.split('\n')[0]}`);
    }
}

async function main() {
    console.log('🔍 Scanning for images in public folder...');
    const images = await getAllImages(PUBLIC_DIR);
    console.log(`📸 Found ${images.length} images. Compressing (quality preserved)...\n`);

    // Process in batches of 4 to avoid memory overload
    for (let i = 0; i < images.length; i += 4) {
        const batch = images.slice(i, i + 4);
        await Promise.all(batch.map(compressImage));
    }

    console.log('\n===========================');
    console.log(`✅ Done! ${totalFiles} files processed, ${errors} skipped/errors`);
    console.log(`💾 Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main();
