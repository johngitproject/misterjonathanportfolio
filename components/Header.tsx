"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site";
import { site } from "@/data/site";
import type { Lang } from "@/i18n/types";
import { LanguageToggle } from "./LanguageToggle";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({
  lang,
  nav,
  menu,
  close,
}: {
  lang: Lang;
  nav: NavItem[];
  menu: string;
  close: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base">
      <div className="site-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:text-accent"
        >
          <Image
            src="/images/logo-mj.png"
            alt=""
            width={37}
            height={28}
            className="h-7 w-auto"
            priority
          />
          MISTER JONATHAN
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                isActive(pathname, item.href)
                  ? "text-risk"
                  : "text-sub hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-md border border-line-active bg-navy px-4 text-xs font-medium text-ink transition-colors hover:bg-overlay"
          >
            CV
          </Link>
          <LanguageToggle lang={lang} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 items-center rounded-md border border-line px-4 font-mono text-xs text-sub transition-colors hover:border-line-active hover:text-ink"
          >
            {open ? close : menu}
          </button>
          <LanguageToggle lang={lang} />
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-base md:hidden"
        >
          <ul className="site-container flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={
                    isActive(pathname, item.href) ? "page" : undefined
                  }
                  className={`block py-3 text-sm font-medium transition-colors ${
                    isActive(pathname, item.href)
                      ? "text-risk"
                      : "text-sub hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <Link
                href={site.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center rounded-md border border-line-active bg-navy px-5 text-[13px] font-medium text-ink transition-colors hover:bg-overlay"
              >
                CV
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
