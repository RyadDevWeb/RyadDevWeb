"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "💻 Site vitrine",
    desc: "Idéal pour les entreprises ou indépendants souhaitant présenter leurs activités. Design sur mesure, responsive et optimisé pour le référencement.",
    price: "À partir de 600 €",
  },
  {
    title: "🔄 Refonte de site",
    desc: "Modernisation du design et amélioration de l’expérience utilisateur pour donner une nouvelle vie à votre site.",
    price: "À partir de 500 €",
  },
  {
    title: "⚡ SEO & Performance",
    desc: "Optimisation du code et du contenu pour améliorer votre visibilité et accélérer le chargement de vos pages.",
    price: "Sur devis",
  },
  {
    title: "🛠️ Maintenance mensuelle",
    desc: "Mises à jour, sécurité et suivi technique pour garder votre site stable dans le temps.",
    price: "À partir de 30 €/mois",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mes services
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="border border-[#EAE5E1] bg-[#FDF9F6] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-[#4B4540] mb-4">{service.desc}</p>
            <p className="font-mono text-sm text-[#2B2320]">{service.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
