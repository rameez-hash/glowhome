"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".process-step",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 80%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="section bg-bg-elevated">
      <div className="container-site">
        <p className="eyebrow">Process</p>
        <h2 className="mt-4 display max-w-2xl text-[clamp(2rem,5vw,3.4rem)]">
          From consultation to seamless integration
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
          <div className="process-progress absolute left-0 right-0 top-7 hidden h-px origin-left bg-brass md:block" />

          <div className="process-grid grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="process-step relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center border border-brass bg-bg text-sm tracking-[0.16em] text-brass-soft">
                  {step.step}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
