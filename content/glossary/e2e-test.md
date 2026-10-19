---
type: glossary
term: "E2Eテスト"
reading: いーついーてすと
english: "End-to-End Test"
short: "人が使うのと同じように画面を操作して、アプリが最初から最後まで正しく動くかを確かめるテスト。"
category: 発展
date: 2026-10-19
tags: [アプリ開発]
related: [articles/ai-app-dev-flow, glossary/ci-cd, learning/day007]
sources:
  - type: discord
    title: Day 7 の資料「AIを活用したPC・スマホアプリ開発フロー」
---
## もう少しくわしく

E2E は「エンド・ツー・エンド（端から端まで）」の略です。ボタンを押す、文字を入力する、といった操作を自動でくり返して、アプリ全体が正しく動くかを確かめます。

## 例（[アプリ開発フロー](/articles/ai-app-dev-flow/)より）

- Playwright：Web・PC向けの画面操作テスト
- Maestro：スマホアプリの画面操作テスト

:::tried
このサイトでも、更新のたびに Playwright でスマホ幅の画面を開いて、表示くずれがないか確認しています。
:::
