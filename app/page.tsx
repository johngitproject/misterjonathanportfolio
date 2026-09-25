import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { ExpertiseBlock } from "@/components/ExpertiseBlock";
import { Hero } from "@/components/Hero";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import type { DomainGlyphMotif } from "@/components/visuals/DomainGlyph";
import { getDictionary } from "@/i18n/content";

const expertiseGlyphs: DomainGlyphMotif[] = [
  "software",
  "data",
  "ai",
  "markets",
];

const processGlyphs: DomainGlyphMotif[] = [
  "observe",
  "explore",
  "structure",
  "assemble",
  "iterate",
];

export default async function Home() {
  const t = await getDictionary();
  const { ui, pages } = t;
  const [perfTracker, marketResearch, macroRegime, dataPipeline] =
    t.projects;
  const roles = pages.home.about.roles;
  return (
    <>
      <Hero />

      <div className="site-container flex flex-col gap-24 py-24">
        {/* ——— 01 / PROJECTS ——— */}
        <section aria-labelledby="home-projects">
          <Reveal>
            <div id="home-projects">
              <SectionHeader
                index={pages.home.projects.index}
                eyebrow={pages.home.projects.eyebrow}
                mark="pulse"
                title={pages.home.projects.title}
                description={pages.home.projects.description}
              />
            </div>
          </Reveal>
          <div className="mt-12 flex flex-col gap-4">
            <Reveal>
              <ProjectCard
                project={perfTracker}
                tall
                illustrativePrefix={ui.illustrativePrefix}
                viewProjectLabel={ui.viewProject}
              />
            </Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              <Reveal delay={60}>
                <ProjectCard
                  project={marketResearch}
                  illustrativePrefix={ui.illustrativePrefix}
                  viewProjectLabel={ui.viewProject}
                />
              </Reveal>
              <Reveal delay={120}>
                <ProjectCard
                  project={macroRegime}
                  illustrativePrefix={ui.illustrativePrefix}
                  viewProjectLabel={ui.viewProject}
                />
              </Reveal>
            </div>
            <Reveal>
              <ProjectCard
                project={dataPipeline}
                tall
                illustrativePrefix={ui.illustrativePrefix}
                viewProjectLabel={ui.viewProject}
              />
            </Reveal>
          </div>
        </section>

        {/* ——— 02 / ABOUT ——— */}
        <section aria-labelledby="home-about">
          <Reveal>
            <div id="home-about">
              <SectionHeader
                index={pages.home.about.index}
                eyebrow={pages.home.about.eyebrow}
                title={pages.home.about.title}
              />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-12 grid gap-10 border-y border-line py-10 lg:grid-cols-2">
              <div>
                <p className="text-2xl font-semibold leading-tight tracking-tight text-ink">
                  Mister
                  <br />
                  Jonathan
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-sub">
                  {roles[0]}
                  <br />
                  {roles[1]}
                  <br />
                  {roles[2]}
                </p>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="max-w-xl text-sm leading-7 text-sub">
                  {t.aboutPreview.description}
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
                >
                  {ui.readMore}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ——— 03 / EXPERIENCE ——— */}
        <section aria-labelledby="home-experience">
          <Reveal>
            <div id="home-experience">
              <SectionHeader
                index={pages.home.experience.index}
                eyebrow={pages.home.experience.eyebrow}
                mark="nodes"
                title={pages.home.experience.title}
                description={pages.home.experience.description}
              />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-12">
              <Timeline entries={t.experience} limit={2} />
              <Link
                href="/experience"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
              >
                {ui.viewTimeline}
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ——— 04 / EXPERTISE ——— */}
        <section aria-labelledby="home-expertise">
          <Reveal>
            <div id="home-expertise">
              <SectionHeader
                index={pages.home.expertise.index}
                eyebrow={pages.home.expertise.eyebrow}
                mark="mesh"
                title={pages.home.expertise.title}
                description={pages.home.expertise.description}
              />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.expertise.map((domain, i) => (
              <Reveal key={domain.title} delay={i * 60}>
                <ExpertiseBlock
                  title={domain.title}
                  items={domain.items}
                  glyph={expertiseGlyphs[i]}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— 05 / HOW I BUILD ——— */}
        <section aria-labelledby="home-process">
          <Reveal>
            <div id="home-process">
              <SectionHeader
                index={pages.home.process.index}
                eyebrow={pages.home.process.eyebrow}
                title={pages.home.process.title}
              />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 tracking-tight text-ink sm:text-xl">
              {pages.home.process.statement}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.process.map((step, i) => (
              <Reveal key={step.index} delay={i * 60}>
                <ProcessStep
                  glyph={processGlyphs[i]}
                  title={step.title}
                  description={step.description}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— 06 / CONTACT ——— */}
        <Reveal>
          <ContactCTA />
        </Reveal>
      </div>
    </>
  );
}
