"use client";

import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { useLocalStorage, Lead } from "@/hooks/useLocalStorage";
import { Plus, Search, Filter, Trash2, Edit2, Phone, Mail } from "lucide-react";

export function LeadsManager() {
  const { language, t } = useApp();
  const [leads, setLeads] = useLocalStorage<Lead[]>("solar-leads", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statuses = [
    { value: "new", label: language === "es" ? "Nuevo" : "New", color: "bg-amber-100 text-amber-700" },
    { value: "contacted", label: language === "es" ? "Contactado" : "Contacted", color: "bg-blue-100 text-blue-700" },
    { value: "visit_scheduled", label: language === "es" ? "Visita Agendada" : "Visit Scheduled", color: "bg-purple-100 text-purple-700" },
    { value: "proposal_sent", label: language === "es" ? "Propuesta Enviada" : "Proposal Sent", color: "bg-sky-100 text-sky-700" },
    { value: "closed_won", label: language === "es" ? "Cerrado - Ganado" : "Closed - Won", color: "bg-emerald-100 text-emerald-700" },
    { value: "closed_lost", label: language === "es" ? "Cerrado - Perdido" : "Closed - Lost", color: "bg-red-100 text-red-700" },
  ];

  const updateLeadStatus = (id: string, newStatus: Lead["status"]) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus, lastContact: new Date().toISOString() } : l));
  };

  const deleteLead = (id: string) => {
    if (confirm(language === "es" ? "¿Eliminar este lead?" : "Delete this lead?")) {
      setLeads(leads.filter(l => l.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {language === "es" ? "Gestión de Leads" : "Leads Management"}
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
          <Plus className="w-5 h-5" />
          {language === "es" ? "Agregar Lead" : "Add Lead"}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={language === "es" ? "Buscar por nombre o email..." : "Search by name or email..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        >
          <option value="all">{language === "es" ? "Todos los estados" : "All statuses"}</option>
          {statuses.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Leads List */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Nombre" : "Name"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Contacto" : "Contact"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Ciudad" : "City"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Consumo" : "Consumption"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Estado" : "Status"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Fecha" : "Date"}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === "es" ? "Acciones" : "Actions"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    {language === "es" ? "No hay leads que mostrar" : "No leads to display"}
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900 dark:text-white">{lead.name}</p>
                      <p className="text-sm text-slate-500">{lead.propertyType}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-900 dark:text-white flex items-center gap-1">
                        <Mail className="w-4 h-4" /> {lead.email}
                      </p>
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <Phone className="w-4 h-4" /> {lead.phone}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{lead.city}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{lead.monthlyConsumption} kWh</td>
                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead["status"])}
                        className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${statuses.find(s => s.value === lead.status)?.color}`}
                      >
                        {statuses.map(s => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{lead.dateCreated}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => deleteLead(lead.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
