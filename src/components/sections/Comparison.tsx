"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Button, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const comparisonItems = [
  {
    feature: "Dependencia de la red eléctrica",
    withoutSolar: true,
    withSolar: false,
    description: "Con paneles solares reduces tu dependencia de la red",
  },
  {
    feature: "Control de gasto en electricidad",
    withoutSolar: false,
    withSolar: true,
    description: "Generas tu propia energía y reduces costos",
  },
  {
    feature: "Respaldo energético",
    withoutSolar: false,
    withSolar: true,
    description: "Sistemas con baterías ofrecen respaldo ante cortes",
  },
  {
    feature: "Energía limpia y renovable",
    withoutSolar: false,
    withSolar: true,
    description: "Contribuyes al cuidado del medio ambiente",
  },
  {
    feature: "Aumento valor propiedad",
    withoutSolar: false,
    withSolar: true,
    description: "Las propiedades con paneles solares tienen mayor valor",
  },
  {
    feature: "Autonomía energética",
    withoutSolar: false,
    withSolar: true,
    description: "Mayor independencia y control sobre tu energía",
  },
];

export function Comparison() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Comparativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Por qué cambiarse a energía solar?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Compara las ventajas de tener paneles solares versus depender 100% de la red eléctrica tradicional.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Without solar */}
          <AnimatedSection delay={0.1}>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-300 mb-2">
                  Sin energía solar
                </h3>
                <p className="text-slate-500">Dependencia total de la red eléctrica</p>
              </div>

              <ul className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.withoutSolar ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {item.withoutSolar ? <X className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                    </div>
                    <span className="text-slate-300">{item.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* With solar */}
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/30 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                  RECOMENDADO
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Con energía solar
                </h3>
                <p className="text-amber-400">Independencia y ahorro energético</p>
              </div>

              <ul className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.withSolar ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                    }`}>
                      {item.withSolar ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                    </div>
                    <span className="text-slate-200">{item.feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-amber-500/20">
                <Button className="w-full" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Quiero cambiarme a solar
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
