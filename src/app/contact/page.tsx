
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Merci de donner quelques détails"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(schema) as any
  });

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };

  return (
    <section className="container py-20 max-w-2xl">
      <h1 className="text-4xl font-extrabold">Contact</h1>
      <p className="mt-4 text-gray-600">
        Dites-moi en plus sur votre projet. Réponse sous 24h.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input {...register('name')} className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input {...register('email')} className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea rows={6} {...register('message')} className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
        </div>

        <button disabled={isSubmitting} className="btn btn-primary disabled:opacity-60">
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-sm text-green-700">Merci ! Votre message a bien été envoyé.</p>
        )}
      </form>
    </section>
  );
}
