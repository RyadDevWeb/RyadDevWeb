import "@/styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RyadDevWeb — Sites vitrines modernes",
  description: "Template Next.js + Tailwind pour sites vitrines professionnels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="border-b">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="RyadDevWeb" width={120} height={30} />
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/services" className="hover:text-brand-600">
                Services
              </Link>
              <Link href="/contact" className="hover:text-brand-600">
                Contact
              </Link>
              <a href="/contact" className="btn btn-primary">
                Déployer
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t">
          <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} RyadDevWeb. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-brand-600">
                Mentions légales
              </Link>
              <Link href="/contact" className="hover:text-brand-600">
                Nous contacter
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
