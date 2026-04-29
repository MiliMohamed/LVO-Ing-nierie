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
            { title: "AUDIT", description: services[0].description },
            { title: "MOE", description: services[1].description },
            { title: "PROJETS", description: services[2].description },
          ].map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <ServiceCard title={service.title} description={service.description} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
