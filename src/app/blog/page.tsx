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
    <section className="py-16">
      <h1 className="text-3xl font-bold text-foreground">Blog</h1>
      <p className="mt-3 text-muted">
        Thoughts on software engineering, dev tools, and side projects.
      </p>
      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={{ ...post, content: "" }} />
        ))}
      </div>
    </section>
  );
}
