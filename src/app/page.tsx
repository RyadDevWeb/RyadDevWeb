import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-mono font-bold mb-6 tracking-tight">
        Ryad Dev Web
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-[#4B4540] leading-relaxed mb-10">
        Développeur web indépendant spécialisé dans la création et la refonte de
        sites vitrines modernes, performants et élégants. Mon objectif :
        transformer vos idées en expériences digitales uniques.
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="/services"
          className="border border-[#2B2320] px-6 py-3 rounded-xl font-mono text-sm hover:bg-[#2B2320] hover:text-[#FDF9F6] transition"
        >
          Mes services
        </Link>
        <Link
          href="/contact"
          className="border border-[#EAE5E1] px-6 py-3 rounded-xl font-mono text-sm hover:border-[#2B2320] transition"
        >
          Me contacter
        </Link>
      </div>
    </section>
  );
}
