"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { PhoneIcon } from "@/components/ui/ContactDetails";
import { faqs, siteConfig } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.2rem)]">
              Answers for informed decisions
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
              Everything you need to know about our lighting, brands, showroom,
              and how we plan residential and commercial projects.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mt-10 overflow-hidden border border-line bg-bg-elevated">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/media/glow-home-solution-luxury-residence.jpg"
                  alt="Luxury residence lit by Glow Home chandeliers and ambient lighting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/30 to-transparent" />
              </div>

              <div className="relative -mt-10 p-6 md:p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
                  Still have questions?
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  Talk to our lighting team
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Visit the showroom in DHA Phase 8, Karachi, or call us for
                  product guidance and project consultation.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={`tel:${siteConfig.phoneRaw[0]}`}
                    className="btn !min-h-11 !px-5 !text-[0.7rem]"
                  >
                    <PhoneIcon className="h-3.5 w-3.5" />
                    {siteConfig.phones[0]}
                  </a>
                  <Link
                    href="/contact"
                    className="btn btn-ghost !min-h-11 !px-5 !text-[0.7rem]"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="geo-frame opacity-40" />
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div
                  className={`border bg-bg-elevated transition-colors duration-300 ${
                    isOpen ? "border-brass/40" : "border-line"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[0.65rem] tracking-[0.18em] text-brass-soft">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`text-brass transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[3.4rem] text-sm leading-relaxed text-ink-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
