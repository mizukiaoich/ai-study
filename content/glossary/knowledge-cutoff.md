---
type: glossary
term: ナレッジカットオフ
reading: なれっじかっとおふ
english: Knowledge Cutoff
short: AIが学習したデータの「いつまでの情報か」という締め切り日のこと。それより後のことは基本的に知らない。
category: 使うとき
date: 2026-10-13
tags: [注意点]
related: [glossary/training, glossary/rag, tools/perplexity, articles/generative-ai, learning/day006]
sources:
  - type: discord
    title: Day 6 のメンバーのまとめ（「情報が古い」より）
---

## もう少しくわしく

AIは、ある時点までに集めたデータで[学習](/glossary/training/)しています。その締め切りを **ナレッジカットオフ** と呼びます。
それより後のニュースや、新しい料金・機能などは、基本的に知りません。

## どう付き合う？

- **Web検索つき** のAIを使うと、新しい情報を調べながら答えてくれる（例：[Perplexity](/tools/perplexity/)、検索機能をオンにした ChatGPT や Gemini など）
- 「この情報はいつ時点のもの？」と確認する
- 料金や最新情報は、公式サイトで確かめる

:::point
資料を探してから答えさせるしくみ（[RAG](/glossary/rag/)）も、古い情報を補う方法のひとつです。
:::
