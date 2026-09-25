import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const { contact } = await getDictionary();
  return { title: "Contact", description: contact.metaDesc };
}

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: site.github.replace("https://", ""), href: site.github },
  { label: "LinkedIn", value: site.linkedin.replace("https://www.", ""), href: site.linkedin },
];

export default async function ContactPage() {
  const t = await getDictionary();
  const { ui } = t;
  return (
    <div className="site-container flex flex-col gap-12 py-16 sm:py-20">
      <Reveal>
        <ContactCTA index="01" />
      </Reveal>
      <Reveal delay={60}>
        <section aria-label={ui.directChannels}>
          <dl className="divide-y divide-line border-y border-line">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <dt className="font-mono text-[11px] uppercase tracking-wider text-mute">
                  {channel.label}
                </dt>
                <dd>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-mono text-xs text-sub transition-colors hover:text-accent"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-2xl font-mono text-[11px] uppercase leading-6 tracking-wider text-mute">
            {ui.workingNote}
          </p>
        </section>
      </Reveal>
      <Reveal>
        <div id="start-a-conversation" className="scroll-mt-24">
          <SectionHeader
            index={t.pages.contact.form.index}
            eyebrow={t.pages.contact.form.eyebrow}
            title={t.pages.contact.form.title}
            description={t.pages.contact.form.description}
          />
        </div>
      </Reveal>
      <Reveal delay={60}>
        <div className="mt-12 max-w-3xl rounded-md border border-line bg-panel p-6 sm:p-8">
          <ContactForm t={t.ui.contactForm} subject={t.ui.projectSubject} />
        </div>
      </Reveal>
    </div>
  );
}
