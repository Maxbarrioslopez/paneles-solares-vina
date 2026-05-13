"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Battery, 
  Combine, 
  BatteryCharging, 
  Activity,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, Button, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const solutions = [
  {
    icon: Zap,
    title: "Sistema On-Grid",
    subtitle: "Conectado a la red",
    description: "Sistema solar conectado a la red eléctrica. La energía excedente se puede inyectar a la red y compensar en tu cuenta de luz.",
    idealFor: ["Hogares con conexión a red", "Negocios", "Industrias"],
    benefits: ["Menor inversión inicial", "Compensación en cuenta", "Sin preocupación por baterías"],
  },
  {
    icon: Battery,
    title: "Sistema Off-Grid",
    subtitle: "Independiente total",
    description: "Sistema solar completamente independiente de la red eléctrica. Ideal para lugares sin acceso a la red o que buscan autonomía total.",
    idealFor: ["Terrenos rurales", "Cabañas", "Lugares aislados"],
    benefits: ["Independencia total", "No depende de la red", "Energía 24/7 con baterías"],
  },
  {
    icon: Combine,
    title: "Sistema Híbrido",
    subtitle: "Lo mejor de ambos",
    description: "Combina conexión a la red con almacenamiento en baterías. Usa energía solar, baterías y red según sea más conveniente.",
    idealFor: ["Hogares modernos", "Empresas", "Quienes buscan respaldo"],
    benefits: ["Máxima flexibilidad", "Respaldo ante cortes", "Optimización de costos"],
  },
  {
    icon: BatteryCharging,
    title: "Sistemas con Baterías",
    subtitle: "Almacenamiento de energía",
    description: "Sistema solar con baterías de litio para almacenar el excedente. Ideal para usar energía solar durante la noche.",
    idealFor: ["Hogares con alto consumo nocturno", "Respaldo energético", "Autoconsumo"],
    benefits: ["Autoconsumo 24 horas", "Respaldo nocturno", "Mayor independencia"],
  },
  {
    icon: Activity,
    title: "Mantención y Monitoreo",
    subtitle: "Cuidamos tu inversión",
    description: "Servicios de mantenimiento preventivo, limpieza de paneles y monitoreo del rendimiento de tu sistema solar.",
    idealFor: ["Sistemas existentes", "Prevención de fallas", "Optimización"],
    benefits: ["Mayor vida útil", "Rendimiento óptimo", "Detección temprana de problemas"],
  },
];

export function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
            Tipos de soluciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Soluciones solares para cada necesidad
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos diferentes tipos de sistemas fotovoltaicos según tus necesidades, 
            ubicación y objetivos de ahorro o independencia energética.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-sky-600 font-medium">
                      {solution.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 mb-4 flex-grow">
                    {solution.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-slate-700 mb-2">Ideal para:</p>
                      <div className="flex flex-wrap gap-1">
                        {solution.idealFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-700 mb-2">Beneficios:</p>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Más información
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
