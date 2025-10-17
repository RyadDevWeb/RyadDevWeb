
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="container pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Template Next.js + Tailwind
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Des sites vitrines <span className="text-brand-600">ultra modernes</span> et rapides
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Une base pro, minimaliste et performante inspirée des meilleurs designers et développeurs.
            Parfait pour lancer et refondre des sites pour tes clients.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/services" className="btn btn-primary">Voir les services</Link>
            <Link href="/contact" className="btn btn-ghost">Demander un devis</Link>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 md:grid-cols-3 mt-6">
        {[
          {title: "Design minimal & premium", desc: "Typographie soignée, grands espaces, hiérarchie claire."},
          {title: "SEO & performance", desc: "Architecture orientée SEO, chargement rapide, bonnes pratiques incluses."},
          {title: "Modulaire & réutilisable", desc: "Composants Tailwind réutilisables pour accélérer tes livraisons."},
        ].map((c, i) => (
          <div key={i} className="rounded-2xl border p-6 shadow-soft hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-gray-600">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="container mt-24">
        <div className="rounded-3xl border p-10 md:p-16 text-center bg-gradient-to-br from-white to-brand-50">
          <h2 className="text-3xl md:text-4xl font-bold">Prêt à lancer un site qui fait pro ?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Utilise ce template, adapte le contenu, et déploie en quelques minutes sur Vercel.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">Parler de votre projet</Link>
          </div>
        </div>
      </section>
    </>
  );
}
