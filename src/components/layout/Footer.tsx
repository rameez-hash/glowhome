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

      <div className="container-site relative grid gap-14 py-16 lg:grid-cols-[1.35fr_1fr_1.1fr] lg:gap-16 lg:py-20">
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
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
            {[exploreLeft, exploreRight].map((column, colIndex) => (
              <ul key={colIndex} className="space-y-3">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
            Contact
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            {siteConfig.phones.map((phone, i) => (
              <li key={phone}>
                <a
                  href={`tel:${siteConfig.phoneRaw[i]}`}
                  className="group flex items-start gap-3 text-base tracking-tight text-ink transition-colors hover:text-brass-soft"
                >
                  <PhoneIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
                  <span>{phone}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-3 text-ink-muted transition-colors hover:text-ink"
              >
                <MailIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
                <span>{siteConfig.email}</span>
              </a>
            </li>
            {siteConfig.locations.map((place) => (
              <li key={place.label}>
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex max-w-xs items-start gap-3 leading-relaxed text-ink-dim transition-colors hover:text-brass-soft"
                >
                  <LocationIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass transition-colors group-hover:text-brass-soft" />
                  <span>
                    <span className="block text-[0.62rem] uppercase tracking-[0.14em] text-brass-soft">
                      {place.label}
                    </span>
                    <span className="mt-1 block">{place.address}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn mt-8">
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
