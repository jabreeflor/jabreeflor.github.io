---
title: "How to Make Your Docs Claude Code Friendly"
date: "2026-02-22"
excerpt: "A practical guide to serving markdown to AI coding agents—and why it can cut your token usage by 10x."
tags: ["claude-code", "ai", "documentation", "developer-tools", "tutorial"]
---

# How to Make Your Docs Claude Code Friendly

Boris Cherny, creator of Claude Code, recently [announced](https://x.com/bcherny/status/1988860326306087102) a small change with big implications:

> "In the next version of Claude Code, Claude's WebFetch tool automatically adds `Accept: 'text/markdown, *'` to requests which helps docs sites provide token-efficient docs"

This means Claude Code is now *asking* for markdown when it fetches your documentation. The question is: are you serving it?

## Why This Matters

When Claude Code reads your docs to help a developer, it's consuming tokens. Lots of them.

HTML is verbose. A typical documentation page might include:
- Navigation menus
- Sidebars
- Footer links
- JavaScript bundles
- Inline styles
- SEO metadata
- Analytics snippets

None of that helps Claude understand your API. It's just noise—expensive noise that eats into context windows and slows down responses.

Bun implemented this and [reported](https://x.com/bunjavascript/status/1971934734940098971) **10x reduction in token usage** for their docs. That's not a typo. Ten times less.

## How It Works

The mechanism is simple HTTP content negotiation:

1. Claude Code sends a request with `Accept: text/markdown, */*`
2. Your server checks the Accept header
3. If markdown is preferred, serve the raw `.md` source
4. Otherwise, serve the rendered HTML as usual

Human users still get the pretty rendered docs. AI agents get the lean, token-efficient markdown.

## Implementation Guide

### Option 1: Next.js / Vercel

If you're using Next.js with MDX (like many modern doc sites), add middleware:

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || ''
  
  // Check if markdown is preferred
  if (accept.includes('text/markdown')) {
    const path = request.nextUrl.pathname
    
    // Rewrite to serve raw markdown
    if (path.startsWith('/docs/')) {
      const mdPath = path.replace('/docs/', '/raw-docs/') + '.md'
      return NextResponse.rewrite(new URL(mdPath, request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/docs/:path*',
}
```

Then expose your raw markdown files at `/raw-docs/` (or serve them from your content directory).

### Option 2: Express / Node.js

```typescript
import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const app = express()

app.get('/docs/:slug', async (req, res) => {
  const accept = req.get('Accept') || ''
  const slug = req.params.slug
  
  if (accept.includes('text/markdown')) {
    // Serve raw markdown
    const mdPath = path.join(__dirname, 'content', `${slug}.md`)
    try {
      const content = await fs.readFile(mdPath, 'utf-8')
      res.type('text/markdown').send(content)
      return
    } catch (e) {
      // Fall through to HTML if no markdown found
    }
  }
  
  // Serve rendered HTML (your existing logic)
  res.render('docs', { slug })
})
```

### Option 3: Nginx

If your docs are static, handle it at the reverse proxy level:

```nginx
location /docs/ {
    # Check for markdown preference
    if ($http_accept ~* "text/markdown") {
        rewrite ^/docs/(.*)$ /raw/$1.md break;
    }
    
    # Default: serve HTML
    try_files $uri $uri/ =404;
}

location /raw/ {
    internal;
    alias /var/www/docs-source/;
    default_type text/markdown;
}
```

### Option 4: Cloudflare Workers

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const accept = request.headers.get('Accept') || ''
    
    if (url.pathname.startsWith('/docs/') && accept.includes('text/markdown')) {
      // Fetch raw markdown from your source
      const mdUrl = url.pathname.replace('/docs/', '/content/') + '.md'
      const mdResponse = await fetch(`https://your-origin.com${mdUrl}`)
      
      if (mdResponse.ok) {
        return new Response(await mdResponse.text(), {
          headers: { 'Content-Type': 'text/markdown' }
        })
      }
    }
    
    // Pass through to origin
    return fetch(request)
  }
}
```

## Best Practices

### 1. Include Frontmatter

Keep YAML frontmatter in your markdown—it helps AI agents understand the document structure:

```markdown
---
title: Authentication API
description: How to authenticate with our API
---

# Authentication

...
```

### 2. Use Semantic Headers

AI agents parse structure from headers. Make them meaningful:

```markdown
## Installation       ✓ Good
## Step 1            ✗ Meaningless without context
```

### 3. Keep Code Blocks Labeled

Always specify the language:

````markdown
```typescript
// AI knows this is TypeScript
```
````

### 4. Link to Related Docs

Relative links help AI agents understand your doc structure:

```markdown
See [Rate Limiting](./rate-limiting.md) for details.
```

### 5. Test Your Implementation

Verify it works:

```bash
curl -H "Accept: text/markdown" https://your-site.com/docs/getting-started
```

You should get raw markdown back, not HTML.

## Who's Already Doing This?

- **Bun** — 10x token reduction, as mentioned
- **Anthropic's own docs** — They practice what they preach
- **Several Astro-based doc sites** — The framework makes this easy

## The Bigger Picture

This is part of a broader shift: documentation is becoming a **machine-readable interface**.

Your docs aren't just for humans anymore. They're training data, RAG sources, and real-time context for AI assistants. The sites that optimize for this will see their tools recommended more often by AI—because the AI can actually read them.

Think of it like SEO, but for AI agents. Call it AEO: Agent Engine Optimization.

## Quick Checklist

- [ ] Check if your docs framework exposes raw markdown
- [ ] Add Accept header detection to your server/CDN
- [ ] Serve `text/markdown` content type when requested
- [ ] Test with `curl -H "Accept: text/markdown"`
- [ ] Keep your markdown clean and well-structured

---

The change is small. The impact isn't. If developers are using Claude Code with your docs—and they probably are—you're either helping them or wasting their tokens.

Make the switch. Your AI-assisted users will thank you.
