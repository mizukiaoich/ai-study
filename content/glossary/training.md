---
type: glossary
term: "学習（トレーニング）"
reading: がくしゅう
english: "Training"
short: "大量のデータを使って、AIにパターンを覚えさせること。"
category: 基本
date: 2026-10-08
tags: []
related: [glossary/inference, glossary/fine-tuning, glossary/copyright-training-data, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

AIは、最初から答えを知っているわけではありません。
たくさんの文章・画像などを読み込ませて、「こういうときは、こう続くことが多い」というパターンを覚えさせます。これが **学習** です。

学習には、大量のデータと、たくさんのコンピューター（時間とお金）が必要です。

## 学習と推論のちがい

| | 学習 | [推論](/glossary/inference/) |
| --- | --- | --- |
| いつ | AIを作るとき | AIを使うとき |
| すること | パターンを覚える | 覚えたことを使って答える |
| たとえると | 勉強 | テスト本番 |

:::question
「学習したデータの中に、まちがった情報があったらどうなるの？」は、Day 1 からの疑問です。
:::
