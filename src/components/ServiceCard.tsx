import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-sm border border-neutral/50 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] transition-opacity duration-300 group-hover:opacity-[0.28]"
        style={{
          backgroundImage: "url('/metal-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/62 via-white/58 to-white/72" />
      <div className="relative mb-4 inline-flex rounded-sm bg-accent/10 p-2">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#F96B1E" strokeWidth="1.8">
          <path d="M3 5h18v14H3z" />
          <path d="M3 9h18" />
          <path d="M8 5V2h8v3" />
        </svg>
      </div>
      <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
      <p className="mt-3 text-sm text-dark/80">{description}</p>
      <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-primary hover:text-accent">
        DÉTAILS »
      </Link>
    </article>
  );
}
