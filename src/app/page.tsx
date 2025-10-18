"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-mono font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Création de sites web modernes et performants
      </motion.h1>

      <motion.p
        className="text-[#4B4540] text-lg mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Je conçois des sites sur mesure pour les entreprises et indépendants —
        esthétiques, rapides et pensés pour convertir vos visiteurs en clients.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
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
        className="mt-16 grid md:grid-cols-2 gap-6 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div>
          <h3 className="font-bold mb-2">💡 Design professionnel</h3>
          <p>Des sites au rendu moderne et impactant.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">⚙️ Optimisé pour Google</h3>
          <p>Structure SEO-friendly, chargement rapide, responsive.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">🧩 Sur mesure</h3>
          <p>Chaque projet est conçu selon vos besoins spécifiques.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">🤝 Accompagnement</h3>
          <p>Je reste disponible après la mise en ligne.</p>
        </div>
      </motion.div>
    </section>
  );
}
