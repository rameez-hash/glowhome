import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { keywordsFor } from "@/lib/keywords";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Glow Home, Lighting Showrooms in DHA & Clifton Karachi",
  description:
    "Visit Glow Home in DHA Phase 8 or Shop No.3/4 Parsa Classic, Block 9 Clifton, Karachi. Call +92 321 8208116 for chandeliers, LED lights, outdoor lights and smart lighting across Pakistan.",
  path: "/contact",
  keywords: [
    ...keywordsFor("Lighting by City"),
    "Lighting Showroom Pakistan",
    "Lighting Shop Pakistan",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design your environment"
        description="Tell us about your residence or commercial project. We'll guide consultation, product selection, and seamless integration."
      />
      <Contact />
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
    </>
  );
}
