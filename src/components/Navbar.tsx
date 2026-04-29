"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoLVO } from "./LogoLVO";

const links = [
  { href: "/", label: "ACCUEIL" },
  { href: "/services", label: "SERVICES" },
  { href: "/realisations", label: "PROJETS" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <LogoLVO compact />
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-primary hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-accent px-4 py-2 text-xs font-bold text-white transition hover:bg-primary"
          >
            CONTACTEZ-NOUS
          </Link>
        </div>
      </nav>
    </header>
  );
}
