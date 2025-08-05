
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
    <Sidebar className="min-w-[60px] max-w-[256px] bg-white border-r border-border shadow-lg z-10 px-2 py-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="text-lg font-bold text-[#00B86B] font-display tracking-wide">
              Calculators
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {calculators.map(calc => (
                <SidebarMenuItem key={calc.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={calc.path} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-base hover:bg-[#ffe06633] hover:text-[#00B86B] transition-all ${
                          isActive ? "bg-[#ffe06633] text-[#00B86B] font-semibold" : ""
                        }`
                      }
                      end
                    >
                      <calc.icon className="w-5 h-5" />
                      <span className="ml-1">{calc.name}</span>
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
