"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const projectType = formData.get("projectType");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, projectType }),
      });

      if (!res.ok) throw new Error("Erreur d’envoi");

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Réessaie plus tard.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section className="py-20 max-w-2xl mx-auto">
      <motion.h1
        className="text-4xl font-mono font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Me contacter
      </motion.h1>

      <motion.p
        className="text-center text-[#4B4540] mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Vous avez un projet ? Remplissez le formulaire, je vous réponds sous
        24h.
      </motion.p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-2 font-semibold" htmlFor="name">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full border border-[#EAE5E1] bg-[#FDF9F6] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4B4540]"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            className="w-full border border-[#EAE5E1] bg-[#FDF9F6] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4B4540]"
          />
        </div>

        <div>
          <label
            className="block text-sm mb-2 font-semibold"
            htmlFor="projectType"
          >
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full border border-[#EAE5E1] bg-[#FDF9F6] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4B4540]"
          >
            <option>Site vitrine</option>
            <option>Refonte</option>
            <option>E-commerce</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Décrivez votre projet..."
            className="w-full border border-[#EAE5E1] bg-[#FDF9F6] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4B4540]"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          className={`border border-[#2B2320] px-6 py-3 rounded-xl font-mono text-sm transition ${
            status === "loading"
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#2B2320] hover:text-[#FDF9F6]"
          }`}
          whileTap={{ scale: 0.97 }}
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer"}
        </motion.button>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              key="s"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-600 font-semibold mt-2"
            >
              ✅ Merci ! Message envoyé avec succès.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="e"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-600 font-semibold mt-2"
            >
              ❌ {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
}
