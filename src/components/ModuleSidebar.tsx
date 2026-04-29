"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const moduleLinks = [
  { href: "/automatisations", label: "Automatisations IA", icon: "⚙️" },
  { href: "/kpi", label: "KPI Dashboard", icon: "📊" },
  { href: "/monitoring", label: "Monitoring capteurs", icon: "📡" },
  { href: "/chatbot", label: "Chatbot client", icon: "💬" },
  { href: "/espace-client", label: "Espace client", icon: "🗂️" },
];

export function ModuleSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 border-r border-neutral/30 bg-white/75 px-3 py-4 backdrop-blur lg:block">
        <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-dark/60">Modules</p>
        <nav className="mt-3 space-y-1">
          {moduleLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  active ? "bg-primary text-white shadow" : "text-primary hover:bg-primary/10"
                }`}
              >
                <span aria-hidden className="text-base">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <button
        type="button"
        className="fixed left-4 top-32 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg text-white shadow-xl hover:bg-accent lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Ouvrir les modules"
      >
        ☰
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer les modules"
          />
          <aside className="absolute left-0 top-0 h-full w-72 border-r border-neutral/30 bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-dark/60">Modules</p>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral/10 text-primary"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le panneau modules"
              >
                ✕
              </button>
            </div>
            <nav className="space-y-1">
              {moduleLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      active ? "bg-primary text-white shadow" : "text-primary hover:bg-primary/10"
                    }`}
                  >
                    <span aria-hidden className="text-base">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
