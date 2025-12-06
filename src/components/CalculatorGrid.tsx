import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Home, HeartPulse, Calendar, Percent, TrendingUp, BookOpen, Hash, 
  Umbrella, Smile, Baby, ClipboardList, Activity, Wallet, Spline, 
  Coins, Layers, Scale, Leaf, ShoppingCart, Search, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const calculators = [
  { name: "Age Calculator", path: "/calculators/age", category: "Date & Time", icon: Calendar, description: "Calculate exact age from birthdate" },
  { name: "BMI Calculator", path: "/calculators/bmi", category: "Fitness", icon: HeartPulse, description: "Body Mass Index calculator" },
  { name: "EMI Calculator", path: "/calculators/emi", category: "Finance", icon: Wallet, description: "Loan EMI calculation" },
  { name: "SIP Calculator", path: "/calculators/sip", category: "Finance", icon: TrendingUp, description: "Systematic Investment Plan" },
  { name: "SWP Calculator", path: "/calculators/swp", category: "Finance", icon: Spline, description: "Systematic Withdrawal Plan" },
  { name: "FD Calculator", path: "/calculators/fd", category: "Finance", icon: Coins, description: "Fixed Deposit returns" },
  { name: "Percentage Calculator", path: "/calculators/percentage", category: "Math", icon: Percent, description: "Quick percentage calculations" },
  { name: "Home Loan Calculator", path: "/calculators/home-loan", category: "Finance", icon: Home, description: "Mortgage & home loan EMI" },
  { name: "Home Loan EMI", path: "/calculators/home-loan-emi", category: "Finance", icon: Umbrella, description: "Detailed home loan analysis" },
  { name: "Loan Calculator", path: "/calculators/loan", category: "Finance", icon: Scale, description: "General loan calculator" },
  { name: "Compound Interest", path: "/calculators/compound-interest", category: "Finance", icon: Layers, description: "Compound interest growth" },
  { name: "Income Tax Calculator", path: "/calculators/income-tax", category: "Finance", icon: BookOpen, description: "Tax liability estimator" },
  { name: "Date Calculator", path: "/calculators/date", category: "Date & Time", icon: Calendar, description: "Date difference calculator" },
  { name: "Calorie Calculator", path: "/calculators/calorie", category: "Fitness", icon: Activity, description: "Daily calorie needs" },
  { name: "Days Calculator", path: "/calculators/days", category: "Date & Time", icon: Calendar, description: "Count days between dates" },
  { name: "GST Calculator", path: "/calculators/gst", category: "Finance", icon: Hash, description: "GST & VAT calculator" },
  { name: "Mutual Fund", path: "/calculators/mutual-fund", category: "Finance", icon: ClipboardList, description: "Mutual fund returns" },
  { name: "Pregnancy Calculator", path: "/calculators/pregnancy", category: "Health", icon: Baby, description: "Due date calculator" },
  { name: "NPS Calculator", path: "/calculators/nps", category: "Finance", icon: Smile, description: "National Pension Scheme" },
  { name: "Fertilizer Calculator", path: "/calculators/fertilizer", category: "Agriculture", icon: Leaf, description: "Fertilizer requirements" },
  { name: "eCommerce Profit", path: "/calculators/ecommerce", category: "Business", icon: ShoppingCart, description: "Profit margin calculator" },
];

const categories = [
  { id: "All", label: "All Tools", icon: Sparkles },
  { id: "Finance", label: "Finance", icon: Wallet },
  { id: "Business", label: "Business", icon: ShoppingCart },
  { id: "Fitness", label: "Fitness", icon: Activity },
  { id: "Health", label: "Health", icon: HeartPulse },
  { id: "Date & Time", label: "Date & Time", icon: Calendar },
  { id: "Math", label: "Math", icon: Percent },
  { id: "Agriculture", label: "Agriculture", icon: Leaf },
];

const CalculatorGrid: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => 
    calculators.filter(
      c =>
        (category === "All" || c.category === category) &&
        (c.name.toLowerCase().includes(search.toLowerCase()) ||
         c.description.toLowerCase().includes(search.toLowerCase()))
    ), [category, search]
  );

  return (
    <section id="calculators" className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
          Professional Calculator Tools
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-responsive">
          50+ free calculators for finance, health, math & business. 
          Trusted by users in USA, UK, Australia & 150+ countries.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-card rounded-2xl p-4 md:p-6 mb-8 animate-slide-up">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-border/50 
                         focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none 
                         transition-all text-foreground placeholder:text-muted-foreground"
              placeholder="Search calculators (e.g., EMI, BMI, Mortgage)..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search calculators"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-medium text-sm transition-all touch-target",
                    category === cat.id 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "glass-button hover:bg-primary/10"
                  )}
                  onClick={() => setCategory(cat.id)}
                  aria-pressed={category === cat.id}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calculator Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map(({ name, path, icon: Icon, category: cat, description }, index) => (
          <Link
            to={path}
            key={path}
            className="group glass-card rounded-2xl p-6 flex flex-col items-center text-center 
                       cursor-pointer transition-all duration-300 outline-none 
                       focus:ring-2 focus:ring-primary animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Icon Container */}
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 
                            flex items-center justify-center group-hover:scale-110 
                            group-hover:shadow-glow transition-all duration-300">
                <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 
                            group-hover:opacity-50 transition-opacity" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-gradient 
                         transition-all mb-2">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>
            <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full 
                           bg-secondary text-secondary-foreground">
              {cat}
            </span>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <div className="glass-card rounded-2xl p-12 text-center animate-fade-in">
          <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">No calculators found matching "{search}"</p>
          <button 
            onClick={() => { setSearch(""); setCategory("All"); }}
            className="mt-4 btn-gradient"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* SEO Footer - More calculators text */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          Popular calculators: EMI Calculator, Mortgage Calculator, SIP Calculator, BMI Calculator, 
          Compound Interest Calculator, Tax Calculator, Loan Calculator, Age Calculator, 
          Percentage Calculator, Date Calculator — Free for USA, UK, Australia, Canada & worldwide.
        </p>
      </div>
    </section>
  );
};

export default CalculatorGrid;
