
import React from "react";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
        <div className="bg-[#00B86B] p-2 rounded-xl shadow-lg">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#00B86B]">PineappleHub</h1>
          <p className="text-xs text-muted-foreground">Free Online Calculators</p>
        </div>
      </Link>
      
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="story-link text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="story-link text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="story-link text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Header;
