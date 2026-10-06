"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clients } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

type ClientsProps = {
  showIntro?: boolean;
};

export function Clients({ showIntro = true }: ClientsProps) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (showIntro) {
        gsap.fromTo(
          ".clients-head > *",
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
        ".client-card",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.028,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".clients-grid",
            start: "top 88%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [showIntro]);

  return (
    <section
      id="clients"
      ref={root}
      className="section relative scroll-mt-[var(--header-h)] overflow-hidden bg-bg"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-brass/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-brass/[0.03] blur-3xl"
        aria-hidden
      />

      <div className="container-site relative">
        {showIntro ? (
          <div className="clients-head flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <p className="eyebrow">Clients</p>
              <h2 className="mt-4 display text-[clamp(2rem,5vw,3.4rem)]">
                Trusted by brands that shape spaces
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
                From fashion and hospitality to automotive and real estate, partners who chose Glow Home for lighting with presence.
              </p>
            </div>

            <div className="flex w-full max-w-sm items-end justify-between gap-8 border-t border-line pt-6 lg:w-auto lg:min-w-[16rem] lg:border-t-0 lg:border-l lg:border-brass/35 lg:pt-0 lg:pl-8">
              <div>
                <p className="font-[family-name:var(--font-display)] text-[2.75rem] leading-none tracking-tight text-ink md:text-5xl">
                  {String(clients.length).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-brass-soft">
                  Partner brands
                </p>
              </div>

              <Link
                href="/clients"
                className="group mb-1 inline-flex items-center gap-2.5 pb-0.5 text-[0.68rem] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-brass-soft"
              >
                <span className="relative">
                  View all
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        ) : null}

        <div
          className={`clients-grid grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${
            showIntro ? "mt-12 md:mt-14" : ""
          }`}
        >
          {clients.map((client, index) => (
            <Link
              key={client.slug}
              href={`/clients/${client.slug}`}
              className={`client-card group relative flex-col bg-bg-elevated transition-colors duration-300 hover:bg-bg-soft ${
                showIntro && index >= 12 ? "hidden md:flex" : "flex"
              }`}
            >
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex aspect-[5/3] items-center justify-center bg-white p-3 transition-transform duration-500 ease-out group-hover:scale-[0.98] md:p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={220}
                    height={120}
                    className="h-full max-h-[4.5rem] w-full object-contain md:max-h-24"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[0.68rem] uppercase tracking-[0.14em] text-ink transition-colors duration-300 group-hover:text-brass-soft md:text-[0.72rem]">
                      {client.name}
                    </p>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-ink-dim">
                      {client.category}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-brass opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    →
                  </span>
                </div>
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
