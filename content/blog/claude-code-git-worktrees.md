---
title: "Claude Code Gets Git Worktrees: Parallel Agents That Don't Fight"
date: "2026-02-21"
excerpt: "Anthropic just shipped built-in git worktree support for Claude Code CLI. Now you can run multiple agents in parallel without them stepping on each other's changes."
tags: ["claude", "claude-code", "git", "worktrees", "productivity", "dev-tools"]
---

# Claude Code Gets Git Worktrees: Parallel Agents That Don't Fight

Boris Cherny [just announced](https://x.com/bcherny/status/2025007393290272904) what might be the most requested feature for Claude Code power users: **built-in git worktree support**.

```bash
$ claude --worktree
```

That's it. One flag, and your agent gets its own isolated workspace.

## The Problem This Solves

If you've tried running multiple Claude Code agents on the same codebase, you know the pain. Agent A is refactoring the auth module while Agent B is adding a new endpoint. They're both touching shared files. Someone's work gets clobbered. Merge conflicts stack up. You spend more time babysitting than building.

The "solution" until now was manual: create separate directories, cherry-pick commits, pray nothing collides. Tedious and error-prone.

## What Git Worktrees Actually Are

If you've never used worktrees, here's the quick version:

Git worktrees let you have **multiple working directories** attached to the same repository. Each worktree has its own checked-out branch, but they all share the same `.git` database. No cloning. No syncing. Just parallel workspaces.

```bash
# Traditional way (without Claude)
git worktree add ../feature-auth feature-auth
git worktree add ../feature-api feature-api

# Now you have:
# /project           (main branch)
# /project-feature-auth  (feature-auth branch)  
# /project-feature-api   (feature-api branch)
```

Each directory is fully independent. Edit files in one, the others don't see it until you merge.

## How Claude Code Uses This

With `--worktree`, Claude Code automatically:

1. **Creates a new worktree** in a temp directory
2. **Checks out a fresh branch** for the task
3. **Runs the agent** in that isolated workspace
4. **Leaves your main directory untouched**

The agent can go wild — create files, delete files, refactor everything — and none of it touches your actual working directory until you explicitly merge.

## Why This Matters for Agent Workflows

This isn't just convenience. It fundamentally changes how you can use Claude Code:

**Parallel Task Execution**
Run three agents simultaneously:
- Agent 1: Refactoring database layer
- Agent 2: Writing new API endpoints
- Agent 3: Updating documentation

No conflicts. No waiting. Each gets its own sandbox.

**Fearless Experimentation**
"Try a complete rewrite of this module" becomes a safe operation. If it sucks, you just delete the worktree. Your main branch never knew it happened.

**Better Git Hygiene**
Each agent's work lands on its own branch with a clean history. Review and merge when ready. No more "WIP: claude experiments" commits polluting main.

**CI/CD Integration**
Spawn agents in CI that work on isolated worktrees, run tests, and only merge if green. The automation possibilities are significant.

## The Bigger Picture

This feature was already in Claude Code Desktop, but bringing it to CLI is what makes it useful for serious workflows. CLI is where automation lives. It's where you can script agent orchestration, integrate with CI, and build real development pipelines.

The 800K+ views on Boris's announcement suggest I'm not the only one who thinks this is a big deal.

## Getting Started

Update to the latest Claude Code:

```bash
npm install -g @anthropic-ai/claude-code
```

Then just add the flag:

```bash
claude --worktree "refactor the auth module to use JWT"
```

Claude handles the worktree creation and cleanup. When the task completes, you'll have a branch ready for review.

For more on git worktrees themselves, check the [official docs](https://git-scm.com/docs/git-worktree).

---

*This is the kind of feature that separates "AI coding assistant" from "AI development infrastructure." Parallel, isolated, auditable agent work. We're getting closer to treating AI agents like we treat CI workers: spawn them, let them work, review the output.*
