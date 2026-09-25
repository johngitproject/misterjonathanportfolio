import { statusColor, type ProjectStatus } from "@/data/projects";

interface StatusIndicatorProps {
  status: ProjectStatus;
  className?: string;
}

/* System state, not a marketing badge:
   6px dot + JetBrains Mono 11px uppercase. */
export function StatusIndicator({
  status,
  className = "",
}: StatusIndicatorProps) {
  const [dotClass, textClass] = statusColor[status].split(" ") as [
    string,
    string,
  ];
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider ${textClass} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-[6px] w-[6px] rounded-full ${dotClass}`}
      />
      {status}
    </p>
  );
}
