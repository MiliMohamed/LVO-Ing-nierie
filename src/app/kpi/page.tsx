import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

const kpis = [
  { label: "Missions en cours", value: "12", trend: "+3 ce mois" },
  { label: "Missions clôturées", value: "48", trend: "+9 ce trimestre" },
  { label: "Taux de remise à temps", value: "96%", trend: "SLA maîtrisé" },
  { label: "CA en portefeuille", value: "184K EUR", trend: "Devis signés +22%" },
  { label: "Marge moyenne", value: "27%", trend: "+2.4 pts" },
  { label: "Temps moyen traitement", value: "3.1 j", trend: "-0.8 j" },
  { label: "NPS clients", value: "72", trend: "Satisfaction élevée" },
  { label: "Taux conversion devis", value: "41%", trend: "+6 pts" },
];

const alerts = [
  "Réunion chantier CADJEE - jeudi 08:30",
  "Date limite remise CCTP Villa Sophia - J+2",
  "Validation client DPGF ANAXAGORE en attente",
];

const recentActivities = [
  { time: "Aujourd'hui 09:18", text: "CR chantier CADJEE généré et envoyé à 8 participants." },
  { time: "Aujourd'hui 11:42", text: "Validation interne DPGF Villa Sophia effectuée." },
  { time: "Hier 16:05", text: "Nouveau devis ANAXAGORE créé (lot modernisation)." },
  { time: "Hier 18:37", text: "Alerte capteur B2 résolue après maintenance préventive." },
];

const portfolio = [
  { segment: "Résidentiel", projects: 7, amount: "72K EUR" },
  { segment: "Tertiaire", projects: 4, amount: "58K EUR" },
  { segment: "Public", projects: 3, amount: "54K EUR" },
];

export const metadata: Metadata = {
  title: "KPI Dashboard",
  description: "Suivez les indicateurs clés de LVO-Ingénierie: missions, délais, devis et alertes.",
};

export default function KpiPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Tableau de bord KPI</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-dark/80">
          Vue consolidée de votre activité: suivi des missions, alertes délais, avancement chantier et performance commerciale.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Reveal key={kpi.label} delay={index * 0.06}>
            <article className="rounded-2xl border border-neutral/40 bg-white p-5 shadow-md shadow-primary/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dark/60">{kpi.label}</p>
              <p className="mt-3 font-heading text-3xl font-extrabold text-primary">{kpi.value}</p>
              <p className="mt-2 text-sm font-semibold text-accent">{kpi.trend}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
            <h2 className="font-heading text-2xl font-extrabold text-primary">Avancement chantier</h2>
            <div className="mt-5 space-y-4">
              <ProgressRow title="Villa Sophia - modernisation ascenseur" percent={82} />
              <ProgressRow title="CADJEE - audit multi-sites" percent={67} />
              <ProgressRow title="ANAXAGORE - dossier RC/CCTP" percent={54} />
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="rounded-2xl border border-primary/15 bg-primary p-6 text-white shadow-xl shadow-primary/20">
            <h2 className="font-heading text-xl font-extrabold text-accent">Alertes & échéances</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {alerts.map((alert) => (
                <li key={alert} className="rounded-xl bg-white/10 p-3">
                  {alert}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
            <h2 className="font-heading text-2xl font-extrabold text-primary">Pipeline commercial</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {portfolio.map((line) => (
                <div key={line.segment} className="rounded-xl border border-neutral/30 bg-neutral/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dark/60">{line.segment}</p>
                  <p className="mt-2 text-2xl font-extrabold text-primary">{line.projects} projets</p>
                  <p className="mt-1 text-sm font-semibold text-accent">{line.amount}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
            <h2 className="font-heading text-xl font-extrabold text-primary">Santé opérationnelle</h2>
            <div className="mt-4 space-y-3 text-sm">
              <HealthRow label="Charge équipe études" value="78%" tone="good" />
              <HealthRow label="Risques planning" value="Modéré" tone="medium" />
              <HealthRow label="Qualité livrables" value="98%" tone="good" />
              <HealthRow label="Incidents ouverts" value="2" tone="medium" />
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <article className="mt-8 rounded-2xl border border-primary/15 bg-primary p-6 text-white shadow-xl shadow-primary/20">
          <h2 className="font-heading text-2xl font-extrabold text-accent">Activité récente</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {recentActivities.map((activity) => (
              <div key={activity.time + activity.text} className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral">{activity.time}</p>
                <p className="mt-2 text-sm text-white/90">{activity.text}</p>
              </div>
            ))}
          </div>
        </article>
      </Reveal>
    </section>
  );
}

function ProgressRow({ title, percent }: Readonly<{ title: string; percent: number }>) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-3 text-sm">
        <p className="font-semibold text-primary">{title}</p>
        <span className="font-bold text-accent">{percent}%</span>
      </div>
      <div className="h-2 rounded-full bg-neutral/30">
        <div className="h-2 rounded-full bg-gradient-to-r from-accent to-primary" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function HealthRow({
  label,
  value,
  tone,
}: Readonly<{ label: string; value: string; tone: "good" | "medium" }>) {
  const toneClass = tone === "good" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700";

  return (
    <div className="flex items-center justify-between rounded-xl border border-neutral/30 bg-neutral/5 px-3 py-2">
      <p className="font-semibold text-primary">{label}</p>
      <span className={`rounded-full px-3 py-1 text-xs font-bold ${toneClass}`}>{value}</span>
    </div>
  );
}
