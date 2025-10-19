"use client";

import { motion } from "framer-motion";

export default function APropos() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        À propos de moi
      </motion.h1>

      <motion.p
        className="text-[#4B4540] leading-relaxed mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Je m’appelle <strong>Ryad</strong>, développeur web freelance basé à
        Paris. J’aide les entreprises à obtenir une présence en ligne moderne,
        rapide et efficace.
      </motion.p>

      <motion.p
        className="text-[#4B4540] leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Mon approche : <strong>design élégant</strong>,{" "}
        <strong>performance</strong> et <strong>simplicité</strong>. Chaque
        projet est une collaboration pour construire un site qui vous ressemble.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-10">
        {["🎨 Créativité", "⚙️ Performance", "💬 Clarté", "🤝 Confiance"].map(
          (x) => (
            <div key={x} className="border border-[#EAE5E1] rounded-xl py-4">
              {x}
            </div>
          )
        )}
      </div>
    </section>
  );
}
