
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

const Header = () => (
  <header className="w-full flex items-center justify-between px-6 py-4 shadow bg-white/80 sticky top-0 z-20 backdrop-blur-md border-b border-border">
    <Link to="/" className="flex items-center gap-3 group">
      <span className="rounded-full bg-[#FFE066] p-2 shadow hover-scale transition-all">
        <Calculator className="text-[#00B86B]" size={28} />
      </span>
      <span className="text-2xl md:text-3xl font-display text-[#2A2605] tracking-wide drop-shadow font-bold group-hover:text-[#00B86B] transition-colors">
        Pineapple Calculator Hub
      </span>
    </Link>
    <nav className="hidden md:flex gap-8 font-semibold text-base">
      <Link to="/" className="hover:text-[#00B86B] transition-colors">Home</Link>
      <a href="#all-calculators" className="hover:text-[#00B86B] transition-colors">Calculators</a>
      <a href="#contact" className="hover:text-[#00B86B] transition-colors">Contact</a>
    </nav>
  </header>
);

export default Header;
