"use client";

import { motion } from "framer-motion";
import { 
  PiggyBank, 
  Leaf, 
  Battery, 
  UserCheck, 
  ShieldCheck, 
  Headphones 
} from "lucide-react";
import { Card, CardContent, AnimatedSection } from "@/components/ui";

const benefits = [
  {
    icon: PiggyBank,
    title: "Ahorro en la cuenta de luz",
    description: "Reduce significativamente tus gastos en electricidad con energía solar limpia y renovable.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Leaf,
    title: "Energía limpia y sustentable",
    description: "Contribuye al cuidado del medio ambiente utilizando una fuente de energía 100% renovable.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Battery,
    title: "Mayor independencia energética",
    description: "Genera tu propia electricidad y reduce la dependencia de la red eléctrica tradicional.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: UserCheck,
    title: "Evaluación personalizada",
    description: "Cada proyecto es único. Analizamos tus necesidades específicas para ofrecerte la mejor solución.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: ShieldCheck,
    title: "Instalación segura",
    description: "Instalación realizada por profesionales con cumplimiento de normativas de seguridad eléctrica.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Headphones,
    title: "Soporte y mantención local",
    description: "Atención personalizada en la Región de Valparaíso con servicio de mantención post-instalación.",
    color: "bg-indigo-100 text-indigo-700",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué elegir energía solar?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre las ventajas de instalar paneles solares en tu hogar o empresa en la Región de Valparaíso.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
