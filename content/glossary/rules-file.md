---
type: glossary
term: "ルールファイル（AGENTS.md / CLAUDE.md）"
reading: るーるふぁいる
english: "Rules File"
short: "AIコーディングエージェントが作業のたびに読む「このプロジェクトのルール」を書いたファイル。"
category: 使うとき
date: 2026-10-19
tags: [アプリ開発]
related: [tools/claude-code, glossary/system-prompt, articles/ai-app-dev-flow, learning/day007]
sources:
  - type: discord
    title: Day 7 の資料「AIを活用したPC・スマホアプリ開発フロー」
---
## もう少しくわしく

プロジェクトのフォルダに置いておくと、AIが作業を始めるときに自動で読んでくれます。
毎回同じ説明をしなくても、**決めたルールどおりに作業してもらえる** ようになります。

## 主なファイル名

| ファイル | 読むツール（メンバー調べ） |
| --- | --- |
| AGENTS.md | Codex、Antigravity、Cursor など複数のツールで共通 |
| CLAUDE.md | Claude Code |

## 書くことの例

- 使う技術（言語、フレームワーク）
- フォルダの構成
- やってはいけないこと
- 作業のあとに必ず実行するチェック

:::tried
このサイトにも `CLAUDE.md` があり、「資料を読み込んでサイトを更新するときの手順」や「情報の信頼性のルール」が書かれています。毎回そのルールどおりに更新されています。
:::
