import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: "Explorez les références et projets réalisés par LVO-Ingénierie.",
};

const carouselImages = [
  {
    src: "https://source.unsplash.com/3UQtX0k6Wac/1600x900",
    alt: "Cabine d'ascenseur moderne",
    label: "Ascenseurs",
  },
  {
    src: "https://source.unsplash.com/SHcQ-AOLI9M/1600x900",
    alt: "Portes d'ascenseur en hall",
    label: "Accès vertical",
  },
  {
    src: "https://source.unsplash.com/A7zD6YdPSYo/1600x900",
    alt: "Villa contemporaine blanche",
    label: "Villa résidentielle",
  },
  {
    src: "https://source.unsplash.com/J_pSdNTqncI/1600x900",
    alt: "Maison haut standing",
    label: "Projet premium",
  },
];

const projectThumbnails = [
  { src: "https://source.unsplash.com/3CVxzgmV_OE/1200x800", alt: "Façade villa moderne" },
  { src: "https://source.unsplash.com/N92WYHpXsAE/1200x800", alt: "Ascenseurs hall propre" },
  { src: "https://source.unsplash.com/gBytaMpZz4w/1200x800", alt: "Mécanisme vertical" },
  { src: "https://source.unsplash.com/I_yEDgQ_woc/1200x800", alt: "Zone ascenseurs urbaine" },
];

export default function RealisationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-extrabold text-primary">Nos Réalisations</h1>
      <p className="mt-3 max-w-3xl text-dark/80">
        Des références terrain mêlant ingénierie verticale, modernisation d&apos;équipements et accompagnement de projets résidentiels.
      </p>
      <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4">
        {carouselImages.map((item) => (
          <article key={item.src} className="group relative min-w-[320px] snap-center overflow-hidden rounded-sm shadow-lg">
            <Image src={item.src} alt={item.alt} width={480} height={280} className="h-48 w-80 object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute bottom-3 left-3 rounded-sm bg-primary/85 px-3 py-1 text-xs font-bold tracking-wide text-white">
              {item.label}
            </span>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <ProjectCard
          image="https://source.unsplash.com/A7zD6YdPSYo/1600x900"
          title="PROJET: VILLA SOPHIA"
          bullets={["Audit ascenseurs privatifs", "Optimisation des flux occupants", "Modernisation et conformité technique"]}
          tags={["RÉSIDENTIEL", "TERTIAIRE", "MODERNISATION"]}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projectThumbnails.map((thumb) => (
          <Image key={thumb.src} src={thumb.src} alt={thumb.alt} width={280} height={180} className="h-36 w-full rounded-sm object-cover" />
        ))}
      </div>
    </section>
  );
}
