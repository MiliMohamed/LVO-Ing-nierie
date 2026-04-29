import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const automationFlows = [
  {
    title: "Rapport d'audit automatique",
    detail: "Saisie terrain -> génération Word/PDF format LVO avec sections pré-remplies et photos structurées.",
    gain: "10 min au lieu de 2h",
  },
  {
    title: "CCTP / RC / DPGF pré-remplis",
    detail: "Paramètres chantier injectés dans des modèles propres à LVO, avec cohérence de style.",
    gain: "Jusqu'à 70% de gain de temps",
  },
  {
    title: "CR de chantier intelligent",
    detail: "Compte-rendu généré depuis notes vocales ou formulaire, puis diffusion automatique aux participants.",
    gain: "Envoi en moins de 5 min",
  },
];

export const metadata: Metadata = {
  title: "Automatisations IA",
  description: "Centralisez et automatisez la production documentaire LVO-Ingénierie avec des workflows IA.",
};

export default function AutomatisationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          IA & Workflows
        </div>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          Automatisations documentaires
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-dark/80">
          Produisez vos audits, CCTP, RC, DPGF et comptes-rendus plus vite, avec une qualité homogène et une identité visuelle 100% LVO.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {automationFlows.map((flow, index) => (
          <Reveal key={flow.title} delay={index * 0.08}>
            <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Cas d'usage</p>
              <h2 className="mt-3 font-heading text-xl font-extrabold text-primary">{flow.title}</h2>
              <p className="mt-3 text-sm leading-6 text-dark/85">{flow.detail}</p>
              <p className="mt-4 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">{flow.gain}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 rounded-2xl border border-primary/15 bg-primary p-7 text-white shadow-xl shadow-primary/20">
          <h3 className="font-heading text-2xl font-extrabold text-accent">Stack proposée</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90">
            Make, GPT/Claude, Google Forms/Typeform et Drive/OneDrive pour créer un pipeline robuste de génération, validation et envoi des documents.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kpi" className="rounded-full bg-accent px-5 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-white hover:text-primary">
              VOIR LE DASHBOARD KPI
            </Link>
            <Link href="/espace-client" className="rounded-full border border-white/30 px-5 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-white/10">
              OUVRIR L'ESPACE CLIENT
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
