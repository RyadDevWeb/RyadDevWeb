import Link from "next/link";

const services = [
  {
    title: "Création de site vitrine",
    description:
      "Un site moderne, rapide et responsive, pensé pour valoriser votre activité et attirer de nouveaux clients.",
    price: "À partir de 500 €",
    features: [
      "Design sur mesure",
      "Développement Next.js + Tailwind",
      "Optimisation SEO",
      "Formulaire de contact professionnel",
    ],
  },
  {
    title: "Refonte de site existant",
    description:
      "Modernisation visuelle et technique de votre site pour offrir une meilleure expérience et un style actuel.",
    price: "À partir de 1 000 €",
    features: [
      "Audit visuel et technique",
      "Nouveau design responsive",
      "Migration du contenu",
      "Amélioration des performances",
    ],
  },
  {
    title: "Suivi et mises à jour ponctuelles",
    description:
      "Je reste disponible après la livraison pour assurer la continuité et les petites évolutions de votre site.",
    price: "À partir de 80 € / intervention",
    features: [
      "Corrections mineures",
      "Changements d’images ou textes",
      "Ajout de sections simples",
      "Assistance rapide par email",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-mono font-bold mb-4">Services</h1>
        <p className="text-[#4B4540] max-w-2xl mx-auto">
          Des prestations claires et efficaces pour donner à votre entreprise
          une présence en ligne professionnelle.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-[#EAE5E1] bg-[#FDF9F6] rounded-2xl p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition"
          >
            <h3 className="text-2xl font-mono font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-[#4B4540] mb-3">{service.description}</p>
            <p className="font-semibold mb-4">{service.price}</p>
            <ul className="list-disc list-inside text-sm text-[#4B4540] mb-6">
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block border border-[#2B2320] px-5 py-2 rounded-lg font-mono text-sm hover:bg-[#2B2320] hover:text-[#FDF9F6] transition"
            >
              Demander un devis
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
