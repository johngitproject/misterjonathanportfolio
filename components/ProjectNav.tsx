import Link from "next/link";
import type { Project } from "@/data/projects";
import { getDictionary } from "@/i18n/content";

interface ProjectNavProps {
  next?: Project;
}

/* Case-study exit navigation: back to the catalogue plus
   the next project in catalogue order. */
export async function ProjectNav({ next }: ProjectNavProps) {
  const { ui } = await getDictionary();
  return (
    <nav
      aria-label="More projects"
      className="mt-20 border-t border-line pt-8"
    >
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
      >
        {ui.backToProjects}
      </Link>
      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className="group mt-6 block rounded-md border border-line bg-panel p-5 transition-colors duration-150 hover:border-line-active sm:p-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-mute">
            {ui.nextProject}
          </p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
            {next.title}
          </p>
          <p className="mt-1 text-sm text-sub">{next.shortDescription}</p>
          <p className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 group-hover:gap-3 group-hover:text-accent">
            {ui.viewProject}
          </p>
        </Link>
      )}
    </nav>
  );
}
