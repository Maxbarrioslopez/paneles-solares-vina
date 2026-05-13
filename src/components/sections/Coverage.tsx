"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button, AnimatedSection } from "@/components/ui";
import { COVERAGE_AREAS, WHATSAPP_URL } from "@/constants/config";

export function Coverage() {
  return (
    <section id="zonas" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Info */}
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
              Zonas de cobertura
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Atendemos toda la Región de Valparaíso
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Realizamos instalaciones y evaluaciones técnicas en Viña del Mar, 
              Valparaíso y todas las comunas de la región. Visitamos tu propiedad 
              para una evaluación personalizada sin compromiso.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Visita a terreno</h4>
                  <p className="text-slate-600 text-sm">Evaluamos tu propiedad directamente en tu ubicación</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Atención local</h4>
                  <p className="text-slate-600 text-sm">Conocemos las condiciones específicas de la zona</p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Consultar disponibilidad en tu zona
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </AnimatedSection>

          {/* Right column - Map visual / Areas */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Visual map representation */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  Comunas que cubrimos
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {COVERAGE_AREAS.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-50 hover:bg-amber-50 hover:border-amber-200 border border-slate-200 transition-colors cursor-pointer group"
                    >
                      <MapPin className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 text-center">
                    ¿No encuentras tu comuna?{" "}
                    <a 
                      href={WHATSAPP_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Consulta con nosotros
                    </a>
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
