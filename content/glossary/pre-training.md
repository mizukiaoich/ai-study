---
type: glossary
term: "事前学習"
reading: じぜんがくしゅう
english: "Pre-training"
short: "LLM に大量の文章を読ませ、「次の言葉の予測」をくり返して、言葉の知識を身につけさせる最初の学習。"
category: 精度・仕組み
date: 2026-10-20
tags: [LLM]
related: [glossary/instruction-tuning, glossary/rlhf, glossary/training, articles/llm, learning/day008]
sources:
  - type: discord
    title: Day 8 のメンバーのまとめ「LLMとは」
---
## もう少しくわしく

LLM の学習の最初の段階で、**いちばん時間と費用がかかる** 部分です。本・Webの文章・プログラムのコードなど、ばく大な文章を使います。

## 事前学習だけだと？

:::member[Day 8 のまとめより]
事前学習だけでは、文章の続きを書くのは得意でも、質問に答えるのは上手ではありません。
:::

たとえば「日本の首都は？」と入力しても、答えるのではなく「日本の首都は？ 次の問題：」のように、**文章の続き** を書いてしまうことがあります。
そこで、[追加の調整](/glossary/instruction-tuning/) や [RLHF](/glossary/rlhf/) を行って、チャットで使いやすくします。

:::point
ChatGPT の「GPT」の P は **Pre-trained（事前学習済み）** の略です。
:::
