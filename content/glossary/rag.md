---
type: glossary
term: "RAG"
reading: らぐ
english: "Retrieval-Augmented Generation（検索拡張生成）"
short: "外部の資料を検索してから答えさせることで、答えの正確さを高める方法。"
category: 精度・仕組み
date: 2026-10-08
tags: []
related: [glossary/hallucination, glossary/embedding, glossary/vector-database, tools/notebooklm, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

AIは、[学習](/glossary/training/)した時点までのことしか知りません。また、会社の資料のような「公開されていない情報」も知りません。
そこで、**質問に関係する資料を先に探してきて、それを見ながら答えさせる** のが RAG です。

## たとえると

「記憶だけで答えるテスト」ではなく、「教科書を見ながら答えていいテスト」にするイメージです。

## 例

- [NotebookLM](/tools/notebooklm/)：自分が渡した資料をもとに答える
- [Perplexity](/tools/perplexity/)：Webを検索してから、出典つきで答える

:::point
RAG を使っても、[ハルシネーション](/glossary/hallucination/)が完全になくなるわけではありません。出典を確認することは大事です。
:::

## しくみに出てくる言葉

資料を探すときには、[エンベディング](/glossary/embedding/) や [ベクトルデータベース](/glossary/vector-database/) がよく使われます。
