"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons de lucide-react

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/realisations", label: "Réalisations" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Devis gratuit", cta: true },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#FDF9F6]/90 backdrop-blur border-b border-[#EAE5E1]"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-mono tracking-widest text-sm">
          RyadDevWeb
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex gap-6 text-sm font-mono">
          {navLinks.map((link) =>
            link.cta ? (
              <Link
                key={link.href}
                href={link.href}
                className="border border-[#2B2320] px-3 py-1 rounded-lg hover:bg-[#2B2320] hover:text-[#FDF9F6] transition"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline hover:underline-offset-4"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* MENU BURGER MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2B2320] focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#EAE5E1] bg-[#FDF9F6] px-6 pb-6 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  link.cta
                    ? "border border-[#2B2320] text-center px-3 py-2 rounded-lg hover:bg-[#2B2320] hover:text-[#FDF9F6]"
                    : "py-2 border-b border-[#EAE5E1]/50"
                } transition`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
