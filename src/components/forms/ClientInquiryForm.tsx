"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type ClientInquiryFormProps = {
  clientName: string;
};

export function ClientInquiryForm({ clientName }: ClientInquiryFormProps) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Glow Home inquiry, ${clientName} project, ${name}`,
    );
    const body = encodeURIComponent(
      `Client reference: ${clientName}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative border border-line bg-bg p-6 md:p-8"
      aria-label={`Contact Glow Home about ${clientName}`}
    >
      <div className="geo-frame" />
      <div className="grid gap-5">
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Name
          <input
            required
            name="name"
            className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder="03xx xxxxxxx"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Email
          <input
            required
            name="email"
            type="email"
            className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder="you@email.com"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          How can we help?
          <textarea
            required
            name="message"
            rows={5}
            className="border border-line bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder={`Tell us about your project related to ${clientName}...`}
          />
        </label>
        <button type="submit" className="btn w-full md:w-fit">
          Contact Glow Home
        </button>
        {sent ? (
          <p className="text-sm text-brass-soft" role="status">
            Opening your email client, we&apos;ll reply shortly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
