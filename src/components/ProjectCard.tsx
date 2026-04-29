import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  bullets: string[];
  tags: string[];
};

export function ProjectCard({ image, title, bullets, tags }: Readonly<ProjectCardProps>) {
  return (
    <article className="overflow-hidden rounded-2xl border border-primary/15 bg-primary text-white shadow-xl shadow-primary/20">
      <div className="relative">
        <Image src={image} alt={title} width={1200} height={600} className="h-64 w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      </div>
      <div className="space-y-5 p-6">
        <h3 className="font-heading text-2xl font-extrabold tracking-tight text-accent">{title}</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/90">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
