"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Glow Home consultation — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nProject details:\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section bg-bg-soft">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 display text-[clamp(2rem,5vw,3.5rem)]">
            Let&apos;s design your smart living environment
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Tell us about your residence or commercial project. Our team will
            guide you through consultation, product selection, and seamless
            integration.
          </p>

          <div className="mt-10 space-y-5">
            {siteConfig.phones.map((phone, i) => (
              <a
                key={phone}
                href={`tel:${siteConfig.phoneRaw[i]}`}
                className="block font-[family-name:var(--font-display)] text-2xl tracking-tight transition-colors hover:text-brass-soft"
              >
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-ink-muted transition-colors hover:text-ink"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-ink-dim">Pakistan · glowhome.com.pk</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="relative border border-line bg-bg p-6 md:p-8"
            aria-label="Consultation request"
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
                Project details
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="border border-line bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
                  placeholder="Home type, rooms, lighting goals..."
                />
              </label>
              <button type="submit" className="btn w-full md:w-fit">
                Request Consultation
              </button>
              {sent ? (
                <p className="text-sm text-brass-soft" role="status">
                  Opening your email client — we&apos;ll respond shortly.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
