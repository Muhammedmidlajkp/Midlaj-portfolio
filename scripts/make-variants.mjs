// Derives the smaller and AVIF image variants the site serves, from the
// largest WebP of each project screenshot already in public/img.
//   node scripts/make-variants.mjs        (needs: npm i -D sharp)
// For each project image: WebP and AVIF at 480/640/960/1280px (never larger
// than the source), plus the small cropped hero/contact thumbnails.
import { stat } from 'node:fs/promises';
import sharp from 'sharp';
import { projects } from '../src/data/projectsData.js';

const WIDTHS = [480, 640, 960, 1280];
const out = (f) => `public/img/${f}`;

for (const { image } of projects) {
  if (!image) continue;
  const { name } = image;
  const biggest = Math.max(...image.widths.filter((w) => w >= 640 || image.widths.length === 1));
  const sourceFile = out(`${name}-${biggest}.webp`);
  const sourceWidth = (await sharp(sourceFile).metadata()).width;
  const sizes = WIDTHS.filter((w) => w <= sourceWidth);
  if (!sizes.includes(sourceWidth) && sourceWidth < 1280) sizes.push(sourceWidth);
  for (const w of sizes) {
    const img = () => sharp(sourceFile).resize({ width: w });
    if (w !== biggest) await img().webp({ quality: 80 }).toFile(out(`${name}-${w}.webp`));
    await img().avif({ quality: 55, effort: 5 }).toFile(out(`${name}-${w}.avif`));
  }
  console.log(name, sizes.join(','));
}

// small cropped thumbnails (8:5, top of the page) for the hero headline and the contact row
for (const name of ['weddesy', 'rootsbusiness', 'trustcore']) {
  for (const w of [160, 320]) {
    await sharp(out(`${name}-960.webp`))
      .resize({ width: w, height: Math.round((w * 5) / 8), fit: 'cover', position: 'top' })
      .webp({ quality: 80 })
      .toFile(out(`${name}-thumb-${w}.webp`));
  }
}
const size = async (f) => (await stat(out(f))).size;
console.log('thumb 160/320 bytes:', await size('weddesy-thumb-160.webp'), await size('weddesy-thumb-320.webp'));
