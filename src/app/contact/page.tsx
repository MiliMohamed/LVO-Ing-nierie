import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez LVO-Ingénierie pour vos projets d'ingénierie verticale à La Réunion.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-extrabold text-primary">PRÊT POUR L&apos;ASCENSION ?</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <aside className="rounded-sm border border-neutral/40 bg-primary p-6 text-white">
          <h2 className="font-heading text-2xl font-bold text-accent">Nos coordonnées</h2>
          <div className="mt-5 space-y-3 text-sm">
            <p>📍 Saint-Denis, La Réunion</p>
            <p>📞 022 235 773 80</p>
            <p>✉️ contact@lvo-ingenierie.com</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
