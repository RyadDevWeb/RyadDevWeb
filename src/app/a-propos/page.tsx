"use client";

import { motion } from "framer-motion";

export default function APropos() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        À propos de moi
      </motion.h1>

      <motion.p
        className="text-[#4B4540] leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Je m’appelle <strong>Ryad</strong>, développeur web freelance basé à
        Aulnay-sous-Bois. Passionné par le design et la technologie, j’aide les
        entreprises à avoir une présence en ligne professionnelle et efficace.
      </motion.p>

      <motion.p
        className="text-[#4B4540] leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Mon objectif : créer des sites web qui allient{" "}
        <strong>esthétique, efficacité et simplicité</strong>. Chaque projet est
        une collaboration : je traduis vos idées en un site clair, rapide et
        unique.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div>
          <p className="font-bold">🎨</p>
          <p>Créativité</p>
        </div>
        <div>
          <p className="font-bold">⚙️</p>
          <p>Performance</p>
        </div>
        <div>
          <p className="font-bold">💬</p>
          <p>Clarté</p>
        </div>
        <div>
          <p className="font-bold">🤝</p>
          <p>Confiance</p>
        </div>
      </motion.div>
    </section>
  );
}
