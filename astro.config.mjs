// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkDirective from 'remark-directive';
import remarkCallouts from './src/plugins/remark-callouts.mjs';
import rehypeBaseLinks from './src/plugins/rehype-base-links.mjs';

// GitHub Pages の公開URL。GitHub Actions では自動で設定されます。
// ローカルでは http://localhost:4321/ai-study/ で確認できます。
const site = process.env.SITE_URL ?? 'https://mizukiaoich.github.io';
const base = (process.env.BASE_PATH ?? '/ai-study') || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  markdown: {
    // :::official などの書き方（remark-directive）と、記事内リンクへのベースパス付与
    processor: unified({
      remarkPlugins: [remarkDirective, remarkCallouts],
      rehypePlugins: [[rehypeBaseLinks, { base }]],
      smartypants: false,
    }),
  },
});
