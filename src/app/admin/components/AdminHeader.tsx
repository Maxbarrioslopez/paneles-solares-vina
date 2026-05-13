"use client";

import { useState } from "react";
import { Sun, Moon, Languages, ChevronDown } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export function AdminHeader() {
  const { theme, toggleTheme, language, setLanguage, t } = useApp();
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-900 dark:text-white">
                {t("app.name")}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t("admin.dashboard")}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              title={theme === "light" ? t("theme.dark") : t("theme.light")}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{language}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showLangMenu ? "rotate-180" : ""}`} />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1">
                  <button
                    onClick={() => { setLanguage("es"); setShowLangMenu(false); }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700 ${language === "es" ? "text-amber-600 font-medium" : "text-slate-700 dark:text-slate-300"}`}
                  >
                    {t("language.es")}
                  </button>
                  <button
                    onClick={() => { setLanguage("en"); setShowLangMenu(false); }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700 ${language === "en" ? "text-amber-600 font-medium" : "text-slate-700 dark:text-slate-300"}`}
                  >
                    {t("language.en")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
