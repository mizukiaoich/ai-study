// サイト内検索用のデータ。ビルド時に全コンテンツから自動生成されます。
import type { APIRoute } from 'astro';
import { getAllItems, toLinkItem, KIND_LABEL, formatDate } from '../lib/content';

const plain = (md = '') =>
  md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^:::\w*(\[[^\]]*\])?/gm, ' ')
    .replace(/[#>*_`|~-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const GET: APIRoute = async () => {
  const entries = await getAllItems();
  const data = entries.map((e) => {
    const item = toLinkItem(e);
    const d = e.data as { tags?: string[]; reading?: string; english?: string };
    return {
      kind: item.kind,
      kindLabel: KIND_LABEL[item.kind],
      href: item.href,
      title: item.badge && (item.kind === 'learning' || item.kind === 'experiments') ? `${item.badge} ${item.title}` : item.title,
      category: item.category ?? '',
      date: formatDate(item.date),
      summary: item.summary ?? '',
      keywords: [...(d.tags ?? []), d.reading ?? '', d.english ?? ''].join(' '),
      text: plain(e.body).slice(0, 3000),
    };
  });
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
