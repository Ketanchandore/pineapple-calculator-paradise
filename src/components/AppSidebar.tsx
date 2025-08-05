
import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { Calculator, Calendar, HeartPulse, Percent, IndianRupee, Home, TrendingUp, BookOpen, Spline, Layers, Coins, Umbrella, Activity, Scale, Wallet, Hash, Baby, Smile, ClipboardList, Leaf, ShoppingCart } from "lucide-react";

const calculators = [
  { name: "Age Calculator", path: "/calculators/age", icon: Calendar },
  { name: "BMI Calculator", path: "/calculators/bmi", icon: HeartPulse },
  { name: "EMI Calculator", path: "/calculators/emi", icon: Wallet },
  { name: "SIP Calculator", path: "/calculators/sip", icon: TrendingUp },
  { name: "SWP Calculator", path: "/calculators/swp", icon: Spline },
  { name: "FD Calculator", path: "/calculators/fd", icon: Coins },
  { name: "Percentage Calculator", path: "/calculators/percentage", icon: Percent },
  { name: "Home Loan Calculator", path: "/calculators/home-loan", icon: Home },
  { name: "Home Loan EMI", path: "/calculators/home-loan-emi", icon: Umbrella },
  { name: "Loan Calculator", path: "/calculators/loan", icon: Scale },
  { name: "Compound Interest", path: "/calculators/compound-interest", icon: Layers },
  { name: "Income Tax Calculator", path: "/calculators/income-tax", icon: BookOpen },
  { name: "Date Calculator", path: "/calculators/date", icon: Calendar },
  { name: "Calorie Calculator", path: "/calculators/calorie", icon: Activity },
  { name: "Days Calculator", path: "/calculators/days", icon: Calendar },
  { name: "GST Calculator", path: "/calculators/gst", icon: Hash },
  { name: "Mutual Fund", path: "/calculators/mutual-fund", icon: ClipboardList },
  { name: "Pregnancy", path: "/calculators/pregnancy", icon: Baby },
  { name: "NPS Calculator", path: "/calculators/nps", icon: Smile },
  { name: "Fertilizer Calculator", path: "/calculators/fertilizer", icon: Leaf },
  { name: "eCommerce Profit", path: "/calculators/ecommerce", icon: ShoppingCart },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-r-2 border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display tracking-wide">
              Calculators
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {calculators.map(calc => (
                <SidebarMenuItem key={calc.path}>
                  <SidebarMenuButton asChild className="group">
                    <NavLink 
                      to={calc.path} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 ${
                          isActive 
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-[1.02]" 
                            : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-[1.01]"
                        }`
                      }
                      end
                    >
                      <calc.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="ml-1 font-medium">{calc.name}</span>
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
