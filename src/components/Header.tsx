
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <header className="w-full sticky top-0 z-50 glass-effect border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative rounded-full bg-gradient-to-br from-primary to-blue-400 p-2 neon-glow">
                <Calculator className="text-black" size={24} />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-display font-bold text-gradient tracking-wide">
              Pineapple Calculator Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Home
            </Link>
            <a 
              href="/#all-calculators" 
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Calculators
            </a>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Contact
            </Link>
            {user ? (
              <button
                className="btn-neon px-4 py-2 rounded-lg font-bold text-sm"
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <Link
                to="/auth"
                className="btn-neon px-4 py-2 rounded-lg font-bold text-sm inline-block"
              >
                Log in/Sign up
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-slide-up">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="/#all-calculators" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calculators
              </a>
              <Link 
                to="/about" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {user ? (
                <button
                  className="btn-neon px-4 py-2 rounded-lg font-bold text-sm mt-2 w-full"
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Log out
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="btn-neon px-4 py-2 rounded-lg font-bold text-sm mt-2 w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in/Sign up
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
