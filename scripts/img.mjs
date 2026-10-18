// One-off image pipeline. Generates the responsive WebP/JPEG set in
// public/img from the high-res originals in scripts/originals.
// sharp is not a project dependency — run with:
//   npm i --no-save sharp && node scripts/img.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'scripts/originals';
const OUT = 'public/img';

const jobs = [
  // project screenshots — 16:9-ish, shown at ≤ ~600px CSS width
  { src: 'traveezy.png', name: 'traveezy', widths: [640, 1024] },
  { src: 'trustcore.png', name: 'trustcore', widths: [640, 1280] },
  { src: 'makeovers.png', name: 'makeovers', widths: [640, 1280] },
  // portrait for the About card (340×420 CSS → 2x)
  { src: 'profile.png', name: 'profile', widths: [480, 800] },
  // round hero avatar: square crop of the face (coords in the 1792×2390 original)
  { src: 'profile.png', name: 'avatar', widths: [96, 192], extract: { left: 493, top: 246, width: 806, height: 806 } },
];

await mkdir(OUT, { recursive: true });

for (const job of jobs) {
  for (const w of job.widths) {
    let img = sharp(`${SRC}/${job.src}`);
    if (job.extract) img = img.extract(job.extract);
    img = img.resize({ width: w, withoutEnlargement: true });
    await img.clone().webp({ quality: 78 }).toFile(`${OUT}/${job.name}-${w}.webp`);
    // JPEG fallback only at the largest size
    if (w === Math.max(...job.widths)) {
      await img.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/${job.name}-${w}.jpg`);
    }
  }
  console.log('✓', job.name);
}
