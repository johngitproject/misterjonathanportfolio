import type { ProjectStatus } from "@/data/projects";
import { getDictionary } from "@/i18n/content";
import { StatusIndicator } from "./StatusIndicator";

interface ResultsBlockProps {
  index: string;
  status: ProjectStatus;
  note?: string;
}

/* Results only when verified. Otherwise an explicit statement
   of state, never a fabricated outcome. */
export async function ResultsBlock({ index, status, note }: ResultsBlockProps) {
  const { ui } = await getDictionary();
  return (
    <section aria-label={ui.results}>
      <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
        {index} — {ui.results}
      </h2>
      <div className="mt-5 rounded-md border border-line bg-panel p-5">
        <StatusIndicator status={status} />
        <p className="mt-3 max-w-2xl text-sm leading-7 text-sub">
          {note ?? ui.resultsDefault[status]}
        </p>
      </div>
    </section>
  );
}
