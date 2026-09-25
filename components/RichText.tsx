import { Fragment, type ReactNode } from "react";

/* Minimal inline-code renderer: backtick-wrapped segments become
   reference chips (folder paths, repo names, file paths,
   identifiers). Single backticks only, no markdown parser.
   Non-clickable by design: private or contextual references
   must never look like dead links, hence chip + cursor-default. */
export function renderRichText(text: string): ReactNode {
  const parts = text.split("`");
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="cursor-default rounded border border-line bg-raise px-1.5 py-0.5 font-mono text-[12px] text-accent"
      >
        {part}
      </code>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
