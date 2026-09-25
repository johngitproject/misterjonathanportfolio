import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CaseSection } from "@/components/CaseSection";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { InterfaceGallery } from "@/components/InterfaceGallery";
import { MetricsGrid } from "@/components/MetricsGrid";
import { renderRichText } from "@/components/RichText";
import { ProjectNav } from "@/components/ProjectNav";
import { ResultsBlock } from "@/components/ResultsBlock";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { getNextProject, projects } from "@/data/projects";
import { getDictionary } from "@/i18n/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getDictionary();
  const project = t.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.shortDescription} (${project.status}).`,
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getDictionary();
  const project = t.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  let counter = 1;
  const overviewIndex = pad(counter++);
  const interfaceIndex = pad(counter++);
  const sectionIndices = project.sections.map(() => pad(counter++));
  const metricsIndex = project.metrics ? pad(counter++) : undefined;
  const engineeringIndex = pad(counter++);
  const resultsIndex = pad(counter++);

  return (
    <div>
      <CaseStudyHeader project={project} />
      <div className="site-container py-16 sm:py-20">
      <div className="flex flex-col gap-14">
        {/* ——— Overview (auto) ——— */}
        <Reveal>
          <section aria-label="Overview">
            <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
              {overviewIndex} — {t.ui.overview}
            </h2>
            <div className="mt-4 flex max-w-3xl flex-col gap-4">
              {project.longDescription.map((paragraph, i) => (
                <p key={i} className="text-sm leading-7 text-sub">
                  {renderRichText(paragraph)}
                </p>
              ))}
            </div>
            {project.features && (
              <ul className="mt-5 flex max-w-3xl flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-6 text-sub"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] inline-block h-1 w-1 shrink-0 rounded-full bg-mute"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            {project.ecosystem && (
              <div className="mt-5 max-w-3xl rounded-md border border-line bg-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-mute">
                  {t.ui.roleInSystem}
                </p>
                <p className="mt-2 text-sm leading-7 text-sub">
                  {project.ecosystem}
                </p>
              </div>
            )}
          </section>
        </Reveal>

        {/* ——— Interface gallery (concept → reality, early) ——— */}
        <Reveal>
          <InterfaceGallery index={interfaceIndex} project={project} />
        </Reveal>

        {/* ——— Middle sections (data-driven) ——— */}
        {project.sections.map((section, i) => (
          <Reveal key={section.title}>
            <CaseSection index={sectionIndices[i]} section={section} />
          </Reveal>
        ))}

        {/* ——— Key metrics (placeholders only) ——— */}
        {project.metrics && metricsIndex && (
          <Reveal>
            <MetricsGrid
              index={metricsIndex}
              metrics={project.metrics}
              state={project.metricsState ?? "pending"}
            />
          </Reveal>
        )}

        {/* ——— Engineering ——— */}
        <Reveal>
          <section aria-label="Engineering">
            <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
              {engineeringIndex} — Engineering
            </h2>
            <ul className="mt-5 flex max-w-3xl flex-col gap-3">
              {project.engineering.map((item) => (
                <li
                  key={item.tech}
                  className="flex flex-col gap-2 rounded-md border border-line bg-panel p-4 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <Tag>{item.tech}</Tag>
                  <p className="text-sm leading-6 text-sub">{item.role}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* ——— Results (verified only) ——— */}
        <Reveal>
          <ResultsBlock
            index={resultsIndex}
            status={project.status}
            note={project.resultsNote}
          />
        </Reveal>

        {/* ——— Status / Next ——— */}
        <Reveal>
          <section aria-label={t.ui.statusNext}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
              {t.ui.statusNext}
            </h2>
            <ul className="mt-5 flex max-w-3xl flex-col gap-2.5">
              {project.statusNext.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-6 text-sub"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] inline-block h-1 w-1 shrink-0 rounded-full bg-risk"
                  />
                  <span>{renderRichText(item)}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* ——— Repository ——— */}
        <Reveal>
          <section aria-label={t.ui.repository}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
              {t.ui.repository}
            </h2>
            <div className="mt-5">
              {project.github ? (
                <Button
                  variant="secondary"
                  href={project.github}
                  external
                >
                  VIEW ON GITHUB
                </Button>
              ) : (
                <p className="inline-flex items-center rounded border border-line bg-raise px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-mute">
                  {t.ui.repoComingSoon}
                </p>
              )}
            </div>
            <div className="mt-3">
              {project.technicalPdf ? (
                <a
                  href={project.technicalPdf}
                  className="inline-flex items-center gap-2 font-mono text-xs text-sub transition-colors hover:text-accent"
                >
                  {t.ui.technicalDoc}
                </a>
              ) : (
                <p className="inline-flex items-center rounded border border-line bg-raise px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-mute">
                  {t.ui.docComingSoon}
                </p>
              )}
            </div>
          </section>
        </Reveal>
      </div>

      <ProjectNav next={next} />
      </div>
    </div>
  );
}
