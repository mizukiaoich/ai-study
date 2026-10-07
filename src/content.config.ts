// コンテンツ（Markdown）の項目定義です。
// content/ フォルダに Markdown を追加すると、ここで定義した形式でチェックされ、
// サイトの一覧ページ・トップページ・検索に自動で反映されます。
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_IDS } from './data/categories';

const list = z.array(z.string()).default([]);

/** 情報の出どころ。公式情報・実際に試した結果・Discordでの検証・AIの回答を区別する */
const sources = z
  .array(
    z.object({
      type: z.enum(['official', 'tried', 'discord', 'ai', 'other']).default('other'),
      title: z.string(),
      url: z.string().optional(),
    }),
  )
  .default([]);

const md = (dir: string) => glob({ pattern: '**/[^_]*.md', base: `./content/${dir}` });

const learning = defineCollection({
  loader: md('learning'),
  schema: z.object({
    type: z.literal('learning').optional(),
    day: z.number().int().positive(),
    date: z.coerce.date(),
    title: z.string(),
    category: z.string().default('学習ログ'),
    summary: z.string().optional(),
    participants: list,
    tools: list,
    tags: list,
    related: list,
    sources,
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: md('articles'),
  schema: z.object({
    type: z.literal('article').optional(),
    title: z.string(),
    category: z.enum(CATEGORY_IDS),
    topic: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string().optional(),
    tags: list,
    related: list,
    sources,
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: md('tools'),
  schema: z.object({
    type: z.literal('tool').optional(),
    name: z.string(),
    vendor: z.string(),
    url: z.string(),
    summary: z.string(),
    icon: z.string().default('🤖'),
    color: z.string().default('#2563eb'),
    order: z.number().default(100),
    pricing: z.string().optional(),
    freePlan: z.string().optional(),
    canDo: list,
    strengths: list,
    weaknesses: list,
    rating: z
      .object({ score: z.number().min(0).max(5), votes: z.number().int().nonnegative() })
      .optional(),
    checkedAt: z.coerce.date().optional(),
    tags: list,
    related: list,
    sources,
    draft: z.boolean().default(false),
  }),
});

const experiments = defineCollection({
  loader: md('experiments'),
  schema: z.object({
    type: z.literal('experiment').optional(),
    id: z.union([z.string(), z.number()]).transform((v) => String(v).padStart(3, '0')),
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(CATEGORY_IDS).default('compare'),
    status: z.enum(['planned', 'doing', 'done']).default('done'),
    ais: list,
    summary: z.string().optional(),
    conclusion: z.string().optional(),
    participants: list,
    tags: list,
    related: list,
    sources,
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const glossary = defineCollection({
  loader: md('glossary'),
  schema: z.object({
    type: z.literal('glossary').optional(),
    term: z.string(),
    reading: z.string(),
    english: z.string().optional(),
    short: z.string(),
    date: z.coerce.date().optional(),
    tags: list,
    related: list,
    sources,
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: md('news'),
  schema: z.object({
    type: z.literal('news').optional(),
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tools: list,
    impact: z.string().optional(),
    tags: list,
    related: list,
    sources,
    draft: z.boolean().default(false),
  }),
});

export const collections = { learning, articles, tools, experiments, glossary, news };
