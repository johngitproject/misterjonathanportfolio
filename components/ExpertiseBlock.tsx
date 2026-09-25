import { DomainGlyph, type DomainGlyphMotif } from "./visuals/DomainGlyph";

interface ExpertiseBlockProps {
  title: string;
  items: string[];
  glyph?: DomainGlyphMotif;
}

export function ExpertiseBlock({ title, items, glyph }: ExpertiseBlockProps) {
  return (
    <div className="rounded-md border border-line bg-panel p-5">
      <div className="flex items-center gap-3">
        {glyph && <DomainGlyph glyph={glyph} />}
        <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-sub">
            <span
              aria-hidden="true"
              className="inline-block h-1 w-1 shrink-0 rounded-full bg-mute"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
