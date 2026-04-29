import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos Prestations",
  description: "Découvrez les prestations LVO-Ingénierie pour vos projets d'ingénierie verticale.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-primary">Nos Prestations</h1>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.06}>
            <ServiceCard title={service.title} description={service.description} details={service.details} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
