import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = memo(() => {
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="w-full flex items-center justify-between px-4 lg:px-6 py-3 shadow-lg bg-gradient-to-r from-[#00B86B] to-[#00A05C] sticky top-0 z-50 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
        <div className="relative">
          <span className="rounded-full bg-[#FFE066] p-2.5 shadow-lg hover-scale transition-all duration-300 group-hover:shadow-xl">
            <Calculator className="text-[#00B86B]" size={24} />
          </span>
          <div className="absolute inset-0 rounded-full bg-[#FFE066] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <span className="text-xl lg:text-2xl font-bold text-white tracking-wide drop-shadow-md group-hover:text-[#FFE066] transition-colors duration-300">
          Calculator Hub
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm">
        <Link to="/" className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-2 py-1 rounded">
          Home
        </Link>
        <a href="#all-calculators" className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-2 py-1 rounded">
          Calculators
        </a>
        <Link to="/about" className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-2 py-1 rounded">
          About
        </Link>
        <Link to="/contact" className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-2 py-1 rounded">
          Contact
        </Link>
        <Link to="/privacy-policy" className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-2 py-1 rounded">
          Privacy
        </Link>
        {user ? (
          <Button
            variant="secondary"
            size="sm"
            className="bg-[#FFE066] text-[#00B86B] hover:bg-[#FFBF00] transition-all duration-200 font-bold shadow-md hover:shadow-lg"
            onClick={handleLogout}
          >
            Log out
          </Button>
        ) : (
          <Link to="/auth">
            <Button
              variant="secondary"
              size="sm"
              className="bg-[#FFE066] text-[#00B86B] hover:bg-[#FFBF00] transition-all duration-200 font-bold shadow-md hover:shadow-lg"
            >
              Sign In
            </Button>
          </Link>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden text-white hover:text-[#FFE066] hover:bg-white/10 transition-colors"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#00B86B] border-t border-white/20 shadow-lg lg:hidden animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link 
              to="/" 
              className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-3 py-2 rounded" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#all-calculators" 
              className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculators
            </a>
            <Link 
              to="/about" 
              className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-white/90 hover:text-[#FFE066] transition-colors duration-200 px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <div className="pt-2 border-t border-white/20">
              {user ? (
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full bg-[#FFE066] text-[#00B86B] hover:bg-[#FFBF00] transition-all duration-200 font-bold"
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log out
                </Button>
              ) : (
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-[#FFE066] text-[#00B86B] hover:bg-[#FFBF00] transition-all duration-200 font-bold"
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
});

export default Header;
