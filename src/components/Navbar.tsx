"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-nav-bg backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          jabreeflor
        </Link>
        <div className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
