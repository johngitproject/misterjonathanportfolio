import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";
import { StatusIndicator } from "./StatusIndicator";
import { Tag } from "./Tag";

interface ProjectCardProps {
  project: Project;
  tall?: boolean;
  illustrativePrefix?: string;
  viewProjectLabel?: string;
}

export function ProjectCard({ project, tall = false, illustrativePrefix = "Illustrative", viewProjectLabel = "VIEW PROJECT" }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  return (
    <article className="group flex flex-col rounded-md border border-line bg-panel p-5 transition-colors duration-150 hover:border-line-active hover:shadow-[0_0_36px_-18px_rgb(241_2_45/0.4)]">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-mute">{project.number}</span>
        <StatusIndicator status={project.status} />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
        <Link href={href} className="transition-colors hover:text-accent">
          {project.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-sub">
        {project.subtitle ?? project.shortDescription}
      </p>
      {project.category && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-mute">
          {project.category}
        </p>
      )}

      <div className="mt-5">
        <ProjectPreview type={project.type} title={project.title} tall={tall} cover={project.cover} illustrativePrefix={illustrativePrefix} />
      </div>

      <ul aria-label="Technologies and domains" className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm leading-6 text-sub">{project.highlight}</p>

      <Link
        href={href}
        className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
      >
        {viewProjectLabel}
      </Link>
    </article>
  );
}
