"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SpotlightVideo() {
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
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Glow Home lighting and automation experience"
    >
      <source src="/media/glow-home-feature-reel.mp4" type="video/mp4" />
    </video>
  );
}

export function FeatureSpotlight() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".spotlight-copy > *",
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
        ".spotlight-media",
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.15,
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
      id="experience"
      ref={root}
      className="section overflow-hidden bg-bg"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="spotlight-copy max-w-xl">
          <p className="eyebrow">The experience</p>
          <h2 className="mt-4 display text-[clamp(2rem,5vw,3.5rem)]">
            Light that moves with the way you live
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            Watch Glow Home bring rooms to life, layered fixtures, quiet
            automation, and atmospheres tuned for comfort, presence, and everyday
            ease.
          </p>

          <ul className="mt-8 space-y-4 border-t border-line pt-8">
            {[
              "Scene-ready lighting for day, evening, and night",
              "Smart control that stays invisible until you need it",
              "Design-led installs for homes and commercial spaces",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-ink-muted md:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Book a consultation
            </Link>
            <Link href="/solutions" className="btn btn-ghost">
              Explore solutions
            </Link>
          </div>
        </div>

        <div className="spotlight-media relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem] lg:justify-self-end">
          <div className="relative aspect-[9/16] overflow-hidden bg-bg-elevated">
            <SpotlightVideo />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/20"
              aria-hidden
            />
            <div className="geo-frame opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
