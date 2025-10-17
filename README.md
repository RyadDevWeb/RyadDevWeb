
# ModernSite — Template Next.js + Tailwind + TypeScript

Un template **propre, minimal et performant** pour créer/refondre des **sites vitrines** inspirés des meilleures pratiques design & dev.

## ⚡ Stack
- Next.js 15
- TypeScript
- TailwindCSS
- React Hook Form + Zod (validation)
- API route `/api/contact` (NodeMailer)

## 🚀 Démarrer
```bash
npm install
npm run dev
```

## 🌐 Déploiement
- Crée un repo et déploie sur **Vercel** (recommandé).
- Configure (optionnel) des variables d'environnement pour l'email :  
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`  
  Sans ces variables, les messages de contact seront **loggés côté serveur** (mode dev).

## 🧩 Personnalisation
- Logo : `public/logo.svg`
- Couleurs/typo : `tailwind.config.js`
- Meta SEO : `src/app/layout.tsx` (export `metadata`)
- Contenu : `src/app/page.tsx`, `src/app/services/page.tsx`, `src/app/contact/page.tsx`

## ✅ Bonnes pratiques incluses
- Design **minimal & premium** (grande typo, espaces, composants simples)
- Base **SEO-friendly**
- Composants **réutilisables**
- Formulaire **validé & accessible**

---

Fais tourner, clone le template pour chaque client, et livre vite ✨
