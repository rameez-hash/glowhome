import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Products } from "@/components/sections/Products";
import { JsonLd } from "@/components/seo/JsonLd";
import { coreCategoryStructure } from "@/lib/keywords";
import { breadcrumbJsonLd, pageMetadata, productListJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Lights & Lighting Products in Pakistan",
  description:
    "Shop chandeliers, pendant lights, ceiling lights, wall lights, downlights, spotlights, track lights, LED strips, floor lamps, table lamps and decorative lighting at Glow Home Pakistan.",
  path: "/products",
  keywords: [
    ...coreCategoryStructure,
    "Lighting Fixtures",
    "Buy Lights Online Pakistan",
    "Online Lighting Store Pakistan",
    "LED Lights Price in Pakistan",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Lighting categories for modern interiors"
        description="Explore curated product categories, from ceiling lights and pendants to chandeliers, track lighting, and LED strips."
      />
      <Products />
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Products", path: "/products" }]),
          productListJsonLd(),
        ]}
      />
    </>
  );
}
