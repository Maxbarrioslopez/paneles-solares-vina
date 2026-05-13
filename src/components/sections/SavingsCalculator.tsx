"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Info, Sun, DollarSign } from "lucide-react";
import { Button, Card, CardContent, AnimatedSection, Select, Input } from "@/components/ui";
import { WHATSAPP_URL, PROPERTY_TYPES, COVERAGE_AREAS } from "@/constants/config";

export function SavingsCalculator() {
  const [formData, setFormData] = useState({
    monthlyBill: "",
    propertyType: "",
    comuna: "",
  });
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Calculadora
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Estima tu potencial de ahorro
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Esta calculadora te da una estimación referencial. Una evaluación técnica 
            presencial permitirá entregar una propuesta precisa para tu caso específico.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Calculator form */}
          <AnimatedSection>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Datos de tu consumo
                  </h3>
                </div>

                <form onSubmit={handleCalculate} className="space-y-6">
                  <div>
                    <label htmlFor="monthlyBill" className="block text-sm font-medium text-slate-700 mb-2">
                      Valor aproximado de cuenta eléctrica mensual (CLP)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="monthlyBill"
                        type="number"
                        placeholder="Ej: 80000"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="pl-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">
                      Tipo de propiedad
                    </label>
                    <Select
                      id="propertyType"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      required
                    >
                      <option value="">Selecciona el tipo</option>
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="comuna" className="block text-sm font-medium text-slate-700 mb-2">
                      Comuna
                    </label>
                    <Select
                      id="comuna"
                      value={formData.comuna}
                      onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                      required
                    >
                      <option value="">Selecciona tu comuna</option>
                      {COVERAGE_AREAS.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Calcular estimación
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      <strong>Nota importante:</strong> Esta calculadora muestra estimaciones 
                      referenciales. Una evaluación técnica en terreno es necesaria para 
                      determinar la factibilidad real y el ahorro potencial exacto según 
                      las condiciones de tu propiedad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Results */}
          <AnimatedSection delay={0.2}>
            {showResult ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Sun className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">Resultado estimado</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/10">
                        <p className="text-emerald-100 text-sm mb-1">Con un sistema solar adecuado:</p>
                        <p className="text-2xl font-bold">
                          Podrías reducir una parte importante de tu consumo eléctrico
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/10">
                        <p className="text-emerald-100 text-sm mb-1">Factores que se evalúan:</p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            Orientación y ángulo del techo
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            Horas de sol en tu ubicación
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            Consumo real y patrones de uso
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            Espacio disponible para paneles
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">
                      ¿Quieres una evaluación precisa?
                    </h4>
                    <p className="text-slate-600 mb-6">
                      Agenda una visita técnica gratuita para obtener una propuesta 
                      personalizada con cifras reales para tu caso específico.
                    </p>
                    <Button className="w-full" size="lg" asChild>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        Agendar evaluación técnica
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-10 h-10 text-slate-400" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-900 mb-2">
                    Completa el formulario
                  </h4>
                  <p className="text-slate-500">
                    Ingresa tus datos para ver una estimación referencial de ahorro.
                  </p>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
