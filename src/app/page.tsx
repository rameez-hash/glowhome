import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Solutions } from "@/components/sections/Solutions";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Glow Home | Smart Home Automation & Premium Lighting Pakistan",
  description: siteConfig.longDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-line" />
      <Intro />
      <Process />
      <Solutions />
      <Services />
      <Products />
      <Projects />
      <FAQ />
      <Contact />

      <section
        className="border-y border-line bg-bg py-10"
        aria-label="Glow Home keywords"
      >
        <div className="container-site">
          <p className="text-center text-xs leading-relaxed tracking-[0.08em] text-ink-dim md:text-sm">
            Smart home automation · Premium lighting · Smart switches · Sensors ·
            Decorative lighting · Architectural lighting · Energy-efficient
            solutions · Luxury residences · Commercial projects · Pakistan
          </p>
        </div>
      </section>
    </>
  );
}
