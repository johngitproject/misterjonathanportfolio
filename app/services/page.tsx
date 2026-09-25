import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { DomainGlyph, type DomainGlyphMotif } from "@/components/visuals/DomainGlyph";
import { ServiceGlyph, type ServiceGlyphMotif } from "@/components/visuals/ServiceGlyph";
import type { Service } from "@/data/services";
import { getDictionary } from "@/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  return {
    title: t.servicesHero.title,
    description: t.servicesHero.description,
  };
}

async function ServiceCta({ service }: { service: Service }) {
  const { site, ui } = await getDictionary();
  const { cta } = service;
  if (cta.kind === "mailto") {
    return (
      <Button
        variant="primary"
        href={`mailto:${site.email}?subject=${encodeURIComponent(cta.subject)}`}
      >
        {cta.label.toUpperCase()}
      </Button>
    );
  }
  if (cta.kind === "internal") {
    return (
      <Button variant="primary" href={cta.href}>
        {cta.label.toUpperCase()}
      </Button>
    );
  }
  const url = site[cta.urlKey];
  if (!url || url === "#") {
    return (
      <p className="inline-flex items-center rounded border border-line bg-raise px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-mute">
        {cta.label} {ui.comingSoonSuffix}
      </p>
    );
  }
  return (
    <Button variant="primary" href={url} external>
      {cta.label.toUpperCase()}
    </Button>
  );
}

const serviceGlyphs: DomainGlyphMotif[] = [
  "assemble",
  "explore",
  "structure",
];

const systemGlyphs: ServiceGlyphMotif[] = [
  "idea",
  "rules",
  "data",
  "backtesting",
  "validation",
  "automation",
  "system",
];

const howGlyphs: DomainGlyphMotif[] = [
  "explore",
  "observe",
  "assemble",
  "iterate",
];

export default async function ServicesPage() {
  const t = await getDictionary();
  const featured = ["perf-tracker", "market-research"]
    .map((slug) => t.projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <div className="site-container py-16 sm:py-20">
      {/* ——— Hero ——— */}
      <p className="font-mono text-xs uppercase tracking-wider text-mute">
        {t.servicesHero.eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[40px]">
        {t.servicesHero.title}
      </h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-sub">
        {t.servicesHero.subtitle}
      </p>
      <p className="mt-6 max-w-xl text-sm leading-7 text-sub">
        {t.servicesHero.description}
      </p>

      {/* ——— 3 services ——— */}
      <div className="mt-14 flex flex-col gap-4">
        {t.services.map((service, i) => (
          <Reveal key={service.number}>
            <article className="rounded-md border border-line bg-panel p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-xs text-mute">{service.number}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mute">
                  {service.positioning}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <DomainGlyph glyph={serviceGlyphs[i]} />
                <h2 className="text-2xl font-semibold tracking-tight text-ink">
                  {service.name}
                </h2>
              </div>
              <p className="mt-2 text-[15px] font-medium text-sub">
                {service.tagline}
              </p>
              <div className="mt-4 flex max-w-3xl flex-col gap-3">
                {service.description.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-7 text-sub">
                    {paragraph}
                  </p>
                ))}
              </div>
              {service.points && (
                <>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-mute">
                    {service.pointsLabel}
                  </p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-6 text-sub"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {service.number === "03" && (
                <>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-mute">
                    {t.pages.services.processLabel}
                  </p>
                  <ol className="mt-3 flex gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-7 lg:overflow-visible lg:pb-0">
                    {t.systemProcess.map((step, k) => (
                      <li
                        key={step.index}
                        className="min-w-[148px] flex-1 rounded-md border border-line bg-raise p-3.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <ServiceGlyph glyph={systemGlyphs[k]} />
                          <span className="font-mono text-[10px] text-mute">
                            {step.index}
                          </span>
                        </div>
                        <p className="mt-2.5 text-[13px] font-semibold text-ink">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-sub">
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 max-w-3xl font-mono text-[11px] leading-5 text-mute">
                    {t.pages.services.noReturnsNote}
                  </p>
                </>
              )}
              <div className="mt-6">
                <ServiceCta service={service} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* ——— How it works ——— */}
      <div className="mt-24">
        <Reveal>
          <SectionHeader
            index={t.pages.services.howHeader.index}
            eyebrow={t.pages.services.howHeader.eyebrow}
            mark="steps"
            title={t.pages.services.howHeader.title}
            description={t.pages.services.howHeader.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.map((step, i) => (
            <Reveal key={step.index} delay={i * 60}>
              <div className="rounded-md border border-line bg-panel p-5">
                <div className="flex items-center justify-between gap-2">
                  <DomainGlyph glyph={howGlyphs[i]} />
                  <p className="font-mono text-xs text-mute">{step.index}</p>
                </div>
                <h3 className="mt-3 text-[15px] font-semibold uppercase tracking-wide text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-sub">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ——— Selected work ——— */}
      <div className="mt-24">
        <Reveal>
          <SectionHeader
            index={t.pages.services.proof.index}
            eyebrow={t.pages.services.proof.eyebrow}
            mark="pulse"
            title={t.pages.services.proof.title}
            description={t.pages.services.proof.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {featured.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard
                project={project}
                illustrativePrefix={t.ui.illustrativePrefix}
                viewProjectLabel={t.ui.viewProject}
              />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
          >
            {t.ui.viewAllProjects}
          </Link>
        </Reveal>
      </div>

      {/* ——— Contact ——— */}
      <div className="mt-24">
        <Reveal>
          <ContactCTA index="04" />
        </Reveal>
      </div>
    </div>
  );
}
