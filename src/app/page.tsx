import {
  Header,
  Hero,
  Benefits,
  Services,
  Process,
  Coverage,
  Gallery,
  Projects,
  Solutions,
  Comparison,
  SavingsCalculator,
  SiteVisit,
  Testimonials,
  Maintenance,
  TrustSection,
  FAQ,
  Contact,
  ElectricBillCTA,
  CommercialBanner,
  FloatingButtons,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main-content">
        {/* Hero Principal */}
        <Hero />
        
        {/* Beneficios */}
        <Benefits />
        
        {/* Servicios */}
        <Services />
        
        {/* Visita a Terreno - CTA destacado */}
        <SiteVisit />
        
        {/* Proceso de trabajo */}
        <Process />
        
        {/* Zonas de Cobertura */}
        <Coverage />
        
        {/* Galería de Proyectos */}
        <Gallery />
        
        {/* Proyectos / Casos */}
        <Projects />
        
        {/* Tipos de Soluciones Solares */}
        <Solutions />
        
        {/* Tabla Comparativa */}
        <Comparison />
        
        {/* Calculadora de Ahorro */}
        <SavingsCalculator />
        
        {/* CTA Cuenta de Luz */}
        <ElectricBillCTA />
        
        {/* Testimonios */}
        <Testimonials />
        
        {/* Mantención */}
        <Maintenance />
        
        {/* Sección de Confianza */}
        <TrustSection />
        
        {/* Banner Comercial */}
        <CommercialBanner />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Contacto */}
        <Contact />
      </main>
      
      {/* Botones Flotantes */}
      <FloatingButtons />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
