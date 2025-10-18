"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Nova Studio",
    desc: "Agence de design digital — site vitrine épuré et moderne, avec animations fluides et mise en avant des services créatifs.",
    img: "/images/nova-studio.webp.png",
  },
  {
    title: "Maison Délice",
    desc: "Restaurant gastronomique — design noir et doré, ambiance chic et raffinée, intégration d’un système de réservation.",
    img: "/images/maison-delice.webp.png",
  },
  {
    title: "Pulse Agency",
    desc: "Startup SaaS — landing page performante, design dynamique, optimisée pour le SEO et la conversion.",
    img: "/images/pulse-agency.webp.png",
  },
  {
    title: "Élégance Coiffure",
    desc: "Salon de coiffure — site sobre et élégant, pages services et galerie, prise de rendez-vous fluide.",
    img: "/images/elegance-coiffure.webp.png",
  },
];

export default function RealisationsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mes réalisations
      </motion.h1>

      <motion.p
        className="text-center text-[#4B4540] mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Chaque site est conçu pour refléter l’identité du client et offrir une
        expérience unique. Cliquez sur les images pour les voir en grand 👇
      </motion.p>

      {/* --- Grille de projets --- */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="border border-[#EAE5E1] rounded-2xl overflow-hidden bg-[#FDF9F6] hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            onClick={() => setSelectedImg(p.img)}
          >
            <Image
              src={p.img}
              alt={p.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-[#4B4540] text-sm">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Popup / Lightbox --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <Image
                src={selectedImg}
                alt="Aperçu projet"
                width={1200}
                height={800}
                className="rounded-xl object-contain w-auto h-auto max-h-[90vh]"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 bg-white/80 text-black px-3 py-1 rounded-full font-bold hover:bg-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-lg font-mono mb-4">
          Vous avez un projet en tête ? 🚀
        </p>
        <a
          href="/contact"
          className="border border-[#2B2320] px-6 py-3 rounded-xl font-mono text-sm hover:bg-[#2B2320] hover:text-[#FDF9F6] transition"
        >
          Contactez-moi dès aujourd’hui
        </a>
      </motion.div>
    </section>
  );
}
