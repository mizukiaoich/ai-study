/** サイト内リンクに GitHub Pages のベースパス（/ai-study/）を付ける */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#')) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}
