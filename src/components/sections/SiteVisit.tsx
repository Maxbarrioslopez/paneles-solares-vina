"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Sun, 
  Ruler, 
  Zap, 
  Target, 
  CheckSquare,
  ArrowRight,
  Camera
} from "lucide-react";
import { Button, Card, CardContent, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const evaluationItems = [
  {
    icon: Sun,
    title: "Orientación del techo",
    description: "Evaluamos la orientación cardinal del techo para maximizar la captación de energía solar.",
  },
  {
    icon: MapPin,
    title: "Sombras disponibles",
    description: "Analizamos sombras de árboles, edificios u obstáculos que puedan afectar el rendimiento.",
  },
  {
    icon: Ruler,
    title: "Espacio útil",
    description: "Medimos el espacio disponible para determinar la cantidad de paneles que caben.",
  },
  {
    icon: Zap,
    title: "Estado eléctrico",
    description: "Revisamos las condiciones eléctricas actuales de la propiedad.",
  },
  {
    icon: Target,
    title: "Objetivo del cliente",
    description: "Conversamos sobre tus objetivos: ahorro, independencia, respaldo, sustentabilidad.",
  },
  {
    icon: CheckSquare,
    title: "Factibilidad técnica",
    description: "Determinamos si el proyecto es viable y qué tipo de sistema es más adecuado.",
  },
];

const requiredDocuments = [
  { icon: Camera, text: "Foto de tu cuenta de luz" },
  { icon: MapPin, text: "Dirección aproximada" },
  { icon: Sun, text: "Tipo de propiedad" },
  { icon: Target, text: "Objetivo del proyecto" },
];

export function SiteVisit() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Info */}
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
              Evaluación técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Vamos a terreno
            </h2>
            <p className="text-lg text-slate-400 mb-6">
              Visitamos tu propiedad en Viña del Mar y alrededores para realizar una 
              evaluación técnica completa. Esta visita nos permite diseñar una solución 
              solar a medida para tus necesidades específicas.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sin compromiso</h4>
                  <p className="text-slate-400 text-sm">La evaluación es gratuita y sin obligación de contratar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Cobertura regional</h4>
                  <p className="text-slate-400 text-sm">Atendemos toda la Región de Valparaíso</p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar visita técnica
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </AnimatedSection>

          {/* Right column - Evaluation items */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {evaluationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Documents section */}
        <AnimatedSection delay={0.3} className="mt-16">
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Documentos útiles para cotizar
                  </h3>
                  <p className="text-slate-400">
                    Para entregar una propuesta más precisa, nos ayuda recibir:
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {requiredDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700"
                    >
                      <doc.icon className="w-4 h-4 text-amber-400" />
                      <span className="text-sm text-slate-300">{doc.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
