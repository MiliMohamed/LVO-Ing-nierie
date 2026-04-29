import type { Metadata } from "next";
import Image from "next/image";
import { HoverWordText } from "@/components/HoverWordText";
import { Reveal } from "@/components/Reveal";

const contextPoints = ["Vieillissement de la population", "Insularité du territoire", "Bâtiments de plus en plus élevés", "Contraintes climatiques", "Exigence accrue des usagers"];

const values = ["Indépendance", "Impartialité", "Engagement", "Rigueur", "Conseil"];



const keyMissions = [
  "Conception en neuf/réhabilitation avec solutions adaptées au site",
  "Études de trafic avancées avec ADSimulo et ADVisuo",
  "Création d'ascenseurs dans l'existant (études de faisabilité)",
  "Audit et diagnostic technique des équipements existants",
  "Maîtrise d'oeuvre complète: études, suivi, réception",
  "Assistance à maîtrise d'ouvrage et pilotage maintenance",
];

const resources = [
  "Fibre haut débit, serveur de messagerie, sauvegarde sécurisée",
  "2 PC portables (ASUS Expertbook + DELL i7), 1 iPhone 15 Pro",
  "Copieur multifonction Brother laser couleur",
  "Microsoft Office 360, AutoCAD, CRM, application maintenance management",
  "ADSimulo et ADVisuo (simulation et visualisation trafic)",
  "Accéléromètre gyroscope 3 axes HENNING",
];

const career = [
  "2009-2010: HISPANO-SUIZA - Dessinateur projeteur (alternance)",
  "2010-2011: NEW-MAT - Ingénieur d'affaire robotique (alternance)",
  "2011-2015: ATS-KONE - Ingénieur technico-commercial",
  "2015-2018: MISTRAL - Responsable création ascenseurs sur mesure",
  "2018-2019: CASTE.ING - Ingénieur chargé d'affaires ascenseurs",
  "2019-2026: MOVVEO - Ingénieur conseil associé",
  "2026: Création de LVO-Ingénierie - Gérant fondateur",
];

const projects = [
  "Grand Palais",
  "Hôpital Rive de Seine",
  "Tour Neptune",
  "Université Paris Saclay",
  "Université de la Réunion",
  "CHU Saint-Denis La Réunion",
  "GHER La Réunion",
  "Hôtel NOVOTEL Tour Eiffel",
  "Tour KUPKA B",
  "Campus HANAMI Rueil-Malmaison",
  "Patrimoine SIDR, SODIAC, CDC, SEMADER",
  "Aéroport La Réunion",
  "Patrimoine Paris Habitat",
  "Patrimoine OSICA",
  "Patrimoine Gecina",
  "Patrimoine Orange",
  "Patrimoine Orpea",
  "Boutique Hermès Paris",
  "Boutique Décathlon Saint-Denis",
  "Hotels Mélia Paris",
  "Bord de Seine",
  "Open Issy-les-Moulineaux",
  "Bureaux de la colline",
];

const worksRefs = [
  {
    ref: "CHU La Réunion",
    operation:
      "Remplacement complet de 24 ascenseurs et 3 monte-charges et modernisation de 2 ascenseurs dont un hélistation",
    client: "M. NICOLAS, Chargé opérations, 02 62 90 61 89",
    workType: "Réhabilitation / remplacement / modernisation",
    mission: "MOE",
    amount: "5 580 000 € HT",
  },
  {
    ref: "Aéroport La Réunion",
    operation: "Remplacement d'un monte-charges Duty Free",
    client: "M. PIBROC, Responsable technique, 06 92 70 25 95",
    workType: "Réhabilitation / remplacement",
    mission: "MOE",
    amount: "74 000 € HT",
  },
  {
    ref: "Hôtel NOVOTEL Tour Eiffel",
    operation: "Modernisation de 6 ascenseurs avec mise en place prédestination",
    client: "M. HAMDANI, Directeur technique, 06 24 27 32 95",
    workType: "Réhabilitation / modernisation",
    mission: "MOE",
    amount: "3 200 000 € HT",
  },
  {
    ref: "SIDR",
    operation: "Remplacement complet de 4 ascenseurs",
    client: "M. PRIGENT, Directeur technique, 02 62 94 74 35",
    workType: "Réhabilitation / remplacement",
    mission: "MOE",
    amount: "296 000 € HT",
  },
];

