"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-row",
        { autoAlpha: 0, x: -24 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".service-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          stagger: 0.08,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="section">
      <div className="container-site">
        <p className="eyebrow">Services</p>
        <h2 className="mt-4 display max-w-3xl text-[clamp(2rem,5vw,3.5rem)]">
          Complete lighting & automation expertise
        </h2>

        <div className="mt-14">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-row group grid gap-4 border-b border-line py-8 md:grid-cols-[0.2fr_0.9fr_1.2fr] md:items-start"
            >
              <span className="font-[family-name:var(--font-display)] text-sm text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight transition-colors group-hover:text-brass-soft md:text-[1.7rem]">
                {service.id === "smart-automation" ? (
                  <Link href="/automation" className="hover:text-brass-soft">
                    {service.title}
                  </Link>
                ) : (
                  service.title
                )}
              </h3>
              <div>
                <p className="text-sm leading-relaxed text-ink-muted md:text-base">
                  {service.description}
                </p>
                {service.id === "smart-automation" ? (
                  <Link
                    href="/automation"
                    className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-brass transition-colors hover:text-brass-soft"
                  >
                    Coming soon
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
                <div className="service-line mt-5 h-px origin-left bg-line-strong" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
