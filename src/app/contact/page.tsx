import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez LVO-Ingénierie pour vos projets d'ingénierie verticale à La Réunion.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <p className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
        Contact LVO-Ingénierie
      </p>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
        PRÊT POUR L&apos;ASCENSION ?
      </h1>
      <p className="mt-3 max-w-3xl text-dark/80">
        Envoyez votre besoin technique et recevez un cadrage clair de votre projet: audit, maîtrise d&apos;oeuvre,
        modernisation ou accompagnement documentaire.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <aside className="rounded-2xl border border-primary/15 bg-primary p-6 text-white shadow-xl shadow-primary/20">
          <h2 className="font-heading text-2xl font-bold text-accent">Nos coordonnées</h2>
          <div className="mt-5 space-y-3 text-sm text-white/95">
            <p>📍 Saint-Denis, La Réunion</p>
            <p>📞 0692053952</p>
            <p>✉️ contact@lvo-ingenierie.com</p>
          </div>
          <div className="mt-6 rounded-xl border border-white/20 bg-white/10 p-4 text-sm">
            <p className="font-semibold">Disponibilité</p>
            <p className="mt-1 text-white/90">Lundi - Vendredi: 08h00 - 18h00</p>
            <p className="mt-1 text-white/90">Réponse moyenne: moins de 24h</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
