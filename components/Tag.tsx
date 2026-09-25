import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-raise px-[7px] py-1 font-mono text-[11px] leading-none text-flat">
      {children}
    </span>
  );
}
