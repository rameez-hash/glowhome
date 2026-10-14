"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PhoneIcon } from "@/components/ui/ContactDetails";
import { navLinks, siteConfig } from "@/lib/site";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const solid = !isHome || scrolledPastHero;
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("hero");

    const update = () => {
      if (!hero) {
        setScrolledPastHero(window.scrollY > 8);
        return;
      }

      const { top, bottom } = hero.getBoundingClientRect();
      // Solid once hero leaves the top, or as soon as user scrolls past a few px
      setScrolledPastHero(top < -4 || bottom <= 80 || window.scrollY > 8);
    };

    const frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);

    if (href === "/" && pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!href.includes("#")) return;

    const [path, hash] = href.split("#");
    const targetPath = path || "/";

    if (pathname === targetPath) {
      event.preventDefault();
      window.requestAnimationFrame(() => {
        if (hash) {
          if (!scrollToHash(hash)) router.push(href);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }
  };
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
          solid || open
            ? "border-line bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <div className="container-site flex h-[var(--header-h)] items-center gap-3 lg:gap-4 xl:gap-5">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            onClick={(event) => {
              setOpen(false);
              if (pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="relative z-10 shrink-0"
          >
            <span className="relative block h-9 w-[6.5rem] sm:h-10 sm:w-[7.25rem]">
              <Image
                src="/media/glow-home-brand-logo.png"
                alt="Glow Home"
                fill
                sizes="(max-width: 640px) 104px, 120px"
                className="object-contain object-left"
                loading="eager"
              />
            </span>
          </Link>

          <nav
            className="ml-auto hidden min-w-0 items-center justify-end gap-0.5 lg:flex xl:gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/" && !solid
                  : link.href.includes("#")
                    ? false
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => onNavClick(event, link.href)}
                  className={`group relative whitespace-nowrap px-1.5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] transition-colors duration-300 xl:px-2 xl:text-[0.66rem] xl:tracking-[0.14em] 2xl:px-2.5 2xl:tracking-[0.16em] ${
                    active
                      ? "text-brass-soft"
                      : solid
                        ? "text-ink-muted hover:text-ink"
                        : "text-ink/90 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-1.5 bottom-1 h-px origin-left bg-brass transition-transform duration-300 ease-[var(--ease-out)] xl:inset-x-2 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw[0]}`}
              className="group flex items-center gap-2 text-[0.65rem] tracking-[0.08em] text-ink-muted transition-colors hover:text-brass-soft 2xl:gap-2.5 2xl:text-[0.7rem]"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-brass transition-colors group-hover:text-brass-soft" />
              <span className="hidden 2xl:inline">{siteConfig.phones[0]}</span>
            </a>

            <Link
              href="/contact"
              className="btn !min-h-9 !px-4 !text-[0.65rem] !tracking-[0.14em] 2xl:!min-h-10 2xl:!px-5 2xl:!text-[0.7rem]"
            >
              Consult
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 ml-auto flex h-11 w-11 items-center justify-center border border-line transition-colors hover:border-brass lg:hidden"
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
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto overscroll-contain bg-bg transition-[opacity,visibility] duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="container-site flex min-h-full flex-col py-6 sm:py-8"
          aria-label="Mobile"
        >
          <div className="flex flex-1 flex-col">
            {navLinks.map((link, index) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.includes("#")
                    ? false
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => onNavClick(event, link.href)}
                  className={`group flex items-baseline justify-between border-b border-line py-3.5 transition-colors sm:py-4 ${
                    active
                      ? "text-brass-soft"
                      : "text-ink hover:text-brass-soft"
                  }`}
                >
                  <span className="font-[family-name:var(--font-display)] text-[1.75rem] tracking-tight sm:text-3xl">
                    {link.label}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.2em] text-ink-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 space-y-4 border-t border-line pt-6 sm:mt-8 sm:pt-8">
            <a
              href={`tel:${siteConfig.phoneRaw[0]}`}
              className="block text-sm tracking-[0.08em] text-ink-muted"
            >
              {siteConfig.phones[0]}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn w-full"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
