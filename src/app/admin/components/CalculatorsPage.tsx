"use client";

import { useState, useMemo } from "react";
import { useApp } from "@/contexts/AppContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultAppliances, solarDataByCity, orientationFactors, shadingFactors, Lead } from "@/hooks/useLocalStorage";
import { Calculator, Plus, Trash2, Download, Sun, Zap, DollarSign, Home } from "lucide-react";

interface ApplianceUsage {
  id: string;
  watts: number;
  hoursPerDay: number;
  quantity: number;
}

export function CalculatorsPage() {
  const { language, t } = useApp();
  const [leads, setLeads] = useLocalStorage<Lead[]>("solar-leads", [] as Lead[]);
  
  const [consumption, setConsumption] = useState<ApplianceUsage[]>([
    { id: "1", watts: 150, hoursPerDay: 12, quantity: 1 }
  ]);

  const [formData, setFormData] = useState({
    city: "Viña del Mar",
    orientation: "north",
    shading: "none",
    currentBill: 80000,
    propertyType: "casa",
  });

  // Calcular consumo total
  const totalConsumption = useMemo(() => {
    return consumption.reduce((sum, item) => {
      const dailyWh = item.watts * item.hoursPerDay * item.quantity;
      const monthlyKwh = (dailyWh * 30) / 1000;
      return sum + monthlyKwh;
    }, 0);
  }, [consumption]);

  // Obtener datos solares de la ciudad
  const solarData = solarDataByCity.find(c => c.city === formData.city) || solarDataByCity[0];

  // Calcular paneles necesarios
  const calculations = useMemo(() => {
    const hsp = solarData.hsp;
    const orientationFactor = orientationFactors[formData.orientation];
    const shadingFactor = shadingFactors[formData.shading];
    const efficiencyFactor = orientationFactor * shadingFactor;

    // kWp necesario (considerando que el sistema genera más en verano que en invierno)
    const requiredKwp = totalConsumption / (hsp * 30 * efficiencyFactor);
    
    // Paneles de 450W
    const panelWatts = 450;
    const panelsNeeded = Math.ceil((requiredKwp * 1000) / panelWatts);
    
    // Espacio necesario (aprox 1.7m² por panel)
    const spaceRequired = panelsNeeded * 1.7;
    
    // Generación anual
    const annualGeneration = requiredKwp * solarData.yearlyProductionPerkW * efficiencyFactor;
    
    // Ahorro mensual estimado (CLP)
    const rate = 180; // CLP/kWh promedio
    const monthlySavings = Math.round((annualGeneration / 12) * rate);
    
    // Inversión estimada (USD x kWp, aproximadamente $800 USD por kWp instalado)
    const investmentCLP = Math.round(requiredKwp * 800 * 950); // ~950 CLP por USD

    return {
      requiredKwp: Math.max(requiredKwp, 0.5),
      panelsNeeded,
      spaceRequired,
      annualGeneration,
      monthlySavings,
      investmentCLP,
      efficiencyFactor,
      coverage: Math.min((annualGeneration / (totalConsumption * 12)) * 100, 120),
    };
  }, [totalConsumption, solarData, formData]);

  const addAppliance = (applianceId: string) => {
    const appliance = defaultAppliances.find(a => a.id === applianceId);
    if (appliance) {
      setConsumption([...consumption, {
        id: Date.now().toString(),
        watts: appliance.defaultWatts,
        hoursPerDay: 4,
        quantity: 1,
      }]);
    }
  };

  const removeAppliance = (id: string) => {
    if (consumption.length > 1) {
      setConsumption(consumption.filter(c => c.id !== id));
    }
  };

  const updateAppliance = (id: string, field: keyof ApplianceUsage, value: number) => {
    setConsumption(consumption.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const saveAsLead = () => {
    const newLead = {
      id: Date.now().toString(),
      name: prompt(language === "es" ? "Nombre del cliente:" : "Client name:") || "",
      email: prompt(language === "es" ? "Email:" : "Email:") || "",
      phone: prompt(language === "es" ? "Teléfono:" : "Phone:") || "",
      city: formData.city,
      propertyType: formData.propertyType,
      monthlyConsumption: Math.round(totalConsumption),
      status: "new" as const,
      notes: `Sistema recomendado: ${calculations.panelsNeeded} paneles | ${calculations.requiredKwp.toFixed(1)} kWp`,
      dateCreated: new Date().toLocaleDateString(),
      lastContact: new Date().toISOString(),
      source: "calculator",
    };
    setLeads([...leads, newLead]);
    alert(language === "es" ? "¡Lead guardado exitosamente!" : "Lead saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {language === "es" ? "Calculadora Solar" : "Solar Calculator"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel 1: Consumo */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Home className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {language === "es" ? "Consumo Electrodomésticos" : "Appliance Consumption"}
              </h3>
              <p className="text-sm text-slate-500">
                {language === "es" ? "Agrega tus equipos y horas de uso" : "Add your devices and usage hours"}
              </p>
            </div>
          </div>

          {/* Agregar electrodoméstico */}
          <div className="mb-4">
            <select
              onChange={(e) => { if (e.target.value) addAppliance(e.target.value); e.target.value = ""; }}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="">{language === "es" ? "Agregar electrodoméstico..." : "Add appliance..."}</option>
              {defaultAppliances.map(a => (
                <option key={a.id} value={a.id}>
                  {language === "es" ? a.name : a.nameEn} ({a.defaultWatts}W)
                </option>
              ))}
            </select>
          </div>

          {/* Lista de electrodomésticos */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {consumption.map((item, index) => {
              const appliance = defaultAppliances.find(a => a.defaultWatts === item.watts);
              const monthlyKwh = (item.watts * item.hoursPerDay * item.quantity * 30) / 1000;
              return (
                <div key={item.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {appliance ? (language === "es" ? appliance.name : appliance.nameEn) : `Equipo ${index + 1}`}
                    </p>
                    <button onClick={() => removeAppliance(item.id)} className="text-slate-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-slate-500">{language === "es" ? "Potencia (W)" : "Power (W)"}</label>
                      <input
                        type="number"
                        value={item.watts}
                        onChange={(e) => updateAppliance(item.id, "watts", Number(e.target.value))}
                        className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">{language === "es" ? "Horas/día" : "Hours/day"}</label>
                      <input
                        type="number"
                        value={item.hoursPerDay}
                        onChange={(e) => updateAppliance(item.id, "hoursPerDay", Number(e.target.value))}
                        className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500">{language === "es" ? "Cantidad" : "Qty"}</label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateAppliance(item.id, "quantity", Number(e.target.value))}
                        className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                    {monthlyKwh.toFixed(1)} kWh/{language === "es" ? "mes" : "month"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel 2: Configuración */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
              <Sun className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {language === "es" ? "Configuración del Sitio" : "Site Configuration"}
              </h3>
              <p className="text-sm text-slate-500">
                {language === "es" ? "Datos de la propiedad" : "Property data"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {language === "es" ? "Ciudad" : "City"}
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {solarDataByCity.map(c => (
                  <option key={c.city} value={c.city}>
                    {language === "es" ? c.city : c.cityEn} (HSP: {c.hsp})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {language === "es" ? "Orientación del techo" : "Roof Orientation"}
              </label>
              <select
                value={formData.orientation}
                onChange={(e) => setFormData({ ...formData, orientation: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                <option value="north">{language === "es" ? "Norte (Ideal)" : "North (Ideal)"}</option>
                <option value="northeast">{language === "es" ? "Noreste" : "Northeast"}</option>
                <option value="northwest">{language === "es" ? "Noroeste" : "Northwest"}</option>
                <option value="east">{language === "es" ? "Este" : "East"}</option>
                <option value="west">{language === "es" ? "Oeste" : "West"}</option>
                <option value="south">{language === "es" ? "Sur (No recomendado)" : "South (Not recommended)"}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {language === "es" ? "Sombra disponible" : "Available Shading"}
              </label>
              <select
                value={formData.shading}
                onChange={(e) => setFormData({ ...formData, shading: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                <option value="none">{language === "es" ? "Sin sombra" : "No shading"}</option>
                <option value="light">{language === "es" ? "Sombra ligera" : "Light shading"}</option>
                <option value="moderate">{language === "es" ? "Sombra moderada" : "Moderate shading"}</option>
                <option value="heavy">{language === "es" ? "Mucha sombra" : "Heavy shading"}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {language === "es" ? "Cuenta mensual actual (CLP)" : "Current monthly bill (CLP)"}
              </label>
              <input
                type="number"
                value={formData.currentBill}
                onChange={(e) => setFormData({ ...formData, currentBill: Number(e.target.value) })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              {language === "es" ? "Resultados del Cálculo" : "Calculation Results"}
            </h3>
            <button
              onClick={saveAsLead}
              className="px-4 py-2 bg-white text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              {language === "es" ? "Guardar como Lead" : "Save as Lead"}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Consumo Mensual" : "Monthly Consumption"}</p>
              <p className="text-3xl font-bold mt-1">{totalConsumption.toFixed(0)}</p>
              <p className="text-amber-100 text-sm">kWh/mes</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Paneles Necesarios" : "Panels Needed"}</p>
              <p className="text-3xl font-bold mt-1">{calculations.panelsNeeded}</p>
              <p className="text-amber-100 text-sm">x 450W</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Potencia Sistema" : "System Power"}</p>
              <p className="text-3xl font-bold mt-1">{calculations.requiredKwp.toFixed(1)}</p>
              <p className="text-amber-100 text-sm">kWp</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Espacio Requerido" : "Space Required"}</p>
              <p className="text-3xl font-bold mt-1">{calculations.spaceRequired.toFixed(0)}</p>
              <p className="text-amber-100 text-sm">m²</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Ahorro Mensual Est." : "Est. Monthly Savings"}</p>
              <p className="text-2xl font-bold mt-1">${calculations.monthlySavings.toLocaleString()}</p>
              <p className="text-amber-100 text-sm">CLP</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Generación Anual" : "Annual Generation"}</p>
              <p className="text-3xl font-bold mt-1">{(calculations.annualGeneration / 1000).toFixed(1)}</p>
              <p className="text-amber-100 text-sm">MWh/año</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Cobertura" : "Coverage"}</p>
              <p className="text-3xl font-bold mt-1">{calculations.coverage.toFixed(0)}%</p>
              <p className="text-amber-100 text-sm">{language === "es" ? "del consumo" : "of consumption"}</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-amber-100 text-sm">{language === "es" ? "Inversión Est." : "Est. Investment"}</p>
              <p className="text-2xl font-bold mt-1">${(calculations.investmentCLP / 1000000).toFixed(1)}M</p>
              <p className="text-amber-100 text-sm">CLP</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <p className="text-sm text-amber-100">
              <strong>{language === "es" ? "Nota:" : "Note:"}</strong>{" "}
              {language === "es" 
                ? " Estos cálculos son estimaciones referenciales. Una evaluación técnica en terreno permitirá entregar una propuesta precisa."
                : " These calculations are referential estimates. A technical on-site evaluation will allow us to provide an accurate proposal."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
