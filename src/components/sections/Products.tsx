"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productCategories } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function Products() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-head > *",
        { autoAlpha: 0, y: 24 },
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

      gsap.fromTo(
        ".product-card",
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-grid",
            start: "top 82%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={root} className="section bg-bg-soft">
      <div className="container-site">
        <div className="product-head flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Products</p>
            <h2 className="mt-4 display text-[clamp(2rem,5vw,3.5rem)]">
              Lighting for every room and mood
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted md:pb-1 md:text-base">
            Ceiling to décor, curated categories for homes, offices, and
            outdoor spaces, ready for smart control.
          </p>
        </div>

        <div className="product-grid mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-14 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="product-card group relative overflow-hidden bg-bg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} by Glow Home`}
                  fill
                  sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.08]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brass/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100"
                />

                <span className="absolute left-3 top-3 font-[family-name:var(--font-display)] text-xs tracking-wide text-brass-soft sm:left-5 sm:top-5 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-3.5 transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1 sm:p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-base leading-tight tracking-tight text-brass-soft sm:text-xl md:text-[1.35rem]">
                    {category.title}
                  </h3>

                  <p className="mt-2.5 hidden text-xs leading-relaxed text-ink-muted sm:line-clamp-3">
                    {category.summary}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-brass sm:mt-4 sm:gap-2.5 sm:text-[0.65rem] sm:tracking-[0.22em]">
                    <span className="relative">
                      View
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -bottom-1 h-px bg-brass-soft"
                      />
                    </span>
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>

              <div className="geo-frame opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
