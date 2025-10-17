
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // If SMTP env vars are not set, just log and return success (dev mode)
    const hasSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PORT;
    if (!hasSMTP) {
      console.log("[CONTACT - DEV LOG]", { name, email, message });
      return NextResponse.json({ ok: true, dev: true });
    }

    // Dynamic import to avoid bundling in edge runtimes
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ModernSite" <no-reply@modern-site.local>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
