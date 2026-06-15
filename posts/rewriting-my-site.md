---
title: Notes from rewriting my site for the third time
date: 2026-02-11
---

I rewrote this site again. Third time. Each rewrite has made it *smaller*, which I've decided to treat as progress rather than indecision.

## What I threw away

- The tag system nobody browsed by
- A projects page that duplicated my GitHub profile
- Three fonts, down to two
- A dark-mode toggle I replaced with respecting your system setting

## What I kept

The writing, mostly. It turns out the durable part of a personal site is the prose, and everything else is scaffolding around it. The scaffolding should be quiet.

```css
body {
  max-width: 40rem;
  margin: 0 auto;
  line-height: 1.6;
}
```

That's nearly the whole stylesheet now, and the site is faster and easier to edit than any of the elaborate versions before it.

## The rule I'm keeping

> If a feature doesn't serve the reading, it doesn't ship.

Ask me in a year whether there's a fourth rewrite coming. There probably is. But each one removes more than it adds, so eventually I'll converge on a single paragraph and a list of links, and honestly that might be the right answer.
