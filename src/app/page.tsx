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

      <section className="pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-4">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.slug} post={{ ...post, content: "" }} />
          ))}
        </div>
      </section>
    </>
  );
}
