import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg italic text-muted">jf</span>
          <span className="text-border">/</span>
          <span className="text-[13px] text-muted">&copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-[13px] tracking-wide text-muted">
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <a
            href="https://github.com/jabreeflor"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
