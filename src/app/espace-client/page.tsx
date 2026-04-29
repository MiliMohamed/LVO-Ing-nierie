import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const folders = [
  { project: "Villa Sophia", type: "Audit + CCTP + DPGF", updated: "Mis à jour: 28/04/2026" },
  { project: "CADJEE", type: "CR chantier + planning", updated: "Mis à jour: 27/04/2026" },
  { project: "ANAXAGORE", type: "RC + offres fournisseurs", updated: "Mis à jour: 25/04/2026" },
];

const sharedLinks = [
  { name: "Lien sécurisé - Rapport audit Villa Sophia", status: "Actif", expiry: "Expire dans 6 jours" },
  { name: "Lien client - DPGF lot ascenseurs", status: "Actif", expiry: "Expire dans 12 jours" },
  { name: "Lien MOA - CR réunion chantier", status: "À renouveler", expiry: "Expire aujourd'hui" },
];

export const metadata: Metadata = {
  title: "Espace Client",
  description: "Centralisez les fichiers, devis et liens de partage clients dans un espace sécurisé.",
};

export default function EspaceClientPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Portail privé
        </div>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Espace Fichiers & Devis</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-dark/80">
          Gérez vos documents par projet, créez des liens sécurisés pour vos clients et suivez les dates d&apos;expiration en un coup d&apos;oeil.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
            <h2 className="font-heading text-2xl font-extrabold text-primary">Dossiers projets</h2>
            <div className="mt-4 space-y-3">
              {folders.map((folder) => (
                <div key={folder.project} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral/30 bg-neutral/5 p-4">
                  <div>
                    <p className="font-heading text-lg font-bold text-primary">{folder.project}</p>
                    <p className="text-sm text-dark/75">{folder.type}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark/60">{folder.updated}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-2xl border border-accent/20 bg-accent/10 p-6 shadow-md shadow-accent/15">
            <h2 className="font-heading text-xl font-extrabold text-primary">Actions rapides</h2>
            <div className="mt-4 grid gap-2">
              <button type="button" className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-accent">
                Nouveau devis
              </button>
              <button type="button" className="rounded-xl border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary/10">
                Ajouter un fichier
              </button>
              <button type="button" className="rounded-xl border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary/10">
                Créer lien client
              </button>
            </div>
            <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-accent hover:text-primary">
              Configurer les accès avec LVO →
            </Link>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <article className="mt-8 rounded-2xl border border-primary/15 bg-primary p-6 text-white shadow-xl shadow-primary/20">
          <h2 className="font-heading text-2xl font-extrabold text-accent">Liens partagés clients</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {sharedLinks.map((link) => (
              <div key={link.name} className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm font-semibold">{link.name}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-white/80">{link.status}</p>
                <p className="mt-1 text-xs text-neutral">{link.expiry}</p>
              </div>
            ))}
          </div>
        </article>
      </Reveal>
    </section>
  );
}
