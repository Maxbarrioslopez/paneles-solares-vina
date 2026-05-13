"use client";

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  FileText, 
  MapPin, 
  Calculator, 
  Hammer, 
  CheckCircle 
} from "lucide-react";
import { AnimatedSection } from "@/components/ui";

const steps = [
  {
    icon: MessageCircle,
    title: "Contacto inicial",
    description: "Nos contactas por WhatsApp, teléfono o formulario. Conversamos sobre tu proyecto y necesidades energéticas.",
    duration: "5-10 min",
  },
  {
    icon: FileText,
    title: "Revisión de consumo",
    description: "Analizamos tu cuenta de luz para entender tu consumo mensual y patrones de uso eléctrico.",
    duration: "15-20 min",
  },
  {
    icon: MapPin,
    title: "Visita a terreno",
    description: "Agendamos una visita a tu propiedad para evaluar orientación del techo, sombras, espacio disponible y factibilidad técnica.",
    duration: "30-60 min",
  },
  {
    icon: Calculator,
    title: "Propuesta técnica y económica",
    description: "Preparamos una propuesta personalizada con diseño del sistema, equipos recomendados, inversión y estimación de ahorro.",
    duration: "1-2 días",
  },
  {
    icon: Hammer,
    title: "Instalación profesional",
    description: "Realizamos la instalación con técnicos certificados, cumpliendo todas las normativas de seguridad eléctrica.",
    duration: "1-3 días",
  },
  {
    icon: CheckCircle,
    title: "Puesta en marcha y soporte",
    description: "Configuramos el sistema, realizamos pruebas y te entregamos documentación. Soporte técnico continuo.",
    duration: "Continuo",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestro proceso en 6 pasos
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Desde el primer contacto hasta la puesta en marcha, te acompañamos en cada etapa de tu proyecto solar.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-6 pt-8 border border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Tiempo estimado: {step.duration}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
