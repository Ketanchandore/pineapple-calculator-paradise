import { memo } from "react";
import { Link } from "react-router-dom";
import { Calculator, Heart, Star } from "lucide-react";

const Footer = memo(() => (
  <footer className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white px-6 py-12 mt-16">
    <div className="max-w-6xl mx-auto">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#FFE066] p-2 shadow-lg">
              <Calculator className="text-[#00B86B]" size={24} />
            </div>
            <span className="text-xl font-bold text-[#FFE066]">Calculator Hub</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted companion for all financial calculations. Fast, accurate, and completely free.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for better financial planning</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFE066] mb-3">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              Contact
            </Link>
            <Link to="/privacy-policy" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Popular Calculators */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFE066] mb-3">Popular Calculators</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/calculators/sip" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              SIP Calculator
            </Link>
            <Link to="/calculators/emi" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              EMI Calculator
            </Link>
            <Link to="/calculators/bmi" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              BMI Calculator
            </Link>
            <Link to="/calculators/compound-interest" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              Compound Interest
            </Link>
            <Link to="/calculators/income-tax" className="text-gray-300 hover:text-[#FFE066] transition-colors duration-200 text-sm">
              Income Tax Calculator
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Calculator Hub. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-gray-400">
              <Star className="w-4 h-4 text-[#FFE066] fill-current" />
              <span>Trusted by thousands</span>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Fast & Secure</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
));
export default Footer;
