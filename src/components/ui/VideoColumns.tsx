"use client";

import { useEffect, useRef } from "react";

type VideoItem = {
  src: string;
  poster: string;
  title: string;
  subtitle?: string;
};

type Props = {
  items: readonly VideoItem[];
  className?: string;
  aspect?: string;
};

function VideoCard({
  item,
  aspect,
}: {
  item: VideoItem;
  aspect: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="group overflow-hidden border border-line bg-bg">
      <div className={`relative overflow-hidden bg-stone ${aspect}`}>
        <video
          ref={ref}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster}
          aria-label={item.title}
        >
          <source src={item.src} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <p className="font-[family-name:var(--font-display)] text-lg tracking-tight text-ink md:text-xl">
            {item.title}
          </p>
          {item.subtitle ? (
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brass-soft">
              {item.subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function VideoColumns({
  items,
  className = "",
  aspect = "aspect-[4/5]",
}: Props) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <VideoCard key={`${item.title}-${item.src}-${item.poster}`} item={item} aspect={aspect} />
      ))}
    </div>
  );
}
