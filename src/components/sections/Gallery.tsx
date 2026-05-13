"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ImageIcon } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

// Nota: Estas son imágenes placeholder. Reemplazar con imágenes reales en /public/gallery/
const galleryCategories = [
  { id: "todas", label: "Todas" },
  { id: "instalaciones", label: "Instalaciones" },
  { id: "evaluaciones", label: "Evaluaciones" },
  { id: "techos", label: "Techos" },
  { id: "equipos", label: "Equipos" },
  { id: "mantencion", label: "Mantención" },
];

// Placeholder images - Reemplazar con imágenes reales
const galleryImages = [
  { id: 1, category: "instalaciones", title: "Instalación residencial", description: "Sistema fotovoltaico en techo de vivienda" },
  { id: 2, category: "evaluaciones", title: "Evaluación técnica", description: "Visita a terreno para evaluación" },
  { id: 3, category: "techos", title: "Instalación en techo", description: "Paneles solares orientados al norte" },
  { id: 4, category: "equipos", title: "Inversor solar", description: "Equipo de conversión de energía" },
  { id: 5, category: "instalaciones", title: "Proyecto comercial", description: "Instalación para negocio local" },
  { id: 6, category: "mantencion", title: "Mantención preventiva", description: "Limpieza y revisión de paneles" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "todas" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Nuestros proyectos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos de instalación de paneles solares 
            en la Región de Valparaíso.
          </p>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-100"
                onClick={() => setSelectedImage(image)}
              >
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                  <ImageIcon className="w-16 h-16 text-slate-400 mb-4" />
                  <p className="text-slate-500 text-sm font-medium">{image.title}</p>
                  <p className="text-slate-400 text-xs mt-1">Reemplazar: gallery-{image.id}.jpg</p>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-slate-300 text-sm">{image.description}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-slate-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instructions for replacing images */}
        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-2">📸 Instrucciones para agregar imágenes reales:</h4>
          <ol className="text-sm text-amber-800 space-y-1 list-decimal list-inside">
            <li>Guarda tus imágenes en la carpeta <code className="bg-amber-200 px-1 rounded">/public/gallery/</code></li>
            <li>Nombra los archivos: <code className="bg-amber-200 px-1 rounded">gallery-1.jpg</code>, <code className="bg-amber-200 px-1 rounded">gallery-2.jpg</code>, etc.</li>
            <li>Actualiza el array <code className="bg-amber-200 px-1 rounded">galleryImages</code> en este archivo con las rutas correctas</li>
            <li>Reemplaza los componentes placeholder con componentes <code className="bg-amber-200 px-1 rounded">Image</code> de Next.js</li>
          </ol>
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-20 h-20 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Imagen: gallery-{selectedImage.id}.jpg</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-slate-400">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
