import { getDictionary } from "@/i18n/content";

interface MetricsGridProps {
  index: string;
  metrics: string[];
  state?: "pending" | "calculated";
}

/* Key-metrics slots. Values are NEVER invented: every slot
   renders an em dash labelled PLACEHOLDER until real,
   verified figures replace it. */
export async function MetricsGrid({ index, metrics, state = "pending" }: MetricsGridProps) {
  const { ui } = await getDictionary();
  const calculated = state === "calculated";
  return (
    <section aria-label="Key metrics">
      <h2 className="font-mono text-xs uppercase tracking-wider text-mute">
        {index} — {ui.keyMetrics}
      </h2>
      <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {metrics.map((label) => (
          <div
            key={label}
            className="rounded-md border border-line bg-panel p-4"
          >
            <dt className="font-mono text-[10px] uppercase tracking-wider text-mute">
              {label}
            </dt>
            <dd
              aria-hidden="true"
              className={`mt-2 text-xl font-semibold ${calculated ? "text-ink" : "text-flat"}`}
            >
              {calculated ? "✓" : "—"}
            </dd>
            <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-mute">
              {calculated ? ui.calculatedWord : ui.placeholderWord}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 max-w-3xl font-mono text-[11px] leading-5 text-mute">
        {calculated ? ui.metricsCalculated : ui.metricsPending}
      </p>
    </section>
  );
}
