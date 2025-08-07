import { memo } from "react";
import { Link } from "react-router-dom";
import { Calculator, Heart, Star, Mail, MapPin, Phone, Globe, ChevronRight, Shield, FileText } from "lucide-react";

const Footer = memo(() => (
  <footer className="w-full bg-gradient-to-br from-background via-muted/20 to-background border-t mt-16">
    <div className="container mx-auto px-6 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
              <Calculator className="text-primary-foreground" size={24} />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                PineappleHub
              </span>
              <div className="text-xs text-muted-foreground">Calculator Tools</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your trusted companion for all calculations. Fast, accurate, and completely free online calculator tools for finance, health, and daily life.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for better calculations</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>Trusted by thousands</span>
            </div>
            <span className="text-muted-foreground/50">|</span>
            <span className="text-muted-foreground">Fast & Secure</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Quick Links
          </h3>
          <nav className="space-y-3">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              About Us
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Contact Us
            </Link>
            <Link to="/#calculators" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              All Calculators
            </Link>
          </nav>
        </div>

        {/* Popular Calculators */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Popular Tools
          </h3>
          <nav className="space-y-3">
            <Link to="/calculators/sip" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              SIP Calculator
            </Link>
            <Link to="/calculators/emi" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              EMI Calculator
            </Link>
            <Link to="/calculators/bmi" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              BMI Calculator
            </Link>
            <Link to="/calculators/compound-interest" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Compound Interest
            </Link>
            <Link to="/calculators/income-tax" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Income Tax Calculator
            </Link>
          </nav>
        </div>

        {/* Legal & Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Legal & Support
          </h3>
          <nav className="space-y-3">
            <Link to="/privacy-policy" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group">
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              Disclaimer
            </Link>
          </nav>
          
          <div className="space-y-2 pt-4 border-t border-border/50">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Contact Info
            </h4>
            <a 
              href="mailto:pineappletech.official@gmail.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors block"
            >
              pineappletech.official@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border/50 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} PineappleHub. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built with ❤️ for everyone</span>
            <span>•</span>
            <span>Free & Open Source</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
));
export default Footer;
