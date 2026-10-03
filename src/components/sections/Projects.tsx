"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, sectionVideos } from "@/lib/site";
import { VideoColumns } from "@/components/ui/VideoColumns";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const rail = track.current;
    if (!el || !rail) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const getScroll = () =>
        Math.max(0, rail.scrollWidth - window.innerWidth + 64);

      const tween = gsap.to(rail, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section bg-bg border-b border-line" aria-label="Project films">
        <div className="container-site">
          <p className="eyebrow">On camera</p>
          <h2 className="mt-4 display max-w-2xl text-[clamp(2rem,5vw,3.2rem)]">
            Three views of Glow Home
          </h2>
          <VideoColumns
            className="mt-12"
            aspect="aspect-video"
            items={sectionVideos.projects}
          />
        </div>
      </section>

      <section id="projects" ref={root} className="relative overflow-hidden bg-bg">
        <div className="container-site pt-[clamp(4.5rem,10vw,7rem)]">
          <p className="eyebrow">Projects</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-xl text-[clamp(2rem,5vw,3.5rem)]">
              Environments we illuminate
            </h2>
            <p className="max-w-sm text-sm text-ink-muted">
              Scroll to explore curated lighting and automation atmospheres.
            </p>
          </div>
        </div>

        <div className="mt-12 pb-[clamp(4.5rem,10vw,7rem)]">
          <div
            ref={track}
            className="flex w-max gap-5 px-[max(1.25rem,calc((100vw-1200px)/2+1.25rem))] will-change-transform"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="relative h-[58vh] w-[min(78vw,420px)] shrink-0 overflow-hidden bg-bg-soft"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  sizes="420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
