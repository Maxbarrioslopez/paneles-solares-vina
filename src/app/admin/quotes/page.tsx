"use client";

import { useApp } from "@/contexts/AppContext";
import { useLocalStorage, Quote } from "@/hooks/useLocalStorage";
import { Plus, Search, FileText, Send, Download, Trash2 } from "lucide-react";

export default function QuotesPage() {
  const { language } = useApp();
  const [quotes, setQuotes] = useLocalStorage<Quote[]>("solar-quotes", []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft": return "bg-slate-100 text-slate-700";
      case "sent": return "bg-blue-100 text-blue-700";
      case "approved": return "bg-emerald-100 text-emerald-700";
      case "rejected": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  const createQuote = () => {
    const newQuote: Quote = {
      id: Date.now().toString(),
      leadId: "",
      leadName: prompt(language === "es" ? "Nombre del cliente:" : "Client name:") || "",
      items: [],
      subtotal: 0,
      tax: 0,
      discount: 0,
      total: 0,
      status: "draft",
      dateCreated: new Date().toLocaleDateString(),
      dateValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      notes: "",
    };
    setQuotes([...quotes, newQuote]);
  };

  const deleteQuote = (id: string) => {
    if (confirm(language === "es" ? "¿Eliminar esta cotización?" : "Delete this quote?")) {
      setQuotes(quotes.filter(q => q.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {language === "es" ? "Cotizaciones" : "Quotes"}
        </h2>
        <button 
          onClick={createQuote}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          {language === "es" ? "Nueva Cotización" : "New Quote"}
        </button>
      </div>

      {/* Lista de cotizaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500">
            <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>{language === "es" ? "No hay cotizaciones aún" : "No quotes yet"}</p>
            <button onClick={createQuote} className="mt-4 text-amber-500 hover:text-amber-600">
              {language === "es" ? "Crear primera cotización" : "Create your first quote"}
            </button>
          </div>
        ) : (
          quotes.map((quote) => (
            <div key={quote.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{quote.leadName}</h3>
                  <p className="text-sm text-slate-500">{quote.dateCreated}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quote.status)}`}>
                  {quote.status}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-500">{language === "es" ? "Total" : "Total"}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  ${quote.total.toLocaleString()} CLP
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-1 text-sm">
                  <Download className="w-4 h-4" />
                  PDF
                </button>
                <button className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1 text-sm">
                  <Send className="w-4 h-4" />
                  {language === "es" ? "Enviar" : "Send"}
                </button>
                <button onClick={() => deleteQuote(quote.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500">
                  {language === "es" ? "Válida hasta" : "Valid until"}: {quote.dateValidUntil}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}