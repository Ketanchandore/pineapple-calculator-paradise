import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, HeartPulse, Calendar, Percent, TrendingUp, BookOpen, Hash, Umbrella, Smile, Baby, ClipboardList, Activity, Wallet, Spline, Coins, Layers, Scale, Menu, Sun, Moon, Calculator as CalcIcon, Leaf, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const calculators = [
  { name: "Age Calculator",        path: "/calculators/age", category: "Date & Time", icon: Calendar },
  { name: "BMI Calculator",        path: "/calculators/bmi", category: "Fitness", icon: HeartPulse },
  { name: "EMI Calculator",        path: "/calculators/emi", category: "Finance", icon: Wallet },
  { name: "SIP Calculator",        path: "/calculators/sip", category: "Finance", icon: TrendingUp },
  { name: "SWP Calculator",        path: "/calculators/swp", category: "Finance", icon: Spline },
  { name: "FD Calculator",         path: "/calculators/fd", category: "Finance", icon: Coins },
  { name: "Percentage Calculator", path: "/calculators/percentage", category: "Math", icon: Percent },
  { name: "Home Loan Calculator",  path: "/calculators/home-loan", category: "Finance", icon: Home },
  { name: "Home Loan EMI",         path: "/calculators/home-loan-emi", category: "Finance", icon: Umbrella },
  { name: "Loan Calculator",       path: "/calculators/loan", category: "Finance", icon: Scale },
  { name: "Compound Interest",     path: "/calculators/compound-interest", category: "Finance", icon: Layers },
  { name: "Income Tax Calculator", path: "/calculators/income-tax", category: "Finance", icon: BookOpen },
  { name: "Date Calculator",       path: "/calculators/date", category: "Date & Time", icon: Calendar },
  { name: "Calorie Calculator",    path: "/calculators/calorie", category: "Fitness", icon: Activity },
  { name: "Days Calculator",       path: "/calculators/days", category: "Date & Time", icon: Calendar },
  { name: "GST Calculator",        path: "/calculators/gst", category: "Finance", icon: Hash },
  { name: "Mutual Fund",           path: "/calculators/mutual-fund", category: "Finance", icon: ClipboardList },
  { name: "Pregnancy",             path: "/calculators/pregnancy", category: "Health", icon: Baby },
  { name: "NPS Calculator",        path: "/calculators/nps", category: "Finance", icon: Smile },
  { name: "Fertilizer Calculator", path: "/calculators/fertilizer", category: "Agriculture", icon: Leaf },
  { name: "eCommerce Profit",      path: "/calculators/ecommerce", category: "Business", icon: ShoppingCart },
];

const categories = [
  "All", "Finance", "Business", "Fitness", "Health", "Date & Time", "Math", "Agriculture"
];

const CalculatorGrid: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = calculators.filter(
    c =>
      (category === "All" || c.category === category) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mb-5 gap-4">
        <input
          type="text"
          className="w-full md:w-60 px-4 py-2 rounded-xl border border-[#ecebb6] shadow-sm outline-none focus:ring-2 focus:ring-[#00B86B] transition-all"
          placeholder="Search calculators..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search calculators"
        />
        <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
          {categories.map(cat => (
            <button
              key={cat}
              className={cn(
                "px-3 py-1 rounded-full font-medium text-sm transition-all shadow hover:bg-[#cdeaa5] hover:text-[#2A2605]",
                category === cat ? "bg-[#00B86B] text-white" : "bg-[#f4f4d0] text-[#5C6C32]"
              )}
              onClick={() => setCategory(cat)}
            >{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filtered.map(({ name, path, icon: Icon, category }) => (
          <Link
            to={path}
            key={path}
            className="group bg-white rounded-2xl px-6 py-7 border border-[#ecebb6] shadow-md hover-scale flex flex-col items-center text-center gap-2 cursor-pointer transition-all duration-300 outline-none focus:ring-2 focus:ring-[#00B86B] animate-fade-in"
          >
            <span className="inline-block rounded-full bg-[#A5FFD6]/70 p-4 mb-2 shadow group-hover:bg-[#FFE066]/80 group-hover:animate-bounce group-focus-within:animate-pulse transition-all">
              <Icon className="w-9 h-9 text-[#00B86B] group-hover:text-[#FFD600] transition-colors duration-150" />
            </span>
            <span className="text-[1.1rem] font-medium font-display text-[#2A2605] group-hover:text-[#00B86B] transition-colors whitespace-pre-wrap">{name}</span>
            <span className="text-xs mt-1 opacity-70">{category}</span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-gray-400 text-lg py-16 text-center">No calculators found.</div>
        )}
      </div>
    </>
  );
};

export default CalculatorGrid;
