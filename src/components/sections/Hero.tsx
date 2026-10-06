"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroVideos, siteConfig } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

function HeroPanel({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  }, []);

  return (
    <div className="hero-panel relative h-full min-h-0 overflow-hidden">
      <div className="hero-media-inner absolute inset-[-6%]">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      /* ---------- intro reveal ---------- */
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          ".hero-panel",
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.12 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            stagger: 0.16,
          },
          0,
        )
        .fromTo(
          ".hero-brand",
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          0.35,
        )
        .fromTo(
          ".hero-headline .hero-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.05, stagger: 0.1 },
          0.9,
        )
        .fromTo(
          ".hero-copy",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          1.25,
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
          1.4,
        )
        .fromTo(
          ".hero-scroll",
          { autoAlpha: 0, y: -10 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          1.6,
        );

      /* ---------- living background ---------- */
      gsap.to(".hero-media-inner", {
        scale: 1.12,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 2,
      });

      gsap.to(".hero-media-inner", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ---------- scroll cue loop ---------- */
      gsap.to(".scroll-dot", {
        y: 11,
        autoAlpha: 0,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 0.25,
      });

      gsap.to(".scroll-chevron", {
        y: 6,
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      /* ---------- copy parallax out ---------- */
      /* immediateRender: false keeps the intro's start values from being captured here */
      gsap.fromTo(
        ".hero-content",
        { autoAlpha: 1, y: 0 },
        {
          autoAlpha: 0,
          y: -40,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".hero-scroll",
        { autoAlpha: 1 },
        {
          autoAlpha: 0,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "25% top",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const headline = siteConfig.tagline.split(". ").filter(Boolean);

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Glow Home hero"
    >
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
        {heroVideos.map((video) => (
          <HeroPanel
            key={`${video.title}-${video.poster}`}
            src={video.src}
            poster={video.poster}
            title={video.title}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,12,0.6)_0%,rgba(14,14,12,0.4)_40%,rgba(14,14,12,0.82)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_0%,rgba(14,14,12,0.5)_100%)]" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col items-center px-5 pb-8 pt-24 sm:pb-10">
        <div className="hero-content flex flex-1 flex-col items-center justify-center text-center">
          <div
            className="hero-brand relative mb-8 w-[min(72vw,22rem)] sm:w-[min(70vw,25rem)]"
            style={{ aspectRatio: "687 / 333" }}
          >
            <Image
              src="/media/glow-home-brand-logo.png"
              alt="Glow Home"
              fill
              preload
              sizes="(max-width: 640px) 72vw, 400px"
              className="object-contain drop-shadow-[0_22px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
          <h1 className="hero-headline font-[family-name:var(--font-display)] text-[clamp(1.9rem,4.2vw,3.25rem)] font-medium leading-[1.25] text-ink">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.15em]">
                <span className="hero-line block">
                  {line}
                  {i < headline.length - 1 ? "." : ""}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-copy mt-6 max-w-xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-[1.75] text-ink/85">
            Premium fixtures, smart switches, and complete automation, designed for homes, offices, and commercial spaces that deserve
            atmosphere with ease.
          </p>

          <div className="mt-9 flex w-full max-w-xs flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <a href="/contact" className="hero-cta btn !min-h-12 !px-7">
              Start a Project
            </a>
            <a href="/about" className="hero-cta btn btn-ghost !min-h-12 !px-7">
              Explore Glow Home
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="hero-scroll z-10 mt-8 flex flex-col items-center gap-2 text-brass-soft transition-colors hover:text-brass"
          aria-label="Scroll to About Glow Home"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.28em] text-ink">
            Scroll
          </span>

          <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-brass/70 bg-bg/35 pt-1.5 backdrop-blur-sm">
            <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-brass" />
          </span>

          <svg
            className="scroll-chevron h-3.5 w-3.5 text-brass"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
          >
            <path
              d="M1.5 3.5 6 8l4.5-4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
