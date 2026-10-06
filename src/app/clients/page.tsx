import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Clients } from "@/components/sections/Clients";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Clients, Commercial & Retail Lighting Projects",
  description:
    "Brands in fashion, hospitality, automotive and real estate trust Glow Home for showroom lighting, retail lighting, restaurant lighting and commercial lighting across Pakistan.",
  path: "/clients",
  keywords: [
    "Commercial Lighting",
    "Showroom Lighting",
    "Retail Lighting",
    "Shop Lighting",
    "Restaurant Lighting",
    "Hotel Lighting",
    "Lighting in Pakistan",
  ],
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Trusted by brands that shape spaces"
        description="From fashion and hospitality to automotive and real estate, partners who chose Glow Home for lighting with presence."
      />
      <Clients showIntro={false} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Clients", path: "/clients" }])} />
    </>
  );
}
