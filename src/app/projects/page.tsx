import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and tools I've built.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold text-foreground">Projects</h1>
      <p className="mt-3 text-muted">
        Open source projects and tools I&apos;ve built.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
