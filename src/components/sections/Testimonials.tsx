"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { Card, CardContent, AnimatedSection } from "@/components/ui";

// NOTA: Estos son placeholders editables. NO son testimonios reales.
// Reemplazar con testimonios reales una vez que los tengas.
const testimonials = [
  {
    id: 1,
    name: "[Nombre del cliente]",
    location: "Viña del Mar",
    type: "Instalación residencial",
    quote: "[Testimonio del cliente sobre su experiencia con la instalación de paneles solares. Reemplazar con texto real.]",
    initials: "NC",
  },
  {
    id: 2,
    name: "[Nombre del cliente]",
    location: "Valparaíso",
    type: "Sistema para negocio",
    quote: "[Testimonio del cliente sobre su experiencia con la instalación de paneles solares. Reemplazar con texto real.]",
    initials: "NC",
  },
  {
    id: 3,
    name: "[Nombre del cliente]",
    location: "Concón",
    type: "Evaluación técnica",
    quote: "[Testimonio del cliente sobre su experiencia con la instalación de paneles solares. Reemplazar con texto real.]",
    initials: "NC",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Historias de clientes que han confiado en nosotros para sus proyectos solares.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-amber-200 mb-4" />
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.location} • {testimonial.type}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-2">📝 Instrucciones para agregar testimonios reales:</h4>
          <ol className="text-sm text-amber-800 space-y-1 list-decimal list-inside">
            <li>Reemplaza los campos [Nombre del cliente] con nombres reales (con permiso)</li>
            <li>Reemplaza los textos de testimonio con citas reales de tus clientes</li>
            <li>Agrega fotos de clientes en la carpeta <code className="bg-amber-200 px-1 rounded">/public/testimonials/</code> si lo deseas</li>
            <li>Actualiza las ubicaciones y tipos de proyecto según corresponda</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
