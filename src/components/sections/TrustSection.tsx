"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Headphones, 
  Settings, 
  ClipboardCheck,
  MapPin,
  Users,
  MessageCircle,
  Award
} from "lucide-react";
import { Card, CardContent, AnimatedSection } from "@/components/ui";

const trustItems = [
  {
    icon: MapPin,
    title: "Atención en la Región de Valparaíso",
    description: "Conocemos las condiciones específicas de la zona y sus comunas.",
  },
  {
    icon: Users,
    title: "Evaluación presencial",
    description: "Visitamos tu propiedad para evaluar factibilidad real del proyecto.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description: "Atención personalizada por WhatsApp, teléfono y correo electrónico.",
  },
  {
    icon: Award,
    title: "Soluciones adaptadas",
    description: "Diseñamos sistemas según tu consumo real y objetivos específicos.",
  },
];

const guaranteeItems = [
  {
    icon: Shield,
    title: "Garantía de instalación",
    description: "[Texto editable - agregar detalles de garantía de instalación según corresponda]",
  },
  {
    icon: Settings,
    title: "Garantía de equipos",
    description: "[Texto editable - agregar detalles de garantía de equipos según corresponda]",
  },
  {
    icon: Headphones,
    title: "Soporte técnico",
    description: "[Texto editable - agregar detalles de soporte técnico según corresponda]",
  },
  {
    icon: ClipboardCheck,
    title: "Mantención y revisión",
    description: "[Texto editable - agregar detalles de servicios de mantención según corresponda]",
  },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Local trust */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Confianza local
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Atención cercana y profesional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nos caracterizamos por el trato cercano y la atención personalizada. 
            Somos de la zona y entendemos las necesidades específicas de la región.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {trustItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Guarantees */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            Respaldos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Garantías y respaldo
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            [Sección editable para agregar información sobre garantías y respaldos ofrecidos. 
            Reemplazar con información real según corresponda.]
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guaranteeItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow border-amber-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800 text-center">
            <strong>Nota:</strong> Las condiciones finales de garantías y respaldos dependen 
            del proyecto específico, equipamiento seleccionado y contrato final. 
            Contacta con nosotros para conocer los detalles aplicables a tu caso.
          </p>
        </div>
      </div>
    </section>
  );
}
