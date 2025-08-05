
import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { Home, TrendingUp, HeartPulse, Calendar, BookOpen, Umbrella, Smile, Baby, Hash, ClipboardList } from "lucide-react";

const sidebarCategories = [
  { label: "Finance", icon: TrendingUp, path: "/#finance" },
  { label: "Fitness", icon: HeartPulse, path: "/#fitness" },
  { label: "Health", icon: Baby, path: "/#health" },
  { label: "Date & Time", icon: Calendar, path: "/#date-time" },
  { label: "Math", icon: BookOpen, path: "/#math" },
];

export default function AppSidebar() {
  return (
    <Sidebar className="min-w-[60px] max-w-[236px] bg-white border-r border-border shadow-lg z-10 px-2 py-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarCategories.map(cat => (
                <SidebarMenuItem key={cat.label}>
                  <SidebarMenuButton asChild>
                    <NavLink to={cat.path} className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-base hover:bg-[#ffe06633] hover:text-[#00B86B] transition-all">
                      <cat.icon className="w-5 h-5" />
                      <span className="ml-1">{cat.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
