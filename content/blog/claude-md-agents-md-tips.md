---
title: "Your CLAUDE.md and AGENTS.md Are Probably Missing These"
date: "2026-02-16"
excerpt: "The configuration tips that power users say are 'absolute musts' for Claude Code."
tags: ["claude", "ai", "productivity", "dev-tools"]
---

# Your CLAUDE.md and AGENTS.md Are Probably Missing These

There's been a lot of discussion lately about optimizing Claude Code through its configuration files. [Antoine van der Lee](https://x.com/twannl) (SwiftLee) recently highlighted some tips as "absolute musts" for your CLAUDE.md or AGENTS.md files.

These files are how you give Claude persistent context about your project, preferences, and workflows. Get them right, and Claude becomes dramatically more useful.

## The Two Files

**CLAUDE.md** — Project-level instructions that Claude reads at the start of every session. Lives in your repo root.

**AGENTS.md** — Similar purpose, alternative naming convention. Some teams prefer this for multi-agent setups.

Both serve the same function: persistent context that survives across sessions.

## What Power Users Include

### 1. Explicit Coding Standards

Don't assume Claude knows your style. Be specific:

```markdown
## Code Style
- Use functional components with hooks (no class components)
- Prefer `const` over `let`
- Use early returns to reduce nesting
- Error messages should be user-friendly, not technical
- All functions need JSDoc comments
```

Claude will follow these consistently once you spell them out.

### 2. Project Architecture Context

Help Claude understand the big picture:

```markdown
## Architecture
- `/src/features/` — Feature-based folder structure
- `/src/shared/` — Reusable components and utilities
- `/src/api/` — API client and types (auto-generated from OpenAPI)
- We use React Query for server state, Zustand for client state
```

This prevents Claude from suggesting patterns that don't fit your codebase.

### 3. Common Pitfalls and Gotchas

Save future sessions from past mistakes:

```markdown
## Gotchas
- Don't use `any` types — we have strict TypeScript
- The `user` object from auth context can be null, always check
- API calls need the `withCredentials` option for CORS
- Tests must pass `--runInBand` flag due to shared DB state
```

This is institutional knowledge that Claude can't infer from code alone.

### 4. Decision Log

Why you made certain choices:

```markdown
## Decisions
- Chose Tailwind over styled-components for bundle size
- Using date-fns instead of moment (smaller, tree-shakeable)
- Went with Zod for validation because it infers types
```

Prevents Claude from suggesting alternatives you've already evaluated.

### 5. File and Folder Conventions

Where things go:

```markdown
## Conventions
- New features get their own folder in `/src/features/`
- Tests live next to source files (`Component.test.tsx`)
- API types are generated — don't modify `/src/api/types.ts` directly
```

## The Meta-Tip

The best CLAUDE.md files evolve. When Claude makes a mistake or suggests something off, add it to your gotchas. When you make an architectural decision, document it.

Think of it as training a new team member who has perfect memory but zero context.

## Template Starter

```markdown
# Project: [Your Project Name]

## Overview
[One paragraph about what this project does]

## Tech Stack
- [List your main technologies]

## Code Style
- [Your coding conventions]

## Architecture
- [Folder structure and patterns]

## Gotchas
- [Things that trip people up]

## Decisions
- [Key architectural choices and why]

## Commands
- `npm run dev` — Start development server
- `npm test` — Run tests
- `npm run build` — Production build
```

## Keep It Updated

The teams getting the most from Claude Code treat these files as living documents. Every time you correct Claude, ask yourself: "Should this be in my config file?"

---

*Tip via [Antoine van der Lee](https://x.com/twannl/status/2019386361191756265).*
