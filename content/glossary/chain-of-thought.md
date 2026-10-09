---
type: glossary
term: "Chain of Thought（思考の連鎖）"
reading: ちぇいんおぶそーと
english: "Chain of Thought"
short: "AIに段階を追って考えさせることで、推論の正確さを上げる方法。"
category: 発展
date: 2026-10-08
tags: []
related: [glossary/reasoning-model, glossary/prompt-engineering, glossary/zero-shot-few-shot, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

いきなり答えを出させるより、**途中の考え方も書かせる** ほうが、計算や論理の問題で正解しやすくなることが知られています。

## 例

```text
次の問題を、順番に考えながら解いてください。
りんごが3個入った袋が4つあります。2個食べると残りは何個？
```

:::point
最近の [推論モデル](/glossary/reasoning-model/) は、この「順番に考える」ことを、答える前に自動で行うように作られています。
:::
