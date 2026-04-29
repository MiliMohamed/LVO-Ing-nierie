"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const moduleLinks = [
  { href: "/automatisations", label: "Automatisations IA", icon: "⚙️" },
  { href: "/kpi", label: "KPI Dashboard", icon: "📊" },
  { href: "/monitoring", label: "Monitoring capteurs", icon: "📡" },
  { href: "/chatbot", label: "Chatbot client", icon: "💬" },
  { href: "/espace-client", label: "Espace client", icon: "🗂️" },
];

export function ModuleSidebar() {
  const pathname = usePathname();

  return (
    <aside className="group sticky top-20 hidden h-[calc(100vh-6rem)] w-20 shrink-0 border-r border-neutral/30 bg-white/75 px-2 py-4 backdrop-blur transition-all duration-300 hover:w-64 lg:block">
      <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-dark/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Modules
      </p>
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
              <span className="w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover:w-auto group-hover:opacity-100">
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
