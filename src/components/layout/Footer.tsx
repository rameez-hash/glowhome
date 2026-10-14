import Image from "next/image";
import Link from "next/link";
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/ContactDetails";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const mid = Math.ceil(navLinks.length / 2);
  const exploreLeft = navLinks.slice(0, mid);
  const exploreRight = navLinks.slice(mid);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-elevated">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brass/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brass/5 blur-3xl"
        aria-hidden
      />

      <div className="container-site relative grid gap-12 py-16 md:gap-14 lg:grid-cols-[1.15fr_0.75fr_1.35fr] lg:gap-12 lg:py-20 xl:gap-16">
        <div>
          <Image
            src="/media/glow-home-brand-logo.png"
            alt="Glow Home"
            width={120}
            height={174}
            className="h-16 w-auto object-contain"
          />
          <p className="serif mt-6 text-xl text-brass-soft">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            Innovative lighting designs, smart home technology, and complete
            automation for homes, offices, and commercial spaces.
          </p>

          <div className="mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-brass-soft">
              Follow
            </p>
            <SocialLinks />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
            Explore
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1 lg:gap-y-3.5">
            {[...exploreLeft, ...exploreRight].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
            Contact
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {siteConfig.phones.map((phone, i) => (
              <a
                key={phone}
                href={`tel:${siteConfig.phoneRaw[i]}`}
                className="group inline-flex items-center gap-2.5 text-sm tracking-tight text-ink transition-colors hover:text-brass-soft"
              >
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
                <span>{phone}</span>
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <MailIcon className="h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {siteConfig.locations.map((place) => (
              <a
                key={place.label}
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-line bg-bg/40 p-4 transition-colors hover:border-brass/40 hover:bg-bg"
              >
                <span className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.16em] text-brass-soft">
                  <LocationIcon className="h-3 w-3 text-brass" />
                  {place.label}
                </span>
                <span className="mt-3 text-[0.8rem] leading-relaxed text-ink-muted transition-colors group-hover:text-ink">
                  {place.address}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-brass transition-all group-hover:gap-2.5">
                  Open map
                  <span aria-hidden>→</span>
                </span>
              </a>
            ))}
          </div>

          <Link href="/contact" className="btn mt-7 w-full sm:w-auto">
            Book a consultation
          </Link>
        </div>
      </div>

      <div className="relative border-t border-line bg-bg-soft">
        <div className="container-site flex flex-col gap-4 py-7 text-sm sm:flex-row sm:items-center sm:justify-between md:py-8 md:text-[0.95rem]">
          <p className="tracking-[0.04em] text-ink">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-brass-soft md:text-[0.75rem]">
            Smart living · Precision light
          </p>
        </div>
      </div>
    </footer>
  );
}
