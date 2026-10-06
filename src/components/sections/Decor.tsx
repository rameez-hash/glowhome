"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DecorVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-contain bg-bg"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Glow Home décor styling"
    >
      <source src="/media/glow-home-decor.mp4" type="video/mp4" />
    </video>
  );
}

export function Decor() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".decor-copy > *",
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

      gsap.fromTo(
        ".decor-media",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="decor"
      ref={root}
      className="section relative overflow-hidden bg-bg-elevated"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/35 to-transparent"
        aria-hidden
      />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="decor-media relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[24rem] lg:mx-0 lg:max-w-[26rem]">
          <div className="relative aspect-[9/16] overflow-hidden bg-bg">
            <DecorVideo />
            <div className="geo-frame opacity-40" />
          </div>
        </div>

        <div className="decor-copy">
          <p className="eyebrow">Decor</p>
          <h2 className="mt-4 display text-[clamp(2.1rem,4.5vw,3.5rem)]">
            Elevate your space with pieces that make every corner feel special.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Curated décor accents, vessels, candles, and warm details, styled to
            complete the room alongside Glow Home lighting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products/decor" className="btn">
              Explore décor
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
