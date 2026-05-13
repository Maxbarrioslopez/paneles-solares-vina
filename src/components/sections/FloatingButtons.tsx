"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_NUMBER } from "@/constants/config";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium hidden sm:inline">WhatsApp</span>
      </motion.a>

      {/* Phone Call Button - Mobile only */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 bg-sky-500 text-white rounded-full shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-shadow sm:hidden"
        aria-label="Llamar por teléfono"
      >
        <Phone className="w-6 h-6" />
        <span className="font-medium">Llamar</span>
      </motion.a>
    </>
  );
}
