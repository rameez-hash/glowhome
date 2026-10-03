"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, sectionVideos } from "@/lib/site";
import { VideoColumns } from "@/components/ui/VideoColumns";

gsap.registerPlugin(ScrollTrigger);

export function Products() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { autoAlpha: 0, y: 50, rotateX: 6 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-grid",
            start: "top 80%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={root} className="section bg-bg-soft">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Products</p>
          <h2 className="mt-4 display text-[clamp(2rem,5vw,3.5rem)]">
            Quality products for intelligent spaces
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Premium lighting, smart switches, sensors, and control systems —
            selected for craft, performance, and seamless automation.
          </p>
        </div>

        <VideoColumns
          className="mt-14"
          aspect="aspect-video"
          items={sectionVideos.products}
        />

        <div className="product-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="product-card group overflow-hidden border border-line bg-bg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <h3 className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                  {product.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.18em] text-brass">
                  View
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
