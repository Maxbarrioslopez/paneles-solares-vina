"use client";

import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { useLocalStorage, Project } from "@/hooks/useLocalStorage";
import { Plus, MapPin, Home, Building2, Edit2, Trash2 } from "lucide-react";

export default function ProjectsPage() {
  const { language } = useApp();
  const [projects, setProjects] = useLocalStorage<Project[]>("solar-projects", []);
  const [showAddForm, setShowAddForm] = useState(false);

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: prompt(language === "es" ? "Nombre del proyecto:" : "Project name:") || "",
      clientName: prompt(language === "es" ? "Nombre del cliente:" : "Client name:") || "",
      location: {
        address: prompt(language === "es" ? "Dirección:" : "Address:") || "",
        city: prompt(language === "es" ? "Ciudad:" : "City:") || "Viña del Mar",
      },
      systemSize: 5,
      panelsCount: 12,
      inverterSize: 5,
      status: "pending",
      images: [],
      notes: "",
    };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id: string) => {
    if (confirm(language === "es" ? "¿Eliminar este proyecto?" : "Delete this project?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-100 text-amber-700";
      case "in_progress": return "bg-blue-100 text-blue-700";
      case "completed": return "bg-emerald-100 text-emerald-700";
      case "maintenance": return "bg-purple-100 text-purple-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  const completedCount = projects.filter(p => p.status === "completed").length;
  const totalPower = projects.reduce((sum, p) => sum + p.systemSize, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {language === "es" ? "Proyectos Realizados" : "Completed Projects"}
        </h2>
        <button 
          onClick={addProject}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          {language === "es" ? "Agregar Proyecto" : "Add Project"}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500">{language === "es" ? "Total Proyectos" : "Total Projects"}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">{projects.length}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500">{language === "es" ? "Completados" : "Completed"}</p>
          <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{completedCount}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500">{language === "es" ? "Potencia Total" : "Total Power"}</p>
          <p className="text-3xl font-bold text-sky-600 dark:text-sky-400">{totalPower.toFixed(1)} kWp</p>
        </div>
      </div>

      {/* Mapa visual */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-amber-500" />
          {language === "es" ? "Mapa de Proyectos" : "Projects Map"}
        </h3>
        
        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 min-h-[400px] relative">
          {/* Simulación de mapa */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #64748b 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative grid grid-cols-4 gap-4">
            {["Viña del Mar", "Valparaíso", "Concón", "Quilpué", "Villa Alemana", "Limache", "Casablanca", "Reñaca"].map((city, i) => {
              const cityProjects = projects.filter(p => p.location.city === city);
              return (
                <div key={city} className={`p-4 rounded-xl border-2 transition-colors ${cityProjects.length > 0 ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" : "border-slate-300 dark:border-slate-700"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className={`w-5 h-5 ${cityProjects.length > 0 ? "text-amber-500" : "text-slate-400"}`} />
                    {cityProjects.length > 0 && (
                      <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">
                        {cityProjects.length}
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-slate-900 dark:text-white text-sm">{city}</p>
                  <p className="text-xs text-slate-500">
                    {cityProjects.length > 0 
                      ? `${cityProjects.length} proyecto${cityProjects.length > 1 ? "s" : ""}`
                      : language === "es" ? "Sin proyectos" : "No projects"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lista de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500">
            <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>{language === "es" ? "No hay proyectos aún" : "No projects yet"}</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-slate-500">{project.clientName}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  {project.location.city}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Home className="w-4 h-4" />
                  {project.systemSize} kWp | {project.panelsCount} paneles
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm">
                  <Edit2 className="w-4 h-4 inline mr-1" />
                  {language === "es" ? "Editar" : "Edit"}
                </button>
                <button onClick={() => deleteProject(project.id)} className="p-2 text-slate-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}