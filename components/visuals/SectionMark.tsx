import type { ReactNode } from "react";

export type SectionMotif =
  | "pulse"
  | "grid"
  | "nodes"
  | "mesh"
  | "steps"
  | "signal"
  | "crosshair"
  | "layers";

/* Proprietary editorial sign system, hand-built geometric SVG,
   portfolio palette only (line / navy / orange / red via theme
   tokens). Decorative: titles carry the meaning (aria-hidden).
   One shared language, 8 motifs max:
   pulse = work/analytics · grid = about/structure ·
   nodes = experience/timeline · mesh = skills/systems ·
   steps = process · signal = contact ·
   crosshair = research · layers = infrastructure. */
const motifs: Record<SectionMotif, ReactNode> = {
  pulse: (
    <>
      <path
        d="M3 17h4l2.5-6 3.5 11 3-8 2 3H25"
        className="stroke-line-active"
      />
      <circle cx="25" cy="16" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  grid: (
    <>
      <rect
        x="5"
        y="5"
        width="18"
        height="18"
        rx="1"
        className="stroke-line-active"
      />
      <path d="M5 14h18M14 5v18" className="stroke-line-active" />
      <rect x="14" y="14" width="9" height="9" className="fill-navy" stroke="none" />
    </>
  ),
  nodes: (
    <>
      <path d="M4 14h20" className="stroke-line-active" />
      <circle cx="7" cy="14" r="2.5" className="stroke-line-active" />
      <circle cx="14" cy="14" r="2.5" className="stroke-line-active" />
      <circle cx="21" cy="14" r="2.5" className="fill-risk" stroke="none" />
    </>
  ),
  mesh: (
    <>
      <path
        d="M6 20l8-12 8 10M6 20h16"
        className="stroke-line-active"
      />
      <circle cx="6" cy="20" r="2" className="stroke-line-active" />
      <circle cx="14" cy="8" r="2" className="fill-accent" stroke="none" />
      <circle cx="22" cy="18" r="2" className="stroke-line-active" />
    </>
  ),
  steps: (
    <>
      <path
        d="M4 22h5v-5h5v-5h5V7h5"
        className="stroke-line-active"
      />
      <circle cx="24" cy="7" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  signal: (
    <>
      <path
        d="M18 10a6 6 0 010 8M21 7a10 10 0 010 14M10 10a6 6 0 000 8M7 7a10 10 0 000 14"
        className="stroke-line-active"
      />
      <circle cx="14" cy="14" r="2" className="fill-accent" stroke="none" />
    </>
  ),
  crosshair: (
    <>
      <circle cx="14" cy="14" r="8" className="stroke-line-active" />
      <path
        d="M14 2v6M14 20v6M2 14h6M20 14h6"
        className="stroke-line-active"
      />
      <circle cx="14" cy="14" r="1.8" className="fill-accent" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path
        d="M4 14l10-5 10 5M4 19l10-5 10 5"
        className="stroke-line-active"
      />
      <path d="M4 9l10-5 10 5" className="stroke-accent" />
    </>
  ),
};

export function SectionMark({ motif }: { motif: SectionMotif }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-motif={motif}
      className="h-[22px] w-[22px] shrink-0 sm:h-[28px] sm:w-[28px]"
    >
      {motifs[motif]}
    </svg>
  );
}
