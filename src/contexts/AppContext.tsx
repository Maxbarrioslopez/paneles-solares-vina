"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";
type Language = "es" | "en";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // General
    "app.name": "Energía Solar V Región",
    "app.tagline": "Instalación de paneles solares en Viña del Mar",
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "language": "Idioma",
    "language.es": "Español",
    "language.en": "English",
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.process": "Proceso",
    "nav.projects": "Proyectos",
    "nav.gallery": "Galería",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.admin": "Admin",
    "admin.dashboard": "Panel de Control",
    "admin.leads": "Clientes Potenciales",
    "admin.calculators": "Calculadoras",
    "admin.quotes": "Cotizaciones",
    "admin.equipment": "Equipos",
    "admin.projects": "Proyectos",
    "admin.analytics": "Análisis",
    "admin.settings": "Configuración",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.add": "Agregar",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.export": "Exportar",
    "common.loading": "Cargando...",
    "common.success": "Éxito",
    "common.error": "Error",
    "common.warning": "Advertencia",
    "common.info": "Información",
    "common.close": "Cerrar",
    "common.open": "Abrir",
    "common.back": "Volver",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
    "common.submit": "Enviar",
    "common.calculate": "Calcular",
    "common.reset": "Limpiar",
    "common.download": "Descargar",
    "common.print": "Imprimir",
    "common.share": "Compartir",
    "common.copy": "Copiar",
    "common.copied": "¡Copiado!",
    "common.total": "Total",
    "common.subtotal": "Subtotal",
    "common.tax": "IVA",
    "common.discount": "Descuento",
    "common.price": "Precio",
    "common.quantity": "Cantidad",
    "common.amount": "Monto",
    "common.date": "Fecha",
    "common.status": "Estado",
    "common.name": "Nombre",
    "common.email": "Email",
    "common.phone": "Teléfono",
    "common.address": "Dirección",
    "common.city": "Ciudad",
    "common.country": "País",
    "common.zip": "Código Postal",
    "common.notes": "Notas",
    "common.description": "Descripción",
    "common.category": "Categoría",
    "common.brand": "Marca",
    "common.model": "Modelo",
    "common.power": "Potencia",
    "common.voltage": "Voltaje",
    "common.current": "Corriente",
    "common.efficiency": "Eficiencia",
    "common.warranty": "Garantía",
    "common.dimensions": "Dimensiones",
    "common.weight": "Peso",
    "common.material": "Material",
    "common.color": "Color",
    "common.year": "Año",
    "common.month": "Mes",
    "common.day": "Día",
    "common.hour": "Hora",
    "common.minute": "Minuto",
    "common.second": "Segundo",
    "common.percentage": "Porcentaje",
    "common.currency": "Moneda",
    "common.unit": "Unidad",
    "common.yes": "Sí",
    "common.no": "No",
  },
  en: {
    // General
    "app.name": "Solar Energy V Region",
    "app.tagline": "Solar panel installation in Viña del Mar",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "language": "Language",
    "language.es": "Spanish",
    "language.en": "English",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.admin": "Admin",
    "admin.dashboard": "Dashboard",
    "admin.leads": "Leads",
    "admin.calculators": "Calculators",
    "admin.quotes": "Quotes",
    "admin.equipment": "Equipment",
    "admin.projects": "Projects",
    "admin.analytics": "Analytics",
    "admin.settings": "Settings",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.add": "Add",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.export": "Export",
    "common.loading": "Loading...",
    "common.success": "Success",
    "common.error": "Error",
    "common.warning": "Warning",
    "common.info": "Information",
    "common.close": "Close",
    "common.open": "Open",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.submit": "Submit",
    "common.calculate": "Calculate",
    "common.reset": "Reset",
    "common.download": "Download",
    "common.print": "Print",
    "common.share": "Share",
    "common.copy": "Copy",
    "common.copied": "Copied!",
    "common.total": "Total",
    "common.subtotal": "Subtotal",
    "common.tax": "VAT",
    "common.discount": "Discount",
    "common.price": "Price",
    "common.quantity": "Quantity",
    "common.amount": "Amount",
    "common.date": "Date",
    "common.status": "Status",
    "common.name": "Name",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.address": "Address",
    "common.city": "City",
    "common.country": "Country",
    "common.zip": "Postal Code",
    "common.notes": "Notes",
    "common.description": "Description",
    "common.category": "Category",
    "common.brand": "Brand",
    "common.model": "Model",
    "common.power": "Power",
    "common.voltage": "Voltage",
    "common.current": "Current",
    "common.efficiency": "Efficiency",
    "common.warranty": "Warranty",
    "common.dimensions": "Dimensions",
    "common.weight": "Weight",
    "common.material": "Material",
    "common.color": "Color",
    "common.year": "Year",
    "common.month": "Month",
    "common.day": "Day",
    "common.hour": "Hour",
    "common.minute": "Minute",
    "common.second": "Second",
    "common.percentage": "Percentage",
    "common.currency": "Currency",
    "common.unit": "Unit",
    "common.yes": "Yes",
    "common.no": "No",
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    // Load preferences from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLanguage = localStorage.getItem("language") as Language;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);

    // Check system preference for theme
    if (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["es"]] || key;
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
