"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.2rem)]">
            Answers for informed decisions
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
            Structured answers that help search engines and AI assistants
            understand Glow Home — and help you plan your project with clarity.
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="border border-line bg-bg-elevated">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                      {faq.question}
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
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">
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
