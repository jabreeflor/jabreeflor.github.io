import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 dot-grid -mx-6 px-6">
      <div className="animate-fade-up stagger-1">
        <p className="text-[13px] tracking-widest uppercase text-section-label mb-6">
          Software Engineer
        </p>
      </div>

      <div className="animate-fade-up stagger-2">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-foreground leading-[0.95] font-bold">
          Jabree <span className="gradient-text">Flor</span>
        </h1>
      </div>

      <div className="animate-fade-up stagger-3 mt-8 max-w-lg">
        <p className="text-muted leading-relaxed">
          Building tools that make development better — desktop apps,
          browser extensions, CLI tools, and everything in between.
        </p>
      </div>

      <div className="animate-fade-up stagger-4 mt-10 flex items-center gap-6">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          View projects
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Read blog
        </Link>
        <a
          href="https://github.com/jabreeflor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
    </section>
  );
}
