import { DomainGlyph, type DomainGlyphMotif } from "./visuals/DomainGlyph";

interface ProcessStepProps {
  glyph: DomainGlyphMotif;
  title: string;
  description: string;
}

export function ProcessStep({ glyph, title, description }: ProcessStepProps) {
  return (
    <div className="rounded-md border border-line bg-panel p-5">
      <DomainGlyph glyph={glyph} />
      <h3 className="mt-3 text-[15px] font-semibold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-sub">{description}</p>
    </div>
  );
}
