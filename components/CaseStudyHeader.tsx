import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectType } from "@/data/projects";
import { Button } from "./Button";
import { StatusIndicator } from "./StatusIndicator";
import { Tag } from "./Tag";
import { SectionMark, type SectionMotif } from "./visuals/SectionMark";
import { getDictionary } from "@/i18n/content";

const caseMark: Record<ProjectType, SectionMotif> = {
  product: "pulse",
  research: "crosshair",
  infrastructure: "layers",
};

/* Case-study hero (landing recipe): cover as full-bleed background
   with a navy veil; breadcrumb, number, title, subtitle, status,
   metadata and tags above. The image is atmospheric (aria-hidden);
   long-form description lives in the Overview section. */
export async function CaseStudyHeader({ project }: { project: Project }) {
  const { ui } = await getDictionary();
  const subtitle = project.subtitle ?? project.shortDescription;
  return (
    <section className="relative overflow-hidden border-b border-line">
      {project.cover && (
        <>
          <Image
            src={project.cover.src}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-base/40"
          />
        </>
      )}
      <div className="site-container relative py-14 sm:py-20">
        <nav
          aria-label="Breadcrumb"
          className="font-mono text-[11px] uppercase tracking-wider text-mute"
        >
          <Link href="/projects" className="transition-colors hover:text-accent">
            {ui.breadcrumbProjects}
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{project.title}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">
            Project {project.number}
          </p>
          <StatusIndicator status={project.status} />
        </div>

        <div className="mt-4 flex max-w-3xl items-center gap-4">
          <SectionMark motif={caseMark[project.type]} />
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[40px]">
            {project.title}
          </h1>
        </div>
        <p className="mt-3 max-w-2xl text-[15px] font-medium text-sub">
          {subtitle}
        </p>

        <dl className="mt-8 grid max-w-4xl gap-x-10 gap-y-4 border-y border-line py-5 sm:grid-cols-3">
          {project.role && (
            <div>
            <dt className="font-mono text-[10px] uppercase tracking-wider text-mute">
              {ui.metaRole}
            </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-sub">
                {project.role}
              </dd>
            </div>
          )}
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-wider text-mute">
              {ui.metaStack}
            </dt>
            <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-sub">
              {project.stack.join(" · ")}
            </dd>
          </div>
          {project.year && (
            <div>
            <dt className="font-mono text-[10px] uppercase tracking-wider text-mute">
              {ui.metaYear}
            </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-sub">
                {project.year}
              </dd>
            </div>
          )}
        </dl>

      <ul
        aria-label={ui.techDomains}
        className="mt-6 flex flex-wrap gap-2"
      >
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

      {(project.github || project.technicalPdf) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.github && (
            <Button variant="secondary" href={project.github} external>
              {ui.viewOnGithub}
            </Button>
          )}
          {project.technicalPdf && (
            <a
              href={project.technicalPdf}
              className="inline-flex items-center gap-2 font-mono text-xs text-sub transition-colors hover:text-accent"
            >
              {ui.technicalDoc}
            </a>
          )}
        </div>
      )}
      </div>
    </section>
  );
}
