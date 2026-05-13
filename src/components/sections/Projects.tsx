"use client";

import { motion } from "framer-motion";
import { Home, Building2, MapPin, Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent, Button, Badge, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const projects = [
  {
    icon: Home,
    title: "Instalación residencial en Viña del Mar",
    type: "Residencial",
    location: "Viña del Mar",
    description: "Instalación de sistema fotovoltaico on-grid para vivienda unifamiliar. Sistema diseñado según consumo eléctrico del hogar y orientación del techo.",
    services: ["Evaluación técnica", "Diseño personalizado", "Instalación completa"],
    status: "Completado",
  },
  {
    icon: Building2,
    title: "Sistema solar para negocio local",
    type: "Comercial",
    location: "Valparaíso",
    description: "Instalación de paneles solares para pequeño negocio en el centro de Valparaíso. Reducción significativa de costos operacionales mensuales.",
    services: ["Análisis de consumo", "Sistema on-grid", "Capacitación de uso"],
    status: "Completado",
  },
  {
    icon: MapPin,
    title: "Evaluación técnica en terreno",
    type: "Evaluación",
    location: "Concón",
    description: "Visita técnica completa para evaluar factibilidad de instalación solar. Análisis de orientación, sombras y espacio disponible.",
    services: ["Visita a terreno", "Estudio de sombras", "Propuesta técnica"],
    status: "Evaluación",
  },
  {
    icon: Wrench,
    title: "Mantención de sistema fotovoltaico",
    type: "Mantención",
    location: "Quilpué",
    description: "Servicio de mantenimiento preventivo para sistema solar existente. Limpieza de paneles, revisión de inversor y conexiones eléctricas.",
    services: ["Limpieza de paneles", "Revisión técnica", "Optimización"],
    status: "Completado",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Casos de éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Proyectos realizados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce algunos de los proyectos que hemos desarrollado en la Región de Valparaíso. 
            Cada instalación es única y adaptada a las necesidades del cliente.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant={project.status === "Completado" ? "accent" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100">{project.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-slate-700 mb-2">Servicios incluidos:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Consultar proyecto similar
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            <strong>Nota:</strong> Los proyectos mostrados son ejemplos representativos. 
            Los detalles específicos de cada instalación varían según las necesidades del cliente. 
            Contáctanos para conocer cómo podemos ayudarte con tu proyecto específico.
          </p>
        </div>
      </div>
    </section>
  );
}
