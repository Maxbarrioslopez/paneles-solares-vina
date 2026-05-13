"use client";

import { useApp } from "@/contexts/AppContext";
import { useLocalStorage, Lead, Quote, Project } from "@/hooks/useLocalStorage";
import { TrendingUp, Users, DollarSign, Calendar, AlertCircle } from "lucide-react";

export function AdminDashboard() {
  const { language, t } = useApp();
  const [leads] = useLocalStorage<Lead[]>("solar-leads", []);
  const [quotes] = useLocalStorage<Quote[]>("solar-quotes", []);
  const [projects] = useLocalStorage<Project[]>("solar-projects", []);

  const newLeads = leads.filter(l => l.status === "new").length;
  const totalLeads = leads.length;
  const totalQuotes = quotes.length;
  const completedProjects = projects.filter(p => p.status === "completed").length;

  const stats = [
    { label: language === "es" ? "Leads Totales" : "Total Leads", value: totalLeads, icon: Users, color: "bg-blue-500" },
    { label: language === "es" ? "Leads Nuevos" : "New Leads", value: newLeads, icon: AlertCircle, color: "bg-amber-500" },
    { label: language === "es" ? "Cotizaciones" : "Quotes", value: totalQuotes, icon: DollarSign, color: "bg-emerald-500" },
    { label: language === "es" ? "Proyectos" : "Projects", value: completedProjects, icon: TrendingUp, color: "bg-purple-500" },
  ];

  const recentLeads = leads.slice(-5).reverse();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {language === "es" ? "Panel de Control" : "Dashboard"}
        </h2>
        <p className="text-sm text-slate-500">
          {new Date().toLocaleDateString(language === "es" ? "es-CL" : "en-US")}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {language === "es" ? "Leads Recientes" : "Recent Leads"}
          </h3>
        </div>
        <div className="p-6">
          {recentLeads.length === 0 ? (
            <p className="text-slate-500 text-center py-8">
              {language === "es" ? "No hay leads aún" : "No leads yet"}
            </p>
          ) : (
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{lead.name}</p>
                    <p className="text-sm text-slate-500">{lead.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === "new" ? "bg-amber-100 text-amber-700" :
                      lead.status === "contacted" ? "bg-blue-100 text-blue-700" :
                      lead.status === "closed_won" ? "bg-emerald-100 text-emerald-700" :
                      "bg-slate-100 text-slate-700"
                    }`}>
                      {lead.status}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">{lead.dateCreated}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/admin/calculators" className="p-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white hover:shadow-lg transition-shadow">
          <Calendar className="w-8 h-8 mb-2" />
          <h4 className="font-semibold text-lg">{language === "es" ? "Calculadora de Paneles" : "Panel Calculator"}</h4>
          <p className="text-amber-100 text-sm mt-1">{language === "es" ? "Calcula потребности" : "Calculate needs"}</p>
        </a>
        <a href="/admin/leads" className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white hover:shadow-lg transition-shadow">
          <Users className="w-8 h-8 mb-2" />
          <h4 className="font-semibold text-lg">{language === "es" ? "Gestionar Leads" : "Manage Leads"}</h4>
          <p className="text-blue-100 text-sm mt-1">{language === "es" ? "Ver todos los leads" : "View all leads"}</p>
        </a>
        <a href="/admin/quotes" className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white hover:shadow-lg transition-shadow">
          <DollarSign className="w-8 h-8 mb-2" />
          <h4 className="font-semibold text-lg">{language === "es" ? "Nueva Cotización" : "New Quote"}</h4>
          <p className="text-emerald-100 text-sm mt-1">{language === "es" ? "Crear cotización" : "Create quote"}</p>
        </a>
      </div>
    </div>
  );
}
