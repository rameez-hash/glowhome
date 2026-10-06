import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/ContactDetails";
import { productCategories, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you are looking for has moved or no longer exists. Explore Glow Home lighting categories or contact our team.",
  robots: { index: false, follow: true },
};

const popularSlugs = [
  "chandeliers",
  "pendant-lights",
  "ceiling-lights",
  "wall-lights",
  "track-lighting",
  "decor",
];

export default function NotFound() {
  const popular = popularSlugs
    .map((slug) => productCategories.find((category) => category.slug === slug))
    .filter((category) => category !== undefined);

  return (
    <section className="relative overflow-hidden bg-bg pt-[calc(var(--header-h)+3.5rem)] pb-20 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_75%_10%,rgba(196,164,106,0.12),transparent_60%)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-6 top-16 select-none font-[family-name:var(--font-display)] text-[clamp(10rem,32vw,26rem)] leading-none text-ink/[0.03]"
        aria-hidden
      >
        404
      </span>

      <div className="container-site relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 display text-[clamp(2.4rem,6vw,4.5rem)]">
            This page has <span className="text-brass-soft">moved</span> or no
            longer exists
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Our website has a new look. The link you followed may be from our
            old site, explore our lighting collections below or get in touch
            and we&apos;ll help you find what you need.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/" className="btn">
              Back to home
            </Link>
            <Link href="/products" className="btn btn-ghost">
              Browse products
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

        <div className="mt-16 border-t border-line pt-10 md:mt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-3xl">
              Popular categories
            </h2>
            <Link
              href="/products"
              className="text-xs uppercase tracking-[0.18em] text-brass transition-colors hover:text-brass-soft"
            >
              View all
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {popular.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative overflow-hidden bg-bg-elevated"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-4">
                    <h3 className="font-[family-name:var(--font-display)] text-base leading-tight tracking-tight text-brass-soft md:text-lg">
                      {category.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-brass transition-all duration-300 group-hover:gap-3">
                      View <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
                <div className="geo-frame opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
