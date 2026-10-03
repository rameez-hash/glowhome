"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { solutions } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

function SolutionVideo({
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function Solutions() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".solution-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={root} className="section bg-bg-elevated">
      <div className="container-site">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-4 display max-w-xl text-[clamp(2rem,5vw,3.6rem)]">
              Spaces shaped by intelligent light
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
            From luxury residences to commercial projects, Glow Home delivers
            customized smart living environments with expert consultation and
            seamless integration.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="solution-card group relative overflow-hidden bg-bg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="solution-media absolute inset-0">
                  <SolutionVideo
                    src={item.video}
                    poster={item.image}
                    title={item.title}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.copy}
                </p>
              </div>
              <div className="geo-frame opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
