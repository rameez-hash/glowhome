"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

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
        ".intro-media",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro-media",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".intro-stat",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".intro-stats",
            start: "top 85%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const headline = ["Modern.", "Intelligent.", "Beautifully", "illuminated."];

  return (
    <section id="about" ref={root} className="section bg-bg">
      <div className="container-site">
        <p className="eyebrow">About Glow Home</p>
        <h2 className="mt-6 max-w-5xl display text-[clamp(2.2rem,6vw,4.6rem)]">
          {headline.map((word) => (
            <span
              key={word}
              className="mr-[0.28em] inline-block overflow-hidden align-bottom"
            >
              <span className="intro-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              {siteConfig.longDescription}
            </p>

            <div className="intro-stats mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: "End-to-end", label: "Consultation to integration" },
                { value: "Multi-space", label: "Homes, offices, commercial" },
                {
                  value: "Smart + light",
                  label: "Automation with design craft",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="intro-stat border-t border-line pt-4"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl text-brass-soft">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-dim">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="intro-media relative order-1 aspect-[4/5] overflow-hidden bg-bg md:aspect-[5/4] lg:order-2 lg:aspect-[4/5]">
            <Image
              src="/media/glow-home-showroom-exterior-transparent.png"
              alt="Glow Home luxury lighting showroom exterior at night with illuminated chandeliers and modern architectural facade"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
