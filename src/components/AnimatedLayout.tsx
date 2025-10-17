"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* HEADER animé */}
      <motion.header
        className="border-b border-[#EAE5E1] bg-[#FDF9F6]/90 backdrop-blur-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
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
          </motion.div>

          <motion.nav
            className="flex gap-6 font-mono text-sm"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link href="/" className="hover:text-[#4B4540] transition">
              Accueil
            </Link>
            <Link href="/services" className="hover:text-[#4B4540] transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-[#4B4540] transition">
              Contact
            </Link>
          </motion.nav>
        </div>
      </motion.header>

      {/* CONTENU animé */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* FOOTER animé */}
      <motion.footer
        className="border-t border-[#EAE5E1] mt-20"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#4B4540]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            © {new Date().getFullYear()} RyadDevWeb — Tous droits réservés.
          </motion.p>
          <motion.p
            className="font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Développeur Web Freelance
          </motion.p>
        </div>
      </motion.footer>
    </>
  );
}
