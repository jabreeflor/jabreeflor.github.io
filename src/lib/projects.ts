import { Project } from "@/types";

export const projects: Project[] = [
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
