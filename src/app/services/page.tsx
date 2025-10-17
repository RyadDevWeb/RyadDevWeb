
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Création de site vitrine",
    description: "Site moderne, responsive, optimisé pour Google. Idéal TPE/PME.",
    features: ["Design Figma", "Next.js + Tailwind", "SEO de base", "Formulaire de contact"]
  },
  {
    title: "Refonte de site",
    description: "Modernisation visuelle et technique de votre site existant.",
    features: ["Audit rapide", "Nouveau design", "Amélioration performance", "Migration contenu"]
  },
  {
    title: "Maintenance & support",
    description: "Mises à jour, sécurité, petites évolutions mensuelles.",
    features: ["Sauvegardes", "Mises à jour", "Corrections", "Petites évolutions"]
  }
];

export default function ServicesPage() {
  return (
    <section className="container py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold">Services</h1>
        <p className="mt-4 text-gray-600">
          Des offres simples et efficaces pour une présence en ligne crédible et performante.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} features={s.features} />
        ))}
      </div>
    </section>
  );
}
