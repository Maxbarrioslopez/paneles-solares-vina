"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Building2, 
  MapPin, 
  PenTool, 
  Wrench, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, Button, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const services = [
  {
    icon: Home,
    title: "Paneles solares residenciales",
    description: "Instalación de sistemas fotovoltaicos para hogares. Reduce tu cuenta de luz y aumenta el valor de tu propiedad con energía limpia.",
    features: ["Diseño personalizado", "Instalación completa", "Soporte técnico"],
  },
  {
    icon: Building2,
    title: "Sistemas solares para empresas",
    description: "Soluciones solares para negocios, locales comerciales e industrias. Optimiza tus costos operacionales con energía renovable.",
    features: ["Análisis de consumo", "Sistemas escalables", "Monitoreo"],
  },
  {
    icon: MapPin,
    title: "Evaluación en terreno",
    description: "Visita técnica a tu propiedad para evaluar factibilidad, orientación del techo, sombras y espacio disponible para la instalación.",
    features: ["Sin compromiso", "Análisis técnico", "Presupuesto detallado"],
  },
  {
    icon: PenTool,
    title: "Diseño de sistema fotovoltaico",
    description: "Diseño personalizado según tu consumo eléctrico, espacio disponible y objetivos de ahorro. Sistemas on-grid, off-grid e híbridos.",
    features: ["Cálculo de consumo", "Simulación de ahorro", "Planos técnicos"],
  },
  {
    icon: Wrench,
    title: "Mantención y revisión técnica",
    description: "Servicio de mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento de tu sistema solar.",
    features: ["Limpieza de paneles", "Revisión de inversor", "Inspección eléctrica"],
  },
  {
    icon: Lightbulb,
    title: "Asesoría en eficiencia energética",
    description: "Te ayudamos a optimizar tu consumo eléctrico antes y después de la instalación solar para maximizar tus ahorros.",
    features: ["Auditoría energética", "Recomendaciones", "Seguimiento"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Soluciones solares completas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos un servicio integral desde la evaluación inicial hasta el mantenimiento de tu sistema solar.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Consultar
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
