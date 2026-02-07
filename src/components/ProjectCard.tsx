import { TechBadge } from "./TechBadge";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-[0_2px_20px_-4px] hover:shadow-accent/10"
    >
      {/* Accent top line on hover */}
      <div className="absolute top-0 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg italic text-foreground group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <svg className="w-4 h-4 mt-1 text-muted opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>

      <p className="mt-3 text-sm text-muted leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </a>
  );
}
