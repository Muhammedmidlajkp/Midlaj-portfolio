// Generates every icon from public/favicon.svg so there is one brand mark.
// Needs sharp:  npm i -D sharp   then   node scripts/make-icons.mjs
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const svg = await readFile('public/favicon.svg');

const png = (size, file) =>
  sharp(svg, { density: Math.ceil((72 * size) / 64) * 4 })
    .resize(size, size)
    .png()
    .toFile(`public/${file}`);

await Promise.all([
  png(64, 'favicon-64.png'),
  png(180, 'apple-touch-icon.png'),
  png(192, 'icon-192.png'),
  png(512, 'icon-512.png'),
]);

// favicon.ico: a single 32x32 PNG wrapped in an ICO container (valid in all browsers)
const ico32 = await sharp(svg, { density: 288 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // width
entry.writeUInt8(32, 1); // height
entry.writeUInt8(0, 2); // palette
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // colour planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(ico32.length, 8); // image size
entry.writeUInt32LE(22, 12); // offset (6 + 16)
await writeFile('public/favicon.ico', Buffer.concat([header, entry, ico32]));

console.log('icons written to public/');
