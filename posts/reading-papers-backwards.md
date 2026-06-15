---
title: On reading papers backwards
date: 2026-05-18
---

Most systems papers are written front-to-back but are best read back-to-front. The abstract sells you a story; the evaluation tells you whether it's true. I've started opening papers at the **results** and working upward, and I get through far more of them.

## The order I actually use

1. **Figures and tables first.** If the graphs don't show a real effect, the prose won't save it.
2. **Evaluation setup.** What did they measure, on what hardware, against which baseline?
3. **The claims in the intro.** Now I can read them skeptically, with the numbers already in hand.
4. **The method** — but only the parts the evaluation actually exercised.

> A paper is an argument, not a story. You're allowed to check the conclusion before you grant the premises.

## Why this works

Reading forward, you spend your freshest attention on motivation and related work — the parts most likely to be boilerplate. By the time you reach the numbers, you're tired and credulous. Reversing the order spends your skepticism where it counts.

It also makes *quitting* cheap. Plenty of papers don't survive contact with their own evaluation section, and finding that out in the first five minutes is a gift.

```text
abstract  → maybe later
intro     → read third
method    → read selectively
eval      → read FIRST
related   → skim if curious
```

None of this is rigorous, and I'd love to hear how you read. But after a year of doing it backwards, going forward again feels like reading with my eyes closed.
