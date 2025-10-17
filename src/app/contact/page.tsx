export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-mono font-bold mb-6 text-center">
        Me contacter
      </h1>
      <p className="text-center text-[#4B4540] mb-10">
        Un projet, une idée ou une refonte ? Remplissez le formulaire et je vous
        répondrai rapidement.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm mb-2 font-semibold" htmlFor="name">
            Nom
          </label>
          <input
            id="name"
            type="text"
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
            type="email"
            placeholder="votre@email.com"
            className="w-full border border-[#EAE5E1] bg-[#FDF9F6] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4B4540]"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Décrivez votre projet..."
            rows={5}
            className="w-full border border-[#EAE5E1] bg-[#FDF9F6] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4B4540]"
          />
        </div>

        <button
          type="submit"
          className="border border-[#2B2320] px-6 py-3 rounded-xl font-mono text-sm hover:bg-[#2B2320] hover:text-[#FDF9F6] transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
