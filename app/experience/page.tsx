import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { getDictionary } from "@/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const { pages } = await getDictionary();
  return { title: pages.experience.title, description: pages.experience.description };
}

export default async function ExperiencePage() {
  const t = await getDictionary();
  const h = t.pages.experience;
  return (
    <div className="site-container py-16 sm:py-20">
      <Reveal>
        <SectionHeader
          index={h.index}
          eyebrow={h.eyebrow}
          mark="nodes"
          title={h.title}
          description={h.description}
        />
      </Reveal>
      <Reveal delay={60}>
        <div className="mt-12">
          <Timeline entries={t.experience} />
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-8 max-w-2xl font-mono text-[11px] uppercase leading-6 tracking-wider text-mute">
          {h.note}
        </p>
      </Reveal>
    </div>
  );
}
