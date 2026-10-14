"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PhoneIcon } from "@/components/ui/ContactDetails";
import { navLinks, productNavItems, siteConfig } from "@/lib/site";

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
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setProductsOpen(false);
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
    setProductsOpen(false);

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

  const productsActive =
    pathname === "/products" ||
    pathname.startsWith("/products/") ||
    pathname === "/automation";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
          solid || open
            ? "border-line bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            onClick={(event) => {
              setOpen(false);
              setProductsOpen(false);
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
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 xl:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              if (link.href === "/products") {
                return (
                  <div
                    key={link.href}
                    className="group/products relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={(event) => onNavClick(event, link.href)}
                      aria-expanded={productsOpen}
                      aria-haspopup="menu"
                      className={`group relative flex items-center gap-1.5 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                        productsActive
                          ? "text-brass-soft"
                          : solid
                            ? "text-ink-muted hover:text-ink"
                            : "text-ink/90 hover:text-ink"
                      }`}
                    >
                      {link.label}
                      <svg
                        viewBox="0 0 12 12"
                        className={`h-2.5 w-2.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2.5 4.5 6 8l3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`absolute inset-x-3 bottom-1 h-px origin-left bg-brass transition-transform duration-300 ease-[var(--ease-out)] ${
                          productsActive || productsOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        aria-hidden
                      />
                    </Link>

                    <div
                      role="menu"
                      className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2 transition-[opacity,visibility,transform] duration-200 ${
                        productsOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="border border-line bg-bg-elevated shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                        {productNavItems.map((item) => {
                          const active =
                            item.href === "/products"
                              ? pathname === "/products"
                              : pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              role="menuitem"
                              onClick={() => {
                                setProductsOpen(false);
                                setOpen(false);
                              }}
                              className={`flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 text-[0.68rem] uppercase tracking-[0.16em] transition-colors last:border-b-0 ${
                                active
                                  ? "bg-brass/10 text-brass-soft"
                                  : "text-ink-muted hover:bg-brass/10 hover:text-brass-soft"
                              }`}
                            >
                              <span>{item.label}</span>
                              {"badge" in item && item.badge ? (
                                <span className="text-[0.55rem] tracking-[0.14em] text-brass">
                                  {item.badge}
                                </span>
                              ) : null}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

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
                  className={`group relative px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                    active
                      ? "text-brass-soft"
                      : solid
                        ? "text-ink-muted hover:text-ink"
                        : "text-ink/90 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left bg-brass transition-transform duration-300 ease-[var(--ease-out)] ${
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

          <div className="hidden items-center gap-5 xl:flex">
            <a
              href={`tel:${siteConfig.phoneRaw[0]}`}
              className="group flex items-center gap-2.5 text-[0.7rem] tracking-[0.1em] text-ink-muted transition-colors hover:text-brass-soft"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-brass transition-colors group-hover:text-brass-soft" />
              <span>{siteConfig.phones[0]}</span>
            </a>

            <Link
              href="/contact"
              className="btn !min-h-10 !px-5 !text-[0.7rem] !tracking-[0.16em]"
            >
              Consult
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-line transition-colors hover:border-brass xl:hidden"
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
        className={`fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto overscroll-contain bg-bg transition-[opacity,visibility] duration-400 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="container-site flex min-h-full flex-col py-6 sm:py-8"
          aria-label="Mobile"
        >
          <div className="flex flex-1 flex-col">
            {navLinks.map((link, index) => {
              if (link.href === "/products") {
                return (
                  <div key={link.href} className="border-b border-line">
                    <button
                      type="button"
                      aria-expanded={productsOpen}
                      onClick={() => setProductsOpen((value) => !value)}
                      className={`flex w-full items-baseline justify-between py-3.5 text-left transition-colors sm:py-4 ${
                        productsActive
                          ? "text-brass-soft"
                          : "text-ink hover:text-brass-soft"
                      }`}
                    >
                      <span className="font-[family-name:var(--font-display)] text-[1.75rem] tracking-tight sm:text-3xl">
                        {link.label}
                      </span>
                      <span className="flex items-center gap-3 text-[0.65rem] tracking-[0.2em] text-ink-dim">
                        {String(index + 1).padStart(2, "0")}
                        <svg
                          viewBox="0 0 12 12"
                          className={`h-3 w-3 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M2.5 4.5 6 8l3.5-3.5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    {productsOpen ? (
                      <div className="space-y-1 pb-4 pl-1">
                        {productNavItems.map((item) => {
                          const active =
                            item.href === "/products"
                              ? pathname === "/products"
                              : pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setOpen(false);
                                setProductsOpen(false);
                              }}
                              className={`flex items-center justify-between gap-3 py-2.5 text-sm tracking-[0.04em] transition-colors ${
                                active
                                  ? "text-brass-soft"
                                  : "text-ink-muted hover:text-ink"
                              }`}
                            >
                              <span>{item.label}</span>
                              {"badge" in item && item.badge ? (
                                <span className="text-[0.6rem] uppercase tracking-[0.14em] text-brass">
                                  {item.badge}
                                </span>
                              ) : null}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              }

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
