import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { Prose } from "@/components/Prose";
import { TechBadge } from "@/components/TechBadge";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="py-16">
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        &larr; Back to blog
      </Link>

      <header className="mt-8 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>
        )}
      </header>

      <Prose html={post.content} />
    </article>
  );
}
