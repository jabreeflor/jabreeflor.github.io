import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogPostCard } from "@/components/BlogPostCard";
import { getFeaturedProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-20 animate-fade-up stagger-5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[13px] tracking-widest uppercase text-section-label mb-2">
              Work
            </p>
            <h2 className="font-display text-3xl italic text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-[13px] tracking-wide text-muted hover:text-accent transition-colors"
          >
            All projects
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="py-20 animate-fade-up stagger-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[13px] tracking-widest uppercase text-section-label mb-2">
              Writing
            </p>
            <h2 className="font-display text-3xl italic text-foreground">
              Recent Posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[13px] tracking-wide text-muted hover:text-accent transition-colors"
          >
            All posts
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="border-t border-border">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.slug} post={{ ...post, content: "" }} />
          ))}
        </div>
      </section>
    </>
  );
}
