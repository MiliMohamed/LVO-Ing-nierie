import type { Metadata } from "next";
import { Raleway, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lvo-ingenierie.vercel.app"),
  title: {
    default: "LVO-Ingénierie | Ingénierie verticale",
    template: "%s | LVO-Ingénierie",
  },
  description:
    "LVO-Ingénierie accompagne vos projets d'audit, maîtrise d'oeuvre et modernisation d'équipements verticaux.",
  openGraph: {
    title: "LVO-Ingénierie",
    description: "L'ingénierie verticale réinventée.",
    images: ["/og-lvo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sourceSans.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full technical-grid">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
