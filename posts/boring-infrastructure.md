---
title: A small case for boring infrastructure
date: 2026-04-02
---

I used to reach for the interesting tool. The new database, the clever queue, the framework with the beautiful docs. These days I reach for the dull one, and I'm happier for it.

## Boring is a feature

Boring technology has a property the exciting kind rarely does: **someone has already hit your bug**. The Stack Overflow answer exists. The failure modes are documented, often in someone's incident write-up at 3am. You are walking a path with footprints in it.

- Postgres instead of the shiny store
- A cron job instead of the workflow engine
- A single big server instead of nine small ones

None of these will get me invited to give a talk. All of them let me sleep.

## The cost nobody prices in

Every novel component is a small loan against your future attention. The interest comes due at the worst possible moment — usually during an outage, usually while you're explaining to someone why the clever thing is doing something un-clever.

> Choose boring technology, and spend your innovation budget on the problem that's actually yours.

That last part matters. Boring infrastructure isn't an argument for never building anything new. It's an argument for being *deliberate* about where you spend novelty — on the thing your users came for, not the plumbing underneath it.
