"use client";

import { useState } from "react";
import { matchesFilter, type Project } from "@/data/projects";
import { projectFilters, type ProjectFilter } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

interface ProjectCatalogueProps {
  projects: Project[];
  emptyTitle: string;
  emptyDesc: string;
  illustrativePrefix: string;
  viewProjectLabel: string;
}

export function ProjectCatalogue({
  projects,
  emptyTitle,
  emptyDesc,
  illustrativePrefix,
  viewProjectLabel,
}: ProjectCatalogueProps) {
  const [filter, setFilter] = useState<ProjectFilter>("ALL");
  const visible = projects.filter((project) => matchesFilter(project, filter));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects"
        className="mt-10 flex flex-wrap gap-2"
      >
        {projectFilters.map((item) => {
          const active = item === filter;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={active}
              className={`rounded border px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-150 ${
                active
                  ? "border-risk text-risk"
                  : "border-line text-sub hover:border-line-active hover:text-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 flex flex-col gap-4">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 3) * 60}>
              <ProjectCard
                project={project}
                tall={project.featured}
                illustrativePrefix={illustrativePrefix}
                viewProjectLabel={viewProjectLabel}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-md border border-line bg-panel p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">
            {emptyTitle}
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-sub">
            {emptyDesc}
          </p>
        </div>
      )}
    </div>
  );
}
