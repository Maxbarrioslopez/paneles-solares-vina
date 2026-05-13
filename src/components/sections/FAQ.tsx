"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

const faqs = [
  {
    question: "¿Realizan visitas a terreno?",
    answer: "Sí, realizamos visitas técnicas a terreno en toda la Región de Valparaíso. Durante la visita evaluamos la orientación del techo, sombras, espacio disponible y condiciones eléctricas. Esta evaluación nos permite diseñar una solución personalizada y entregar una propuesta precisa.",
  },
  {
    question: "¿Atienden Viña del Mar?",
    answer: "Sí, Viña del Mar es nuestra zona principal de cobertura. También atendemos Valparaíso, Concón, Quilpué, Villa Alemana, Reñaca, Limache, Olmué, Casablanca y otras comunas de la región previa coordinación.",
  },
  {
    question: "¿Cuánto puedo ahorrar con paneles solares?",
    answer: "El ahorro depende de varios factores: tu consumo actual, orientación del techo, horas de sol disponibles, y el tamaño del sistema instalado. Una evaluación técnica nos permite calcular el ahorro estimado para tu caso específico. Lo importante es que podrás reducir significativamente tu dependencia de la red eléctrica.",
  },
  {
    question: "¿Cuánto demora una instalación?",
    answer: "El tiempo de instalación varía según el tamaño y complejidad del sistema. Una instalación residencial típica puede tomar entre 1 a 3 días. Antes de la instalación, necesitamos realizar la visita técnica y preparar la propuesta, lo que toma aproximadamente 1-2 días hábiles después de la visita.",
  },
  {
    question: "¿Sirve para casas y empresas?",
    answer: "Sí, instalamos sistemas solares tanto para hogares como para negocios, locales comerciales e industrias. El diseño del sistema se adapta según el tipo de propiedad, consumo eléctrico y objetivos específicos de cada cliente.",
  },
  {
    question: "¿Necesito enviar mi cuenta de luz?",
    answer: "Es recomendable tener tu cuenta de luz a mano cuando nos contactes. Con ella podemos analizar tu consumo histórico y diseñar un sistema adecuado a tus necesidades. Si no la tienes disponible, podemos hacer una estimación inicial y refinarla posteriormente.",
  },
  {
    question: "¿Hacen mantención?",
    answer: "Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para sistemas solares. Esto incluye limpieza de paneles, revisión del inversor, inspección de conexiones eléctricas y monitoreo del rendimiento. La mantención regular ayuda a mantener el sistema funcionando de manera óptima.",
  },
  {
    question: "¿El sistema funciona en días nublados?",
    answer: "Los paneles solares generan electricidad incluso en días nublados, aunque con menor intensidad que en días soleados. En sistemas on-grid, cuando la generación es insuficiente, se consume automáticamente de la red eléctrica. Para sistemas off-grid, se recomienda dimensionar adecuadamente las baterías para estos días.",
  },
  {
    question: "¿Necesito baterías?",
    answer: "Las baterías son necesarias solo si quieres almacenar energía para usarla cuando no hay sol (sistemas off-grid o híbridos) o si deseas tener respaldo ante cortes de luz. En sistemas on-grid (conectados a la red), no son obligatorias ya que la red actúa como 'batería virtual' permitiendo compensar excedentes.",
  },
  {
    question: "¿Funciona en invierno?",
    answer: "Sí, los paneles solares funcionan durante todo el año. Aunque la generación es menor en invierno debido a menos horas de sol, el sistema sigue produciendo electricidad. El rendimiento anual considera las variaciones estacionales, y el diseño del sistema se hace pensando en el consumo anual, no solo mensual.",
  },
  {
    question: "¿Qué pasa si hay nubes?",
    answer: "Las nubes reducen la intensidad de la luz solar, lo que disminuye temporalmente la generación de electricidad. Sin embargo, los paneles siguen generando energía incluso con luz difusa. En sistemas conectados a la red, automáticamente consumes de la red cuando la generación solar es insuficiente.",
  },
  {
    question: "¿Necesito mucho espacio?",
    answer: "El espacio necesario depende del tamaño del sistema requerido según tu consumo. Un sistema residencial típico puede requerir entre 10-30 m² de techo. Durante la visita técnica evaluamos el espacio disponible y te recomendamos la mejor solución según tus condiciones específicas.",
  },
  {
    question: "¿Puedo pedir una evaluación antes de decidir?",
    answer: "Absolutamente. Ofrecemos evaluaciones técnicas en terreno sin compromiso. Durante la visita analizamos tu propiedad, consumo eléctrico y factibilidad del proyecto. Posteriormente te entregamos una propuesta técnica y económica detallada para que puedas tomar una decisión informada.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-slate-600">
            Aquí encontrarás respuestas a las preguntas más comunes sobre instalación de paneles solares.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-9">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
