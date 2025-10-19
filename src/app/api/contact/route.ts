import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const nodemailer = (await import("nodemailer")).default;

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO,
      subject: `Nouveau message depuis RyadDevWeb`,
      html: `
        <div style="font-family:sans-serif;color:#333">
          <h2>Nouveau message reçu depuis RyadDevWeb</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="background:#f9f9f9;padding:10px;border-radius:8px;">${message}</p>
        </div>
      `,
    });

    console.log("✅ Mail envoyé avec succès :", name, email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Erreur route API :", err);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}
