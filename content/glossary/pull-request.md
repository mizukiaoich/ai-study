---
type: glossary
term: "プルリクエスト"
reading: ぷるりくえすと
english: "Pull Request"
short: "「この変更を取りこんでください」とお願いして、内容を確認してもらうためのしくみ。"
category: 活用・応用
date: 2026-10-19
tags: [アプリ開発]
related: [glossary/git, glossary/ci-cd, articles/ai-app-dev-flow, learning/day007]
sources:
  - type: discord
    title: Day 7 の資料「AIを活用したPC・スマホアプリ開発フロー」
---
## もう少しくわしく

[Git](/glossary/git/) で作った変更を、すぐに本番に入れるのではなく、**いったん確認してから取りこむ** ためのしくみです（GitHub などの機能）。略して「PR」とも呼びます。

## 流れ

1. 変更を別の作業場所（ブランチ）で作る
2. プルリクエストを作る
3. 人やAIが変更内容を確認（レビュー）する
4. 問題なければ取りこむ（マージ）

:::tried
このサイトの更新も、毎回プルリクエストを作って、確認してからマージしています。マージすると自動でサイトが更新されます（[CI/CD](/glossary/ci-cd/)）。
:::
