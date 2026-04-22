const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const distDir = path.join(process.cwd(), 'dist');
const exts = new Set(['.js', '.css', '.html', '.svg', '.json', '.txt']);
const threshold = 1024; // only compress files larger than 1KB

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    const ext = path.extname(full).toLowerCase();
    if (!exts.has(ext)) continue;
    try {
      const stat = await fs.promises.stat(full);
      if (stat.size < threshold) continue;
      const data = await fs.promises.readFile(full);

      // gzip
      const gz = zlib.gzipSync(data, { level: zlib.constants.Z_BEST_COMPRESSION });
      if (gz.length < data.length) {
        await fs.promises.writeFile(full + '.gz', gz);
        console.log('Wrote', full + '.gz');
      }

      // brotli
      if (zlib.brotliCompressSync) {
        const br = zlib.brotliCompressSync(data, {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        });
        if (br.length < data.length) {
          await fs.promises.writeFile(full + '.br', br);
          console.log('Wrote', full + '.br');
        }
      }
    } catch (err) {
      console.error('Error compressing', full, err.message || err);
    }
  }
}

(async () => {
  try {
    const s = await fs.promises.stat(distDir);
    if (!s.isDirectory()) throw new Error('dist not found');
  } catch (e) {
    console.error('No dist directory found, run build first.');
    process.exit(1);
  }
  console.log('Precompressing dist...');
  await walk(distDir);
  console.log('Precompression done.');
})();
