---
type: glossary
term: "クロスプラットフォーム"
reading: くろすぷらっとふぉーむ
english: "Cross-platform"
short: "1つのプログラムで、iPhone・Android・Windows・Mac など複数の端末向けのアプリを作る方法。"
category: 発展
date: 2026-10-19
tags: [アプリ開発]
related: [articles/ai-app-dev-flow, glossary/no-code, learning/day007]
sources:
  - type: discord
    title: Day 7 の資料「AIを活用したPC・スマホアプリ開発フロー」
---
## もう少しくわしく

本来、iPhone と Android では別々の作り方が必要です。クロスプラットフォームの技術を使うと、**1つのコードから複数の端末向けのアプリ** を作れます。

## 例（[アプリ開発フロー](/articles/ai-app-dev-flow/)より）

| 対象 | 技術の例 |
| --- | --- |
| スマホ | Flutter、React Native / Expo |
| PC | Tauri、Electron |

:::point
手間は減りますが、端末ごとの細かい機能を使うときは、追加の作業が必要になることがあります。
:::
