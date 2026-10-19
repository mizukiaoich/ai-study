---
type: glossary
term: "CI/CD"
reading: しーあいしーでぃー
english: "Continuous Integration / Continuous Delivery"
short: "変更をするたびに、テストや公開を自動で行うしくみ。"
category: 発展
date: 2026-10-19
tags: [アプリ開発]
related: [glossary/git, glossary/pull-request, articles/ai-app-dev-flow, learning/day007]
sources:
  - type: discord
    title: Day 7 の資料「AIを活用したPC・スマホアプリ開発フロー」
---
## もう少しくわしく

- **CI（継続的インテグレーション）**：変更するたびに、自動でビルドやテストを行う
- **CD（継続的デリバリー）**：テストに通ったら、自動で公開（デプロイ）まで行う

人が毎回手作業でやるとミスが起きやすい作業を、自動化してくれます。

:::tried
このサイトは GitHub Actions という CI/CD のしくみを使っています。
main ブランチに変更が入ると、自動で「ビルド → リンク切れチェック → GitHub Pages に公開」が行われます。
:::
