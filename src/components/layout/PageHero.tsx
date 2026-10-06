type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-elevated pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pb-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_0%,rgba(196,164,106,0.08),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent"
        aria-hidden
      />

      <div className="container-site relative max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 display text-[clamp(2.4rem,6vw,4.5rem)]">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
