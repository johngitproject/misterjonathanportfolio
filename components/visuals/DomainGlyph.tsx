import type { ReactNode } from "react";

export type DomainGlyphMotif =
  | "software"
  | "data"
  | "ai"
  | "markets"
  | "observe"
  | "explore"
  | "structure"
  | "assemble"
  | "iterate";

/* Domain & process glyphs, same graphic language as SectionMark
   (28 grid, 1.5 stroke, theme tokens, geometric, no clichés:
   no </>, no bar chart, no brain/robot, no $, no hammer/gear).
   Micro size (22/28px), titles stay dominant, aria-hidden. */
const glyphs: Record<DomainGlyphMotif, ReactNode> = {
  /* Modular software architecture: connected components. */
  software: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" className="stroke-line-active" />
      <rect x="17" y="4" width="7" height="7" rx="1" className="stroke-line-active" />
      <rect x="10.5" y="17" width="7" height="7" rx="1" className="stroke-line-active" />
      <path d="M11 7.5h6M7.5 11v3.5L11 17M20.5 11v3.5L17 17" className="stroke-line-active" />
      <circle cx="14" cy="17" r="1.6" className="fill-accent" stroke="none" />
    </>
  ),
  /* Data relationships: scattered variables tied by a trend. */
  data: (
    <>
      <path d="M5 21l5-6 4 2 5-7 4-3" className="stroke-line-active" />
      <circle cx="5" cy="21" r="1.8" className="stroke-line-active" />
      <circle cx="10" cy="15" r="1.8" className="stroke-line-active" />
      <circle cx="14" cy="17" r="1.8" className="stroke-line-active" />
      <circle cx="19" cy="10" r="1.8" className="stroke-line-active" />
      <circle cx="23" cy="7" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  /* Adaptive network: constellation around a core node. */
  ai: (
    <>
      <path d="M14 14L6 7M14 14l8-7M14 14l-8 7M14 14l8 7" className="stroke-line-active" />
      <circle cx="6" cy="7" r="2" className="stroke-line-active" />
      <circle cx="22" cy="7" r="2" className="stroke-line-active" />
      <circle cx="6" cy="21" r="2" className="stroke-line-active" />
      <circle cx="22" cy="21" r="2" className="stroke-line-active" />
      <circle cx="14" cy="14" r="2.4" className="fill-accent" stroke="none" />
    </>
  ),
  /* Market flow: price movement resolving forward. */
  markets: (
    <>
      <path d="M3 20c6 0 6-10 11-10s5 8 11-2" className="stroke-line-active" />
      <circle cx="25" cy="8" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  /* Understand: framing corners + defined core. No magnifier. */
  observe: (
    <>
      <path
        d="M4 11V6a2 2 0 012-2h5M17 4h5a2 2 0 012 2v5M24 17v5a2 2 0 01-2 2h-5M11 24H6a2 2 0 01-2-2v-5"
        className="stroke-line-active"
      />
      <circle cx="14" cy="14" r="2.2" className="fill-accent" stroke="none" />
    </>
  ),
  /* Research: exploratory dashed path with collected nodes. */
  explore: (
    <>
      <path
        d="M4 22c6-4 4-10 10-10s6 4 10-6"
        strokeDasharray="3 3"
        className="stroke-line-active"
      />
      <circle cx="4" cy="22" r="1.8" className="stroke-line-active" />
      <circle cx="14" cy="12" r="1.8" className="stroke-line-active" />
      <circle cx="24" cy="6" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  /* Model: structured hexagonal system with core relations. */
  structure: (
    <>
      <path
        d="M14 4l8.7 5v10L14 24l-8.7-5V9z"
        className="stroke-line-active"
      />
      <path d="M14 14V4M14 14l-8.7 5M14 14l8.7 5" className="stroke-line-active" />
      <circle cx="14" cy="14" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  /* Build: two modules joined into one system. No tools. */
  assemble: (
    <>
      <rect x="3" y="10" width="9" height="8" rx="1" className="stroke-line-active" />
      <rect x="16" y="10" width="9" height="8" rx="1" className="stroke-line-active" />
      <path d="M12 14h4" className="stroke-accent" strokeWidth={2.5} />
    </>
  ),
  /* Test & Refine: loop returning on itself. */
  iterate: (
    <>
      <path d="M22 14A8 8 0 106 14" className="stroke-line-active" />
      <path d="M22 14l-4.5-1M22 14l-1-4.5" className="stroke-accent" />
    </>
  ),
};

export function DomainGlyph({ glyph }: { glyph: DomainGlyphMotif }) {
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
