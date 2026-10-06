import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { HighlightIcon } from "@/components/ui/HighlightIcon";
import { aboutStory } from "@/lib/site";

export function AboutStory() {
  return (
    <>
      <section className="section bg-bg">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 display max-w-xl text-[clamp(2rem,5vw,3.4rem)]">
              Light for living, intelligent by design
            </h2>
            <p className="serif mt-5 text-xl text-brass-soft">
              {aboutStory.established}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {aboutStory.lead}
            </p>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
              {aboutStory.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] w-full lg:min-h-[36rem]">
              <Image
                src="/media/glow-home-showroom-exterior-transparent.png"
                alt="Glow Home luxury lighting showroom exterior at night with illuminated chandeliers and modern architectural facade"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center drop-shadow-[0_18px_50px_rgba(0,0,0,0.4)]"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>

        <div className="container-site mt-20 border-t border-line pt-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {aboutStory.highlights.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <article className="group relative h-full border border-line bg-bg-elevated/60 px-5 py-6 transition-colors duration-500 hover:border-brass/45 md:px-6 md:py-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-brass transition-colors group-hover:text-brass-soft">
                      <HighlightIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-dim">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.45rem] tracking-tight text-brass-soft md:text-[1.65rem]">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.label}
                  </p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-bg-elevated">
        <div
          className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-brass/5 blur-3xl"
          aria-hidden
        />

        <div className="container-site relative">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 display max-w-2xl text-[clamp(2rem,5vw,3.2rem)]">
                Spaces shaped by{" "}
                <span className="text-brass-soft">light and intelligence</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted lg:justify-self-end lg:pb-1 lg:text-right">
                From residences to commercial projects, lighting, atmosphere,
                and control designed as one experience.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
            {aboutStory.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <Link
                  href="/solutions"
                  className="group flex h-full flex-col overflow-hidden border border-line bg-bg transition-colors duration-500 hover:border-brass/40"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/20" />
                    <div className="absolute left-4 top-4 flex items-center gap-3">
                      <span className="inline-flex h-9 min-w-9 items-center justify-center border border-brass/45 bg-bg/55 px-2 text-[0.65rem] uppercase tracking-[0.18em] text-brass-soft backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight md:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {pillar.copy}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-brass transition-all duration-300 group-hover:gap-3 group-hover:text-brass-soft">
                      Explore solutions
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Why Glow Home</p>
            <h2 className="mt-4 display max-w-2xl text-[clamp(2rem,5vw,3.2rem)]">
              A clearer way to design intelligent environments
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
            {aboutStory.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <article className="h-full bg-bg px-6 py-8 md:px-8 md:py-10">
                  <span className="text-xs tracking-[0.2em] text-brass-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                    {value.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft">
        <div className="container-site flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <Reveal>
            <p className="eyebrow">Start a project</p>
            <h2 className="mt-4 display max-w-xl text-[clamp(1.8rem,4vw,2.8rem)]">
              Ready to illuminate your space?
            </h2>
            <p className="mt-4 max-w-lg text-ink-muted">
              Speak with Glow Home about a customized lighting and smart living
              plan for your residence or commercial project.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn">
                Book a consultation
              </Link>
              <Link href="/services" className="btn btn-ghost">
                View services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
