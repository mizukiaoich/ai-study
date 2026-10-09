---
type: glossary
term: "ゼロショット／フューショット"
reading: ぜろしょっと
english: "Zero-shot / Few-shot"
short: "例を見せずに（ゼロ）、または少しだけ例を見せて（フュー）、AIに答えさせる方法。"
category: 発展
date: 2026-10-08
tags: []
related: [glossary/prompt-engineering, glossary/chain-of-thought, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

- **ゼロショット**：例を見せずに、いきなりお願いする
- **フューショット**：お手本の例をいくつか見せてからお願いする

## 例（フューショット）

```text
次の言葉を、ひらがなで書いてください。
例：人工知能 → じんこうちのう
例：生成 → せいせい
問題：推論 →
```

:::point
「こういう形で答えてほしい」というイメージがあるときは、例を見せるとうまくいきやすいです（[プロンプトエンジニアリング](/glossary/prompt-engineering/)のコツのひとつ）。
:::
