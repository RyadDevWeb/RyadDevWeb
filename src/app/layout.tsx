import "@/styles/globals.css";
import type { Metadata } from "next";
import AnimatedLayout from "@/components/AnimatedLayout"; // on va le créer juste après

export const metadata: Metadata = {
  title: "RyadDevWeb — Développeur Web Freelance",
  description:
    "Ryad Dev Web : création et refonte de sites vitrines modernes, performants et élégants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#FDF9F6] text-[#2B2320] font-sans">
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
