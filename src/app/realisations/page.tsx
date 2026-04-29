"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const carouselImages = [
  {
    src: "/image_1_1_top_left.png",
    alt: "Villa moderne en façade",
    label: "Villa premium",
  },
  {
    src: "/image_1_2_top_right.png",
    alt: "Projet architectural résidentiel",
    label: "Résidentiel",
  },
  {
    src: "/image_1_3_bottom_left.png",
    alt: "Installation technique bâtiment",
    label: "Ingénierie",
  },
  {
    src: "/image_1_4_bottom_right.png",
    alt: "Exécution chantier",
    label: "Modernisation",
  }
  
];

const projectThumbnails = [
  { src: "/image_1_1_top_left.png", alt: "Façade villa moderne" },
  { src: "/image_1_2_top_right.png", alt: "Résidence haut standing" },
  { src: "/image_2_1_top_left.png", alt: "Vue projet technique" },
  { src: "/image_2_2_top_right.png", alt: "Zone ingénierie verticale" },
];

export default function RealisationsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = carouselImages[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
        Projets signés LVO
      </div>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Nos Réalisations</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-dark/80">
        Des références terrain mêlant ingénierie verticale, modernisation d&apos;équipements et accompagnement de projets résidentiels.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-neutral/40 bg-white/95 shadow-xl shadow-primary/10">
        <div className="relative">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={1280}
            height={720}
            className="h-[340px] w-full object-cover md:h-[420px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent" />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-accent/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">
            {activeImage.label}
          </span>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/90 p-2.5 text-primary shadow-lg transition hover:scale-105 hover:bg-white"
            aria-label="Image précédente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/90 p-2.5 text-primary shadow-lg transition hover:scale-105 hover:bg-white"
            aria-label="Image suivante"
          >
            →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 bg-neutral/10 p-4 sm:grid-cols-4">
          {carouselImages.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-sm border ${
                activeIndex === index ? "border-accent shadow-md shadow-accent/30" : "border-transparent"
              }`}
              aria-label={`Afficher ${item.label}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image src={item.src} alt={item.alt} width={360} height={220} className="h-24 w-full object-cover transition duration-300 hover:brightness-105" />
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ProjectCard
          image="/image_1_1_top_left.png"
          title="PROJET: VILLA SOPHIA"
          bullets={["Audit ascenseurs privatifs", "Optimisation des flux occupants", "Modernisation et conformité technique"]}
          tags={["RÉSIDENTIEL", "TERTIAIRE", "MODERNISATION"]}
        />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projectThumbnails.map((thumb) => (
          <motion.div key={thumb.src} whileHover={{ y: -6 }}>
            <Image
              src={thumb.src}
              alt={thumb.alt}
              width={380}
              height={240}
              className="h-44 w-full rounded-xl border border-neutral/40 object-cover shadow-lg shadow-primary/10 transition duration-300 hover:shadow-xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
