"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="mt-20 border-t border-[#EAE5E1]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#4B4540]">
        <p>© {new Date().getFullYear()} RyadDevWeb — Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link href="/mentions-legales" className="hover:underline">
            Mentions légales
          </Link>
          <Link href="/privacy" className="hover:underline">
            Confidentialité
          </Link>
          <a href="/cv.pdf" className="hover:underline">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
