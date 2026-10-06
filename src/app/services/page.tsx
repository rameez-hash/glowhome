import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { JsonLd } from "@/components/seo/JsonLd";
import { keywordsFor } from "@/lib/keywords";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Lighting Design & Installation Services",
  description:
    "Glow Home services include architectural lighting design, decorative lighting, smart lighting, smart switches and sensors, commercial lighting and energy efficient LED solutions in Pakistan.",
  path: "/services",
  keywords: keywordsFor("Architectural Lighting", "Smart Lighting"),
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end lighting and automation"
        description="Expert consultation, product systems, and professional integration across lighting, switches, sensors, and complete smart living environments."
      />
      <Services />
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
          ...serviceJsonLd(),
        ]}
      />
    </>
  );
}
