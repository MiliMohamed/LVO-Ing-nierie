import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  details?: string[];
};

export function ServiceCard({ title, description, details = [] }: Readonly<ServiceCardProps>) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral/50 bg-white/90 p-6 shadow-md shadow-primary/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] transition-opacity duration-300 group-hover:opacity-[0.26]"
        style={{
          backgroundImage: "url('/metal-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
      <div className="relative mb-5 inline-flex rounded-xl border border-accent/20 bg-accent/10 p-2.5 shadow-sm shadow-accent/20">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#F96B1E" strokeWidth="1.8">
          <path d="M3 5h18v14H3z" />
          <path d="M3 9h18" />
          <path d="M8 5V2h8v3" />
        </svg>
      </div>
      <h3 className="relative font-heading text-xl font-extrabold tracking-tight text-primary">{title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-dark/85">{description}</p>
      {details.length > 0 && (
        <ul className="relative mt-4 space-y-1.5 text-xs font-medium text-dark/80">
          {details.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <Link
        href="/contact"
        className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent transition group-hover:gap-3 group-hover:text-primary"
      >
        Détails
        {" "}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
