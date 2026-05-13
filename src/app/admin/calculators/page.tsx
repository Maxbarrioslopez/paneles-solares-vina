"use client";

import { useState, useMemo } from "react";
import { useApp } from "@/contexts/AppContext";
import { Calculator, DollarSign, TrendingUp, Calendar, Percent, PiggyBank } from "lucide-react";

export default function FinancialCalculatorPage() {
  const { language } = useApp();

  const [inputs, setInputs] = useState({
    systemSize: 5,           // kWp
    panelsCount: 12,
    equipmentCost: 4000000,  // CLP
    installationCost: 800000, // CLP
    permitsCost: 200000,     // CLP
    monthlyBill: 80000,      // CLP
    annualIncrease: 10,       // % anual
    electricityRate: 180,     // CLP/kWh
    monthlyGeneration: 600,    // kWh/mes
    systemEfficiency: 85,     // %
    batteryCost: 0,           // CLP (opcional)
    subsidy: 0,                // CLP (si aplica)
  });

  const results = useMemo(() => {
    const totalInvestment = inputs.equipmentCost + inputs.installationCost + inputs.permitsCost + inputs.batteryCost - inputs.subsidy;
    
    // Generación real mensual (considerando eficiencia y pérdidas)
    const realMonthlyGeneration = inputs.monthlyGeneration * (inputs.systemEfficiency / 100);
    const annualGeneration = realMonthlyGeneration * 12;
    
    // Ahorro anual (considerando aumento de tarifas)
    const baseAnnualSavings = realMonthlyGeneration * inputs.electricityRate * 12;
    const year1Savings = baseAnnualSavings;
    const year5Savings = baseAnnualSavings * Math.pow(1 + inputs.annualIncrease / 100, 5);
    const year10Savings = baseAnnualSavings * Math.pow(1 + inputs.annualIncrease / 100, 10);
    const year25Savings = baseAnnualSavings * ((Math.pow(1 + inputs.annualIncrease / 100, 25) - 1) / (inputs.annualIncrease / 100));
    
    // Payback simple (sin considerar aumento de tarifas)
    const payback = totalInvestment / baseAnnualSavings * 12; // meses
    
    // ROI
    const roi5Years = ((year5Savings - totalInvestment) / totalInvestment) * 100;
    const roi10Years = ((year10Savings - totalInvestment) / totalInvestment) * 100;
    const roi25Years = ((year25Savings - totalInvestment) / totalInvestment) * 100;

    // Costos de oportunidad (lo que pagarías en 25 años sin solar)
    const futureElectricityCost = inputs.monthlyBill * 12 * ((Math.pow(1 + inputs.annualIncrease / 100, 25) - 1) / (inputs.annualIncrease / 100));
    const netSavings25Years = year25Savings;

    return {
      totalInvestment,
      realMonthlyGeneration,
      annualGeneration,
      year1Savings,
      year5Savings,
      year10Savings,
      year25Savings,
      payback,
      roi5Years,
      roi10Years,
      roi25Years,
      futureElectricityCost,
      netSavings25Years,
    };
  }, [inputs]);

  const updateInput = (field: string, value: number) => {
    setInputs({ ...inputs, [field]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {language === "es" ? "Calculadora Financiera" : "Financial Calculator"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel de Inputs */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {language === "es" ? "Datos del Proyecto" : "Project Data"}
              </h3>
              <p className="text-sm text-slate-500">
                {language === "es" ? "Ingresa los datos para calcular" : "Enter data to calculate"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Tamaño sistema (kWp)" : "System size (kWp)"}
                </label>
                <input
                  type="number"
                  value={inputs.systemSize}
                  onChange={(e) => updateInput("systemSize", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Cantidad paneles" : "Panels count"}
                </label>
                <input
                  type="number"
                  value={inputs.panelsCount}
                  onChange={(e) => updateInput("panelsCount", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Costo equipos (CLP)" : "Equipment cost (CLP)"}
                </label>
                <input
                  type="number"
                  value={inputs.equipmentCost}
                  onChange={(e) => updateInput("equipmentCost", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Instalación (CLP)" : "Installation (CLP)"}
                </label>
                <input
                  type="number"
                  value={inputs.installationCost}
                  onChange={(e) => updateInput("installationCost", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Permisos (CLP)" : "Permits (CLP)"}
                </label>
                <input
                  type="number"
                  value={inputs.permitsCost}
                  onChange={(e) => updateInput("permitsCost", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Baterías (CLP)" : "Batteries (CLP)"}
                </label>
                <input
                  type="number"
                  value={inputs.batteryCost}
                  onChange={(e) => updateInput("batteryCost", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Subsidio (CLP)" : "Subsidy (CLP)"}
                </label>
                <input
                  type="number"
                  value={inputs.subsidy}
                  onChange={(e) => updateInput("subsidy", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Generación mensual (kWh)" : "Monthly generation (kWh)"}
                </label>
                <input
                  type="number"
                  value={inputs.monthlyGeneration}
                  onChange={(e) => updateInput("monthlyGeneration", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Cuenta actual (CLP)" : "Current bill (CLP)"}
                </label>
                <input
                  type="number"
                  value={inputs.monthlyBill}
                  onChange={(e) => updateInput("monthlyBill", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Tarifa (CLP/kWh)" : "Rate (CLP/kWh)"}
                </label>
                <input
                  type="number"
                  value={inputs.electricityRate}
                  onChange={(e) => updateInput("electricityRate", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === "es" ? "Aumento anual (%)" : "Annual increase (%)"}
                </label>
                <input
                  type="number"
                  value={inputs.annualIncrease}
                  onChange={(e) => updateInput("annualIncrease", Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Panel de Resultados */}
        <div className="space-y-6">
          {/* Inversión Total */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <div>
                <p className="text-emerald-100 text-sm">{language === "es" ? "Inversión Total" : "Total Investment"}</p>
                <p className="text-4xl font-bold">${(results.totalInvestment / 1000000).toFixed(2)}M</p>
                <p className="text-emerald-100 text-sm">CLP</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-emerald-100">{language === "es" ? "Equipos" : "Equipment"}</p>
                <p className="font-bold">${(inputs.equipmentCost / 1000000).toFixed(2)}M</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-emerald-100">{language === "es" ? "Instalación" : "Installation"}</p>
                <p className="font-bold">${(inputs.installationCost / 1000000).toFixed(2)}M</p>
              </div>
            </div>
          </div>

          {/* Payback */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{language === "es" ? "Payback (Retorno)" : "Payback"}</p>
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                  {results.payback.toFixed(1)} {language === "es" ? "meses" : "months"}
                </p>
                <p className="text-sm text-slate-500">({(results.payback / 12).toFixed(1)} {language === "es" ? "años" : "years"})</p>
              </div>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {language === "es" ? "Retorno de Inversión (ROI)" : "Return on Investment (ROI)"}
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <p className="text-sm text-slate-500">5 {language === "es" ? "años" : "years"}</p>
                <p className="text-2xl font-bold text-emerald-600">{results.roi5Years.toFixed(0)}%</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <p className="text-sm text-slate-500">10 {language === "es" ? "años" : "years"}</p>
                <p className="text-2xl font-bold text-emerald-600">{results.roi10Years.toFixed(0)}%</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <p className="text-sm text-slate-500">25 {language === "es" ? "años" : "years"}</p>
                <p className="text-2xl font-bold text-emerald-600">{results.roi25Years.toFixed(0)}%</p>
              </div>
            </div>
          </div>

          {/* Ahorro Acumulado */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <PiggyBank className="w-6 h-6 text-amber-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {language === "es" ? "Ahorro Acumulado" : "Cumulative Savings"}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                <p className="text-sm text-slate-500">{language === "es" ? "Año 1" : "Year 1"}</p>
                <p className="text-xl font-bold text-emerald-600">${(results.year1Savings / 1000000).toFixed(2)}M</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                <p className="text-sm text-slate-500">{language === "es" ? "Año 5" : "Year 5"}</p>
                <p className="text-xl font-bold text-emerald-600">${(results.year5Savings / 1000000).toFixed(2)}M</p>
              </div>
              <div className="text-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                <p className="text-sm text-slate-500">{language === "es" ? "Año 10" : "Year 10"}</p>
                <p className="text-xl font-bold text-emerald-700">${(results.year10Savings / 1000000).toFixed(2)}M</p>
              </div>
              <div className="text-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                <p className="text-sm text-slate-500">{language === "es" ? "Año 25" : "Year 25"}</p>
                <p className="text-2xl font-bold text-emerald-700">${(results.year25Savings / 1000000).toFixed(1)}M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nota */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <strong>{language === "es" ? "Nota importante:" : "Important note:"}</strong>{" "}
          {language === "es" 
            ? " Estos cálculos son estimaciones referenciales basadas en tarifas actuales y proyecciones de aumento. Los valores reales pueden variar según el consumo, clima y condiciones específicas del sitio. Se recomienda una evaluación técnica para obtener cifras precisas."
            : " These calculations are referential estimates based on current rates and increase projections. Actual values may vary depending on consumption, weather, and specific site conditions. A technical evaluation is recommended for accurate figures."}
        </p>
      </div>
    </div>
  );
}