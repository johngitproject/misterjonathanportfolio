"use client";

import { useState } from "react";
import { submitLead } from "@/lib/web3forms";
import { projectTracks } from "@/data/project-tracks";
import type { Lang } from "@/i18n/types";
import type { UiStrings } from "@/i18n/ui";

export interface ProjectInquiry {
  name: string;
  company: string;
  email: string;
  language: Lang;
  country: string;
  domain: string;
  category: string;
  topic: string;
  description: string;
}

/* Pure mailto composer, builds a pre-filled email from the form.
   No backend, nothing stored or sent anywhere else. */
export function inquiryLines(input: ProjectInquiry): string[] {
  return [
    `Name: ${input.name}`,
    `Company: ${input.company || "-"}`,
    `Email: ${input.email}`,
    `Language: ${input.language === "fr" ? "French" : "English"}`,
    `Country: ${input.country || "-"}`,
    `Domain: ${input.domain}`,
    `Category: ${input.category}`,
    `Topic: ${input.topic}`,
    "",
    input.description,
  ];
}

export function buildProjectMailto(to: string, input: ProjectInquiry): string {
  const subject = `Freelance Project Inquiry: ${input.domain} / ${input.category} / ${input.topic}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryLines(input).join("\n"))}`;
}

const inputClass =
  "w-full rounded-md border border-line bg-base px-4 py-2.5 text-sm text-ink placeholder:text-mute focus:border-line-active focus:outline-none";

const labelClass =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-sub";

export function ProjectForm({
  lang,
  t,
  to,
}: {
  lang: Lang;
  t: UiStrings["form"];
  to: string;
}) {
  const [di, setDi] = useState(-1);
  const [ci, setCi] = useState(-1);
  const [ti, setTi] = useState(-1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const domain = di >= 0 ? projectTracks[di] : undefined;
  const category = domain && ci >= 0 ? domain.categories[ci] : undefined;
  const topic = category && ti >= 0 ? category.topics[ti] : undefined;

  function onDomain(value: string) {
    setDi(Number(value));
    setCi(-1);
    setTi(-1);
    setStatus("idle");
  }

  function onCategory(value: string) {
    const next = Number(value);
    setCi(next);
    setTi(next === -2 ? -2 : -1);
    setStatus("idle");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    if (!domain) return;
    const categoryLabel = ci === -2 ? t.other : category?.[lang];
    const topicLabel =
      ti === -2 ? String(form.get("topicCustom") ?? "") : topic?.[lang];
    if (!categoryLabel || !topicLabel) return;
    const input: ProjectInquiry = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      language: String(form.get("language") ?? lang) === "fr" ? "fr" : "en",
      country: String(form.get("country") ?? ""),
      domain: domain[lang],
      category: categoryLabel,
      topic: topicLabel,
      description: String(form.get("description") ?? ""),
    };
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      window.location.href = buildProjectMailto(to, input);
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      await submitLead(key, {
        subject: `[Portfolio] Freelance Project Inquiry: ${input.domain} / ${input.category} / ${input.topic}`,
        name: input.name,
        email: input.email,
        message: inquiryLines(input).join("\n"),
      });
      setStatus("sent");
      formEl.reset();
      setDi(-1);
      setCi(-1);
      setTi(-1);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pf-name" className={labelClass}>
            {t.fullName} *
          </label>
          <input id="pf-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="pf-company" className={labelClass}>
            {t.company}
          </label>
          <input id="pf-company" name="company" className={inputClass} />
        </div>
        <div>
          <label htmlFor="pf-email" className={labelClass}>
            {t.email} *
          </label>
          <input
            id="pf-email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pf-language" className={labelClass}>
            {t.language}
          </label>
          <select
            id="pf-language"
            name="language"
            defaultValue={lang}
            className={inputClass}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <div>
          <label htmlFor="pf-country" className={labelClass}>
            {t.country}
          </label>
          <input id="pf-country" name="country" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="pf-domain" className={labelClass}>
            {t.domain} *
          </label>
          <select
            id="pf-domain"
            required
            value={di}
            onChange={(e) => onDomain(e.target.value)}
            className={inputClass}
          >
            <option value={-1}>{t.selectPrompt}</option>
            {projectTracks.map((d, i) => (
              <option key={d.en} value={i}>
                {d[lang]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pf-category" className={labelClass}>
            {t.category} *
          </label>
          <select
            id="pf-category"
            required
            value={ci}
            onChange={(e) => onCategory(e.target.value)}
            disabled={!domain}
            className={inputClass}
          >
            <option value={-1}>{t.selectPrompt}</option>
            {domain?.categories.map((c, i) => (
              <option key={c.en} value={i}>
                {c[lang]}
              </option>
            ))}
            <option value={-2}>{t.other}</option>
          </select>
        </div>
        <div>
          <label htmlFor="pf-topic" className={labelClass}>
            {t.topic} *
          </label>
          <select
            id="pf-topic"
            required
            value={ti}
            onChange={(e) => {
              setTi(Number(e.target.value));
              setStatus("idle");
            }}
            disabled={!domain}
            className={inputClass}
          >
            <option value={-1}>{t.selectPrompt}</option>
            {category?.topics.map((p, i) => (
              <option key={p.en} value={i}>
                {p[lang]}
              </option>
            ))}
            <option value={-2}>{t.other}</option>
          </select>
          {ti === -2 && (
            <div className="mt-3">
              <label htmlFor="pf-topic-custom" className={labelClass}>
                {t.otherTopic} *
              </label>
              <input
                id="pf-topic-custom"
                name="topicCustom"
                required
                className={inputClass}
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="pf-description" className={labelClass}>
          {t.description} *
        </label>
        <textarea
          id="pf-description"
          name="description"
          required
          rows={6}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-line-active bg-navy px-5 text-[13px] font-medium text-ink transition-colors duration-150 hover:bg-overlay disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        {status === "sent" && (
          <p className="font-mono text-[11px] leading-5 text-up">{t.sentOk}</p>
        )}
        {status === "error" && (
          <p className="font-mono text-[11px] leading-5 text-risk">
            {t.sentFail}
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
