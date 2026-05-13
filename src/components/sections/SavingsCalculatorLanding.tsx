"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Zap, Sun, ArrowRight, Home } from "lucide-react";
import { Button, Card, CardContent, AnimatedSection } from "@/components/ui";
import { WHATSAPP_URL, COVERAGE_AREAS } from "@/constants/config";
import { useApp } from "@/contexts/AppContext";

export function SavingsCalculatorLanding() {
  const { language } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlyBill: "",
    propertyType: "casa",
    city: "",
  });

  const calculateSavings = () => {
    const bill = parseInt(formData.monthlyBill) || 0;
    const estimatedMonthlySavings = Math.round(bill * 0.6); // Estimación conservadora 60%
    const annualSavings = estimatedMonthlySavings * 12;
    return { estimatedMonthlySavings, annualSavings };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && formData.monthlyBill) {
      setStep(2);
    }
  };

  const { estimatedMonthlySavings, annualSavings } = calculateSavings();

  const resetCalculator = () => {
    setFormData({ monthlyBill: "", propertyType: "casa", city: "" });
    setStep(1);
  };

  return (
    <section id="calculadora" className="py-24 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
            {language === "es" ? "Herramienta gratuita" : "Free tool"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === "es" 
              ? "¿Cuánto podrías ahorrar con paneles solares?"
              : "How much could you save with solar panels?"}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {language === "es"
              ? "Calcula en segundos tu ahorro estimado mensual y anual"
              : "Calculate your estimated monthly and annual savings in seconds"}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="shadow-xl overflow-hidden">
            <CardContent className="p-0">
              {/* Progress Steps */}
              <div className="bg-slate-100 dark:bg-slate-800 p-4 flex items-center justify-center gap-4">
                <div className={`flex items-center gap-2 ${step >= 1 ? "text-amber-600" : "text-slate-400"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-amber-500 text-white" : "bg-slate-300"}`}>
                    {step > 1 ? "✓" : "1"}
                  </div>
                  <span className="font-medium hidden sm:inline">
                    {language === "es" ? "Tu consumo" : "Your consumption"}
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-slate-300" />
                <div className={`flex items-center gap-2 ${step >= 2 ? "text-amber-600" : "text-slate-400"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-amber-500 text-white" : "bg-slate-300"}`}>
                    2
                  </div>
                  <span className="font-medium hidden sm:inline">
                    {language === "es" ? "Tu ahorro" : "Your savings"}
                  </span>
                </div>
              </div>

              {/* Form Step 1: Monthly Bill */}
              {step === 1 && (
                <motion.form 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmit}
                  className="p-8 space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {language === "es" ? "¿Cuánto pagas monthly de luz?" : "How much do you pay monthly for electricity?"}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {language === "es" ? "Ingresa el valor approximate de tu cuenta" : "Enter the approximate value of your bill"}
                    </p>
                  </div>

                  <div className="max-w-md mx-auto">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">$</span>
                      <input
                        type="number"
                        placeholder="80.000"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-center border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-amber-500 focus:ring-0"
                        required
                      />
                    </div>
                    <p className="text-sm text-slate-500 text-center mt-2">
                      {language === "es" ? "CLP mensuales" : "CLP monthly"}
                    </p>
                  </div>

                  <div className="max-w-md mx-auto">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {language === "es" ? "Tipo de propiedad" : "Property type"}
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value="casa">{language === "es" ? "Casa" : "House"}</option>
                      <option value="departamento">{language === "es" ? "Departamento" : "Apartment"}</option>
                      <option value="negocio">{language === "es" ? "Negocio / Local" : "Business / Store"}</option>
                      <option value="empresa">{language === "es" ? "Empresa" : "Company"}</option>
                    </select>
                  </div>

                  <Button type="submit" size="xl" className="w-full max-w-md mx-auto">
                    {language === "es" ? "Calcular mi ahorro" : "Calculate my savings"}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.form>
              )}

              {/* Results Step 2 */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {language === "es" ? "¡Tu ahorro estimado!" : "Your estimated savings!"}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 text-center">
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2">
                        {language === "es" ? "Ahorro mensual" : "Monthly savings"}
                      </p>
                      <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                        ${estimatedMonthlySavings.toLocaleString()}
                      </p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">
                        CLP/mes
                      </p>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 text-center">
                      <p className="text-sm text-amber-600 dark:text-amber-400 mb-2">
                        {language === "es" ? "Ahorro anual" : "Annual savings"}
                      </p>
                      <p className="text-4xl font-bold text-amber-600 dark:text-amber-400">
                        ${annualSavings.toLocaleString()}
                      </p>
                      <p className="text-sm text-amber-600 dark:text-amber-400">
                        CLP/año
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-amber-500 mt-0.5" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>{language === "es" ? "Importante:" : "Important:"}</strong>{" "}
                        {language === "es"
                          ? "Este es un cálculo estimado referencial. Para conocer el ahorro real para tu caso específico, necesitamos realizar una evaluación técnica en terreno sin costo."
                          : "This is an estimated referential calculation. To know the real savings for your specific case, we need to perform a technical on-site evaluation at no cost."}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      onClick={resetCalculator}
                      className="flex-1"
                    >
                      {language === "es" ? "Calcular de nuevo" : "Calculate again"}
                    </Button>
                    <Button 
                      size="lg" 
                      className="flex-1"
                      asChild
                    >
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Zap className="w-5 h-5" />
                        {language === "es" ? "Agendar evaluación gratuita" : "Schedule free evaluation"}
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}