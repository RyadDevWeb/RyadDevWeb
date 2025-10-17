import "@/styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RyadDevWeb — Développeur Web Freelance",
  description:
    "Ryad Dev Web : création et refonte de sites vitrines modernes, performants et élégants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#FDF9F6] text-[#2B2320] font-sans">
        {/* HEADER */}
        <header className="border-b border-[#EAE5E1] bg-[#FDF9F6]/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="RyadDevWeb"
                width={120}
                height={40}
                priority
              />
              <span className="font-mono text-sm uppercase tracking-widest">
                Ryad Dev Web
              </span>
            </div>
            <nav className="flex gap-6 font-mono text-sm">
              <Link href="/" className="hover:text-[#4B4540] transition">
                Accueil
              </Link>
              <Link
                href="/services"
                className="hover:text-[#4B4540] transition"
              >
                Services
              </Link>
              <Link href="/contact" className="hover:text-[#4B4540] transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTENU */}
        <main className="max-w-6xl mx-auto px-6 py-16">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-[#EAE5E1] mt-20">
          <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#4B4540]">
            <p>
              © {new Date().getFullYear()} RyadDevWeb — Tous droits réservés.
            </p>
            <p className="font-mono">Développeur Web Freelance</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
