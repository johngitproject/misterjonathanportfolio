import { SectionMark, type SectionMotif } from "./visuals/SectionMark";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  mark?: SectionMotif;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  mark,
}: SectionHeaderProps) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-mute">
        {index} / {eyebrow}
      </p>
      <div className="mt-3 flex items-center gap-3">
        {mark && <SectionMark motif={mark} />}
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-6 text-sub">
          {description}
        </p>
      )}
    </div>
  );
}
