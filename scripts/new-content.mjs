// テンプレートから新しいコンテンツを作ります。
//   npm run new -- learning            … 次の Day の学習ログを作成（例: content/learning/day004.md）
//   npm run new -- experiment          … 次の番号の実験を作成（例: content/experiments/experiment002.md）
//   npm run new -- tool notebooklm     … AIツールを作成
//   npm run new -- glossary rag        … 用語を作成
//   npm run new -- article prompt-basics … 記事を作成
//   npm run new -- news 2026-10-gpt-update … ニュースを作成
import { readdir, readFile, writeFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [kind, slugArg] = process.argv.slice(2);
const today = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10); // 日本時間

const KINDS = {
  learning: { dir: 'learning', template: 'learning.md' },
  experiment: { dir: 'experiments', template: 'experiment.md' },
  tool: { dir: 'tools', template: 'tool.md' },
  glossary: { dir: 'glossary', template: 'glossary.md' },
  article: { dir: 'articles', template: 'article.md' },
  news: { dir: 'news', template: 'news.md' },
};

const conf = KINDS[kind];
if (!conf) {
  console.error(`種類を指定してください: ${Object.keys(KINDS).join(' / ')}\n例: npm run new -- learning`);
  process.exit(1);
}

const dir = new URL(`content/${conf.dir}/`, root);
const files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
const nextNum = (prefix) =>
  Math.max(0, ...files.map((f) => Number(f.match(new RegExp(`^${prefix}(\\d+)\\.md$`))?.[1] ?? 0))) + 1;

let slug = slugArg;
let vars = { date: today };
if (kind === 'learning') {
  const day = nextNum('day');
  slug = `day${String(day).padStart(3, '0')}`;
  vars.day = day;
} else if (kind === 'experiment') {
  const n = nextNum('experiment');
  slug = `experiment${String(n).padStart(3, '0')}`;
  vars.id = String(n).padStart(3, '0');
} else if (!slug) {
  console.error('ファイル名（英小文字とハイフン）を指定してください。例: npm run new -- glossary rag');
  process.exit(1);
}

const target = new URL(`${slug}.md`, dir);
try {
  await access(target);
  console.error(`すでに存在します: content/${conf.dir}/${slug}.md`);
  process.exit(1);
} catch {}

let text = await readFile(new URL(`templates/${conf.template}`, root), 'utf8');
text = text
  .replace(/^day: \d+$/m, vars.day ? `day: ${vars.day}` : '$&')
  .replace(/^id: "?\d+"?$/m, vars.id ? `id: "${vars.id}"` : '$&')
  .replace(/^(date|checkedAt): \d{4}-\d{2}-\d{2}$/gm, `$1: ${today}`);
await writeFile(target, text);
console.log(`✅ 作成しました: content/${conf.dir}/${slug}.md`);
