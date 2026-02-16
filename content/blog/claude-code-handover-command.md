---
title: "The /handover Command: Giving Claude Institutional Memory"
date: "2026-02-16"
excerpt: "How a simple slash command can prevent AI amnesia and preserve context across sessions."
tags: ["claude", "ai", "productivity", "dev-tools"]
---

# The /handover Command: Giving Claude Institutional Memory

I came across a brilliant workflow tip from [Zara Zhang](https://x.com/zarazhangrui) that solves one of the most frustrating problems with AI coding assistants: context loss between sessions.

## The Problem

When you're deep in a coding session with Claude Code, you build up a ton of context:

- Decisions you made (and why)
- Approaches you tried that didn't work
- Edge cases you discovered
- The current state of what you're building

Then your context window fills up, you start a new session, and... amnesia. The new Claude has no idea what happened. You waste time re-explaining everything, or worse, it suggests approaches you already tried and rejected.

## The Solution: /handover

Zara's approach is elegantly simple: create a custom slash command called `/handover` that generates a `HANDOVER.md` document before ending a session.

This document captures:

- **What we accomplished** — summary of the work done
- **Key decisions** — and the reasoning behind them
- **Pitfalls encountered** — things that didn't work and why
- **Lessons learned** — insights for future sessions
- **Current state** — where we left off
- **Next steps** — what to pick up next time

The next session's Claude reads this file and has full context. No amnesia. No repeated mistakes.

## Why This Works

It's essentially treating Claude like a contractor who needs proper handoff documentation. You wouldn't expect a new developer to jump into a codebase with zero context — why expect that from an AI?

The key insight is that *Claude is good at summarizing what happened in a session*. It has all the context right there. Getting it to write its own handoff notes is trivially easy and incredibly valuable.

## Taking It Further

A few ways to extend this pattern:

1. **Automated triggers** — Generate handover docs when context usage hits 80%
2. **Structured format** — Use a consistent template for easy parsing
3. **Version control** — Commit handover docs alongside code changes
4. **Session chaining** — Include a "read HANDOVER.md first" instruction in your system prompt

## The Bigger Picture

This is part of a broader pattern: **augmenting AI memory with files**. Claude can't remember across sessions, but it can read files. So make important context a file.

Your AI assistant is only as good as the context you give it. Tools like `/handover` turn ephemeral session context into persistent institutional knowledge.

---

*Credit to [Zara Zhang](https://x.com/zarazhangrui/status/2020992712825241801) for sharing this workflow.*
