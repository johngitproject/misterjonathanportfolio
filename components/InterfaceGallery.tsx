import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";
import { renderRichText } from "./RichText";
import { getDictionary } from "@/i18n/content";
import type { UiStrings } from "@/i18n/ui";

interface InterfaceGalleryProps {
  index: string;
  project: Project;
}

/* Interface gallery as narrative, not a uniform grid: the cover is
   paired with its role text, then each real visual alternates with
   a short factual caption. Placeholders persist only where no real
   visual exists yet. Same panels, borders and type as the system. */
export async function InterfaceGallery({ index, project }: InterfaceGalleryProps) {
  const { ui } = await getDictionary();
  const shots = project.screenshots ?? [];
  const cover = project.cover;
  /* Cover doubles as the page hero: show it here only when there
     are no screenshots, to avoid duplicating the main visual. */
  const showCoverMain = cover !== undefined && shots.length === 0;
  const coverText = project.ecosystem ?? project.highlight;
  return (
    <section aria-label={ui.interface}>
      <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
        {index} — {ui.interface}
      </h2>
      {project.interfaceNote && (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-sub">
          {project.interfaceNote}
        </p>
      )}
      {cover && (
        <div className="mt-6 grid items-center gap-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
          <figure className="overflow-hidden rounded border border-line bg-panel">
            <div
              className="relative w-full bg-base"
              style={{ aspectRatio: cover.ratio ?? "16 / 9" }}
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
              <figcaption className="border-t border-line px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-mute">
                {project.title} — {ui.overviewSuffix}
              </figcaption>
          </figure>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-mute">
              The visual
            </p>
            <p className="mt-2 text-sm leading-7 text-sub">{coverText}</p>
          </div>
        </div>
      )}
      {shots.length > 0 ? (
        <div className="mt-10 flex flex-col gap-10">
          {shots.map((shot, i) => (
            <div
              key={shot.src}
              className="grid items-center gap-5 lg:grid-cols-[7fr_5fr] lg:gap-10"
            >
              <figure
                className={`overflow-hidden rounded border border-line bg-panel ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="relative w-full bg-base"
                  style={{ aspectRatio: shot.ratio ?? "16 / 9" }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="border-t border-line px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-mute">
                  {shot.label}
                </figcaption>
              </figure>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mute">
                  {shot.label}
                </p>
                {shot.caption && (
                  <p className="mt-2 text-sm leading-7 text-sub">
                    {renderRichText(shot.caption)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        !cover && (
          <div aria-hidden="true" className="mt-5 flex flex-col gap-4">
            <ProjectPreview
            type={project.type}
            title={project.title}
            tall
            illustrativePrefix={ui.illustrativePrefix}
          />
            <PlaceholderSlots ui={ui} />
          </div>
        )
      )}
      {showCoverMain && <PlaceholderSlots ui={ui} />}
    </section>
  );
}

function PlaceholderSlots({ ui }: { ui: UiStrings }) {
  return (
    <div
      aria-hidden="true"
      className="mt-5 grid gap-4 sm:grid-cols-2"
    >
      {[1, 2].map((slot) => (
        <div
          key={slot}
          className="flex h-44 flex-col items-center justify-center gap-1.5 rounded-md border border-dashed border-line-active bg-panel"
        >
              <p className="font-mono text-[10px] uppercase tracking-widest text-mute">
                {ui.additionalView}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-mute">
                {ui.placeholderWord}
              </p>
        </div>
      ))}
    </div>
  );
}
