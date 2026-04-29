"use client";

import { useMemo } from "react";

type HoverWordTextProps = Readonly<{
  text: string;
  as?: "p" | "span" | "div";
  className?: string;
}>;

const hints: Record<string, string> = {
  lvo: "LVO-Ingénierie: bureau d'études indépendant spécialisé mobilité verticale/horizontale.",
  "lvo-ingenierie": "Marque et entité juridique du bureau d'études.",
  reunion: "Département et région: contexte local (climat, insularité, normes).",
  "la reunion": "Zone d'intervention principale et ancrage opérationnel.",
  expertise: "Compétence technique et méthode pour analyser, concevoir et sécuriser.",
  technique: "Dimensioning, conformité, performance, risques et solutions.",
  ascenseurs: "Équipements de transport vertical: conception, exploitation, modernisation.",
  "escaliers mecaniques": "Mobilité inclinée: sécurité, conformité, disponibilité.",
  "trottoirs roulants": "Mobilité horizontale: flux, sécurité, maintenance.",
  travolators: "Couloirs roulants longue distance: trafic, sécurité, disponibilité.",
  "maitrise d'oeuvre": "Pilotage technique et contractuel des études et travaux.",
  moe: "Maîtrise d'oeuvre: CCTP, consultation, suivi chantier, réception.",
  amo: "Assistance à maîtrise d'ouvrage: pilotage MOA, contrats, performance.",
  audit: "État des lieux, écarts réglementaires, risques, plan d'actions.",
  maintenance: "Prévention, contrôle des prestataires, optimisation des coûts.",
  "etudes de trafic": "Dimensionnement et qualité de service des déplacements verticaux.",
  adsimulo: "Logiciel de simulation de trafic ascenseurs (scénarios, files d'attente).",
  advisuo: "Visualisation 3D du comportement des ascenseurs et des flux usagers.",
  bim: "Intégration possible des livrables dans les environnements BIM.",
  "portes automatiques": "Sécurité, normes, intégration architecturale et exploitation.",
  "ocean indien": "Rayonnement régional depuis La Réunion.",
  "france metropolitaine": "Support national pour projets et expertise à distance.",
  independance: "Neutralité vis-à-vis des fabricants pour défendre l'intérêt MOA.",
  impartialite: "Analyse factuelle sans parti pris.",
  engagement: "Réactivité, disponibilité, implication sur la durée du projet.",
  rigueur: "Méthode, traçabilité, exigence documentaire et réglementaire.",
  conseil: "Aide à la décision: arbitrages techniques, financiers et patrimoniaux.",
  "gerant fondateur": "Responsable légal et direction technique de la structure.",
  "parcours professionnel": "Historique des missions et expériences terrain.",
  "ressources et materiel": "Moyens informatiques, logiciels et outils de mesure.",
  "fibre haut debit": "Connectivité professionnelle pour échanges et livrables.",
  sauvegarde: "Protection des données et continuité d'activité.",
  autocad: "DAO/CAO pour plans, implantations et interfaces architecturales.",
  crm: "Suivi clients, projets et performance commerciale.",
  henning: "Instrumentation pour analyse vibratoire et qualité de montage.",
  gyroscope: "Mesure d'accélération / vibrations sur équipements.",
  "monte charges": "Équipements de levage marchandises: réglementation et exploitation.",
  "helistation": "Spécificité technique liée aux contraintes d'accès et d'exploitation.",
  "duty free": "Zone commerciale aéroportuaire: contraintes d'exploitation et délais.",
  predestination: "Optimisation des affectations de cabines pour réduire l'attente.",
  sidr: "Référence patrimoine / bailleur: suivi et optimisation.",
  chu: "Établissement de santé: exigences de disponibilité et sécurité.",
  aeroport: "Site sensible: flux, sécurité, maintenance multi-équipements.",
  gher: "Site hospitalier: continuité de service et conformité.",
};

function stripAccents(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function normalizeKey(raw: string) {
  const trimmed = raw.replace(/^[^\p{L}\p{N}]+/u, "").replace(/[^\p{L}\p{N}]+$/u, "");
  return stripAccents(trimmed).toLowerCase();
}

function tooltipFor(rawWord: string) {
  const key = normalizeKey(rawWord);
  if (!key) {
    return "Sélection du texte";
  }

  return hints[key] ?? `Terme: ${rawWord}`;
}

export function HoverWordText({ text, as: Component = "span", className }: HoverWordTextProps) {
  const nodes = useMemo(() => {
    return text.split(/(\s+)/u).map((part, index) => {
      if (/^\s+$/u.test(part)) {
        return <span key={`ws-${index}`}>{part}</span>;
      }

      if (!/[\p{L}\p{N}]/u.test(part)) {
        return <span key={`sym-${index}`}>{part}</span>;
      }

      return (
        <span key={`w-${index}`} className="relative inline-block group align-baseline">
          <span className="border-b border-dotted border-primary/25">{part}</span>
          <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 hidden w-max max-w-xs -translate-x-1/2 rounded-xl border border-neutral/30 bg-white px-3 py-2 text-xs font-medium leading-snug text-dark shadow-xl group-hover:block">
            {tooltipFor(part)}
          </span>
        </span>
      );
    });
  }, [text]);

  return <Component className={className}>{nodes}</Component>;
}
