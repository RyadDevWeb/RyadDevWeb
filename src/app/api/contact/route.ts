import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const nodemailer = (await import("nodemailer")).default;

    const { name, email, message, projectType } = await req.json();

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
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO,
      subject: `Nouveau message — ${projectType || "Projet"}`,
      html: `
        <div style="font-family:sans-serif;color:#333;line-height:1.6">
          <h2>Nouveau message depuis RyadDevWeb</h2>
          <p><b>Nom :</b> ${name}</p>
          <p><b>Email :</b> ${email}</p>
          <p><b>Type de projet :</b> ${projectType || "-"}</p>
          <p><b>Message :</b></p>
          <p style="background:#f6f6f6;padding:10px;border-radius:8px">${message}</p>
        </div>
      `,
    });

    console.log("Mail envoyé:", info.messageId);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error("Erreur API contact:", e);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}
