import Link from "next/link";
import { LogoLVO } from "./LogoLVO";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral/40 bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <LogoLVO compact />
          <p className="mt-3 text-sm text-neutral">Expertise technique en ingénierie verticale.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-heading text-lg font-bold">Navigation</p>
          <Link href="/" className="block hover:text-accent">Accueil</Link>
          <Link href="/services" className="block hover:text-accent">Services</Link>
          <Link href="/realisations" className="block hover:text-accent">Réalisations</Link>
          <Link href="/contact" className="block hover:text-accent">Contact</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-heading text-lg font-bold">Coordonnées</p>
          <p>Saint-Denis, La Réunion</p>
          <p>022 235 773 80</p>
          <p>contact@lvo-ingenierie.com</p>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-neutral">
        © {new Date().getFullYear()} LVO-Ingénierie. Tous droits réservés.
      </div>
    </footer>
  );
}
