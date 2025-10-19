"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function RealisationsPage() {
  const projects = [
    {
      id: "nova",
      title: "Nova Studio — Agence Créative",
      description:
        "Landing moderne et animée pour agence design. Interface Figma → dev Next.js + Framer Motion.",
      stack: ["Next.js", "Framer Motion", "TailwindCSS"],
      demoUrl: "https://example.com", // ⬅️ remplace par ta démo Vercel
      previewUrl: "https://example.com", // ⬅️ idem (iframe)
    },
    {
      id: "delice",
      title: "Maison Délice — Restaurant Gastronomique",
      description:
        "Site vitrine premium : design noir/doré, galerie, réservation.",
      stack: ["React", "Next.js", "SCSS"],
      demoUrl: "https://example.com",
      previewUrl: "https://example.com",
    },
    {
      id: "coiffure",
      title: "Élégance Coiffure — Salon de Beauté",
      description: "Site élégant, SEO optimisé, prise de rendez-vous intégrée.",
      stack: ["Next.js", "TailwindCSS"],
      demoUrl: "https://example.com",
      previewUrl: "https://example.com",
    },
  ];

  return (
    <section className="py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-mono font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mes Réalisations
      </motion.h1>

      <div className="space-y-16">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            className="rounded-2xl border border-[#EAE5E1] overflow-hidden bg-[#FDF9F6] shadow-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video">
              <iframe
                src={p.previewUrl}
                title={p.title}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
              <p className="text-[#4B4540] mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-[#CFC6BF] px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.demoUrl}
                target="_blank"
                className="inline-flex items-center gap-2 border border-[#2B2320] px-4 py-2 rounded-lg hover:bg-[#2B2320] hover:text-white transition"
              >
                <ExternalLink size={16} /> Voir la démo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
