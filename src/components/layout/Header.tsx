"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const update = () => {
      if (!hero) {
        setSolid(window.scrollY > 40);
        return;
      }
      setSolid(hero.getBoundingClientRect().bottom <= window.innerHeight * 0.5);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-500 ${
        solid || open
          ? "border-line bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-[var(--header-h)] items-center justify-between">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setOpen(false)}
        >
          {/* Landing slot for the morphing hero logo */}
          <span
            id="header-logo-slot"
            className="block w-[6.5rem] md:w-[7.25rem]"
            style={{ aspectRatio: "687 / 333" }}
            aria-hidden
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-brass-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phoneRaw[0]}`}
            className="text-[0.72rem] tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
          >
            {siteConfig.phones[0]}
          </a>
          <a href="#contact" className="btn">
            Consult
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[var(--header-h)] z-40 bg-bg transition-[opacity,visibility] duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="container-site flex h-full flex-col gap-2 py-10"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn mt-8 w-fit"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
