"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Curated lighting",
    copy: "Statement fixtures and layered illumination selected for architecture, mood, and lasting craft.",
  },
  {
    title: "Smart automation",
    copy: "Switches, sensors, and scene control that respond quietly to how you live and work.",
  },
  {
    title: "Complete integration",
    copy: "From consultation to installation, one partner for design, products, and seamless setup.",
  },
] as const;

export function Intro() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-word",
        { yPercent: 110, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".intro-lead",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".intro-lead",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".intro-media",
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro-split",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".intro-feature",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".intro-side",
            start: "top 85%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const headlineLines = ["Modern. Intelligent.", "Beautifully illuminated."];

  return (
    <section id="about" ref={root} className="section overflow-hidden bg-bg !pb-0">
      <div className="container-site">
        <div className="border-b border-line pb-12 lg:pb-14">
          <p className="eyebrow">About Glow Home</p>

          <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <h2 className="display max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.22]">
              {headlineLines.map((line) => (
                <span
                  key={line}
                  className="block overflow-hidden pb-[0.22em]"
                >
                  <span className="intro-word block pr-[0.05em]">{line}</span>
                </span>
              ))}
            </h2>

            <div className="intro-lead max-w-md lg:justify-self-end lg:pb-2">
              <p className="text-sm leading-relaxed text-ink-muted md:text-base">
                {siteConfig.name} creates modern, intelligent environments with
                customized smart living solutions, premium lighting, automation,
                and seamless integration for homes, offices, and commercial spaces.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-brass-soft transition-colors hover:text-ink"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="intro-split mt-12 grid items-end gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="intro-side flex flex-col justify-end pb-8 lg:pb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
              What sets us apart
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.65rem,2.8vw,2.25rem)] tracking-tight">
              Design craft meets intelligent living
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              We don&apos;t treat lighting and automation as separate add-ons.
              Every project is planned as one experience, atmosphere, control,
              comfort, and efficiency working together.
            </p>

            <div className="mt-8 border-t border-line">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="intro-feature border-b border-line py-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-xs tracking-[0.18em] text-brass-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-[family-name:var(--font-display)] text-xl text-ink">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {feature.copy}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn !min-h-11 !px-5 !text-[0.7rem]">
                Start a project
              </Link>
              <Link
                href="/services"
                className="text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-brass-soft"
              >
                View services →
              </Link>
            </div>
          </div>

          <div className="intro-media relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[34rem]">
            <Image
              src="/media/glow-home-showroom-exterior-transparent.png"
              alt="Glow Home luxury lighting showroom exterior at night with illuminated chandeliers and modern architectural facade"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom drop-shadow-[0_18px_50px_rgba(0,0,0,0.4)]"            />
          </div>
        </div>
      </div>
    </section>
  );
}
