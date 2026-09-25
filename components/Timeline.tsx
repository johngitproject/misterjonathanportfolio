import type { ExperienceEntry } from "@/data/experience";

interface TimelineProps {
  entries: ExperienceEntry[];
  limit?: number;
}

export function Timeline({ entries, limit }: TimelineProps) {
  const visible = typeof limit === "number" ? entries.slice(-limit) : entries;
  return (
    <ol className="divide-y divide-line border-y border-line">
      {visible.map((entry) => (
        <li
          key={entry.organization}
          className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
        >
          <p className="font-mono text-xs text-mute">{entry.period}</p>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[15px] font-semibold text-ink">
                {entry.role} <span className="font-normal text-sub">— {entry.organization}</span>
              </h3>
              {entry.current && (
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-risk">
                  <span
                    aria-hidden="true"
                    className="inline-block h-[6px] w-[6px] rounded-full bg-risk"
                  />
                  Current
                </span>
              )}
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">
              {entry.domain}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-sub">
              {entry.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
