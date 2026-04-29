import type { Metadata } from "next";
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
      <section className="hatch-overlay bg-primary">
        <div className="mx-auto max-w-6xl px-4 py-28 text-white">
          <Reveal>
            <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-tight md:text-6xl">
              L&apos;INGÉNIERIE VERTICALE RÉINVENTÉE
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-neutral">
              Audit, maîtrise d&apos;oeuvre et modernisation technique pour ascenseurs, escaliers mécaniques et convoyeurs.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/services" className="mt-8 inline-block rounded-sm bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-primary">
              DÉCOUVRIR NOS SOLUTIONS
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
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
