"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "💻 Site vitrine",
    desc: "Création complète, design responsive, SEO-ready, intégration de formulaires et hébergement.",
    price: "À partir de 600 €",
  },
  {
    title: "🔄 Refonte de site",
    desc: "Modernisation du design, meilleure UX, optimisation du temps de chargement.",
    price: "À partir de 500 €",
  },
  {
    title: "⚡ SEO & Performance",
    desc: "Optimisations techniques et contenu pour remonter sur Google.",
    price: "Sur devis",
  },
  {
    title: "🛠️ Maintenance",
    desc: "Mises à jour, sauvegardes, sécurité et corrections.",
    price: "À partir de 30 €/mois",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mes services
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="border border-[#EAE5E1] bg-[#FDF9F6] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-[#4B4540] mb-4">{s.desc}</p>
            <p className="font-mono text-sm">{s.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
