---
title: "Ghostty + Claude Code: The Terminal-First IDE"
date: "2026-02-16"
excerpt: "Why developers are ditching VS Code for a terminal emulator and an AI coding agent."
tags: ["claude", "ghostty", "terminal", "workflow", "dev-tools"]
---

# Ghostty + Claude Code: The Terminal-First IDE

There's a workflow shift happening in dev tooling that I've been seeing more and more: developers abandoning traditional IDEs entirely in favor of terminal-based setups powered by AI coding agents.

[Daniel San](https://x.com/dani_avila7) shared his setup recently, and it's a perfect example of this trend:

> "After months using Claude Code daily I realized I was barely using VS Code or Cursor, just the terminal and git panel, everything else Claude Code handled."

## The Realization

Think about what you actually *use* in your IDE:

- **File explorer?** Claude Code navigates your codebase.
- **Search?** Claude Code finds what you need.
- **Syntax highlighting?** You're reading Claude's output, not staring at code.
- **Extensions?** Claude *is* the extension.

What's left? The terminal. And maybe the git panel.

If that's the case, why run a 500MB Electron app when a fast terminal emulator does the job better?

## Why Ghostty?

[Ghostty](https://ghostty.org) is a new terminal emulator built for performance and modern workflows. The key features for Claude Code users:

- **Native splits and tabs** — Open multiple Claude sessions side by side
- **Fast rendering** — GPU-accelerated, no lag even with heavy output
- **Zoom in/out** — Focus on one session, then zoom out to see all panels
- **Worktree support** — Each panel can be a different git worktree

The workflow becomes: split panels for different tasks, switch between Claude sessions, zoom in when you need focus, zoom out when you need context.

## SAND Keybindings

Daniel uses "SAND" keybindings — a spatial navigation system where:

- **S** = Left
- **A** = Down  
- **N** = Up
- **D** = Right

This keeps your hands on the home row while navigating between panels. No reaching for arrow keys, no mouse needed. Combined with a leader key (like `Ctrl+Space`), you get instant panel switching.

## The Workflow

Here's what a typical session looks like:

1. **Split terminal** into 2-4 panels
2. **Each panel** runs Claude Code in a different worktree or context
3. **Navigate** between panels with SAND keys
4. **Zoom** into a panel when you need to focus
5. **Zoom out** to see the big picture

You're essentially running multiple AI coding agents in parallel, each working on different parts of your project.

## What You Lose (And Why It's Fine)

- **IntelliSense** — Claude Code provides context-aware suggestions anyway
- **Debugger UI** — CLI debuggers work fine, and Claude can help interpret output
- **Pretty file icons** — You'll survive

What you gain is speed, focus, and the ability to run multiple AI sessions simultaneously without the overhead of a full IDE.

## Try It

If you're already using Claude Code heavily, try this for a week:

1. Install [Ghostty](https://ghostty.org)
2. Set up split keybindings (SAND or your preferred layout)
3. Don't open VS Code

You might not go back.

---

*Inspired by [Daniel San's workflow](https://x.com/dani_avila7/status/2023156764775268640).*
