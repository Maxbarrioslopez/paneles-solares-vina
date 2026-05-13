"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Activity, 
  Zap, 
  Search, 
  Shield, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, Button, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const maintenanceServices = [
  {
    icon: Sparkles,
    title: "Limpieza de paneles",
    description: "Eliminación de polvo, hojas y residuos que reducen el rendimiento de los paneles solares.",
  },
  {
    icon: Activity,
    title: "Diagnóstico técnico",
    description: "Evaluación completa del sistema para detectar posibles fallas o bajas en el rendimiento.",
  },
  {
    icon: Zap,
    title: "Revisión de inversor",
    description: "Chequeo del inversor para asegurar su correcto funcionamiento y eficiencia.",
  },
  {
    icon: Search,
    title: "Inspección eléctrica",
    description: "Revisión de conexiones, cableado y componentes eléctricos del sistema.",
  },
  {
    icon: Shield,
    title: "Monitoreo",
    description: "Seguimiento del rendimiento del sistema para mantenerlo funcionando óptimamente.",
  },
  {
    icon: CheckCircle,
    title: "Mantención preventiva",
    description: "Servicios programados para prevenir fallas y extender la vida útil del sistema.",
  },
];

export function Maintenance() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Info */}
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
              Servicio técnico
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Mantención de sistemas solares
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Ofrecemos servicios de mantenimiento para sistemas fotovoltaicos existentes. 
              El mantenimiento regular asegura que tu inversión siga rindiendo al máximo 
              durante todos los años de vida útil del sistema.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Mayor vida útil</h4>
                  <p className="text-slate-600 text-sm">Mantenimiento que extiende la duración de tus equipos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Rendimiento óptimo</h4>
                  <p className="text-slate-600 text-sm">Tu sistema siempre funcionando a máxima capacidad</p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar mantención
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </AnimatedSection>

          {/* Right column - Services */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {maintenanceServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">{service.title}</h4>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
