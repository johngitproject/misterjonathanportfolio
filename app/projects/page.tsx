import type { Metadata } from "next";
import { ProjectCatalogue } from "@/components/ProjectCatalogue";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const { pages } = await getDictionary();
  return { title: pages.projects.title, description: pages.projects.description };
}

export default async function ProjectsPage() {
  const t = await getDictionary();
  const h = t.pages.projects;
  return (
    <div className="site-container py-16 sm:py-20">
      <SectionHeader
        index={h.index}
        eyebrow={h.eyebrow}
        mark="pulse"
        title={h.title}
        description={h.description}
      />
      <ProjectCatalogue
        projects={t.projects}
        emptyTitle={t.ui.noFilterTitle}
        emptyDesc={t.ui.noFilterDesc}
        illustrativePrefix={t.ui.illustrativePrefix}
        viewProjectLabel={t.ui.viewProject}
      />
    </div>
  );
}
