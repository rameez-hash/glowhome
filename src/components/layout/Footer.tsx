import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/media/glow-home-brand-logo.png"
            alt="Glow Home"
            width={120}
            height={174}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
            Innovative lighting designs, smart home technology, and complete
            automation solutions that enhance comfort, convenience, security,
            and lifestyle.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            {siteConfig.phones.map((phone, i) => (
              <li key={phone}>
                <a
                  href={`tel:${siteConfig.phoneRaw[i]}`}
                  className="transition-colors hover:text-ink"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-ink"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.url}
                className="transition-colors hover:text-ink"
              >
                glowhome.com.pk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-ink-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="tracking-[0.16em] uppercase">
            Smart living · Precision light
          </p>
        </div>
      </div>
    </footer>
  );
}
