import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Brands } from "@/components/sections/Brands";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Lighting Brands in Pakistan, FIAM, MACY, LAVOV & ARTILUX",
  description:
    "Glow Home brings FIAM commercial lighting, MACY decorative indoor lighting, LAVOV advanced LED lighting and ARTILUX LED panel lights to Pakistan.",
  path: "/brands",
  keywords: [
    "FIAM Lighting",
    "MACY Lighting",
    "LAVOV Lighting",
    "ARTILUX Panel Lights",
    "Commercial Lighting",
    "Decorative Lights",
    "LED Lighting",
    "LED Panel Lights",
    "Lighting Store Pakistan",
  ],
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Lighting houses under one family"
        description="Glow Home is a branded outlet of FIAM Lighting Pakistan, bringing FIAM, MACY, LAVOV, and ARTILUX into thoughtfully lit spaces."
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
