import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/ContactDetails";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Smart Home Automation in Pakistan, Coming Soon",
  description:
    "Glow Home smart home automation is coming soon: lighting scenes, smart switches, sensors, and quiet control for residences and commercial spaces across Pakistan.",
  path: "/automation",
  keywords: [
    "Smart Home Automation Pakistan",
    "Smart Lighting Control",
    "Smart Switches",
    "Home Automation Karachi",
    "Lighting Scenes",
    "Smart Sensors",
  ],
  image: "/media/about-intelligent-control.jpg",
});

const comingFeatures = [
  {
    title: "Lighting scenes",
    text: "Day, evening, and night atmospheres set once, then recalled with a tap or schedule.",
  },
  {
    title: "Smart switches",
    text: "Quiet wall controls and app-ready switches that replace clutter with refined command.",
  },
  {
    title: "Sensors & presence",
    text: "Motion and presence detection for comfort, safety, and energy-aware rooms.",
  },
  {
    title: "Whole-home control",
    text: "Lighting, climate cues, and security awareness planned as one living experience.",
  },
];

const previewSpaces = [
  {
    title: "Residences",
    text: "Villas and apartments with layered light and invisible automation.",
    image: "/media/glow-home-solution-luxury-residence.jpg",
  },
  {
    title: "Workspaces",
    text: "Offices tuned for focus, wellbeing, and efficient daily operation.",
    image: "/media/glow-home-solution-office-workspace.jpg",
  },
  {
    title: "Hospitality",
    text: "Showrooms, cafes, and hotels where atmosphere becomes part of the brand.",
    image: "/media/glow-home-solution-commercial-space.jpg",
  },
];

export default function AutomationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bg pt-[calc(var(--header-h)+3rem)] pb-16 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_85%_15%,rgba(196,164,106,0.1),transparent_55%)]"
          aria-hidden
        />

        <div className="container-site relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="eyebrow !mb-0">Automation</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-brass/35 bg-brass/5 px-3.5 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-brass-soft">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                  aria-hidden
                />
                Coming soon
              </span>
            </div>

            <h1 className="mt-7 display text-[clamp(2.4rem,5.5vw,4.25rem)]">
              Intelligent living,{" "}
              <span className="text-brass-soft">quietly</span> arriving
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              A dedicated smart home automation experience is on the way, scene
              control, smart switches, sensors, and seamless integration planned
              around how you live and work.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base">
              Lighting projects continue as usual. Share your space now and we
              will guide consultation, then connect you when automation packages
              go live.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn">
                Join the waitlist
              </Link>
              <Link href="/products" className="btn btn-ghost">
                Browse lighting
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw[0]}`}
                className="btn btn-ghost"
              >
                <PhoneIcon className="h-3.5 w-3.5 text-brass" />
                {siteConfig.phones[0]}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-line bg-bg-elevated">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/media/about-intelligent-control.jpg"
                  alt="Smart lighting control panel for Glow Home automation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-[62%_center]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-brass-soft">
                    Preview
                  </p>
                  <p className="mt-2 max-w-sm font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink md:text-[1.85rem]">
                    Control that stays invisible until you need it
                  </p>
                </div>
              </div>
              <div className="geo-frame opacity-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft py-16 md:py-20">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">What&apos;s coming</p>
            <h2 className="mt-4 display text-[clamp(1.9rem,4vw,3rem)]">
              Automation shaped around light
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
              The page will open with systems that make Glow Home lighting
              smarter, not louder, planned with the same design discipline as
              our fixtures and showrooms.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comingFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="border border-line bg-bg p-6"
              >
                <span className="text-[0.65rem] tracking-[0.2em] text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg py-16 md:py-20">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Built for spaces</p>
              <h2 className="mt-4 display text-[clamp(1.9rem,4vw,3rem)]">
                Homes, offices, and commercial interiors
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              Until launch, explore our lighting collections and book a
              consultation for current projects.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {previewSpaces.map((space) => (
              <article
                key={space.title}
                className="group relative overflow-hidden border border-line bg-bg-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                </div>
                <div className="relative -mt-16 px-6 pb-6 pt-2">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-brass-soft">
                    {space.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {space.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn">
              Talk to our team
            </Link>
            <Link href="/products" className="btn btn-ghost">
              Browse lighting
            </Link>
            <Link href="/services" className="btn btn-ghost">
              View services
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Automation", path: "/automation" },
        ])}
      />
    </>
  );
}
