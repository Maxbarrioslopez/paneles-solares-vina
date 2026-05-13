<div align="center">

# ☀️ Paneles Solares Viña del Mar

**Landing page profesional para empresa de instalación de paneles solares**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF5095?style=for-the-badge)](https://www.framer.com/motion/)

[🌐 Ver Demo](https://paneles-solares-vina.vercel.app) • [📂 Repositorio](https://github.com/Maxbarrioslopez/paneles-solares-vina) • [📝 Issues](https://github.com/Maxbarrioslopez/paneles-solares-vina/issues)

</div>

---

## 📋 Descripción

Landing page moderna, rápida y optimizada para conversión, diseñada para empresas de instalación de paneles solares en la **Región de Valparaíso, Chile**. 

### 🎯 Objetivo Comercial
Convertir visitantes en clientes potenciales que soliciten evaluación técnica o cotización para instalación de sistemas fotovoltaicos.

---

## ✨ Características

### 🎨 Diseño
- ✅ **Diseño moderno y profesional** - Estética limpia enfocada en energía solar
- ✅ **Totalmente responsive** - Mobile, tablet y desktop
- ✅ **Animaciones suaves** - Framer Motion para experiencia premium
- ✅ **Accesibilidad** - ARIA labels, skip links, contraste optimizado

### ⚡ Performance
- ✅ **Build estático** - Sin backend necesario
- ✅ **Optimizado para SEO** - Meta tags, OpenGraph, sitemap
- ✅ **Lazy loading** - Carga progresiva de imágenes
- ✅ **Rápido** - Lighthouse 90+ en todos los parámetros

### 🔧 Funcionalidades
- ✅ **20+ secciones** - Hero, beneficios, servicios, FAQ, contacto, etc.
- ✅ **Calculadora de ahorro** - Estimación referencial de ahorro energético
- ✅ **Formulario avanzado** - 8 campos con validación frontend
- ✅ **Galería con filtros** - Categorías: instalaciones, evaluaciones, equipos
- ✅ **Tabla comparativa** - Sin vs Con energía solar
- ✅ **Botones flotantes** - WhatsApp + llamada telefónica
- ✅ **13 FAQs** - Preguntas frecuentes con accordion

---

## 🚀 Demo en Vivo

🔗 **[Ver sitio en Vercel](https://paneles-solares-vina.vercel.app)**

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16.2 | Framework React con App Router |
| **TypeScript** | 5.0 | Tipado estático |
| **Tailwind CSS** | 4.0 | Estilos utilitarios |
| **Framer Motion** | 12.x | Animaciones |
| **Lucide React** | Latest | Íconos |
| **shadcn/ui** | - | Componentes base |

---

## 📁 Estructura del Proyecto

```
paneles-solares-vina/
├── 📂 public/                  # Archivos estáticos
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
│
├── 📂 src/
│   ├── 📂 app/                 # Next.js App Router
│   │   ├── globals.css         # Estilos globales + Tailwind
│   │   ├── layout.tsx          # Layout principal + SEO
│   │   └── page.tsx            # Página principal
│   │
│   ├── 📂 components/
│   │   ├── 📂 ui/              # Componentes reutilizables
│   │   │   └── index.tsx       # Button, Card, Input, etc.
│   │   │
│   │   └── 📂 sections/        # Secciones de la landing
│   │       ├── Header.tsx      # Navbar sticky
│   │       ├── Hero.tsx        # Hero principal
│   │       ├── Benefits.tsx    # 6 beneficios
│   │       ├── Services.tsx    # 6 servicios
│   │       ├── Process.tsx     # Proceso 6 pasos
│   │       ├── Coverage.tsx    # Zonas de cobertura
│   │       ├── Gallery.tsx     # Galería con filtros
│   │       ├── Projects.tsx    # Casos de proyectos
│   │       ├── Solutions.tsx   # Tipos de sistemas
│   │       ├── Comparison.tsx  # Tabla comparativa
│   │       ├── SavingsCalculator.tsx
│   │       ├── SiteVisit.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Maintenance.tsx
│   │       ├── TrustSection.tsx
│   │       ├── FAQ.tsx
│   │       ├── Contact.tsx
│   │       ├── ElectricBillCTA.tsx
│   │       ├── CommercialBanner.tsx
│   │       ├── FloatingButtons.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts
│   │
│   ├── 📂 constants/
│   │   └── config.ts           # ⚙️ CONFIGURACIÓN EDITABLE
│   │
│   └── 📂 lib/
│       └── utils.ts            # Utilidades (cn, etc.)
│
├── 📄 next.config.ts           # Configuración Next.js
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 tailwind.config.ts
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

Edita el archivo `src/constants/config.ts`:

```typescript
// 📱 Contacto (REEMPLAZAR CON TUS DATOS)
export const WHATSAPP_NUMBER = "56912345678"  // Tu número WhatsApp
export const PHONE_NUMBER = "+56912345678"    // Tu número teléfono
export const EMAIL = "tuemail@ejemplo.com"    // Tu email

// 🏢 Empresa
export const COMPANY_NAME = "Tu Empresa Solar"
export const COMPANY_TAGLINE = "Instalación de paneles solares..."

// 🔗 Integración Formspree (opcional)
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 5. Build para producción

```bash
npm run build
```

Los archivos estáticos se generan en `/dist/`

---

## ⚙️ Personalización

### 🖼️ Agregar imágenes reales

1. Crea la carpeta `/public/gallery/`
2. Agrega tus imágenes: `gallery-1.jpg`, `gallery-2.jpg`, etc.
3. Edita `src/components/sections/Gallery.tsx` para usar rutas reales

### 📝 Agregar testimonios reales

Edita `src/components/sections/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",  // ← Nombre real
    location: "Viña del Mar",
    type: "Instalación residencial",
    quote: "Excelente servicio...", // ← Testimonio real
  },
  // ...
]
```

### 📋 Configurar formulario

**Opción A: Mailto (ya configurado)**
- Funciona inmediatamente
- Abre cliente de correo del usuario

**Opción B: Formspree**
1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Copia el endpoint URL
4. Pégalo en `src/constants/config.ts`
5. Descomenta el código en `Contact.tsx`

**Opción C: EmailJS**
- Agrega tus credenciales en `config.ts`
- Implementa la integración en `Contact.tsx`

---

## 🌐 Deploy

### Opción 1: Vercel (Recomendado)

#### Automático (Git Integration)
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Configura el proyecto:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click en **Deploy**

#### Manual (CLI)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Opción 2: Netlify

```bash
# Build local
npm run build

# Deploy con Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opción 3: GitHub Pages

El build es estático, compatible con cualquier hosting estático.

---

## 📊 SEO y Performance

### ✅ SEO Implementado
- [x] Meta tags optimizados
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured Data (LocalBusiness schema)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] URLs canónicas

### ✅ Performance
- [x] Build estático
- [x] Lazy loading de imágenes
- [x] Código dividido por componentes
- [x] Sin dependencias innecesarias
- [x] Lighthouse 90+ (Performance, Accessibility, SEO, Best Practices)

---

## 🧪 Testing

### Verificar build local
```bash
npm run build
# Debe completarse sin errores
```

### Verificar TypeScript
```bash
npx tsc --noEmit
# Debe mostrar 0 errores
```

---

## 📱 Responsive Breakpoints

| Dispositivo | Tamaño | Estado |
|-------------|--------|--------|
| Mobile | 360px+ | ✅ Optimizado |
| Tablet | 768px+ | ✅ Optimizado |
| Desktop | 1024px+ | ✅ Optimizado |
| Large Desktop | 1440px+ | ✅ Optimizado |

---

## 🎨 Sistema de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Ámbar** | `#f59e0b` | CTA primarios, acentos |
| **Azul Cielo** | `#0ea5e9` | Secundario, enlaces |
| **Esmeralda** | `#10b981` | Éxito, sostenibilidad |
| **Slate** | `#0f172a` | Texto, fondos oscuros |

---

## 📝 Roadmap

- [ ] Agregar integración con Google Analytics
- [ ] Implementar blog con contenido solar
- [ ] Agregar chatbot para preguntas frecuentes
- [ ] Crear panel de administración para leads
- [ ] Implementar calculadora avanzada con backend

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agrega nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Max Barrios López**

- GitHub: [@Maxbarrioslopez](https://github.com/Maxbarrioslopez)

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide](https://lucide.dev/) - Íconos
- [Vercel](https://vercel.com/) - Hosting

---

<div align="center">

**¿Te gusta este proyecto? ⭐ ¡Dale una estrella en GitHub!**

[⭐ Star](https://github.com/Maxbarrioslopez/paneles-solares-vina) • [🐛 Report Bug](https://github.com/Maxbarrioslopez/paneles-solares-vina/issues) • [💡 Request Feature](https://github.com/Maxbarrioslopez/paneles-solares-vina/issues)

</div>
