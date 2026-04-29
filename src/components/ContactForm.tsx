"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  company: z.string().min(2, "Entreprise requise"),
  phone: z.string().min(8, "Téléphone invalide"),
  email: z.string().min(5, "Email invalide").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email invalide"),
  projectType: z.string().min(1, "Choisissez un type de projet"),
  need: z.string().min(10, "Merci de préciser votre besoin"),
  site: z.string().min(3, "Merci de préciser le site concerné"),
  timeline: z.string().min(3, "Merci d'indiquer le délai souhaité"),
  documents: z.string().min(3, "Merci d'indiquer les documents disponibles"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5 md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
            Nom complet
          </label>
          <input
            id="contact-name"
            {...register("name")}
            placeholder="Mohamed Mili"
            className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
            Entreprise
          </label>
          <input
            id="contact-company"
            {...register("company")}
            placeholder="LVO-Ingénierie"
            className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          />
        </div>
      </div>
      {errors.name && <p className="text-xs text-accent">{errors.name.message}</p>}
      {errors.company && <p className="text-xs text-accent">{errors.company.message}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
            Email
          </label>
          <input
            id="contact-email"
            {...register("email")}
            placeholder="contact@entreprise.com"
            className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
            Téléphone
          </label>
          <input
            id="contact-phone"
            {...register("phone")}
            placeholder="0692053952"
            className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          />
        </div>
      </div>
      {errors.email && <p className="text-xs text-accent">{errors.email.message}</p>}
      {errors.phone && <p className="text-xs text-accent">{errors.phone.message}</p>}

      <div>
        <label htmlFor="contact-project-type" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
          Type de projet
        </label>
        <select
          id="contact-project-type"
          {...register("projectType")}
          className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
        >
          <option value="">Sélectionnez une prestation</option>
          <option value="audit">Audit technique</option>
          <option value="moe">Maîtrise d&apos;oeuvre</option>
          <option value="modernisation">Modernisation</option>
          <option value="cctp-dpgf">CCTP / DPGF</option>
          <option value="automatisation">Automatisation IA</option>
          <option value="suivi">Suivi de chantier</option>
        </select>
      </div>
      {errors.projectType && <p className="text-xs text-accent">{errors.projectType.message}</p>}

      <div>
        <label htmlFor="contact-need" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
          Besoin
        </label>
        <textarea
          id="contact-need"
          {...register("need")}
          placeholder="Décrivez votre besoin (audit, modernisation, assistance MOE...)"
          rows={3}
          className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
        />
      </div>
      {errors.need && <p className="text-xs text-accent">{errors.need.message}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-site" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
            Site concerné
          </label>
          <input
            id="contact-site"
            {...register("site")}
            placeholder="Ex: Résidence Villa Sophia, Saint-Denis"
            className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          />
          {errors.site && <p className="mt-1 text-xs text-accent">{errors.site.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-timeline" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
            Délais souhaités
          </label>
          <input
            id="contact-timeline"
            {...register("timeline")}
            placeholder="Ex: démarrage sous 3 semaines"
            className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          />
          {errors.timeline && <p className="mt-1 text-xs text-accent">{errors.timeline.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-documents" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-dark/70">
          Documents disponibles
        </label>
        <textarea
          id="contact-documents"
          {...register("documents")}
          placeholder="Ex: plans, CCTP existant, rapport d'audit, photos, CR de chantier..."
          rows={3}
          className="w-full rounded-xl border border-neutral/60 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
        />
      </div>
      {errors.documents && <p className="text-xs text-accent">{errors.documents.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-accent px-6 py-2.5 text-sm font-bold tracking-wide text-white transition hover:bg-primary disabled:opacity-60"
      >
        {isSubmitting ? "ENVOI..." : "CONTACT"}
      </button>
      {submitted && <p className="text-sm font-semibold text-primary">Merci, nous vous recontactons rapidement.</p>}
    </form>
  );
}
