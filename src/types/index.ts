export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  featured: boolean;
}
