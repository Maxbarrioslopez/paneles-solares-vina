"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Languages, ChevronDown, ExternalLink, ArrowLeft, Settings } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export function AdminHeader() {
  const { theme, toggleTheme, language, setLanguage, t } = useApp();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);

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

          {/* Center: Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {language === "es" ? "Ver sitio" : "View site"}
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white font-medium">
              {t("admin.dashboard")}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Back to site (mobile) */}
            <Link
              href="/"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors md:hidden"
              title={language === "es" ? "Volver al sitio" : "Back to site"}
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>

            {/* Admin Menu */}
            <div className="relative">
              <button
                onClick={() => setShowAdminMenu(!showAdminMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">{language === "es" ? "Panel" : "Panel"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showAdminMenu ? "rotate-180" : ""}`} />
              </button>

              {showAdminMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() => setShowAdminMenu(false)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === "es" ? "Ver sitio público" : "View public site"}
                  </Link>
                  <hr className="my-1 border-slate-200 dark:border-slate-700" />
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    onClick={() => setShowAdminMenu(false)}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {language === "es" ? "Salir del admin" : "Exit admin"}
                  </Link>
                </div>
              )}
            </div>

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
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
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
