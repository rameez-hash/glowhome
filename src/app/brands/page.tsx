import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Brands } from "@/components/sections/Brands";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Lighting Brands in Pakistan, FIAM & MACY",
  description:
    "Glow Home brings FIAM commercial lighting and MACY decorative indoor lighting to Pakistan.",
  path: "/brands",
  keywords: [
    "FIAM Lighting",
    "MACY Lighting",
    "Commercial Lighting",
    "Decorative Lights",
    "LED Lighting",
    "Lighting Store Pakistan",
  ],
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Lighting houses under one family"
        description="Glow Home is a branded outlet of FIAM Lighting Pakistan, bringing FIAM and MACY into thoughtfully lit spaces."
      />
      <Brands showIntro={false} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Brands", path: "/brands" }])} />
      <section className="border-t border-line bg-bg py-12 md:py-14">
        <div className="container-site flex flex-wrap items-center gap-3">
          <Link href="/products" className="btn">
            Explore products
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
