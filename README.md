# AI学習サイト（ai-study）

> わからないから始める。みんなでつくるAI学習サイト

AIに詳しくない私たちが、Discordで一緒に調べて、試して、学んだことを記録していく初心者向けAI学習サイトです。
GitHub Pages で公開しています： https://mizukiaoich.github.io/ai-study/

- 記事はすべて **Markdown ファイル** で管理しています（`content/` フォルダ）。
- Markdown を1つ追加するだけで、一覧ページ・トップページ・検索に **自動で反映** されます。
- `main` ブランチに push すると、GitHub Actions が自動でビルドして公開します。

---

## 1. ローカルで動かす

必要なもの: [Node.js](https://nodejs.org/) 22.12 以上

```bash
npm install      # 最初の1回だけ。必要な部品をダウンロード
npm run dev      # 開発サーバーを起動
```

ブラウザで http://localhost:4321/ai-study/ を開くとサイトが表示されます。
Markdown を保存すると、ブラウザが自動で更新されます。止めるときは `Ctrl + C`。

## 2. ビルドする（公開用ファイルを作る）

```bash
npm run build         # dist/ に公開用ファイルができる
npm run check:links   # リンク切れがないかチェック
npm run preview       # できあがったサイトを確認
```

Markdown の書き方（frontmatter）に間違いがあると、`npm run build` でエラーになり、どのファイルのどの項目が問題か表示されます。

## 3. GitHub Pages の設定（最初の1回だけ）

1. GitHub のリポジトリページで **Settings** → **Pages** を開く
2. **Build and deployment** の **Source** を **GitHub Actions** にする
3. `main` ブランチに push する（または **Actions** タブ → **Deploy to GitHub Pages** → **Run workflow**）
4. 数分後、`https://<ユーザー名>.github.io/ai-study/` で公開されます

公開先のURL（ベースパス）は GitHub Actions が自動で設定します。リポジトリ名を変えても設定変更は不要です。

## 4. コンテンツを追加する

### フォルダ構成

```
content/
├─ learning/      学習ログ（day001.md, day002.md, …）
├─ articles/      記事（AIを知る・使ってみる・比較・仕事・作ってみる）
├─ tools/         AIツール図鑑（chatgpt.md, claude.md, …）
├─ experiments/   AI実験室（experiment001.md, …）
├─ glossary/      用語集（ai.md, llm.md, …）
└─ news/          AIニュース・アップデート
public/images/    記事で使う画像
materials/        Discordで集めた元の資料（サイトには表示されない）
templates/        新しく作るときのひな形
```

### 学習ログを追加する

```bash
npm run new -- learning
```

→ `content/learning/day004.md` のように **次の Day のファイル** が自動で作られます。
中身を書き換えて保存すれば、次の場所に自動で表示されます。

- トップページの「最新の学習ログ」
- 学習ログ一覧（`/learning/`）
- サイト内検索
- 前後の Day へのリンク

手で作る場合は `templates/learning.md` をコピーして `content/learning/day004.md` として保存してください。

### AI実験を追加する

```bash
npm run new -- experiment
```

→ `content/experiments/experiment002.md` が作られ、AI実験室とトップページに自動で追加されます。
`ais: [chatgpt, claude]` のように使ったツールを書くと、ツール図鑑のページにも「このツールを使った実験」として表示されます。

### AIツールを追加する

```bash
npm run new -- tool perplexity
```

→ `content/tools/perplexity.md` が作られ、AIツール図鑑に自動で追加されます。並び順は `order` で調整できます。

### 用語を追加する

```bash
npm run new -- glossary rag
```

→ `content/glossary/rag.md` が作られ、用語集に自動で追加されます。
`reading`（ひらがなの読み）で、あいうえお順に並びます。`short`（初心者向けの一言説明）は必須です。

### 記事・ニュースを追加する

```bash
npm run new -- article prompt-basics
npm run new -- news 2026-11-new-feature
```

記事の `category` は `know`（AIを知る）/ `use`（使ってみる）/ `compare`（比較）/ `work`（仕事）/ `make`（作ってみる）から選びます。
`topic` を `src/data/categories.ts` のテーマ名と同じにすると、カテゴリーページの「準備中」が「記事あり」に変わります。

## 5. 書き方のルール

### 情報の種類を区別する

このサイトでは「AIがそう言った」だけでは事実として扱いません。次のボックスで区別して書きます。

```markdown
:::official
公式サイトに書かれていること
:::

:::tried
実際に試した結果
:::

:::member
メンバーの感想
:::

:::ai
AIの回答（まだ確認していない）
:::

:::question
まだ分からないこと
:::
```

ほかに `:::point`（ポイント）、`:::warning`（注意）も使えます。`:::tried[Geminiで試した]` のように見出しを変えることもできます。

### 関連ページをつなぐ

frontmatter の `related` に書くと、ページ横の「関連ページ」に表示されます。

```yaml
related: [learning/day001, glossary/llm, experiments/experiment001, tools/chatgpt]
```

### 画像を入れる

画像を `public/images/learning/day004-result.png` に置き、Markdown に次のように書きます。

```markdown
![ChatGPTの回答画面](/images/learning/day004-result.png)
```

### 非公開にする

frontmatter に `draft: true` と書くか、ファイル名を `_` で始めると公開されません。

## 6. Claude Code で更新する

Discordで作った資料を `materials/day015/` などに置き、Claude Code に次のように頼みます。

> Discordで作成した Day 15 の資料（materials/day015/）を読み込んでサイトを更新してください。

Claude Code は [`CLAUDE.md`](./CLAUDE.md) の手順（重複確認 → カテゴリー判断 → Markdown 作成 → 画像配置 → 関連リンク設定 → ビルド確認）に従って更新します。

## 技術構成

- [Astro](https://astro.build/)（静的サイトジェネレーター）+ TypeScript + CSS
- Markdown コンテンツコレクション（`src/content.config.ts` で項目をチェック）
- サイト内検索：ビルド時に `search-index.json` を生成し、ブラウザ内で検索（サーバー不要）
- GitHub Actions → GitHub Pages で自動デプロイ
