import type { ReactNode } from "react";

export type ServiceGlyphMotif =
  | "idea"
  | "rules"
  | "data"
  | "backtesting"
  | "validation"
  | "automation"
  | "system";

/* Service process glyphs, same graphic language as SectionMark and
   DomainGlyph (28 grid, 1.5 stroke, theme tokens, geometric).
   No clichés: no bulb, no hammer, no gear. Micro size, aria-hidden. */
const glyphs: Record<ServiceGlyphMotif, ReactNode> = {
  /* Emerging idea: seed star with satellites. */
  idea: (
    <>
      <path
        d="M14 5l1.8 5.2L21 12l-5.2 1.8L14 19l-1.8-5.2L7 12l5.2-1.8z"
        className="stroke-line-active"
      />
      <circle cx="22.5" cy="5.5" r="1.4" className="fill-accent" stroke="none" />
      <circle cx="5" cy="21" r="1.4" className="stroke-line-active" />
    </>
  ),
  /* Explicit rules: listed lines with ticks. */
  rules: (
    <>
      <path d="M9 7h15M9 14h15M9 21h15" className="stroke-line-active" />
      <path d="M2.5 5.5L4.5 7.5L7.5 4M2.5 12.5l2 2 3-3.5M2.5 19.5l2 2 3-3.5" className="stroke-accent" />
    </>
  ),
  /* Structured data: mini table with records. */
  data: (
    <>
      <rect x="4" y="5" width="20" height="18" rx="1" className="stroke-line-active" />
      <path d="M4 11h20M11 11v12" className="stroke-line-active" />
      <circle cx="15" cy="16" r="1.4" className="fill-accent" stroke="none" />
      <circle cx="19.5" cy="19.5" r="1.4" className="fill-accent" stroke="none" />
    </>
  ),
  /* Backtesting: history read backwards along a timeline. */
  backtesting: (
    <>
      <path d="M4 20h24" className="stroke-line-active" />
      <path d="M4 20V8M10 20v-4M16 20v-7M22 20v-3" className="stroke-line-active" />
      <path d="M22 5H14M14 5l3-3M14 5l3 3" className="stroke-accent" />
    </>
  ),
  /* Validation: circled check, nothing more. */
  validation: (
    <>
      <circle cx="14" cy="14" r="9" className="stroke-line-active" />
      <path d="M9.5 14.5l3 3 6-7" className="stroke-accent" strokeWidth={2} />
    </>
  ),
  /* Automation: endless loop instead of gears. */
  automation: (
    <>
      <path
        d="M9.5 17.5c-2.8 0-5-2-5-4.3 0-2.2 2.2-4.2 5-4.2 4.5 0 5.5 9 10 9 2.8 0 5-2 5-4.2 0-2.2-2.2-4.2-5-4.2-4.5 0-5.5 8-10 8z"
        className="stroke-line-active"
      />
      <circle cx="19.5" cy="9" r="1.8" className="fill-accent" stroke="none" />
    </>
  ),
  /* System: boxed modules joined at a core. */
  system: (
    <>
      <rect x="7" y="7" width="14" height="14" rx="1" className="stroke-line-active" />
      <circle cx="7" cy="7" r="2" className="stroke-line-active" />
      <circle cx="21" cy="7" r="2" className="stroke-line-active" />
      <circle cx="7" cy="21" r="2" className="stroke-line-active" />
      <circle cx="21" cy="21" r="2" className="stroke-line-active" />
      <circle cx="14" cy="14" r="2" className="fill-accent" stroke="none" />
    </>
  ),
};

export function ServiceGlyph({ glyph }: { glyph: ServiceGlyphMotif }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-glyph={glyph}
      className="h-[22px] w-[22px] shrink-0 sm:h-[28px] sm:w-[28px]"
    >
      {glyphs[glyph]}
    </svg>
  );
}
