import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const { pages } = await getDictionary();
  return { title: pages.about.title, description: pages.about.description };
}

export default async function AboutPage() {
  const t = await getDictionary();
  const h = t.pages.about;
  return (
    <div className="site-container py-16 sm:py-20">
      <SectionHeader
        index={h.index}
        eyebrow={h.eyebrow}
        mark="grid"
        title={h.title}
        description={h.description}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
        <Reveal>
          <div>
            <div
              aria-label="Portrait placeholder"
              className="flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-md border border-dashed border-line-active bg-panel"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-mute">
                {t.ui.portraitTitle}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-mute">
                {t.ui.placeholderWord}
              </p>
            </div>
            <p className="mt-5 text-lg font-semibold tracking-tight text-ink">
              {t.site.name}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-sub">
              {t.pages.home.about.roles[0]} · {t.pages.home.about.roles[1]} ·{" "}
              {t.pages.home.about.roles[2]}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          {h.sections.map((section, i) => (
            <Reveal key={section.title} delay={Math.min(i, 2) * 60}>
              <section aria-label={section.title}>
                <h2 className="text-lg font-semibold tracking-tight text-ink">
                  {section.title}
                </h2>
                <div className="mt-4 flex max-w-2xl flex-col gap-4">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-sm leading-7 text-sub">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
          <Reveal>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
            >
              {t.ui.viewExperience}
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
