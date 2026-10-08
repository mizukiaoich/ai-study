// サイトのメニュー（カテゴリー）定義です。
// topics は「このカテゴリーで扱いたいテーマ」。記事の frontmatter に topic を書くと、
// そのテーマに記事が紐づき「準備中」から「記事あり」に変わります。

export const CATEGORY_IDS = ['know', 'use', 'compare', 'work', 'make'] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export interface MenuItem {
  num: string;
  id: string;
  title: string;
  short: string;
  path: string;
  icon: string;
  color: string;
  description: string;
  topics?: string[];
}

export const CATEGORIES: Record<CategoryId, MenuItem> = {
  know: {
    num: '01', id: 'know', title: 'AIを知る', short: '知る', path: '/know/', icon: '📖', color: '#2563eb',
    description: 'AIってそもそも何？ からスタート。みんなで調べた基本をまとめています。',
    topics: ['AIとは何か', '生成AIとは', '生成AIの種類', 'LLMとは', 'ChatGPTとは', 'AIと検索エンジンの違い', 'AIはどうやって回答しているのか', 'AIの得意なこと', 'AIの苦手なこと', 'ハルシネーションとは', 'プロンプトとは'],
  },
  use: {
    num: '02', id: 'use', title: 'AIを使ってみる', short: '使う', path: '/use/', icon: '🖐️', color: '#16a34a',
    description: '実際にAIを触ってみた記録。最初の一歩から、少し慣れてきたらやってみたいことまで。',
    topics: ['初めてAIを使う', 'AIへの質問方法', 'プロンプトの基本', '文章を作ってもらう', '要約してもらう', '翻訳してもらう', '画像を作る', 'ファイルを読ませる', 'Web検索を使う', '音声を扱う', '動画を作る'],
  },
  compare: {
    num: '03', id: 'compare', title: 'AIを比較する', short: '比較', path: '/compare/', icon: '⚖️', color: '#ea580c',
    description: '同じ課題を複数のAIにやらせて、実際の結果で比べます。公式情報だけで優劣は決めません。',
    topics: ['ChatGPT vs Claude', 'Claude vs Gemini', 'ChatGPT vs Gemini', '画像生成AI比較', '無料AI比較', '用途別おすすめAI'],
  },
  work: {
    num: '04', id: 'work', title: 'AIを仕事で使う', short: '仕事', path: '/work/', icon: '💼', color: '#7c3aed',
    description: '普段の仕事で使えるか？ を試した記録。',
    topics: ['Excel', 'Word', 'PowerPoint', 'メール', '会議', '議事録', '資料作成', 'プログラミング', '業務改善', '業務自動化'],
  },
  make: {
    num: '05', id: 'make', title: 'AIで作ってみる', short: '作る', path: '/make/', icon: '🛠️', color: '#0891b2',
    description: 'AIと一緒に何かを作ってみた記録。うまくいかなかった話も大歓迎。',
    topics: ['Webサイト', 'Webアプリ', 'スマホアプリ', 'プログラム', '画像', '動画', 'AIエージェント'],
  },
};

/** ヘッダーに表示するメニュー */
export const HEADER_NAV = [
  { title: 'ホーム', path: '/' },
  { title: 'AIを知る', path: '/know/' },
  { title: 'AIを使ってみる', path: '/use/' },
  { title: 'AIツール図鑑', path: '/tools/' },
  { title: 'AI実験室', path: '/experiments/' },
  { title: 'AIで作ってみる', path: '/make/' },
  { title: '学習ログ', path: '/learning/' },
  { title: '用語集', path: '/glossary/' },
];

/** サイト全体のメニュー（01〜10） */
export const SITE_MENU: MenuItem[] = [
  ...Object.values(CATEGORIES),
  { num: '06', id: 'tools', title: 'AIツール図鑑', short: '図鑑', path: '/tools/', icon: '🧰', color: '#4f46e5', description: 'AIツールごとに、できること・料金・実際に使った感想をまとめています。' },
  { num: '07', id: 'experiments', title: 'AI実験室', short: '実験', path: '/experiments/', icon: '🧪', color: '#db2777', description: '「実際にAIにやらせてみた」記録。成功も失敗もそのまま残します。' },
  { num: '08', id: 'news', title: 'AIニュース・アップデート', short: 'ニュース', path: '/news/', icon: '📰', color: '#0284c7', description: '自分たちの学習に関係するAIサービスの変更を記録しています。' },
  { num: '09', id: 'glossary', title: 'AI用語集', short: '用語', path: '/glossary/', icon: '🔤', color: '#ca8a04', description: '分からない言葉を初心者向けの一言説明つきで調べられます。' },
  { num: '10', id: 'learning', title: '学習ログ', short: 'ログ', path: '/learning/', icon: '📒', color: '#0f766e', description: 'Day 1 から毎日の学習記録。このサイトの中心です。' },
];

/** トップページ「AIでできること」 */
export const AI_CAN_DO = [
  { icon: '✍️', title: '文章作成', text: 'メール・説明文・アイデア出し' },
  { icon: '📝', title: '要約', text: '長い文章を短くまとめる' },
  { icon: '🌏', title: '翻訳', text: '外国語を読む・書く' },
  { icon: '🎨', title: '画像生成', text: '言葉から絵や写真を作る' },
  { icon: '🎙️', title: '音声文字起こし', text: '会話や会議を文字にする' },
  { icon: '🎬', title: '動画生成', text: '短い動画を作る' },
  { icon: '💻', title: 'プログラミング', text: 'コードを書く・直す' },
  { icon: '⚙️', title: '業務自動化', text: 'くり返し作業を任せる' },
];

/** トップページ「学習の流れ」 */
export const LEARNING_FLOW = [
  { icon: '💬', title: 'Discordで調査', text: '気になることを持ち寄る' },
  { icon: '🗣️', title: 'みんなで議論', text: '疑問をそのまま話す' },
  { icon: '🤖', title: '実際にAIを使う', text: '自分の手で試す' },
  { icon: '📄', title: '成果物を作る', text: '画像・文章・表など' },
  { icon: '📁', title: '資料として保存', text: 'materials/ に置く' },
  { icon: '✨', title: 'Claude Codeで整理', text: 'Markdownにまとめる' },
  { icon: '🐙', title: 'GitHubへ更新', text: 'コミット＆プッシュ' },
  { icon: '🌐', title: 'GitHub Pagesで公開', text: '自動でサイトに反映' },
];

export const SOURCE_TYPES = {
  official: { label: '公式情報', icon: '📘' },
  tried: { label: '実際に試した', icon: '🧪' },
  discord: { label: 'Discordで検証', icon: '💬' },
  ai: { label: 'AIの回答（未検証）', icon: '🤖' },
  other: { label: '参考', icon: '🔗' },
} as const;
