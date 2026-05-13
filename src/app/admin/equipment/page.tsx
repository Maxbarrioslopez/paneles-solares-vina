"use client";

import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { useLocalStorage, Equipment } from "@/hooks/useLocalStorage";
import { Plus, Search, Wrench, Edit2, Trash2, PanelTop, Battery, Construction } from "lucide-react";

const categories = [
  { value: "panel", label: "Paneles Solares", icon: PanelTop },
  { value: "inverter", label: "Inversores", icon: Wrench },
  { value: "battery", label: "Baterías", icon: Battery },
  { value: "structure", label: "Estructuras", icon: Construction },
  { value: "accessory", label: "Accesorios", icon: Wrench },
];

export default function EquipmentPage() {
  const { language } = useApp();
  const [equipment, setEquipment] = useLocalStorage<Equipment[]>("solar-equipment", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredEquipment = equipment.filter(e => {
    const matchesSearch = e.model.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         e.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || e.category === categoryFilter;
    return matchesSearch && matchesCategory && e.active;
  });

  const addEquipment = () => {
    const newEquipment: Equipment = {
      id: Date.now().toString(),
      category: "panel",
      brand: "",
      model: "",
      power: 450,
      price: 0,
      cost: 0,
      warranty: "",
      active: true,
    };
    setEquipment([...equipment, newEquipment]);
  };

  const updateEquipment = (id: string, field: keyof Equipment, value: any) => {
    setEquipment(equipment.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  const deleteEquipment = (id: string) => {
    if (confirm(language === "es" ? "¿Eliminar este equipo?" : "Delete this equipment?")) {
      setEquipment(equipment.map(e => e.id === id ? { ...e, active: false } : e));
    }
  };

  const totalValue = equipment.filter(e => e.active).reduce((sum, e) => sum + e.price, 0);
  const totalCost = equipment.filter(e => e.active).reduce((sum, e) => sum + e.cost, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {language === "es" ? "Biblioteca de Equipos" : "Equipment Library"}
        </h2>
        <button 
          onClick={addEquipment}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          {language === "es" ? "Agregar Equipo" : "Add Equipment"}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map(cat => {
          const count = equipment.filter(e => e.category === cat.value && e.active).length;
          return (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.value === categoryFilter ? "all" : cat.value)}
              className={`p-4 rounded-xl border transition-colors ${categoryFilter === cat.value ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-slate-200 dark:border-slate-700"}`}
            >
              <cat.icon className="w-6 h-6 text-slate-600 dark:text-slate-400 mb-2" />
              <p className="text-lg font-bold text-slate-900 dark:text-white">{count}</p>
              <p className="text-sm text-slate-500">{cat.label}</p>
            </button>
          );
        })}
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={language === "es" ? "Buscar equipo..." : "Search equipment..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        >
          <option value="all">{language === "es" ? "Todas las categorías" : "All categories"}</option>
          {categories.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* Lista de equipos */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Categoría" : "Category"}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Marca" : "Brand"}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Modelo" : "Model"}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Potencia" : "Power"}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Costo" : "Cost"}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Precio Venta" : "Sale Price"}</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">{language === "es" ? "Acciones" : "Actions"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {filteredEquipment.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                  {language === "es" ? "No hay equipos que mostrar" : "No equipment to display"}
                </td>
              </tr>
            ) : (
              filteredEquipment.map((eq) => {
                const category = categories.find(c => c.value === eq.category) || categories[0];
                return (
                  <tr key={eq.id} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2">
                        <category.icon className="w-4 h-4 text-amber-500" />
                        {category.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{eq.brand}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{eq.model}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{eq.power ? `${eq.power}W` : "-"}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">${eq.cost.toLocaleString()}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-600 dark:text-emerald-400">${eq.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-amber-500">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => deleteEquipment(eq.id)} className="p-2 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}