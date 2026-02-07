import { TechBadge } from "./TechBadge";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border bg-card p-6 hover:bg-card-hover transition-colors"
    >
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {project.name}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </a>
  );
}
