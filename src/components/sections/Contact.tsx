"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { ContactDetails } from "@/components/ui/ContactDetails";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Glow Home consultation, ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject details:\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative section overflow-hidden bg-bg-soft">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brass/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brass/5 blur-3xl"
        aria-hidden
      />

      <div className="container-site relative grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 display max-w-xl text-[clamp(2rem,5vw,3.4rem)]">
            Let&apos;s design your smart living environment
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Tell us about your residence or commercial project. Our team will
            guide consultation, product selection, and seamless integration.
          </p>

          <ContactDetails className="mt-10" showAddress />

          <div className="mt-8">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
              Follow
            </p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative border border-line-strong bg-bg p-6 md:p-9">
            <div className="geo-frame" />
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
                Consultation
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-[1.75rem]">
                Request a project discussion
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                Share a few details and we&apos;ll get back with next steps.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="grid gap-5"
              aria-label="Consultation request"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
                  Name
                  <input
                    required
                    name="name"
                    className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brass"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brass"
                    placeholder="03xx xxxxxxx"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brass"
                  placeholder="you@email.com"
                />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
                Project details
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="border border-line bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brass"
                  placeholder="Home type, rooms, lighting goals..."
                />
              </label>
              <button type="submit" className="btn mt-1 w-full sm:w-fit">
                Request Consultation
              </button>
              {sent ? (
                <p className="text-sm text-brass-soft" role="status">
                  Opening your email client, we&apos;ll respond shortly.
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
