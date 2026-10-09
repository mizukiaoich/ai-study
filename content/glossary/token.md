---
type: glossary
term: "トークン"
reading: とーくん
english: "Token"
short: "AIが文章を処理するときの最小単位。料金や、一度に扱える文字数の上限の基準になる。"
category: 使うとき
date: 2026-10-08
tags: []
related: [glossary/context-window, glossary/pay-as-you-go, glossary/api, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

AIは文章を、単語や文字の「かけら」に区切って処理しています。このかけらが **トークン** です。

- 英語では、1つの単語がだいたい1〜2トークン
- 日本語では、1文字が1トークン前後になることが多い

（区切り方はAIによってちがいます）

## なぜ大事？

- [API](/glossary/api/) の料金は「何トークン使ったか」で決まることが多い（[従量課金](/glossary/pay-as-you-go/)）
- 一度に扱える量（[コンテキストウィンドウ](/glossary/context-window/)）もトークン数で決まっている

:::point
同じ内容でも、言語によって使うトークン数が変わることがあります。
:::
