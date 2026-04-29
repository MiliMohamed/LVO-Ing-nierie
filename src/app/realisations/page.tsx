import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: "Explorez les références et projets réalisés par LVO-Ingénierie.",
};

const thumbs = ["/project-1.jpg", "/project-2.jpg", "/project-3.jpg", "/project-4.jpg"];

export default function RealisationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-extrabold text-primary">Nos Réalisations</h1>
      <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
        {thumbs.map((thumb) => (
          <Image key={thumb} src={thumb} alt="Projet LVO" width={360} height={200} className="h-44 w-80 snap-center rounded-sm object-cover" />
        ))}
      </div>

      <div className="mt-8">
        <ProjectCard
          image="/project-2.jpg"
          title="PROJET: VILLA SOPHIA"
          bullets={["Audit acoustique", "Optimisation de flux", "Collaboration architecturale"]}
          tags={["RÉSIDENTIEL", "TERTIAIRE", "MODERNISATION"]}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {thumbs.map((thumb) => (
          <Image key={`mini-${thumb}`} src={thumb} alt="Miniature projet" width={280} height={180} className="h-36 w-full rounded-sm object-cover" />
        ))}
      </div>
    </section>
  );
}
