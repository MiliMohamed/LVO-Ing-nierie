import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accueil",
  description: "L'ingénierie verticale réinventée pour vos projets d'ascenseurs, convoyeurs et escaliers mécaniques.",
};

const trustPoints = [
  "Méthodologie conforme normes FR/EU",
  "Pilotage qualité - coût - délai",
  "Outils digitaux pour traçabilité complète",
  "Support réactif et accompagnement continu",
];

const companyOverview = [
  { label: "Secteur", value: "Services d'ingénierie" },
  { label: "Taille de l'entreprise", value: "2-10 employés" },
  { label: "Fondée en", value: "2026" },
  { label: "Téléphone", value: "0692053952" },
];

const steps = [
  {
    title: "1. Cadrage",
    description: "Collecte des besoins, visite site, définition du périmètre technique et réglementaire.",
  },
  {
    title: "2. Conception",
    description: "Production des pièces techniques (audit, CCTP, DPGF) avec validation des options.",
  },
  {
    title: "3. Exécution",
    description: "Suivi chantier, reporting KPI, gestion des réserves et sécurisation de la réception finale.",
  },
];

const faqs = [
  {
    question: "Intervenez-vous uniquement à La Réunion ?",
    answer: "La Réunion est la zone principale, avec possibilité d'accompagnement à distance sur d'autres territoires.",
  },
  {
    question: "Quel est le délai moyen pour un audit complet ?",
    answer: "Selon la taille du site, un audit est généralement livré entre 5 et 10 jours ouvrés.",
  },
  {
    question: "Pouvez-vous reprendre un projet déjà engagé ?",
    answer: "Oui, nous pouvons reprendre un dossier en cours avec phase de diagnostic et plan de reprise.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hatch-overlay relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/image_1_1_top_left.png"
            alt="Villa moderne"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/70" />
        </div>
        <div className="pointer-events-none absolute -left-28 top-14 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-24 text-white md:grid-cols-2 md:py-28">
          <div>
            <Reveal>
              <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-neutral">
                Expertise bâtiment & mobilité
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight md:text-6xl">
                L&apos;INGÉNIERIE
                <br />
                VERTICALE RÉINVENTÉE
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-lg text-neutral">
                Audit, maîtrise d&apos;oeuvre et modernisation technique pour ascenseurs, escaliers mécaniques et convoyeurs.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold tracking-wide text-white transition hover:scale-[1.02] hover:bg-white hover:text-primary"
                >
                  DÉCOUVRIR NOS SOLUTIONS
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white/10"
                >
                  PARLER À UN EXPERT
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3 self-end rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral">Projets livrés</p>
                <p className="mt-2 text-3xl font-extrabold text-accent">150+</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral">Disponibilité</p>
                <p className="mt-2 text-3xl font-extrabold text-accent">24/7</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral">Audit & MOE</p>
                <p className="mt-2 text-lg font-bold">Clé en main</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral">Conformité</p>
                <p className="mt-2 text-lg font-bold">Normes FR/EU</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">Nos solutions métiers</h2>
            <p className="mt-2 text-dark/75">Une approche technique, esthétique et opérationnelle pour chaque besoin.</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-accent transition hover:text-primary">
            Voir tout →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "AUDIT", description: services[0].description, details: services[0].details },
            { title: "MOE", description: services[1].description, details: services[1].details },
            { title: "PROJETS", description: services[2].description, details: services[2].details },
          ].map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <ServiceCard title={service.title} description={service.description} details={service.details} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Présentation de l'entreprise</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-primary">Vue d&apos;ensemble LVO-Ingénierie</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-dark/80">
            Bureau d&apos;études spécialisé en ascenseurs et escaliers mécaniques, LVO-Ingénierie accompagne les maîtres
            d&apos;ouvrage avec une approche technique, réglementaire et opérationnelle.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {companyOverview.map((item) => (
              <article key={item.label} className="rounded-xl border border-neutral/30 bg-neutral/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dark/60">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-primary">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-dark/60">
            Réseau LinkedIn actuel: 1 membre associé ayant indiqué LVO-Ingénierie comme entreprise.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Pourquoi LVO</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl bg-neutral/5 p-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm font-semibold text-primary">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">Notre méthode en 3 étapes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-neutral/40 bg-white p-5 shadow-md shadow-primary/5">
              <h3 className="font-heading text-xl font-extrabold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-dark/80">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 rounded-2xl border border-primary/15 bg-primary p-7 text-white shadow-xl shadow-primary/20 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-accent">FAQ rapide</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <p className="text-sm font-bold">{faq.question}</p>
                  <p className="mt-2 text-sm text-white/85">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-white/20 bg-white/10 p-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral">Prêt à lancer votre projet ?</p>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Réservez un échange technique de 30 minutes pour cadrer vos objectifs, vos contraintes et votre planning.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-accent px-5 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-white hover:text-primary">
                PLANIFIER UN APPEL
              </Link>
              <Link href="/realisations" className="rounded-full border border-white/35 px-5 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-white/10">
                VOIR LES RÉALISATIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
