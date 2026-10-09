---
type: glossary
term: "ローカルLLM"
reading: ろーかるえるえるえむ
english: "Local LLM"
short: "自分のPCの中で動かす言語AI。入力したデータが外に出ない。"
category: 発展
date: 2026-10-08
tags: []
related: [glossary/open-source, glossary/quantization, glossary/llm, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

ChatGPT などは、インターネットの向こうの会社のコンピューターで動いています。
ローカルLLMは、[オープンソース](/glossary/open-source/)のモデルをダウンロードして、**自分のPCの中だけで動かす** [LLM](/glossary/llm/) です。

## よいところ・大変なところ

| よいところ | 大変なところ |
| --- | --- |
| 入力した内容が外に送られない | 性能の高いPC（GPUやメモリ）が必要 |
| ネットがなくても使える | 大手のサービスより性能が低いことが多い |
| 使用料がかからない | 準備や設定に少し知識がいる |

:::point
モデルを軽くする [量子化](/glossary/quantization/) を使うと、ふつうのPCでも動かしやすくなります。
:::
