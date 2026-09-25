"use client";

import { useRouter } from "next/navigation";
import { LANG_COOKIE, type Lang } from "@/i18n/types";

const LABEL: Record<Lang, string> = {
  en: "Switch to French",
  fr: "Passer en anglais",
};

/* Globe language toggle. Same URLs for both languages: the choice
   is stored in a cookie the server reads, so content (and the
   <html lang> attribute) render in the right language, no flash. */
export function LanguageToggle({ lang }: { lang: Lang }) {
  const router = useRouter();
  const next: Lang = lang === "en" ? "fr" : "en";

  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000`;
        router.refresh();
      }}
      aria-label={LABEL[lang]}
      title={LABEL[lang]}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-sub transition-colors hover:border-line-active hover:text-ink"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
        className="h-4 w-4"
      >
        <circle cx="10" cy="10" r="7" />
        <path d="M3 10h14M10 3c2.5 2 3.8 4.3 3.8 7s-1.3 5-3.8 7c-2.5-2-3.8-4.3-3.8-7S7.5 5 10 3z" />
      </svg>
      <span className="font-mono text-[11px] uppercase">
        {lang === "en" ? "FR" : "EN"}
      </span>
    </button>
  );
}
