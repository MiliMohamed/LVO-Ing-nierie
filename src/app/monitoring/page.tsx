import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

const sensors = [
  { name: "Ascenseur A1 - Villa Sophia", status: "OK", temp: "42 C", vibration: "2.1 mm/s", uptime: "99.8%" },
  { name: "Ascenseur B2 - CADJEE", status: "Alerte", temp: "61 C", vibration: "5.9 mm/s", uptime: "96.4%" },
  { name: "Escalier Mecanique C3", status: "OK", temp: "39 C", vibration: "1.8 mm/s", uptime: "99.2%" },
];

export const metadata: Metadata = {
  title: "Monitoring Capteurs",
  description: "Supervisez les capteurs des ascenseurs et detectez les alertes en temps reel.",
};

export default function MonitoringPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          IoT & Maintenance
        </div>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          Supervision des capteurs ascenseurs
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-dark/80">
          Visualisez les donnees critiques en continu: temperature moteur, vibration, disponibilite et alertes
          de maintenance predictive.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Capteurs actifs" value="128" note="sur 132 installes" />
        <KpiCard label="Alertes critiques" value="3" note="priorite haute" />
        <KpiCard label="Taux de disponibilite" value="98.9%" note="sur 30 jours" />
        <KpiCard label="Interventions prevues" value="7" note="cette semaine" />
      </div>

      <Reveal delay={0.1}>
        <article className="mt-8 rounded-2xl border border-neutral/40 bg-white p-6 shadow-md shadow-primary/5">
          <h2 className="font-heading text-2xl font-extrabold text-primary">Etat des equipements</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral/30 text-xs uppercase tracking-wide text-dark/60">
                  <th className="px-3 py-2">Equipement</th>
                  <th className="px-3 py-2">Statut</th>
                  <th className="px-3 py-2">Temperature</th>
                  <th className="px-3 py-2">Vibration</th>
                  <th className="px-3 py-2">Disponibilite</th>
                </tr>
              </thead>
              <tbody>
                {sensors.map((sensor) => (
                  <tr key={sensor.name} className="border-b border-neutral/20">
                    <td className="px-3 py-3 font-semibold text-primary">{sensor.name}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          sensor.status === "OK" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {sensor.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-dark/80">{sensor.temp}</td>
                    <td className="px-3 py-3 text-dark/80">{sensor.vibration}</td>
                    <td className="px-3 py-3 font-semibold text-accent">{sensor.uptime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

function KpiCard({ label, value, note }: Readonly<{ label: string; value: string; note: string }>) {
  return (
    <article className="rounded-2xl border border-neutral/40 bg-white p-5 shadow-md shadow-primary/5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dark/60">{label}</p>
      <p className="mt-3 font-heading text-3xl font-extrabold text-primary">{value}</p>
      <p className="mt-2 text-sm font-semibold text-accent">{note}</p>
    </article>
  );
}
