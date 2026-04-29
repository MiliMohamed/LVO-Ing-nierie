"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  projectType: z.string().min(1, "Choisissez un type de projet"),
  message: z.string().min(10, "Message trop court"),
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-sm border border-neutral/40 bg-white p-6 shadow-sm">
      <input {...register("name")} placeholder="Name" className="w-full border border-neutral/60 px-3 py-2 text-sm outline-none focus:border-accent" />
      {errors.name && <p className="text-xs text-accent">{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" className="w-full border border-neutral/60 px-3 py-2 text-sm outline-none focus:border-accent" />
      {errors.email && <p className="text-xs text-accent">{errors.email.message}</p>}

      <select {...register("projectType")} className="w-full border border-neutral/60 px-3 py-2 text-sm outline-none focus:border-accent">
        <option value="">Project Type</option>
        <option value="audit">Audit technique</option>
        <option value="moe">Maîtrise d&apos;oeuvre</option>
        <option value="modernisation">Modernisation</option>
      </select>
      {errors.projectType && <p className="text-xs text-accent">{errors.projectType.message}</p>}

      <textarea {...register("message")} placeholder="Message" rows={5} className="w-full border border-neutral/60 px-3 py-2 text-sm outline-none focus:border-accent" />
      {errors.message && <p className="text-xs text-accent">{errors.message.message}</p>}

      <button type="submit" disabled={isSubmitting} className="rounded-sm bg-accent px-6 py-2 text-sm font-bold text-white hover:bg-primary disabled:opacity-60">
        {isSubmitting ? "ENVOI..." : "CONTACT"}
      </button>
      {submitted && <p className="text-sm font-semibold text-primary">Merci, nous vous recontactons rapidement.</p>}
    </form>
  );
}
