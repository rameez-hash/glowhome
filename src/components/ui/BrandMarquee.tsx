export function BrandMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-bg-elevated py-3"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-elevated to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-elevated to-transparent md:w-24" />
      <div className="flex w-max items-center gap-8 animate-[clients-scroll_28s_linear_infinite] md:gap-10">
        {[...Array(20), ...Array(20)].map((_, index) => (
          <div
            key={index}
            className="flex h-4 shrink-0 items-center opacity-65 md:h-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/glow-home-brand-logo.png"
              alt=""
              width={80}
              height={39}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
