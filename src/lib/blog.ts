import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";
import { BlogPost } from "@/types";

const contentDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "1970-01-01",
      excerpt: data.excerpt ?? "",
      tags: data.tags ?? [],
      readingTime: stats.text,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const result = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "1970-01-01",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    readingTime: stats.text,
    content: result.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
