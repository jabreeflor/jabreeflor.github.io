import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Jabree Flor</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/jabreeflor" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
