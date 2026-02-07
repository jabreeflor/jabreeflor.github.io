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
    <article className="py-20">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-1.5 text-[13px] tracking-wide text-muted hover:text-foreground transition-colors"
      >
        <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to blog
      </Link>

      <header className="mt-10 mb-12 pb-10 border-b border-border">
        <div className="flex items-center gap-3 text-[13px] tracking-wide text-muted mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-border">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl italic text-foreground leading-tight">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
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
