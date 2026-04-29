import Link from "next/link";
import Image from "next/image";

type LogoLVOProps = {
  compact?: boolean;
};

export function LogoLVO({ compact = false }: LogoLVOProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="LVO Ingénierie">
      <Image
        src="/logo-lvo.png"
        alt="Logo LVO Ingénierie"
        width={compact ? 180 : 240}
        height={compact ? 80 : 100}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}
