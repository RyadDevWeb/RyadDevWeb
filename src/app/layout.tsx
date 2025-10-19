import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "RyadDevWeb — Développeur Web Freelance",
  description:
    "Création de sites web modernes et performants. Sites vitrines, refontes, SEO et maintenance. Basé à Aulnay-sous-Bois, disponible partout en France.",
  openGraph: {
    title: "RyadDevWeb — Développeur Web Freelance",
    description:
      "Création de sites web modernes et performants pour PME, indépendants et créateurs.",
    url: "https://ryad-dev-web.vercel.app",
    siteName: "RyadDevWeb",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "RyadDevWeb" }],
    locale: "fr_FR",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://ryad-dev-web.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#FDF9F6] text-[#2B2320] antialiased">
        <Header />
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
