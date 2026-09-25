import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "./Button";
import { SectionMark, type SectionMotif } from "./visuals/SectionMark";
import { getDictionary } from "@/i18n/content";

interface ContactCTAProps {
  index?: string;
  eyebrow?: string;
  mark?: SectionMotif;
}

export async function ContactCTA({
  index = "06",
  eyebrow = "Contact",
  mark = "signal",
}: ContactCTAProps) {
  const { ui, contact } = await getDictionary();
  return (
    <section className="relative overflow-hidden rounded-md border border-line px-6 py-12 text-center sm:px-12 sm:py-16">
      {/* Contact background: generated asset, focal signal right.
          Center stays quiet for content; uniform navy veil keeps
          text dominant without erasing the visual identity. */}
      <Image
        src="/images/contact-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover object-right lg:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-base/60" />
      <div className="relative">
      <p className="font-mono text-xs uppercase tracking-wider text-mute">
        {index} / {eyebrow}
      </p>
      <div className="mt-3 flex items-center justify-center gap-3">
        <SectionMark motif={mark} />
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-[32px] sm:leading-[1.15]">
          {contact.ctaHeading}
        </h2>
      </div>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-sub">
        {contact.ctaDesc}
      </p>
      <div className="mt-6">
        <Button variant="primary" href="/contact#start-a-conversation">
          {ui.startConversation}
        </Button>
      </div>
      <p className="mt-6 flex items-center justify-center gap-3 font-mono text-xs">
        <a
          href={`mailto:${site.email}`}
          className="text-sub transition-colors hover:text-accent"
        >
          EMAIL
        </a>
        <span aria-hidden="true" className="text-mute">
          ·
        </span>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sub transition-colors hover:text-accent"
        >
          GITHUB
        </a>
        <span aria-hidden="true" className="text-mute">
          ·
        </span>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sub transition-colors hover:text-accent"
        >
          LINKEDIN
        </a>
      </p>
      </div>
    </section>
  );
}
