import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  bullets: string[];
  tags: string[];
};

export function ProjectCard({ image, title, bullets, tags }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-sm bg-primary text-white shadow-xl">
      <Image src={image} alt={title} width={1200} height={600} className="h-64 w-full object-cover opacity-85" />
      <div className="space-y-4 p-6">
        <h3 className="font-heading text-2xl font-bold text-accent">{title}</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-sm bg-accent px-2 py-1 text-xs font-bold text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
