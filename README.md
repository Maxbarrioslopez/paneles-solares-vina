<div align="center">

# ☀️ Paneles Solares Viña del Mar

**Landing page profesional + Panel de Administración para empresa de instalación de paneles solares**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF5095?style=for-the-badge)](https://www.framer.com/motion/)

[🌐 Ver Demo](https://paneles-solares-vina.vercel.app) • [📂 Repositorio](https://github.com/Maxbarrioslopez/paneles-solares-vina) • [📊 Admin Panel](https://paneles-solares-vina.vercel.app/admin)

</div>

---

## 📋 Descripción

Landing page moderna con panel de administración completo, diseñada para empresas de instalación de paneles solares en la **Región de Valparaíso, Chile**.

### 🎯 Objetivo Comercial
- **Landing Page:** Convertir visitantes en clientes potenciales
- **Panel Admin:** Gestionar leads, calcular presupuestos, generar cotizaciones

---

## ✨ Características

### 🎨 Landing Page
- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (mobile, tablet, desktop)
- ✅ Animaciones suaves con Framer Motion
- ✅ Accesibilidad (ARIA labels, skip links)
- ✅ SEO optimizado (meta tags, OpenGraph, sitemap)
- ✅ Botón flotante de WhatsApp
- ✅ Formulario de contacto funcional
- ✅ Galería de proyectos con filtros
- ✅ 20+ secciones comerciales y técnicas

### 🎛️ Panel de Administración (`/admin`)
- ✅ **Dashboard** - Métricas y estadísticas en tiempo real
- ✅ **Gestión de Leads** - CRM completo con estados
- ✅ **Calculadora Solar** - Consumo por electrodomésticos
- ✅ **Calculadora Financiera** - ROI, payback, ahorro proyectado
- ✅ **Gestión de Cotizaciones** - Crear, editar, enviar PDF
- ✅ **Biblioteca de Equipos** - Catálogo de paneles e inversores
- ✅ **Proyectos Realizados** - Mapa y registro de instalaciones

### 🌍 Internacionalización
- ✅ **Español** (idioma principal)
- ✅ **English** (idioma secundario)
- Toggle rápido en el header

### 🌓 Tema Claro/Oscuro
- ✅ Cambio automático según preferencia del sistema
- ✅ Toggle manual en el header
- ✅ Persistencia en localStorage

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16.2 | Framework React con App Router |
| **TypeScript** | 5.0 | Tipado estático |
| **Tailwind CSS** | 4.0 | Estilos utilitarios |
| **Framer Motion** | 12.x | Animaciones |
| **Lucide React** | Latest | Íconos |
| **LocalStorage** | - | Persistencia de datos (sin backend) |

---

## 📁 Estructura del Proyecto

```
paneles-solares-vina/
├── 📂 public/                  # Archivos estáticos
│
├── 📂 src/
│   ├── 📂 app/                 # Next.js App Router
│   │   ├── page.tsx            # Landing page principal
│   │   ├── layout.tsx         # Layout con AppProvider
│   │   ├── globals.css        # Estilos + variables de tema
│   │   └── 📂 admin/          # Panel de Administración
│   │       ├── page.tsx       # Dashboard
│   │       ├── leads/         # Gestión de leads
│   │       ├── calculators/   # Calculadoras
│   │       ├── quotes/        # Cotizaciones
│   │       ├── equipment/     # Biblioteca de equipos
│   │       └── projects/       # Proyectos realizados
│   │
│   ├── 📂 components/
│   │   ├── 📂 ui/             # Componentes reutilizables
│   │   └── 📂 sections/       # Secciones de la landing
│   │
│   ├── 📂 contexts/
│   │   └── AppContext.tsx     # Tema + Idioma
│   │
│   ├── 📂 hooks/
│   │   └── useLocalStorage.ts  # Hook para persistencia
│   │
│   ├── 📂 constants/
│   │   └── config.ts           # Configuración editable
│   │
│   └── 📂 lib/
│       └── utils.ts            # Utilidades
│
└── 📄 README.md
```

---

## 🚀 Instalación y Uso

### 1. Clonar repositorio
```bash
git clone https://github.com/Maxbarrioslopez/paneles-solares-vina.git
cd paneles-solares-vina
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables
Edita `src/constants/config.ts`:
```typescript
export const WHATSAPP_NUMBER = "56912345678";  // Tu número WhatsApp
export const PHONE_NUMBER = "+56912345678";     // Tu número teléfono
export const EMAIL = "tuemail@ejemplo.com";     // Tu email
export const COMPANY_NAME = "Tu Empresa Solar";
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

### 5. Acceder
- **Landing Page:** http://localhost:3000
- **Admin Panel:** http://localhost:3000/admin

---

## 🎛️ Panel de Administración

### Dashboard
Panel principal con métricas clave:
- Total de leads
- Leads nuevos
- Cotizaciones
- Proyectos completados

### Calculadora Solar (`/admin/calculators`)
Calculadora completa con dos modos:

**Modo 1: Calculadora de Consumo**
- Lista predefinida de electrodomésticos
- Agregar watts, horas/día, cantidad
- Cálculo automático de consumo mensual (kWh)

**Modo 2: Calculadora Financiera**
- Costo de equipos, instalación, permisos
- Generación estimada
- Payback, ROI a 5/10/25 años
- Ahorro proyectado anual

### Gestión de Leads (`/admin/leads`)
- Lista completa de clientes potenciales
- Filtros por estado y búsqueda
- Estados: Nuevo → Contactado → Visita → Propuesta → Cerrado (Ganado/Perdido)
- Datos: nombre, email, teléfono, ciudad, consumo, fecha

### Cotizaciones (`/admin/quotes`)
- Crear cotizaciones
- Ver estado (borrador, enviada, aprobada, rechazada)
- Exportar a PDF
- Enviar por email

### Biblioteca de Equipos (`/admin/equipment`)
- Catálogo de paneles solares
- Inversores
- Baterías
- Estructuras
- Precios de costo y venta

### Proyectos (`/admin/projects`)
- Registro de instalaciones
- Mapa visual por comuna
- Estadísticas de potencia total

---

## 🎨 Sistema de Diseño

### Colores
| Color | Hex | Uso |
|-------|-----|-----|
| **Ámbar** | `#f59e0b` | CTA, acentos principales |
| **Azul Cielo** | `#0ea5e9` | Secundario, información |
| **Esmeralda** | `#10b981` | Éxito, sostenibilidad |
| **Slate** | `#0f172a` | Texto, fondos oscuros |

### Tema Oscuro
Todos los componentes soportan tema oscuro conmutando el `.dark` class en `<html>`.

---

## 💾 Almacenamiento de Datos

### LocalStorage
Los datos se guardan automáticamente en el navegador:
- `solar-leads` - Lista de leads
- `solar-quotes` - Cotizaciones
- `solar-projects` - Proyectos
- `solar-equipment` - Catálogo de equipos
- `theme` - Preferencia de tema
- `language` - Idioma seleccionado

### Persistencia
Los datos persisten entre sesiones del navegador pero no se comparten entre dispositivos.

---

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático
git push origin main
# El deploy se ejecuta automáticamente

# Deploy manual
vercel --prod
```

---

## 📊 Rutas del Proyecto

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/admin` | Dashboard de administración |
| `/admin/leads` | Gestión de clientes potenciales |
| `/admin/calculators` | Calculadoras solares y financieras |
| `/admin/quotes` | Gestión de cotizaciones |
| `/admin/equipment` | Biblioteca de equipos |
| `/admin/projects` | Registro de proyectos |

---

## 🔧 Desarrollo futuro

Ideas para continuar el desarrollo:

- [ ] Autenticación con Firebase/NextAuth
- [ ] Backend con Supabase/Firebase
- [ ] Generación de PDF profesional
- [ ] Integración con WhatsApp Business API
- [ ] Notificaciones push
- [ ] Panel de cliente (los clientes ven su proyecto)
- [ ] Analytics integrado
- [ ] App móvil (PWA)

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## 👤 Autor

**Max Barrios López**

---

<div align="center">

**¿Te gusta este proyecto? ⭐ ¡Dale una estrella en GitHub!**

</div>