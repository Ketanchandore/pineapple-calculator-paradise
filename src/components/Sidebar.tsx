
import { NavLink, useLocation } from "react-router-dom";
import { Calculator, Calendar, HeartPulse, Percent, IndianRupee, Home, TrendingUp, BookOpen, Spline, Layers, Coins, Umbrella, Activity, Scale, Wallet, Hash, Baby, Smile, ClipboardList } from "lucide-react";

const calculators = [
  { name: "Age Calculator",        path: "/calculators/age",      icon: Calendar },
  { name: "BMI Calculator",        path: "/calculators/bmi",      icon: HeartPulse },
  { name: "EMI Calculator",        path: "/calculators/emi",      icon: Wallet },
  { name: "SIP Calculator",        path: "/calculators/sip",      icon: TrendingUp },
  { name: "SWP Calculator",        path: "/calculators/swp",      icon: Spline },
  { name: "FD Calculator",         path: "/calculators/fd",       icon: Coins },
  { name: "Percentage Calculator", path: "/calculators/percentage", icon: Percent },
  { name: "Home Loan Calculator",  path: "/calculators/home-loan",  icon: Home },
  { name: "Home Loan EMI",         path: "/calculators/home-loan-emi", icon: Umbrella },
  { name: "Loan Calculator",       path: "/calculators/loan",     icon: Scale },
  { name: "Compound Interest",     path: "/calculators/compound-interest", icon: Layers },
  { name: "Income Tax Calculator", path: "/calculators/income-tax", icon: BookOpen },
  { name: "Date Calculator",       path: "/calculators/date",     icon: Calendar },
  { name: "Calorie Calculator",    path: "/calculators/calorie",  icon: Activity },
  { name: "Days Calculator",       path: "/calculators/days",     icon: Calendar },
  { name: "GST Calculator",        path: "/calculators/gst",      icon: Hash },
  { name: "Mutual Fund",           path: "/calculators/mutual-fund", icon: ClipboardList },
  { name: "Pregnancy",             path: "/calculators/pregnancy", icon: Baby },
  { name: "NPS Calculator",        path: "/calculators/nps",      icon: Smile },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="h-[calc(100vh-0px)] sticky top-0 left-0 flex flex-col bg-white border-r border-border shadow-lg z-10 min-w-[235px] max-w-[256px] w-full px-2 py-6 gap-3 animate-fade-in overflow-y-auto">
      <div className="text-center mb-5">
        <div
          className="text-lg font-bold text-[#00B86B] font-display tracking-wide"
        >
          Calculators
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {calculators.map((calc) => (
          <NavLink
            key={calc.path}
            to={calc.path}
            className={({ isActive }) =>
              `sidebar-link flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all text-base hover:bg-[#ffe06633] hover:text-[#00B86B] ${
                isActive || pathname === calc.path ? "sidebar-link-active" : ""
              }`
            }
            end
          >
            <calc.icon className="w-5 h-5" />
            <span>{calc.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
