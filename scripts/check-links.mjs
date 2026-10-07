// ビルド後の dist/ を調べて、サイト内のリンク切れがないか確認します。
// 使い方: npm run build && npm run check:links
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const BASE = ((process.env.BASE_PATH ?? '/ai-study') || '/').replace(/\/$/, '');

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function exists(path) {
  try {
    const s = await stat(path);
    if (s.isDirectory()) return exists(join(path, 'index.html'));
    return true;
  } catch {
    return false;
  }
}

const files = (await walk(DIST)).filter((f) => extname(f) === '.html');
const broken = [];
let checked = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const [, attr, raw] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|#|\/\/)/.test(raw) || raw.includes('${')) continue;
    const path = raw.split('#')[0].split('?')[0];
    if (!path) continue;
    checked++;
    if (!path.startsWith(BASE + '/') && path !== BASE) {
      broken.push(`${file.replace(DIST, '')}: ${attr}="${raw}"（ベースパス ${BASE}/ が付いていません）`);
      continue;
    }
    const target = join(DIST, decodeURIComponent(path.slice(BASE.length)));
    if (!(await exists(target))) broken.push(`${file.replace(DIST, '')}: ${attr}="${raw}"`);
  }
}

if (broken.length) {
  console.error(`❌ リンク切れが ${broken.length} 件あります:\n` + broken.map((b) => `  - ${b}`).join('\n'));
  process.exit(1);
}
console.log(`✅ ${files.length} ページ・${checked} リンクを確認しました。リンク切れはありません。`);
