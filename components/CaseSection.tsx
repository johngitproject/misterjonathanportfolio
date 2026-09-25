import { Fragment } from "react";
import type { CaseSection as CaseSectionData } from "@/data/projects";
import { renderRichText } from "./RichText";
import { DomainGlyph } from "./visuals/DomainGlyph";

interface CaseSectionProps {
  index: string;
  section: CaseSectionData;
}

/* Reusable case-study section heading (index + title),
   paragraphs, bullet list and stepped flow. Sections are
   optional per project, the page decides what to render. */
export function CaseSection({ index, section }: CaseSectionProps) {
  return (
    <section aria-label={section.title}>
      <div className="flex items-center gap-2.5">
        {section.glyph && <DomainGlyph glyph={section.glyph} />}
        <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
          {index} — {section.title}
        </h2>
      </div>
      {section.subtitle && (
        <p className="mt-3 max-w-2xl text-[15px] font-medium text-sub">
          {section.subtitle}
        </p>
      )}
      {section.status && (
        <p className="mt-3 inline-flex items-center rounded border border-line bg-raise px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-flat">
          {section.status}
        </p>
      )}
      <div className="mt-4 flex max-w-3xl flex-col gap-4">
        {section.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm leading-7 text-sub">
            {renderRichText(paragraph)}
          </p>
        ))}
      </div>
      {section.list && (
        <ul className="mt-5 flex max-w-3xl flex-col gap-2.5">
          {section.list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm leading-6 text-sub"
            >
                <span
                  aria-hidden="true"
                  className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                />
                <span>{renderRichText(item)}</span>
            </li>
          ))}
        </ul>
      )}
      {section.flow && (
        <ol className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {section.flow.map((step, i) => (
            <Fragment key={step}>
              {i > 0 && (
                <li
                  aria-hidden="true"
                  className="self-center font-mono text-sm text-mute"
                >
                  →
                </li>
              )}
              <li className="min-w-[160px] flex-1 rounded border border-line bg-raise px-4 py-3 font-mono text-xs leading-5 text-sub">
                {step}
              </li>
            </Fragment>
          ))}
        </ol>
      )}
      {section.code && (
        <div className="mt-5 flex max-w-2xl flex-col gap-2">
          {section.code.map((line) => (
            <p
              key={line}
              className="overflow-x-auto rounded border border-line bg-base px-4 py-3 font-mono text-xs leading-6 text-ink"
            >
              <code>{line}</code>
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
