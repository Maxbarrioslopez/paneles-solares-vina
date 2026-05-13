"use client";

import { motion } from "framer-motion";
import { Camera, MessageCircle, ArrowRight, Info } from "lucide-react";
import { Button, Card, CardContent, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

export function ElectricBillCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-500 to-amber-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                      Evaluación rápida
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Envíanos una foto de tu cuenta de luz y evaluamos tu caso
                  </h2>
                  
                  <p className="text-amber-100 mb-6">
                    Con tu cuenta de luz podemos analizar tu consumo histórico y diseñar 
                    una propuesta más precisa. Envíala por WhatsApp y te respondemos 
                    en breve.
                  </p>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10">
                    <Info className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">
                      <strong>¿Qué necesitamos?</strong> Una foto clara de tu cuenta de luz 
                      donde se vea el consumo mensual y el valor a pagar. También puedes 
                      enviar varias cuentas de meses diferentes para un análisis más completo.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-amber-600 hover:bg-slate-100 shadow-lg"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Enviar por WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="#contacto">
                      Solicitar evaluación
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
