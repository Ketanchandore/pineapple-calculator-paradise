
import React from "react";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MobileNavigation from "./MobileNavigation";

const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b-2 border-slate-200 dark:border-slate-700 shadow-lg">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle with enhanced visibility */}
        <SidebarTrigger className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg" />
        
        {/* Logo with improved design */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PineappleHub</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">Free Online Calculators</p>
          </div>
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="story-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="story-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="story-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            Contact
          </Link>
          <Link to="/auth" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
            Sign In
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </div>
  </header>
);

export default Header;