const maintenanceRefs = [
  {
    ref: "Regroupement : SIDR-CDC-SODIAC-SEMADER",
    operation: "Suivi de maintenance 260 ascenseurs",
    client: "M. PRIGENT, Directeur technique, 02 62 94 74 35",
    workType: "Maintenance",
    mission: "AMO",
  },
  {
    ref: "CHU La Réunion",
    operation: "Suivi de maintenance 34 ascenseurs",
    client: "M. LAHIRE, Responsable ascenseurs, 02 62 90 59 82",
    workType: "Maintenance",
    mission: "AMO",
  },
  {
    ref: "Aéroport La Réunion",
    operation: "Suivi de maintenance 15 ascenseurs, 4 monte-charges, 10 escalators",
    client: "M. SAINT-FIRMIN, Responsable maintenance, 02 62 48 81 50",
    workType: "Maintenance",
    mission: "AMO",
  },
  {
    ref: "GHER",
    operation: "Suivi de maintenance 10 ascenseurs",
    client: "M. HAYANO, Responsable technique, 02 98 84 42",
    workType: "Maintenance",
    mission: "AMO",
  },
  {
    ref: "Bureaux des collines",
    operation: "Suivi de maintenance 43 ascenseurs",
    client: "M. DELAVAULT, Responsable technique, 06 78 71 42 33",
    workType: "Maintenance",
    mission: "AMO",
  },
];

