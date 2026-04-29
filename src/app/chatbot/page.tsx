import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

const quickActions = [
  "Suivre mon dossier chantier",
  "Telecharger le dernier CR",
  "Voir l'avancement du devis",
  "Planifier une reunion",
];

const sampleMessages = [
  { from: "client", text: "Bonjour, ou en est le dossier Villa Sophia ?" },
  { from: "bot", text: "Le dossier est a 82% d'avancement. Prochaine etape: validation DPGF prevue vendredi." },
  { from: "client", text: "Peux-tu m'envoyer le dernier compte-rendu ?" },
  { from: "bot", text: "C'est fait. Le lien securise est disponible dans votre espace client." },
];

export const metadata: Metadata = {
  title: "Chatbot Client",
  description: "Un assistant conversationnel pour repondre aux clients et partager les informations projet.",
};

export default function ChatbotPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Experience client
        </div>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          Chatbot clients LVO
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-dark/80">
          Reponses instantanees, suivi de projet et partage de documents en conversation naturelle, 24/7.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
            <h2 className="font-heading text-2xl font-extrabold text-primary">Simulation de conversation</h2>
            <div className="mt-5 space-y-3 rounded-xl bg-neutral/10 p-4">
              {sampleMessages.map((message, index) => (
                <div
                  key={`${message.from}-${index}`}
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.from === "bot"
                      ? "mr-auto bg-primary text-white"
                      : "ml-auto border border-neutral/30 bg-white text-primary"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-dashed border-neutral/40 bg-white p-3 text-sm text-dark/70">
              Module preconfigure pour connecteurs WhatsApp, webchat et email.
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-2xl border border-accent/20 bg-accent/10 p-6 shadow-md shadow-accent/15">
            <h2 className="font-heading text-xl font-extrabold text-primary">Actions rapides</h2>
            <div className="mt-4 grid gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className="rounded-xl border border-primary/20 bg-white px-4 py-2 text-left text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  {action}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-dark/70">
              Satisfaction moyenne: 4.8 / 5
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
