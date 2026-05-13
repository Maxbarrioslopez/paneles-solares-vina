"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

export function CommercialBanner() {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 md:p-8 border border-amber-500/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Agenda tu evaluación técnica
                  </h3>
                  <p className="text-slate-400">
                    Coordinamos visitas según tu comuna en la Región de Valparaíso
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Viña del Mar y alrededores</span>
                </div>
                <Button asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Solicitar evaluación
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
