---
title: "Claude Code Workflows That Actually Work"
date: "2026-02-17"
excerpt: "Real setups from power users: TDD enforcement, ASCII mockups before code, subagent orchestration, and the plugins worth installing."
tags: ["claude", "claude-code", "workflow", "productivity", "dev-tools"]
---

# Claude Code Workflows That Actually Work

I spent some time digging through r/ClaudeCode to find what separates developers who are "flying" with Claude Code from those fighting it all day. Here's what I found.

## The Uncomfortable Truth

Most people using Claude Code are doing it wrong. They're raw-prompting, skipping plans, and wondering why their agent goes off the rails.

The power users? They treat Claude like a junior engineer who needs structure. Not because Claude is dumb — but because *any* developer benefits from process.

## Pattern #1: Always Plan Mode

> "Always plan mode for everything no matter how small."

This came up repeatedly. Even for tiny changes, forcing Claude to articulate a plan before touching code prevents the "let me just quickly..." disasters.

The discipline sounds tedious until you realize: Claude's planning is basically free. The cost is a few seconds of reading. The benefit is dramatically fewer "wait, why did it delete that file?" moments.

## Pattern #2: TDD or Regret

> "Always TDD, run tests after each implementation. Always do refactoring and scanning for problems since I am not reviewing code."

This is the unlock for hands-off development. If you're not reviewing every line Claude writes (and who has time for that?), you need automated verification.

The workflow:

1. **RED** — Write a failing test first
2. **GREEN** — Minimum code to pass
3. **REFACTOR** — Clean up while green
4. **COMMIT** — Lock in the progress

The [Superpowers plugin](https://github.com/obra/superpowers) enforces this strictly — it will literally delete code written before tests.

## Pattern #3: ASCII Mockups Before UI Code

> "Creating an ASCII mock-up significantly improves the output."

This was a revelation. Before building any UI, sketch it in ASCII:

```
┌─────────────────────────────────────┐
│  🏠 Logo        [Login] [Sign Up]   │
├─────────────────────────────────────┤
│                                     │
│  [_____Search..._____] 🔍           │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │ Card │  │ Card │  │ Card │      │
│  └──────┘  └──────┘  └──────┘      │
└─────────────────────────────────────┘
```

Why it works:
- **Forces clarity** — Can't hide behind pretty pixels
- **Fast iteration** — Change layout in seconds  
- **Claude sees the target** — Better code when it can "see" the goal

Tools: [monosketch.io](https://monosketch.io), [asciiflow.com](https://asciiflow.com)

## Pattern #4: Build Tools, Don't Improvise

> "When you see Claude trying to 'hack around' a solution with curl and grep, ask him to write a bash script for that same function."

When Claude reaches for `curl | grep | awk` chains, stop it. Ask for a proper script instead.

The script will use the same tools under the hood, but now you have:
- A **reusable tool** you can call anytime
- **Documentation** for Claude about that part of your system
- **Reliability** over ad-hoc improvisation

## Pattern #5: Isolated Environments

> "Run Claude Code in a separate VM with YOLO mode. It can break nothing, only push to branches with CI."

The safest way to use `--dangerously-skip-permissions`:

1. Run Claude in an isolated VM/container
2. It can only push to branches (never main)
3. CI validates everything before merge
4. If it goes haywire, blow up the VM and start fresh

This unlocks autonomous multi-hour sessions without babysitting.

## The Plugin Stack

Plugins that kept coming up:

- **[Superpowers](https://github.com/obra/superpowers)** — Full dev workflow (brainstorm → plan → TDD → review)
- **context7** — Better context management
- **episodic-memory** — Memory persistence across sessions
- **frontend-design** — UI generation without a designer

Install Superpowers:
```
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

## Tools Worth Knowing

From the thread:

- **[trekker](https://github.com/obsfx/trekker)** — CLI issue tracker with MCP integration
- **[promptscout](https://github.com/obsfx/promptscout)** — Enriches prompts with related files
- **[skills.sh](https://skills.sh)** — Fetch skills on-demand ("use vercel's react native skills")

## The Meta-Pattern

Everyone who's "flying" shares these traits:

1. **Plan before code** — Always
2. **Tests before implementation** — TDD strictly
3. **Visual before building** — ASCII mockups for UI
4. **Tools over improvisation** — Script the repetitive stuff
5. **Isolation for autonomy** — VM/container for skip-permissions

The people fighting the tool are usually skipping one or more of these.

## Try It Yourself

I've added these workflows to my [Claude quickstart repo](https://github.com/jabreeflor/claude-quickstart):

- `/tdd` — Enforces RED-GREEN-REFACTOR
- `/ascii-mockup` — UI wireframing before code
- `/handover` — Session continuity for context preservation

Clone it, steal what's useful, make it your own.

---

*What's your Claude Code setup? Found patterns that work? [Let me know on X.](https://x.com/jabreeflor)*
