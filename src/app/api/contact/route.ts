export async function POST(req: Request) {
  try {
    // Import dynamique -> empêche le blocage du dev server
    const nodemailer = (await import("nodemailer")).default;

    // Récupération des données du formulaire
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont obligatoires." }),
        { status: 400 }
      );
    }

    // Création du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true pour le port 465, false pour 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Envoi du mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO, // Ton adresse mail
      subject: `Nouveau message depuis RyadDevWeb`,
      text: `
        Nom : ${name}
        Email : ${email}
        Message :
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Nouveau message reçu depuis ton site RyadDevWeb</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="background:#f9f9f9;padding:10px;border-radius:8px;">${message}</p>
        </div>
      `,
    });

    // Réponse de succès
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return new Response(
      JSON.stringify({
        error: "Erreur lors de l’envoi du message. Réessaie plus tard.",
      }),
      { status: 500 }
    );
  }
}
