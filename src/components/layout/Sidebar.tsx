import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  Calendar,
  Mail,
  ChevronLeft,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Leads",
    icon: Users,
    href: "/leads",
  },
  {
    title: "Relatórios",
    icon: BarChart3,
    href: "/reports",
  },
  {
    title: "Agenda",
    icon: Calendar,
    href: "/calendar",
  },
  {
    title: "E-mail",
    icon: Mail,
    href: "/email",
  },
  {
    title: "Documentos",
    icon: FileText,
    href: "/documents",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/settings",
  },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-card border-r transition-all duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
        <div className="h-16 border-b flex items-center justify-between px-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h2 className="font-bold text-primary">OLZ ENGETECH</h2>
                <p className="text-xs text-muted-foreground">Sistema CRM</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                collapsed && "rotate-180"
              )}
            />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose();
                  }
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:text-accent-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <item.icon className={cn("h-5 w-5", collapsed && "h-6 w-6")} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};