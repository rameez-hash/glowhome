"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brands } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

type BrandsProps = {
  showIntro?: boolean;
};

export function Brands({ showIntro = true }: BrandsProps) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (showIntro) {
        gsap.fromTo(
          ".brands-head > *",
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
            },
          },
        );
      }

      gsap.fromTo(
        ".brand-card",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".brands-grid",
            start: "top 88%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [showIntro]);

  return (
    <section
      id="brand"
      ref={root}
      className="section relative scroll-mt-[var(--header-h)] overflow-hidden bg-bg"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent"
        aria-hidden
      />

      <div className="container-site relative">
        {showIntro ? (
          <div className="brands-head flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Brands</p>
              <h2 className="mt-4 display text-[clamp(2rem,5vw,3.4rem)]">
                Lighting houses under one family
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
                Glow Home is a branded outlet of FIAM Lighting Pakistan, bringing
                FIAM and MACY into thoughtfully lit spaces.
              </p>
            </div>
            <Link
              href="/brands"
              className="group inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-brass-soft transition-colors hover:text-ink lg:pb-1"
            >
              View brands
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        ) : null}

        <div
          className={`brands-grid grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 ${
            showIntro ? "mt-12 md:mt-14" : ""
          }`}
        >
          {brands.map((brand, index) => (
            <article
              key={brand.slug}
              className="brand-card group flex min-h-[18rem] flex-col bg-bg-elevated p-7 transition-colors duration-300 hover:bg-bg-soft sm:min-h-[20rem] md:p-10 lg:p-12"
            >
              <p className="font-[family-name:var(--font-display)] text-sm text-brass">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 font-[family-name:var(--font-display)] text-[2.25rem] tracking-tight text-ink transition-colors group-hover:text-brass-soft md:text-4xl lg:text-[2.75rem]">
                {brand.name}
              </h3>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-brass-soft">
                {brand.focus}
              </p>
              <p className="mt-6 max-w-md flex-1 text-sm leading-relaxed text-ink-muted md:text-base">
                {brand.summary}
              </p>
              <span
                aria-hidden
                className="mt-10 h-px w-10 origin-left bg-brass transition-all duration-500 group-hover:w-16"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
