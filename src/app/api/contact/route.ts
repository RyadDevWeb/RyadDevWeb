import { NextResponse } from "next/server";

// ✅ Forcer le runtime Node.js pour que Nodemailer fonctionne sur Vercel
export const runtime = "nodejs";

// ✅ Désactiver l’environnement Edge (important)
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // ⚡ Import dynamique (évite les problèmes de build sur Vercel)
    const nodemailer = (await import("nodemailer")).default;

    // Récupération des données envoyées par le formulaire
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // 🚀 Création du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true pour 465, false pour 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✉️ Envoi de l’e-mail
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO, // ton adresse mail
      subject: `Nouveau message depuis RyadDevWeb`,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <h2>💬 Nouveau message reçu depuis ton site RyadDevWeb</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="background:#f9f9f9;padding:10px;border-radius:8px;">
            ${message}
          </p>
        </div>
      `,
    });

    console.log("✅ Message envoyé avec succès :", info.messageId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message. Réessaie plus tard." },
      { status: 500 }
    );
  }
}
