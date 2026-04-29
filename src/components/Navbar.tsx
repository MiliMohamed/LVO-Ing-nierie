"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoLVO } from "./LogoLVO";

const links = [
  { href: "/", label: "ACCUEIL" },
  { href: "/a-propos", label: "À PROPOS" },
  { href: "/services", label: "SERVICES" },
  { href: "/realisations", label: "PROJETS" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-neutral/30 bg-white/90 shadow-lg shadow-primary/5 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <LogoLVO compact />
        <div className="hidden max-w-[calc(100%-170px)] items-center gap-1 rounded-full border border-neutral/30 bg-white/80 px-2 py-1 shadow-sm backdrop-blur lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-2.5 py-2 text-[11px] font-semibold tracking-wide transition ${
                pathname === link.href ? "bg-primary text-white shadow" : "text-primary hover:bg-primary/10 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-accent px-4 py-2 text-xs font-bold tracking-wide text-white transition hover:scale-[1.02] hover:bg-primary"
          >
            CONTACTEZ-NOUS
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral/40 bg-white/90 text-primary shadow-sm md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>
      {mobileOpen && (
        <div className="mx-4 mb-3 rounded-2xl border border-neutral/30 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  pathname === link.href ? "bg-primary text-white" : "text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-xl bg-accent px-4 py-2.5 text-center text-xs font-bold tracking-wide text-white transition hover:bg-primary"
            >
              CONTACTEZ-NOUS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
