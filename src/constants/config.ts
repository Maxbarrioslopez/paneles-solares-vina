/**
 * CONFIGURACIÓN GLOBAL EDITABLE
 * Modifica estas constantes para personalizar la web
 */

// Contacto
export const WHATSAPP_NUMBER = "569XXXXXXXX";
export const PHONE_NUMBER = "+569XXXXXXXX";
export const EMAIL = "contacto@empresasolar.cl";

// URLs
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quiero%20cotizar%20paneles%20solares%20en%20la%20Región%20de%20Valparaíso`;
export const WHATSAPP_URL_GENERIC = `https://wa.me/${WHATSAPP_NUMBER}`;

// Empresa (EDITABLE - no inventar datos falsos)
export const COMPANY_NAME = "Energía Solar V Región";
export const COMPANY_TAGLINE = "Instalación de paneles solares en Viña del Mar y alrededores";
export const COMPANY_DESCRIPTION = "Empresa especializada en instalación de sistemas fotovoltaicos en la Región de Valparaíso. Realizamos evaluaciones técnicas en terreno, diseño personalizado e instalación profesional.";

// SEO
export const SEO_TITLE = "Paneles solares en Viña del Mar | Instalación y evaluación en terreno";
export const SEO_DESCRIPTION = "Instalación de paneles solares en Viña del Mar y Región de Valparaíso. Evaluación en terreno, cotización personalizada, mantención y asesoría solar.";
export const SEO_KEYWORDS = [
  "paneles solares viña del mar",
  "instalación paneles solares chile",
  "energía solar valparaíso",
  "sistemas fotovoltaicos",
  "paneles solares para casa",
  "paneles solares empresa",
  "energía solar región de valparaíso",
  "instalación fotovoltaica",
];

// URLs Sociales (EDITABLE)
export const SOCIAL_URLS = {
  facebook: "#", // Reemplazar con URL real
  instagram: "#", // Reemplazar con URL real
  linkedin: "#", // Reemplazar con URL real
};

// Formulario (Preparado para Formspree - reemplazar con tu endpoint)
// Para usar Formspree: 1) Regístrate en formspree.io, 2) Crea un formulario, 3) Reemplaza la URL
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
// Alternativa: Usar EmailJS - reemplazar con tus credenciales
export const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

// Zonas de cobertura
export const COVERAGE_AREAS = [
  "Viña del Mar",
  "Valparaíso",
  "Concón",
  "Quilpué",
  "Villa Alemana",
  "Reñaca",
  "Limache",
  "Olmué",
  "Casablanca",
];

// Horarios de atención
export const BUSINESS_HOURS = {
  weekdays: "Lunes a Viernes: 9:00 - 18:00",
  saturday: "Sábados: 10:00 - 14:00",
  sunday: "Domingos: Cerrado",
};

// Tipos de propiedad para formulario
export const PROPERTY_TYPES = [
  { value: "casa", label: "Casa" },
  { value: "negocio", label: "Negocio / Local comercial" },
  { value: "empresa", label: "Empresa / Industrial" },
  { value: "terreno", label: "Terreno" },
  { value: "otro", label: "Otro" },
];

// Objetivos del proyecto
export const PROJECT_GOALS = [
  { value: "ahorro", label: "Ahorro en cuenta de luz" },
  { value: "respaldo", label: "Respaldo energético" },
  { value: "sustentabilidad", label: "Sustentabilidad" },
  { value: "negocio", label: "Negocio / Emprendimiento" },
  { value: "independencia", label: "Independencia energética" },
];
