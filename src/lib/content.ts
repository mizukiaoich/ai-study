// コンテンツ取得の共通処理。一覧・トップページ・検索はすべてここを通るので、
// Markdown を追加するだけで全ページに自動反映されます。
import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, type CategoryId } from '../data/categories';

export type Kind = 'learning' | 'articles' | 'tools' | 'experiments' | 'glossary' | 'news';

export const KIND_LABEL: Record<Kind, string> = {
  learning: '学習ログ',
  articles: '記事',
  tools: 'AIツール',
  experiments: 'AI実験',
  glossary: '用語',
  news: 'ニュース',
};

const visible = <T extends { data: { draft?: boolean } }>(e: T) => import.meta.env.DEV || !e.data.draft;

export async function getLearningLogs() {
  return (await getCollection('learning', visible)).sort((a, b) => b.data.day - a.data.day);
}
export async function getArticles(category?: CategoryId) {
  const all = await getCollection('articles', visible);
  return all
    .filter((a) => !category || a.data.category === category)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export async function getTools() {
  return (await getCollection('tools', visible)).sort(
    (a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name),
  );
}
export async function getExperiments(category?: CategoryId) {
  const all = await getCollection('experiments', visible);
  return all
    .filter((e) => !category || e.data.category === category)
    .sort((a, b) => b.data.id.localeCompare(a.data.id, 'ja', { numeric: true }));
}
export async function getGlossary() {
  return (await getCollection('glossary', visible)).sort((a, b) => a.data.reading.localeCompare(b.data.reading, 'ja'));
}
export async function getNews() {
  return (await getCollection('news', visible)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function hrefOf(kind: Kind, id: string) {
  return `/${kind}/${id}/`;
}

export function formatDate(date?: Date) {
  if (!date) return '';
  return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
}

export const dayLabel = (day: number) => `Day ${day}`;
export const expLabel = (id: string) => `実験${id}`;

/** 一覧カードやリンクで使う共通の形 */
export interface LinkItem {
  kind: Kind;
  id: string;
  href: string;
  title: string;
  badge: string;
  date?: Date;
  summary?: string;
  category?: string;
}

type AnyEntry =
  | CollectionEntry<'learning'>
  | CollectionEntry<'articles'>
  | CollectionEntry<'tools'>
  | CollectionEntry<'experiments'>
  | CollectionEntry<'glossary'>
  | CollectionEntry<'news'>;

export function toLinkItem(entry: AnyEntry): LinkItem {
  const kind = entry.collection as Kind;
  const base = { kind, id: entry.id, href: hrefOf(kind, entry.id) };
  switch (entry.collection) {
    case 'learning':
      return { ...base, title: entry.data.title, badge: dayLabel(entry.data.day), date: entry.data.date, summary: entry.data.summary, category: entry.data.category };
    case 'articles':
      return { ...base, title: entry.data.title, badge: CATEGORIES[entry.data.category].title, date: entry.data.date, summary: entry.data.summary, category: CATEGORIES[entry.data.category].title };
    case 'tools':
      return { ...base, title: entry.data.name, badge: 'AIツール図鑑', date: entry.data.checkedAt, summary: entry.data.summary, category: 'AIツール図鑑' };
    case 'experiments':
      return { ...base, title: entry.data.title, badge: expLabel(entry.data.id), date: entry.data.date, summary: entry.data.summary, category: 'AI実験室' };
    case 'glossary':
      return { ...base, title: entry.data.term, badge: '用語集', date: entry.data.date, summary: entry.data.short, category: 'AI用語集' };
    case 'news':
      return { ...base, title: entry.data.title, badge: 'ニュース', date: entry.data.date, summary: entry.data.summary, category: 'AIニュース' };
  }
}

export async function getAllItems() {
  const [l, a, t, e, g, n] = await Promise.all([
    getLearningLogs(), getArticles(), getTools(), getExperiments(), getGlossary(), getNews(),
  ]);
  return [...l, ...a, ...t, ...e, ...g, ...n];
}

/**
 * related: ["glossary/llm", "tools/chatgpt"] のような指定をリンクに変換する。
 * 存在しない指定はビルド時に警告を出して無視する（リンク切れ防止）。
 */
export async function resolveRelated(refs: string[], from: string) {
  if (!refs.length) return [];
  const all = await getAllItems();
  const map = new Map(all.map((e) => [`${e.collection}/${e.id}`, e]));
  const result: LinkItem[] = [];
  for (const ref of refs) {
    const key = ref.replace(/^\/|\/$/g, '');
    const entry = map.get(key);
    if (entry) result.push(toLinkItem(entry));
    else console.warn(`[related] ${from}: "${ref}" が見つかりません（例: "glossary/llm"）`);
  }
  return result;
}

/** 他のコンテンツから自分を参照しているものを集める（逆リンク） */
export async function findBacklinks(kind: Kind, id: string) {
  const all = await getAllItems();
  const key = `${kind}/${id}`;
  return all
    .filter((e) => !(e.collection === kind && e.id === id))
    .filter((e) => {
      const d = e.data as { related?: string[]; tools?: string[]; ais?: string[] };
      if (d.related?.some((r) => r.replace(/^\/|\/$/g, '') === key)) return true;
      if (kind === 'tools' && (d.tools?.includes(id) || d.ais?.includes(id))) return true;
      return false;
    })
    .map(toLinkItem);
}

/** 用語集の「あいうえお順」の行 */
const ROWS: [string, string][] = [
  ['あ', 'あいうえおぁぃぅぇぉゔ'], ['か', 'かきくけこがぎぐげご'], ['さ', 'さしすせそざじずぜぞ'],
  ['た', 'たちつてとだぢづでどっ'], ['な', 'なにぬねの'], ['は', 'はひふへほばびぶべぼぱぴぷぺぽ'],
  ['ま', 'まみむめも'], ['や', 'やゆよゃゅょ'], ['ら', 'らりるれろ'], ['わ', 'わをん'],
];
export function kanaRow(reading: string) {
  const c = reading.trim().charAt(0).replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
  return ROWS.find(([, chars]) => chars.includes(c))?.[0] ?? '英数';
}
export const KANA_ROWS = [...ROWS.map(([r]) => r), '英数'];
