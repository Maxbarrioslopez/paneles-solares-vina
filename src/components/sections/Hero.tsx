"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ClipboardCheck, Wrench, Users, Sun } from "lucide-react";
import { Button, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL } from "@/constants/config";

const trustIndicators = [
  { icon: MapPin, text: "Visita a terreno" },
  { icon: ClipboardCheck, text: "Evaluación técnica" },
  { icon: Wrench, text: "Instalación profesional" },
  { icon: Users, text: "Servicio local" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Animated solar pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                <Sun className="w-4 h-4" />
                Especialistas en energía solar
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Instalación de{" "}
              <span className="text-gradient-solar">paneles solares</span>{" "}
              en Viña del Mar y Región de Valparaíso
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Visitamos tu domicilio, empresa o terreno, evaluamos tu consumo eléctrico 
              y diseñamos una solución solar a medida para ti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                variant="default"
                size="xl"
                className="group shadow-lg shadow-amber-500/25"
                asChild
              >
                <a href="#contacto">
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="shadow-lg shadow-green-500/25"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {trustIndicators.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start gap-2 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  <item.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-slate-300 text-center lg:text-left">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main visual element */}
              <div className="relative w-96 h-96">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-pulse-slow" />
                
                {/* Middle ring */}
                <div className="absolute inset-8 rounded-full border-2 border-sky-500/20" />
                
                {/* Inner content */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30">
                  <Sun className="w-32 h-32 text-white" />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-amber-500">%</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center"
                >
                  <Sun className="w-8 h-8 text-amber-500 mb-1" />
                  <span className="text-xs text-slate-600 font-medium">Solar</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-emerald-500 rounded-xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">Eco</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
