"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { solutions } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Residences", "Workspaces", "Commercial"] as const;

export function Solutions() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solutions-head > *",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".solution-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 70 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const [featured, ...rest] = solutions;

  return (
    <section
      id="solutions"
      ref={root}
      className="section relative overflow-hidden bg-bg-elevated"
    >
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brass/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-brass/5 blur-3xl"
        aria-hidden
      />

      <div className="container-site relative">
        <div className="solutions-head grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-4 display max-w-2xl text-[clamp(2.1rem,5.2vw,3.8rem)]">
              Spaces shaped by
              <span className="block text-brass-soft">intelligent light</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-ink-muted md:text-base lg:ml-auto lg:text-right">
              From luxury residences to commercial projects, Glow Home delivers
              customized smart living environments with expert consultation and
              seamless integration.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-ink-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Link
            href="/solutions#solutions-inquiry"
            className="solution-card group relative overflow-hidden bg-bg lg:col-span-7 lg:min-h-[36rem]"
          >
            <div className="relative aspect-[4/5] h-full min-h-[24rem] overflow-hidden sm:aspect-[5/4] sm:min-h-[28rem] lg:aspect-auto lg:min-h-[36rem]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,164,106,0.18),transparent_55%)] opacity-70 mix-blend-screen transition-opacity duration-700 group-hover:opacity-100" />

              <span className="absolute left-6 top-6 font-[family-name:var(--font-display)] text-5xl leading-none text-ink/15 transition-colors duration-500 group-hover:text-brass/35 md:text-6xl">
                01
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-brass-soft">
                  Featured space
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3vw,2.6rem)] tracking-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
                  {featured.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-brass transition-all duration-300 group-hover:gap-3 group-hover:text-brass-soft">
                  Explore solutions
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
            <div className="geo-frame opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>

          <div className="grid gap-5 lg:col-span-5 lg:grid-rows-2 lg:gap-6">
            {rest.map((item, index) => (
              <Link
                key={item.title}
                href="/solutions#solutions-inquiry"
                className="solution-card group relative overflow-hidden bg-bg"
              >
                <div className="relative aspect-[5/4] h-full min-h-[16rem] overflow-hidden lg:aspect-auto lg:min-h-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-transparent" />
                  <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-brass/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                  <span className="absolute left-5 top-5 font-[family-name:var(--font-display)] text-4xl leading-none text-ink/15 transition-colors duration-500 group-hover:text-brass/35">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-h-24 overflow-hidden text-sm leading-relaxed text-ink-muted transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100">
                      {item.copy}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-brass transition-all duration-300 group-hover:gap-3 group-hover:text-brass-soft">
                      View
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
                <div className="geo-frame opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
