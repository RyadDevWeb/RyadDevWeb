"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RealisationsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const projects = [
    {
      id: "nova",
      title: "Nova Studio — Agence Créative",
      img: "/images/nova-studio.webp.png", // mets ton image ici
      description:
        "Site vitrine moderne pour une agence de design. Développement sous Next.js avec animations Framer Motion et design sur mesure.",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      id: "maison-delice",
      title: "Maison Délice — Restaurant Gastronomique",
      img: "/images/maison-delice.webp.png", // mets ton image ici
      description:
        "Création du site d’un restaurant haut de gamme. Design sombre et doré, intégration d’un système de réservation et galerie photo.",
      stack: ["React", "Next.js", "SCSS"],
      link: "#",
    },
    {
      id: "elegance-coiffure",
      title: "Élégance Coiffure — Salon de Beauté",
      img: "/images/elegance-coiffure.webp.png", // mets ton image ici
      description:
        "Site élégant pour un salon de coiffure à Paris. Design clair, SEO optimisé et intégration d’un module de rendez-vous en ligne.",
      stack: ["Next.js", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl font-mono font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Mes Réalisations
      </motion.h1>

      <motion.p
        className="text-center text-[#4B4540] mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Voici une sélection de projets que j’ai réalisés — entre modernité,
        performance et design sur mesure.
      </motion.p>

      {/* ✅ Grille de projets */}
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            className="cursor-pointer group"
            onClick={() => setSelected(p.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg border border-[#EAE5E1] bg-[#FDF9F6]">
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 text-[#2B2320]">
                  {p.title}
                </h2>
                <p className="text-sm text-[#4B4540]">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs border border-[#CFC6BF] px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Pop-up quand on clique sur une image */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <Image
                src={
                  projects.find((p) => p.id === selected)?.img ||
                  "/fallback.png"
                }
                alt="Aperçu du projet"
                width={1200}
                height={800}
                className="rounded-xl object-cover w-full"
              />
              <button
                className="absolute top-3 right-3 text-white text-xl bg-black/60 hover:bg-black/80 rounded-full px-3 py-1"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
