import Link from "next/link";
import { TechBadge } from "./TechBadge";
import { BlogPost } from "@/types";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 hover:bg-card-hover transition-colors"
    >
      <div className="flex items-center gap-3 text-sm text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>&middot;</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      )}
    </Link>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
