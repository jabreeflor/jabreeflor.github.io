---
title: "The /loop Command: Ship Features on Autopilot"
date: "2026-03-07"
excerpt: "How a single slash command turns Claude Code into an autonomous coding machine — build, verify, fix, publish, and review in a loop until your feature is PR-ready."
tags: ["claude", "ai", "dev-tools", "automation", "open-source"]
---

# The /loop Command: Ship Features on Autopilot

What if you could hand Claude Code a feature spec and walk away? No babysitting. No copy-pasting errors. No "can you try again?" Just a spec in, PR out.

That's exactly what `/loop` does.

## The Problem With AI Coding Today

AI coding assistants are impressive, but the workflow is still painfully manual:

1. You describe what you want
2. Claude writes code
3. It doesn't compile
4. You paste the error
5. Claude fixes it
6. Tests fail
7. You paste the test output
8. Repeat until you lose patience

You're the human middleware between the AI and the terminal. You're the one running `npm test`, reading the output, and feeding it back. That's not automation — that's a copy-paste job with extra steps.

## Enter /loop

`/loop` is a Claude Code slash command that runs an autonomous **build → verify → fix → publish → review** cycle. You give it a feature spec, it does the rest.

```bash
/loop feature-spec.md --cycles 3 --retries 3
```

That's it. Here's what happens next:

### Phase 0: Setup

The loop reads your spec, creates an **isolated git worktree** (so your main branch is never touched), and spawns two parallel agents to learn your codebase:

- **Builder Scout** — studies project structure, build system, coding conventions, test patterns
- **Reviewer Scout** — studies architecture, security patterns, quality norms

Both run concurrently. Within seconds, the loop has deep context about your project.

### Phase 1: Build (TDD-Style)

The Builder agent implements the feature following your spec. It writes tests first, then implementation — real TDD, not just "write some tests after."

### Phase 2: Verify

The loop automatically runs your full verification suite:

- **Tests** — `npm test`, `pytest`, whatever your project uses
- **Linting** — catches style issues before review
- **Type checking** — `tsc`, `mypy`, etc.
- **Build** — ensures everything compiles

No human in the loop. It reads the output itself.

### Phase 3: Fix (Retry Loop)

If verification fails — and it often does on the first try — the loop reads the errors and fixes them. It retries up to N times (default 3), each time reading the actual error output and making targeted fixes.

This is the key insight: **Claude is great at fixing errors when it can see them.** The bottleneck was always the human copying errors back and forth. Remove the human, and the fix cycle drops from minutes to seconds.

### Phase 4: Publish

Once verification passes, the loop commits, pushes, and creates a PR. Clean commit messages, proper branch naming, the works.

### Phase 5: Review

Here's where it gets interesting. A **separate Reviewer agent** (read-only, can't modify code) audits the PR with fresh eyes. It checks:

- Architecture decisions
- Security concerns
- Performance issues
- Test coverage gaps
- Code quality

If the Reviewer finds issues, the loop cycles back to Phase 1 and the Builder addresses the feedback. This inner loop continues until the Reviewer approves or you hit the cycle limit.

## Dual-Agent Architecture

The secret sauce is the **dual-agent design**. The Builder and Reviewer are separate agents with different roles:

- The **Builder** has write access and focuses on implementation
- The **Reviewer** is read-only and focuses on quality

This mirrors how real teams work — the person writing the code shouldn't be the only one reviewing it. By separating concerns, the loop catches issues that a single agent would miss.

## Real-World Results

In practice, most features ship in 1-2 cycles. The typical flow:

1. **Cycle 1**: Builder implements, verification fails on 2-3 issues, fix loop resolves them, Reviewer requests minor changes
2. **Cycle 2**: Builder addresses review feedback, verification passes first try, Reviewer approves

Total time: 5-15 minutes for features that would take an hour of manual back-and-forth.

## Getting Started

Install the plugin:

```bash
claude plugin add jabreeflor/nova-loop-plugin
```

Or clone and link:

```bash
git clone https://github.com/jabreeflor/nova-loop-plugin.git
cd nova-loop-plugin
claude plugin link .
```

Write a feature spec (just a markdown file describing what you want), then:

```bash
/nova-loop feature-spec.md
```

### Commands

| Command | What it does |
|---------|-------------|
| `/nova-loop <spec> [--cycles N] [--retries N]` | Start the autonomous loop |
| `/commit-push-pr` | One-step commit + push + PR |
| `/cancel-nova` | Stop and clean up |

## The Bigger Picture

`/loop` represents a shift in how we use AI for coding. Instead of treating Claude as a chatbot you talk to line by line, you treat it as an **autonomous agent** with a clear objective and feedback loop.

The pattern works because:

- **Specs are better than chat** — a written spec is unambiguous
- **Verification is automatable** — tests, lints, and builds don't need humans
- **Feedback loops are fast** — machines read error output instantly
- **Separation of concerns scales** — Builder + Reviewer > single agent

The best code isn't written in a conversation. It's shipped through a process.

---

*[Nova Loop](https://github.com/jabreeflor/nova-loop-plugin) is open source. Star it, fork it, make it better.*
