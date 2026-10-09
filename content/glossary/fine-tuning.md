---
type: glossary
term: "ファインチューニング"
reading: ふぁいんちゅーにんぐ
english: "Fine-tuning"
short: "すでにあるモデルに追加で学習させて、特定の用途に合わせること。"
category: 精度・仕組み
date: 2026-10-08
tags: []
related: [glossary/training, glossary/rag, glossary/rlhf, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

一から[学習](/glossary/training/)させるのはとても大変なので、すでに賢いモデルに **少しだけ追加で学習** させて、特定の分野や話し方に合わせます。

## 例

- 医療や法律など、専門分野の言葉に強くする
- 会社の問い合わせ対応の口調に合わせる

## RAG とのちがい

| | ファインチューニング | [RAG](/glossary/rag/) |
| --- | --- | --- |
| すること | モデル自体を作りかえる | 答えるときに資料を見せる |
| 向いていること | 話し方・得意分野を変える | 最新情報・社内資料を使う |
| 手軽さ | 手間とお金がかかる | 比較的始めやすい |
