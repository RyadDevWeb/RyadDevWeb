"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-mono font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Développeur web freelance — sites modernes & performants
      </motion.h1>

      <motion.p
        className="text-center text-[#4B4540] text-lg max-w-3xl mx-auto mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Je conçois des sites sur mesure pour PME, indépendants et créateurs —
        design élégant, rapidité et SEO pour transformer les visiteurs en
        clients.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <Link
          href="/realisations"
          className="border border-[#2B2320] px-6 py-3 rounded-xl font-mono text-sm hover:bg-[#2B2320] hover:text-[#FDF9F6] transition"
        >
          Voir mes réalisations
        </Link>
        <Link
          href="/contact"
          className="border border-[#EAE5E1] px-6 py-3 rounded-xl font-mono text-sm hover:bg-[#EAE5E1]/80 transition"
        >
          Obtenir un devis gratuit
        </Link>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-4 gap-6 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {[
          ["💡 Design pro", "Interfaces modernes & élégantes"],
          ["⚙️ Performance", "Chargement rapide & score élevé"],
          ["🔎 SEO", "Structure optimisée pour Google"],
          ["🤝 Suivi", "Accompagnement après mise en ligne"],
        ].map(([t, s], i) => (
          <motion.div
            key={i}
            className="border border-[#EAE5E1] bg-[#FDF9F6] rounded-2xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-bold mb-2">{t}</h3>
            <p className="text-sm text-[#4B4540]">{s}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
