"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/animations/Reveal";
import { Honeypot } from "@/components/forms/Honeypot";
import { ContactDetails } from "@/components/ui/ContactDetails";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { submitInquiry } from "@/lib/inquiry";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");
    try {
      await submitInquiry(event.currentTarget, {
        subject: "Glow Home consultation request",
      });
      router.push("/thank-you");
    } catch (err) {
      setError((err as Error).message);
      setSending(false);
    }
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

      <div className="container-site relative grid items-stretch gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        <Reveal className="h-full">
          <div className="flex h-full flex-col">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 display max-w-xl text-[clamp(2rem,4.5vw,3.1rem)]">
              Let&apos;s design your smart living environment
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              Tell us about your residence or commercial project. Our team will
              guide consultation, product selection, and seamless integration
              across lighting and smart control.
            </p>

            <ContactDetails className="mt-8" showAddress />

            <div className="mt-4 flex flex-1 flex-col justify-end border border-line bg-bg/50 p-4 md:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
                    Follow
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    See recent projects and lighting ideas on social.
                  </p>
                </div>
                <SocialLinks />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="relative flex h-full flex-col border border-line-strong bg-bg p-6 md:p-8">
            <div className="geo-frame" />
            <div className="mb-7 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
                Consultation
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-[1.75rem]">
                Request a project discussion
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-dim">
                Share a few details and we&apos;ll get back with next steps.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="mx-auto grid w-full max-w-xl flex-1 content-start gap-5"
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
                  rows={6}
                  className="min-h-[9rem] flex-1 border border-line bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brass"
                  placeholder="Home type, rooms, lighting goals..."
                />
              </label>
              <Honeypot />
              <button
                type="submit"
                disabled={sending}
                className="btn mt-auto w-full disabled:cursor-wait disabled:opacity-60"
              >
                {sending ? "Sending..." : "Request Consultation"}
              </button>
              {error ? (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>

      <div className="container-site relative mt-14 md:mt-16">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Showrooms</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-3xl">
                Find us in Karachi
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              Tap an address to open Google Maps. Visit DHA Phase 8 or Clifton,
              or call {siteConfig.phones[0]}.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-stretch md:gap-5">
          {siteConfig.locations.map((place, index) => (
            <Reveal key={place.label} delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col overflow-hidden border border-line bg-bg">
                <div className="relative aspect-[16/10] shrink-0 bg-bg-elevated">
                  <iframe
                    title={`Map of Glow Home ${place.label}`}
                    src={place.embedUrl}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[8.5rem] flex-1 flex-col border-t border-line p-5 transition-colors hover:bg-bg-elevated sm:min-h-[9rem]"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-brass-soft">
                      {place.label}
                    </span>
                    <span className="shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-brass transition-transform group-hover:translate-x-0.5">
                      Maps →
                    </span>
                  </span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted transition-colors group-hover:text-ink">
                    {place.address}
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
