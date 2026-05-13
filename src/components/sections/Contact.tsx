"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { 
  Button, 
  Card, 
  CardContent, 
  Input, 
  Textarea, 
  Select, 
  AnimatedSection 
} from "@/components/ui";
import { 
  WHATSAPP_URL, 
  EMAIL, 
  COVERAGE_AREAS, 
  PROPERTY_TYPES, 
  PROJECT_GOALS,
  BUSINESS_HOURS,
  FORMSPREE_ENDPOINT 
} from "@/constants/config";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comuna: "",
    propertyType: "",
    monthlyBill: "",
    goal: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Opción 1: Usar mailto (funciona sin backend)
    const subject = `Cotización Paneles Solares - ${formData.name}`;
    const body = `
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}
Comuna: ${formData.comuna}
Tipo de propiedad: ${formData.propertyType}
Cuenta mensual aproximada: ${formData.monthlyBill}
Objetivo: ${formData.goal}

Mensaje:
${formData.message}
    `;
    
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Opción 2: Si tienes Formspree configurado, descomenta esto:
    /*
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          comuna: "",
          propertyType: "",
          monthlyBill: "",
          goal: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
    */

    setIsSubmitting(false);
    setSubmitStatus("success");
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Solicita tu cotización
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para agendar 
            una evaluación técnica en tu propiedad.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info sidebar */}
          <AnimatedSection className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">WhatsApp</p>
                        <p className="font-medium text-slate-900">Escríbenos</p>
                      </div>
                    </a>

                    <a 
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                        <Mail className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-medium text-slate-900">{EMAIL}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Cobertura</p>
                        <p className="font-medium text-slate-900">Región de Valparaíso</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Horario</p>
                        <p className="font-medium text-slate-900">{BUSINESS_HOURS.weekdays}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick WhatsApp CTA */}
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">¿Prefieres WhatsApp?</h3>
                  </div>
                  <p className="text-green-100 mb-4">
                    Escríbenos directamente por WhatsApp para una respuesta más rápida.
                  </p>
                  <Button 
                    variant="white" 
                    className="w-full" 
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Formulario de contacto
                </h3>

                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      ¡Mensaje enviado!
                    </h4>
                    <p className="text-slate-600 mb-6">
                      Nos pondremos en contacto contigo pronto. También puedes escribirnos directamente por WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="outline" onClick={() => setSubmitStatus("idle")}>
                        Enviar otro mensaje
                      </Button>
                      <Button asChild>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Teléfono *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+56 9 XXXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="comuna" className="block text-sm font-medium text-slate-700 mb-2">
                          Comuna *
                        </label>
                        <Select
                          id="comuna"
                          value={formData.comuna}
                          onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                          required
                        >
                          <option value="">Selecciona tu comuna</option>
                          {COVERAGE_AREAS.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">
                          Tipo de propiedad *
                        </label>
                        <Select
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          required
                        >
                          <option value="">Selecciona el tipo</option>
                          {PROPERTY_TYPES.map((type) => (
                            <option key={type.value} value={type.label}>
                              {type.label}
                            </option>
                          ))}
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="monthlyBill" className="block text-sm font-medium text-slate-700 mb-2">
                          Cuenta de luz mensual aproximada (CLP)
                        </label>
                        <Input
                          id="monthlyBill"
                          type="number"
                          placeholder="Ej: 80000"
                          value={formData.monthlyBill}
                          onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        />
                      </div>

                      <div>
                        <label htmlFor="goal" className="block text-sm font-medium text-slate-700 mb-2">
                          Objetivo principal
                        </label>
                        <Select
                          id="goal"
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        >
                          <option value="">Selecciona tu objetivo</option>
                          {PROJECT_GOALS.map((goal) => (
                            <option key={goal.value} value={goal.label}>
                              {goal.label}
                            </option>
                          ))}
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Mensaje adicional
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos más sobre tu proyecto, dudas específicas, o cualquier información relevante..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-red-800 font-medium">Error al enviar</p>
                          <p className="text-sm text-red-600">
                            Por favor intenta de nuevo o contáctanos directamente por WhatsApp.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="flex-1"
                        isLoading={isSubmitting}
                      >
                        <Send className="w-5 h-5" />
                        Enviar solicitud
                      </Button>
                      
                      <Button 
                        type="button"
                        variant="whatsapp" 
                        size="lg"
                        className="flex-1"
                        asChild
                      >
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-slate-500 text-center">
                      Al enviar este formulario, aceptas que te contactemos para coordinar una evaluación técnica. 
                      También puedes escribirnos directamente por WhatsApp para una respuesta más rápida.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
