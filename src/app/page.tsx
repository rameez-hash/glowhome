import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Solutions } from "@/components/sections/Solutions";
import { FeatureSpotlight } from "@/components/sections/FeatureSpotlight";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Decor } from "@/components/sections/Decor";
import { Brands } from "@/components/sections/Brands";
import { Process } from "@/components/sections/Process";
import { Clients } from "@/components/sections/Clients";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { BlogGuides } from "@/components/blog/BlogGuides";
import { BrandMarquee } from "@/components/ui/BrandMarquee";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, productListJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Glow Home | Lighting Store in Pakistan, Chandeliers, LED & Smart Lights",
  },
  description:
    "Premium lighting store in Karachi for chandeliers, LED lights, track lights, LED strips and smart lighting. Showrooms in DHA Phase 8 and Clifton.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <BrandMarquee />
      <Process />
      <FeatureSpotlight />
      <Solutions />
      <Services />
      <Products />
      <Decor />
      <Brands />
      <Clients />
      <BlogGuides />
      <FAQ />
      <Contact showShowrooms={false} />
      <JsonLd data={[faqJsonLd(), productListJsonLd(), ...serviceJsonLd()]} />
    </>
  );
}
