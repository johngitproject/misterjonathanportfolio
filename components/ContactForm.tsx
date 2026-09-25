"use client";

import { useState } from "react";
import { submitLead } from "@/lib/web3forms";
import type { UiStrings } from "@/i18n/ui";

/* Minimal conversation form: name + email + message, delivered
   through Web3Forms. Nothing stored anywhere on our side. */
export function ContactForm({
  t,
  subject,
}: {
  t: UiStrings["contactForm"];
  subject: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus("error");
      setErrorMsg(t.noKey);
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      await submitLead(key, { subject, name, email, message });
      setStatus("sent");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-line bg-base px-4 py-2.5 text-sm text-ink placeholder:text-mute focus:border-line-active focus:outline-none";
  const labelClass =
    "mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-sub";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            {t.name} *
          </label>
          <input id="cf-name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            {t.email} *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={labelClass}>
          {t.message} *
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
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
