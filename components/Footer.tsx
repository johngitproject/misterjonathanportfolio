import Image from "next/image";
import { getDictionary } from "@/i18n/content";

export async function Footer() {
  const { site, ui } = await getDictionary();
  return (
    <footer className="border-t border-line">
      <div className="site-container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image
            src="/images/logo-mj.png"
            alt=""
            width={48}
            height={36}
            className="h-9 w-auto"
          />
          <p className="mt-2 text-sm font-semibold tracking-wide text-ink">
            MISTER JONATHAN
          </p>
          <p className="mt-1 text-xs text-mute">{site.role}</p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <p className="font-mono text-[11px] text-mute">© 2026</p>
          <a
            href="#top"
            className="mt-1 font-mono text-[11px] text-sub transition-colors hover:text-accent"
          >
            {ui.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
