import type { Metadata } from "next";
import Link from "next/link";
import { ProjectForm } from "@/components/ProjectForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/content";
import { getLang } from "@/i18n/lang";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  return {
    title: t.pages.services.startProject.title,
    description: t.pages.services.startProject.description,
  };
}

export default async function StartProjectPage() {
  const t = await getDictionary();
  const lang = await getLang();
  const s = t.pages.services.startProject;
  return (
    <div className="site-container py-16 sm:py-20">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 font-mono text-xs text-sub transition-all duration-150 hover:gap-3 hover:text-accent"
      >
        {s.back}
      </Link>
      <div className="mt-8">
        <Reveal>
          <SectionHeader
            index={s.index}
            eyebrow={s.eyebrow}
            title={s.title}
            description={s.description}
          />
        </Reveal>
      </div>
      <Reveal delay={60}>
        <div className="mt-12 max-w-3xl rounded-md border border-line bg-panel p-6 sm:p-8">
          <ProjectForm lang={lang} t={t.ui.form} to={t.site.email} />
        </div>
      </Reveal>
    </div>
  );
}
