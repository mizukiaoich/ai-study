# CLAUDE.md ― このサイトを更新するときのルール

このリポジトリは「AI初心者がDiscordで一緒に学んだ記録」を公開する Astro 製の静的サイトです。
サイトは **AIについて完成された情報を教えるサイトではありません**。学習の過程（分からなかったこと・失敗も含む）を残すことが目的です。

## 基本方針

- コンテンツはすべて `content/` の Markdown で管理する。**HTML（`src/`）に記事内容を書かない。**
- Markdown を追加するだけで、一覧ページ・トップページ・検索・関連リンクに自動反映される。`src/pages/index.astro` などを記事追加のために編集しない。
- 初心者向けの言葉で書く。専門用語には用語集へのリンクを付ける（例: `[LLM](/glossary/llm/)`）。
- 記事内リンクは `/glossary/llm/` のように `/` から書く（ベースパス `/ai-study` は自動で付く）。
- 画像は `public/images/` に置き、Markdown では `![説明](/images/learning/day015-chat.png)` のように書く。

## 情報の信頼性（重要）

「AIがそう言った」だけでは事実として書かない。以下のボックスで情報の種類を必ず区別する。

| 書き方 | 意味 |
| --- | --- |
| `:::official` | 公式サイト・公式ドキュメントに書かれていること（`sources` に URL を書く） |
| `:::tried` | メンバーが実際に試した結果 |
| `:::member` | メンバーの感想・意見 |
| `:::ai` | AIの回答（未検証） |
| `:::question` | まだ分からないこと |
| `:::point` / `:::warning` | ポイント / 注意 |

見出しを変えたいときは `:::tried[ChatGPTで試した結果]` のように書く。ボックスは `:::` の行で閉じる。

- 料金・機能などの変わりやすい情報は「YYYY年MM月時点」を付け、公式サイトで確認できたものだけを `:::official` にする。
- 確認できなかったことは無理に断定せず `:::question` に書く。
- 根拠のないランキングや「◯◯が一番」は書かない。比較は実際に試した結果で行う。
- 個人情報（本名・メールアドレス・顔写真など）は載せない。参加者名は Discord のニックネームか「メンバーA」などにする。

## 「Discordで作成した Day N の資料を読み込んでサイトを更新して」と言われたら

1. **内容を確認**: `materials/dayNNN/`（指定された場所）の資料をすべて読む。画像・PDF・Word・Excel も確認する。
2. **既存記事との重複を確認**: `content/` を検索し、同じ内容の記事・用語がないか確認する。あれば新規作成ではなく追記する。
3. **カテゴリーを判断**: 学習ログは `content/learning/`。独立した記事にすべき内容は `content/articles/`（category: know / use / compare / work / make）、実験は `content/experiments/`、新しい用語は `content/glossary/`、ツール情報は `content/tools/`、サービスの変更は `content/news/`。
4. **Markdown として整理**: `npm run new -- learning` で次の Day のファイルを作り（テンプレートは `templates/`）、資料の内容を各見出しに整理する。frontmatter の `day` が資料の Day 番号と合っているか確認する。
5. **画像を配置**: 必要な画像を `public/images/learning/` などにコピーし、英小文字・ハイフンのファイル名にする（例: `day015-chatgpt-answer.png`）。
6. **関連記事を設定**: frontmatter の `related`（例: `[learning/day014, glossary/rag]`）、`tools`（例: `[chatgpt]`）、`sources` を設定する。新しく出てきた用語は用語集に追加し、`short`（初心者向けの一言説明）と `category`（基本 / 使うとき / 精度・仕組み / 活用・応用 / 発展 / 社会・ルール）を必ず書く。
7. **トップページへの反映**: 自動。何もしなくてよい。
8. **ナビゲーション**: 新しいカテゴリーやテーマが必要な場合だけ `src/data/categories.ts` を更新する（`topics` に追加すると「準備中」として表示される）。
9. **ビルド確認**: `npm run build && npm run check:links` を実行し、エラー・警告（`[related] ... が見つかりません`）がないことを確認する。

## ファイル名のルール

| 種類 | 場所 | ファイル名 | URL |
| --- | --- | --- | --- |
| 学習ログ | `content/learning/` | `day015.md`（3桁） | `/learning/day015/` |
| 実験 | `content/experiments/` | `experiment002.md`（3桁） | `/experiments/experiment002/` |
| AIツール | `content/tools/` | `notebooklm.md` | `/tools/notebooklm/` |
| 用語 | `content/glossary/` | `rag.md` | `/glossary/rag/` |
| 記事 | `content/articles/` | `prompt-basics.md` | `/articles/prompt-basics/` |
| ニュース | `content/news/` | `2026-10-xxx.md` | `/news/2026-10-xxx/` |

ファイル名は英小文字・数字・ハイフンのみ。`_` で始まるファイルは公開されない（下書き用）。frontmatter に `draft: true` でも非公開。

## コマンド

```bash
npm run dev            # 開発サーバー http://localhost:4321/ai-study/
npm run build          # ビルド（frontmatter の形式エラーもここで分かる）
npm run check:links    # build 後のリンク切れチェック
npm run new -- learning              # 次の Day の学習ログを作成
npm run new -- experiment            # 次の番号の実験を作成
npm run new -- glossary rag          # 用語を作成
npm run new -- tool perplexity       # AIツールを作成
npm run new -- article prompt-basics # 記事を作成
npm run new -- news 2026-11-xxx      # ニュースを作成
```

## 構成メモ

- `src/content.config.ts` … frontmatter の項目定義（必須項目が欠けるとビルドエラー）
- `src/data/categories.ts` … メニュー・カテゴリー・トップページの固定データ
- `src/lib/content.ts` … 一覧取得・並び順・関連リンク解決（すべてのページがここを使う）
- `src/plugins/` … `:::official` ボックスとリンクのベースパス付与
- `.github/workflows/deploy.yml` … main への push で GitHub Pages に自動デプロイ
