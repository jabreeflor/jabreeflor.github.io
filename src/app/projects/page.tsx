import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and tools I've built.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="mb-12">
        <p className="text-[13px] tracking-widest uppercase text-section-label mb-2">
          Work
        </p>
        <h1 className="font-display text-4xl italic text-foreground">
          Projects
        </h1>
        <p className="mt-3 text-muted max-w-lg">
          Open source tools and experiments. Everything lives on GitHub.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
