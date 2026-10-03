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
  const logoRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const logo = logoRef.current;
    const slot = slotRef.current;
    if (!el || !logo || !slot) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const target = document.getElementById("header-logo-slot");
      const ease = gsap.parseEase("power2.inOut");

      /* ---------- logo morph: hero slot -> header slot ---------- */
      if (target) {
        const place = (morph: number) => {
          const a = slot.getBoundingClientRect();
          const b = target.getBoundingClientRect();
          const t = ease(morph);

          gsap.set(logo, {
            x: a.left + (b.left - a.left) * t,
            // Never travel above the header row while flying up
            y: Math.max(a.top + (b.top - a.top) * t, b.top),
            width: a.width + (b.width - a.width) * t,
            height: a.height + (b.height - a.height) * t,
          });
        };

        gsap.set(logo, { position: "fixed", top: 0, left: 0, zIndex: 70 });
        place(0);

        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            place(gsap.utils.clamp(0, 1, (self.progress - 0.05) / 0.42));
          },
          onRefresh: (self) => {
            place(gsap.utils.clamp(0, 1, (self.progress - 0.05) / 0.42));
          },
        });
      }

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
          logo,
          { autoAlpha: 0, scale: 0.82, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power3.out",
          },
          0.45,
        )
        .fromTo(
          ".hero-headline .hero-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.05, stagger: 0.1 },
          1.15,
        )
        .fromTo(
          ".hero-copy",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          1.5,
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
          1.65,
        )
        .fromTo(
          ".hero-scroll",
          { autoAlpha: 0, y: -10 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          1.9,
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

      {/* No z-index here: a stacking context would trap the flying logo under the header */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-20">
        {/* Morph origin — flying logo starts here and lands in the header */}
        <div
          ref={slotRef}
          id="hero-logo-slot"
          className="relative w-[min(78vw,25rem)]"
          style={{ aspectRatio: "687 / 333" }}
        >
          <div
            ref={logoRef}
            className="pointer-events-none absolute inset-0"
            aria-hidden
          >
            <Image
              src="/media/glow-home-brand-logo.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 78vw, 400px"
              className="object-contain drop-shadow-[0_22px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        <div className="hero-content mt-8 flex max-w-2xl flex-col items-center text-center">
          <h1 className="hero-headline font-[family-name:var(--font-serif)] text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.14] text-ink">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span className="hero-line block">
                  {line}
                  {i < headline.length - 1 ? "." : ""}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-copy mt-6 max-w-xl text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-muted">
            Premium lighting, smart switches, sensors, and complete home
            automation — crafted for modern residences, offices, and commercial
            spaces.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="hero-cta btn !min-h-12 !px-7">
              Start a Project
            </a>
            <a href="#about" className="hero-cta btn btn-ghost !min-h-12 !px-7">
              Explore Glow Home
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-5 right-6 z-10 hidden flex-col items-center gap-2 text-ink-dim transition-colors hover:text-brass-soft sm:flex md:right-10"
        aria-label="Scroll to About Glow Home"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.26em]">Scroll</span>

        <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-line-strong pt-1.5">
          <span className="scroll-dot h-1 w-1 rounded-full bg-brass" />
        </span>

        <svg
          className="scroll-chevron h-3 w-3 text-brass"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M1.5 3.5 6 8l4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
