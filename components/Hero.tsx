import Image from "next/image";
import { Button } from "./Button";
import { getDictionary } from "@/i18n/content";

export async function Hero() {
  const { hero, ui } = await getDictionary();
  return (
    <section className="relative overflow-hidden">
      {/* Hero visual: generated asset, focal point right. Text lives
          over the quiet left area; navy gradient keeps it dominant. */}
      <Image
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right lg:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-base via-base/75 to-base/25"
      />

      <div className="site-container relative flex min-h-[620px] items-center py-20 lg:min-h-[700px]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_180px]">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-mute">
              {hero.eyebrow}
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-widest text-ink">
              {hero.identity}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-sub">
              {hero.domains}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[40px] lg:text-[48px]">
              {hero.statementTop}
              <br />
              {hero.statementAccent}
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-sub">
              {hero.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" href="/projects">
                {ui.heroPrimary}
              </Button>
              <Button variant="secondary" href="/about">
                {ui.heroSecondary}
              </Button>
            </div>
            <p className="mt-10 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-wider text-mute sm:text-xs">
              {hero.meta}
            </p>
          </div>

          <aside
            aria-label="Focus areas"
            className="hidden w-[180px] justify-self-end rounded-md border border-line bg-panel p-4 lg:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-mute">
              Systems / 04
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {hero.systemsPanel.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[11px] uppercase tracking-wider text-sub"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-line pt-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-mute">
                {hero.statusLabel}
              </p>
              <p className="mt-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent">
                <span
                  aria-hidden="true"
                  className="inline-block h-[6px] w-[6px] rounded-full bg-accent"
                />
                {hero.buildingLabel}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
