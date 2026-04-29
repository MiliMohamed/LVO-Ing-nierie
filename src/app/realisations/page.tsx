"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";

const carouselImages = [
  {
    src: "/project-1.jpg",
    alt: "Cabine d'ascenseur moderne",
    label: "Ascenseurs",
  },
  {
    src: "/project-2.jpg",
    alt: "Portes d'ascenseur en hall",
    label: "Accès vertical",
  },
  {
    src: "/project-3.jpg",
    alt: "Villa contemporaine blanche",
    label: "Villa résidentielle",
  },
  {
    src: "/project-4.jpg",
    alt: "Maison haut standing",
    label: "Projet premium",
  },
];

const projectThumbnails = [
  { src: "/project-4.jpg", alt: "Façade villa moderne" },
  { src: "/project-1.jpg", alt: "Ascenseurs hall propre" },
  { src: "/project-2.jpg", alt: "Mécanisme vertical" },
  { src: "/project-3.jpg", alt: "Zone ascenseurs urbaine" },
];

export default function RealisationsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = useMemo(() => carouselImages[activeIndex], [activeIndex]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-extrabold text-primary">Nos Réalisations</h1>
      <p className="mt-3 max-w-3xl text-dark/80">
        Des références terrain mêlant ingénierie verticale, modernisation d&apos;équipements et accompagnement de projets résidentiels.
      </p>

      <div className="mt-8 overflow-hidden rounded-sm border border-neutral/50 bg-white shadow-lg">
        <div className="relative">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={1280}
            height={720}
            className="h-[340px] w-full object-cover md:h-[420px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-sm bg-primary/85 px-3 py-1 text-xs font-bold tracking-wide text-white">
            {activeImage.label}
          </span>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow hover:bg-white"
            aria-label="Image précédente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow hover:bg-white"
            aria-label="Image suivante"
          >
            →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
          {carouselImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-sm border ${
                activeIndex === index ? "border-accent" : "border-transparent"
              }`}
              aria-label={`Afficher ${item.label}`}
            >
              <Image src={item.src} alt={item.alt} width={320} height={180} className="h-20 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ProjectCard
          image="/project-4.jpg"
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
