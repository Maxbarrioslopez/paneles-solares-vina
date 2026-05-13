"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Calculator, 
  FileText, 
  Wrench, 
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const menuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "admin.dashboard", labelEn: "Dashboard" },
  { href: "/admin/leads", icon: Users, label: "admin.leads", labelEn: "Leads" },
  { href: "/admin/calculators", icon: Calculator, label: "admin.calculators", labelEn: "Calculators" },
  { href: "/admin/quotes", icon: FileText, label: "admin.quotes", labelEn: "Quotes" },
  { href: "/admin/equipment", icon: Wrench, label: "admin.equipment", labelEn: "Equipment" },
  { href: "/admin/projects", icon: MapPin, label: "admin.projects", labelEn: "Projects" },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { language, t } = useApp();

  return (
    <aside 
      className={`bg-slate-900 dark:bg-slate-950 text-white transition-all duration-300 ${collapsed ? "w-16" : "w-64"} min-h-screen flex flex-col`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-4 hover:bg-slate-800 flex justify-end"
      >
        {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      {/* Menu */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                isActive 
                  ? "bg-amber-500 text-white" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium">
                  {language === "es" ? t(item.label) : item.labelEn}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            Admin v1.0
          </p>
        </div>
      )}
    </aside>
  );
}
