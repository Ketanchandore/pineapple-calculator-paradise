import { NavLink, useLocation } from "react-router-dom";
import { 
  Calculator, Calendar, HeartPulse, Percent, Home, TrendingUp, BookOpen, 
  Spline, Layers, Coins, Umbrella, Activity, Scale, Wallet, Hash, Baby, 
  Smile, ClipboardList, Leaf, ShoppingCart, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

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

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex h-[calc(100vh-64px)] sticky top-16 left-0 flex-col 
                      glass-card border-r-0 rounded-none rounded-r-2xl
                      z-10 min-w-[260px] max-w-[280px] w-full px-3 py-6 gap-3 
                      animate-fade-in overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 mb-4">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent 
                      flex items-center justify-center shadow-glow">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-display font-bold text-gradient">
          Calculators
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {calculators.map((calc) => {
          const isActive = pathname === calc.path;
          return (
            <NavLink
              key={calc.path}
              to={calc.path}
              className={cn(
                "group flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm",
                "transition-all duration-200 touch-target",
                isActive 
                  ? "bg-primary/15 text-primary shadow-sm border border-primary/20" 
                  : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                isActive 
                  ? "bg-primary/20 text-primary" 
                  : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
              )}>
                <calc.icon className="w-4 h-4" />
              </div>
              <span className="truncate">{calc.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-4 px-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          50+ Free Calculator Tools
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
