import { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "release-notes-ai",
    description:
      "Generate beautiful changelogs from git commits using AI. Smart categorization, conventional commits support, and optional Claude/GPT enhancement.",
    url: "https://github.com/jabreeflor/release-notes-ai",
    tech: ["TypeScript", "Node.js", "Claude API", "OpenAI"],
    featured: true,
  },
  {
    name: "repo-swipe",
    description:
      "Tinder for GitHub repos — discover awesome projects one swipe at a time! A terminal UI that lets you like, skip, and curate repos with keyboard controls.",
    url: "https://github.com/jabreeflor/repo-swipe",
    tech: ["TypeScript", "Ink", "GitHub API", "React"],
    featured: true,
  },
  {
    name: "OSINT CLI",
    description:
      "Open-source intelligence gathering CLI. Username enumeration across 97+ platforms, email breach checks, domain WHOIS, reverse image search, and more.",
    url: "https://github.com/jabreeflor/osint-cli",
    tech: ["TypeScript", "Node.js", "Puppeteer", "Commander.js"],
    featured: true,
  },
  {
    name: "Claude Orchestrator",
    description:
      "A Clawdbot plugin demonstrating advanced Claude Code patterns: sub-agents, agent teams, skills, and multi-agent coordination workflows.",
    url: "https://github.com/jabreeflor/claude-orchestrator",
    tech: ["TypeScript", "Claude Code", "Agent Teams"],
    featured: true,
  },
  {
    name: "Spotify Playlist Generator",
    description:
      "AI-powered playlist generator that analyzes your Spotify listening history, builds a taste profile, and creates personalized playlists by mood, activity, or vibe.",
    url: "https://github.com/jabreeflor/spotify-playlist-gen",
    tech: ["TypeScript", "Spotify API", "OAuth2"],
    featured: true,
  },
  {
    name: "Claude Memory",
    description:
      "Standalone memory management system for Claude Code and coding agents. Semantic search, daily logs, long-term memory, and maintenance tools.",
    url: "https://github.com/jabreeflor/claude-memory",
    tech: ["TypeScript", "Embeddings", "Semantic Search"],
    featured: true,
  },
  {
    name: "Internet Archaeology",
    description:
      "Explore the history of any website through the Wayback Machine. View snapshots, compare changes over time, and discover how the web has evolved.",
    url: "https://github.com/jabreeflor/internet-archaeology",
    tech: ["TypeScript", "React", "Wayback Machine API"],
    featured: true,
  },
  {
    name: "NVM GUI",
    description:
      "A desktop GUI for Node Version Manager. Install, switch, and manage Node.js versions without touching the terminal.",
    url: "https://github.com/jabreeflor/nvm-gui",
    tech: ["Electron", "TypeScript", "React"],
    featured: true,
  },
  {
    name: "VSCode Achievements",
    description:
      "A VS Code extension that gamifies your coding experience with unlockable achievements, progress tracking, and milestone rewards.",
    url: "https://github.com/jabreeflor/vscode-achievements",
    tech: ["TypeScript", "VS Code API"],
    featured: true,
  },
  {
    name: "NetGaze",
    description:
      "A network traffic viewer that lets you monitor and inspect HTTP/HTTPS requests in real time from your local machine.",
    url: "https://github.com/jabreeflor/netgaze",
    tech: ["TypeScript", "Node.js", "React"],
    featured: true,
  },
  {
    name: "Prism",
    description:
      "An MCP server for code intelligence. Provides semantic code search, analysis, and navigation capabilities for AI-powered development tools.",
    url: "https://github.com/jabreeflor/prism",
    tech: ["TypeScript", "MCP", "Tree-sitter"],
    featured: true,
  },
  {
    name: "JJK Fighting Game",
    description:
      "A 2D browser-based fighting game inspired by Jujutsu Kaisen. Features character selection, special moves, and multiplayer combat.",
    url: "https://github.com/jabreeflor/jjk-fighting-game",
    tech: ["JavaScript", "HTML Canvas", "CSS"],
    featured: false,
  },
  {
    name: "Crazy Amazon Deals",
    description:
      "A deal tracker that monitors Amazon for price drops and notifies you of the best deals. Early stage project.",
    url: "https://github.com/jabreeflor/CrazyAmazonDeals",
    tech: ["JavaScript", "Web Scraping"],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
