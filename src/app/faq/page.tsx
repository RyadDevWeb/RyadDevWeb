"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Combien coûte un site vitrine ?",
    a: "La plupart des sites vitrines démarrent à 600 €. Le prix dépend du nombre de pages, des fonctionnalités et du design demandé.",
  },
  {
    q: "Combien de temps pour créer un site ?",
    a: "Entre 1 et 3 semaines selon la complexité et la réactivité aux retours.",
  },
  {
    q: "Gérez-vous l’hébergement et le nom de domaine ?",
    a: "Oui, je peux m’en occuper ou vous accompagner pour le faire.",
  },
  {
    q: "Proposez-vous la maintenance ?",
    a: "Oui, à partir de 30 €/mois (mises à jour, sauvegardes, sécurité).",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        FAQ
      </motion.h1>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border border-[#EAE5E1] bg-[#FDF9F6] rounded-xl p-5"
          >
            <h3 className="font-bold mb-1">{f.q}</h3>
            <p className="text-[#4B4540] text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
