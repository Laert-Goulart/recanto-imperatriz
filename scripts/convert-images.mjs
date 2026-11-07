// Gera versões WebP (máx. 1920px de largura) de todas as fotos em public/images.
// Uso: node scripts/convert-images.mjs
// O site serve automaticamente a versão WebP no lugar do PNG/JPG (ver next.config.ts).
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const dir = path.join(process.cwd(), 'public', 'images');
const out = path.join(dir, 'webp');
await mkdir(out, { recursive: true });

let before = 0;
let after = 0;
for (const file of await readdir(dir)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const src = path.join(dir, file);
  const dest = path.join(out, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  await sharp(src).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
  const a = (await stat(src)).size;
  const b = (await stat(dest)).size;
  before += a;
  after += b;
  console.log(`${file.padEnd(48)} ${(a / 1024).toFixed(0).padStart(6)} KB -> ${(b / 1024).toFixed(0).padStart(5)} KB`);
}
console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
