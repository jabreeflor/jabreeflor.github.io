import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Hey, I&apos;m Jabree
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Software engineer building tools and exploring ideas. I work on
          desktop apps, browser extensions, web apps, and everything in
          between.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-card-hover transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
