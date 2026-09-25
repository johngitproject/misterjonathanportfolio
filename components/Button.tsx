import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

const base =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md px-5 text-[13px] font-medium transition-colors duration-150";

const variants = {
  primary:
    "border border-line-active bg-navy text-ink hover:bg-overlay",
  secondary:
    "border border-line bg-transparent text-sub hover:border-line-active hover:text-ink",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
