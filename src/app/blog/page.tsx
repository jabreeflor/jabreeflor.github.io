import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/BlogPostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, dev tools, and side projects.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20">
      <div className="mb-12">
        <p className="text-[13px] tracking-widest uppercase text-section-label mb-2">
          Writing
        </p>
        <h1 className="font-display text-4xl italic text-foreground">Blog</h1>
        <p className="mt-3 text-muted max-w-lg">
          Thoughts on software engineering, dev tools, and side projects.
        </p>
      </div>
      <div className="border-t border-border">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={{ ...post, content: "" }} />
        ))}
      </div>
    </section>
  );
}
