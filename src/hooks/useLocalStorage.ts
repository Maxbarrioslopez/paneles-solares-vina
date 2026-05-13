// Hook para persistencia en LocalStorage
"use client";

import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
      }
      setIsInitialized(true);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue];
}

// Tipos para Leads
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  monthlyConsumption: number;
  status: "new" | "contacted" | "visit_scheduled" | "proposal_sent" | "closed_won" | "closed_lost";
  notes: string;
  dateCreated: string;
  lastContact: string;
  source: string;
}

// Tipos para Cotizaciones
export interface Quote {
  id: string;
  leadId: string;
  leadName: string;
  items: QuoteItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  status: "draft" | "sent" | "approved" | "rejected";
  dateCreated: string;
  dateValidUntil: string;
  notes: string;
}

export interface QuoteItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Tipos para Equipos
export interface Equipment {
  id: string;
  category: "panel" | "inverter" | "battery" | "structure" | "accessory";
  brand: string;
  model: string;
  power?: number;
  capacity?: number;
  price: number;
  cost: number;
  warranty: string;
  dimensions?: string;
  weight?: string;
  efficiency?: string;
  datasheet?: string;
  active: boolean;
}

// Tipos para Proyectos
export interface Project {
  id: string;
  name: string;
  clientName: string;
  location: {
    address: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  systemSize: number; // kWp
  panelsCount: number;
  inverterSize: number;
  installationDate?: string;
  status: "pending" | "in_progress" | "completed" | "maintenance";
  images: string[];
  notes: string;
  quoteId?: string;
}

// Electrodomésticos predefinidos para calculadora
export interface Appliance {
  id: string;
  name: string;
  nameEn: string;
  defaultWatts: number;
  category: "kitchen" | "living" | "bedroom" | "laundry" | "outdoor" | "other";
}

export const defaultAppliances: Appliance[] = [
  { id: "fridge", name: "Refrigerador", nameEn: "Refrigerator", defaultWatts: 150, category: "kitchen" },
  { id: "freezer", name: "Congelador", nameEn: "Freezer", defaultWatts: 200, category: "kitchen" },
  { id: "microwave", name: "Microondas", nameEn: "Microwave", defaultWatts: 1200, category: "kitchen" },
  { id: "oven", name: "Horno eléctrico", nameEn: "Electric Oven", defaultWatts: 2500, category: "kitchen" },
  { id: "stove", name: "Cocina eléctrica", nameEn: "Electric Stove", defaultWatts: 2000, category: "kitchen" },
  { id: "dishwasher", name: "Lavavajillas", nameEn: "Dishwasher", defaultWatts: 1800, category: "kitchen" },
  { id: "coffee", name: "Cafetera", nameEn: "Coffee Maker", defaultWatts: 1000, category: "kitchen" },
  { id: "toaster", name: "Tostadora", nameEn: "Toaster", defaultWatts: 800, category: "kitchen" },
  { id: "blender", name: "Licuadora", nameEn: "Blender", defaultWatts: 500, category: "kitchen" },
  { id: "tv", name: "Televisor", nameEn: "TV", defaultWatts: 150, category: "living" },
  { id: "computer", name: "Computador", nameEn: "Computer", defaultWatts: 300, category: "living" },
  { id: "gaming", name: "Consola de juegos", nameEn: "Gaming Console", defaultWatts: 200, category: "living" },
  { id: "router", name: "Router WiFi", nameEn: "WiFi Router", defaultWatts: 20, category: "living" },
  { id: "sound", name: "Sistema de sonido", nameEn: "Sound System", defaultWatts: 100, category: "living" },
  { id: "ac", name: "Aire acondicionado", nameEn: "Air Conditioner", defaultWatts: 2500, category: "living" },
  { id: "heater", name: "Calefactor", nameEn: "Heater", defaultWatts: 2000, category: "living" },
  { id: "fan", name: "Ventilador", nameEn: "Fan", defaultWatts: 75, category: "living" },
  { id: "vacuum", name: "Aspiradora", nameEn: "Vacuum Cleaner", defaultWatts: 1400, category: "living" },
  { id: "iron", name: "Plancha", nameEn: "Iron", defaultWatts: 1200, category: "laundry" },
  { id: "washer", name: "Lavadora", nameEn: "Washing Machine", defaultWatts: 500, category: "laundry" },
  { id: "dryer", name: "Secadora", nameEn: "Dryer", defaultWatts: 3000, category: "laundry" },
  { id: "lights", name: "Iluminación LED", nameEn: "LED Lighting", defaultWatts: 10, category: "other" },
  { id: "pump", name: "Bomba de agua", nameEn: "Water Pump", defaultWatts: 750, category: "outdoor" },
  { id: "pool", name: "Bomba piscina", nameEn: "Pool Pump", defaultWatts: 1200, category: "outdoor" },
  { id: "tools", name: "Herramientas", nameEn: "Power Tools", defaultWatts: 1000, category: "outdoor" },
];

// Datos de irradiación solar por comuna (Chile, Región de Valparaíso)
export interface SolarData {
  city: string;
  cityEn: string;
  hsp: number; // Horas Sol Pico promedio anual
  yearlyProductionPerkW: number; // kWh/kWp/año
  bestMonth: { month: string; hsp: number };
  worstMonth: { month: string; hsp: number };
}

export const solarDataByCity: SolarData[] = [
  { city: "Viña del Mar", cityEn: "Viña del Mar", hsp: 5.2, yearlyProductionPerkW: 1560, bestMonth: { month: "Enero", hsp: 6.8 }, worstMonth: { month: "Junio", hsp: 3.2 } },
  { city: "Valparaíso", cityEn: "Valparaiso", hsp: 5.1, yearlyProductionPerkW: 1530, bestMonth: { month: "Enero", hsp: 6.7 }, worstMonth: { month: "Junio", hsp: 3.1 } },
  { city: "Concón", cityEn: "Concon", hsp: 5.3, yearlyProductionPerkW: 1590, bestMonth: { month: "Enero", hsp: 6.9 }, worstMonth: { month: "Junio", hsp: 3.3 } },
  { city: "Quilpué", cityEn: "Quilpue", hsp: 5.0, yearlyProductionPerkW: 1500, bestMonth: { month: "Enero", hsp: 6.6 }, worstMonth: { month: "Junio", hsp: 3.0 } },
  { city: "Villa Alemana", cityEn: "Villa Alemana", hsp: 5.0, yearlyProductionPerkW: 1500, bestMonth: { month: "Enero", hsp: 6.6 }, worstMonth: { month: "Junio", hsp: 3.0 } },
  { city: "Limache", cityEn: "Limache", hsp: 4.9, yearlyProductionPerkW: 1470, bestMonth: { month: "Enero", hsp: 6.5 }, worstMonth: { month: "Junio", hsp: 2.9 } },
  { city: "Olmué", cityEn: "Olmue", hsp: 4.8, yearlyProductionPerkW: 1440, bestMonth: { month: "Enero", hsp: 6.4 }, worstMonth: { month: "Junio", hsp: 2.8 } },
  { city: "Casablanca", cityEn: "Casablanca", hsp: 5.1, yearlyProductionPerkW: 1530, bestMonth: { month: "Enero", hsp: 6.7 }, worstMonth: { month: "Junio", hsp: 3.1 } },
];

// Tarifas eléctricas (CLP/kWh) - actualizar según tarifa real
export const electricityRates = {
  residential: 180, // Tarifa residencial promedio
  commercial: 150,  // Tarifa comercial
  industrial: 120,  // Tarifa industrial
};

// Factor de pérdida por orientación
export const orientationFactors: Record<string, number> = {
  north: 1.0,      // Norte (ideal)
  northeast: 0.95, // Noreste
  northwest: 0.95, // Noroeste
  east: 0.88,      // Este
  west: 0.88,      // Oeste
  south: 0.70,     // Sur (peor)
  southeast: 0.75, // Sureste
  southwest: 0.75, // Suroeste
};

// Factor de pérdida por sombra
export const shadingFactors: Record<string, number> = {
  none: 1.0,       // Sin sombra
  light: 0.90,     // Sombra ligera
  moderate: 0.75,  // Sombra moderada
  heavy: 0.50,     // Mucha sombra
};