export const metadata: Metadata = {
  title: "À propos",
  description: "Présentation complète de LVO-Ingénierie: missions, valeurs, fondateur, ressources et références.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <p className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          À propos nous
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          LVO-Ingénierie à La Réunion
        </h1>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
          <p className="text-sm leading-7 text-dark/80">
            LVO-Ingénierie est créée en 2026 à La Réunion pour répondre à un besoin croissant d&apos;expertise
            technique et d&apos;accompagnement des maîtres d&apos;ouvrage sur les ascenseurs et escaliers mécaniques.
            Fort de plus de 15 ans d&apos;expérience, Hatem Lembarki fonde un bureau d&apos;études réunionnais indépendant
            spécialisé en ingénierie des transports verticaux et horizontaux.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {contextPoints.map((point) => (
              <p key={point} className="rounded-xl bg-neutral/5 px-3 py-2 text-sm font-semibold text-primary">
                {point}
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-dark/80">
            LVO-Ingénierie s&apos;engage également dans le développement des compétences locales, via des collaborations
            avec les écoles et centres de formation techniques.
          </p>
        </article>
        <div className="grid gap-4">
          <Image src="/images/lvo/image_1.png" alt="LVO ingénierie visuel équipe" width={900} height={520} className="rounded-2xl border border-neutral/30 object-cover" />
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-primary/15 bg-primary p-6 text-white shadow-xl shadow-primary/20">
          <h2 className="font-heading text-2xl font-extrabold text-accent">Notre métier et objectif</h2>
          <p className="mt-3 text-sm leading-7 text-white/90">
            Nous sommes spécialisés en expertise, contrôle, maîtrise d&apos;oeuvre et assistance à maîtrise d&apos;ouvrage
            dans le domaine des ascenseurs, portes automatiques, escaliers mécaniques, trottoirs roulants et
            travolators. Notre mission consiste à conseiller et accompagner nos clients à chaque étape du cycle de vie
            de leurs équipements.
          </p>
          <p className="mt-3 text-sm leading-7 text-white/90">
            Objectif: garantir des installations conformes, adaptées, sécurisées et performantes, tout en optimisant
            durablement les coûts d&apos;investissement et d&apos;exploitation.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
          <h2 className="font-heading text-2xl font-extrabold text-primary">Implantation et couverture</h2>
          <p className="mt-3 text-sm leading-7 text-dark/80">
            LVO-Ingénierie accompagne ses clients depuis La Réunion pour l&apos;océan Indien, et depuis la France
            métropolitaine pour une couverture nationale et internationale.
          </p>
          <Image src="/images/lvo/image_2.png" alt="Carte de couverture LVO" width={900} height={420} className="mt-4 rounded-xl border border-neutral/30 object-cover" />
        
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
        <h2 className="font-heading text-2xl font-extrabold text-primary">Nos valeurs</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
          {values.map((v) => (
            <div key={v} className="rounded-xl border border-neutral/30 bg-neutral/5 p-3 text-center text-sm font-bold text-primary">
              {v}
            </div>
          ))}
        </div>
        <Image src="/images/lvo/image_9.png" alt="Schéma des valeurs LVO" width={1200} height={520} className="mt-4 rounded-xl border border-neutral/30 object-cover" />
      </div>

      <div className="mt-8 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
        <h2 className="font-heading text-2xl font-extrabold text-primary">Nos missions détaillées</h2>
        <ul className="mt-4 space-y-2 text-sm text-dark/85">
          {keyMissions.map((mission) => (
            <li key={mission} className="rounded-xl bg-neutral/5 p-3">
              {mission}
            </li>
          ))}
        </ul>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">

        <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
        <Image src="/images/lvo/image_4.png" alt="Création ascenseur dans l'existant" width={300} height={300} className="rounded-xl border border-neutral/30 object-cover" />

          <h2 className="font-heading text-2xl font-extrabold text-primary">Moyens humains</h2>
          <ul className="mt-3 space-y-2 text-sm text-dark/85">
            <li className="rounded-xl bg-neutral/5 p-3">Hatem Lembarki - Gérant fondateur</li>
            <li className="rounded-xl bg-neutral/5 p-3">Ingénieur conseil - en cours de recrutement</li>
          </ul>
          <h3 className="mt-5 font-heading text-xl font-extrabold text-primary">Parcours professionnel</h3>
          <ul className="mt-3 space-y-2 text-sm text-dark/85">
            {career.map((item) => (
              <li key={item} className="rounded-xl bg-neutral/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
          <h2 className="font-heading text-2xl font-extrabold text-primary">Ressources et matériel</h2>
          <ul className="mt-3 space-y-2 text-sm text-dark/85">
            {resources.map((item) => (
              <li key={item} className="rounded-xl bg-neutral/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
        <h2 className="font-heading text-2xl font-extrabold text-primary">Quelques projets réalisés</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <p key={project} className="rounded-xl border border-neutral/30 bg-neutral/5 px-3 py-2 text-sm font-semibold text-primary">
              {project}
            </p>
          ))}
        </div>
        <Image src="/images/lvo/image_10.png" alt="Montage des projets de référence" width={1400} height={560} className="mt-5 rounded-xl border border-neutral/30 object-cover" />
      </div>

      <div className="mt-8 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
        <h2 className="font-heading text-2xl font-extrabold text-primary">Quelques références suivies travaux</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-neutral/30 text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3">N°</th>
                <th className="p-3">Réf.</th>
                <th className="p-3">Nature de l&apos;opération</th>
                <th className="p-3">Maître d&apos;ouvrage</th>
                <th className="p-3">Type de travaux</th>
                <th className="p-3">Type de mission</th>
                <th className="p-3">Montant des travaux</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {worksRefs.map((row, index) => (
                <tr key={row.ref} className="border-t border-neutral/20">
                  <td className="p-3 font-bold text-primary">{index + 1}</td>
                  <td className="p-3 font-bold">
                    <HoverWordText text={row.ref} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.operation} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.client} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.workType} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.mission} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.amount} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
        <h2 className="font-heading text-2xl font-extrabold text-primary">Quelques références suivies de maintenance</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-neutral/30 text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3">N°</th>
                <th className="p-3">Réf.</th>
                <th className="p-3">Nature de l&apos;opération</th>
                <th className="p-3">Maître d&apos;ouvrage</th>
                <th className="p-3">Type de travaux</th>
                <th className="p-3">Type de mission</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {maintenanceRefs.map((row, index) => (
                <tr key={`${row.ref}-${index}`} className="border-t border-neutral/20">
                  <td className="p-3 font-bold text-primary">{index + 1}</td>
                  <td className="p-3 font-bold">
                    <HoverWordText text={row.ref} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.operation} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.client} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.workType} />
                  </td>
                  <td className="p-3">
                    <HoverWordText text={row.mission} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}