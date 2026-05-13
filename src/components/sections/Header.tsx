"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun } from "lucide-react";
import { Button } from "@/components/ui";
import { WHATSAPP_URL, WHATSAPP_NUMBER, COMPANY_NAME } from "@/constants/config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#galeria", label: "Galería" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al hacer click en un enlace
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip link para accesibilidad */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-shadow">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span
                className={cn(
                  "font-bold text-lg transition-colors",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              >
                {COMPANY_NAME}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isScrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                <span>{WHATSAPP_NUMBER}</span>
              </a>
              <Button
                variant="whatsapp"
                size="sm"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cotizar por WhatsApp"
                >
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-slate-200 shadow-lg"
            >
              <nav className="flex flex-col p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-slate-200 mt-4 space-y-3">
                  <a
                    href={`tel:${WHATSAPP_NUMBER}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 text-slate-700 font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    {WHATSAPP_NUMBER}
                  </a>
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotizar por WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
