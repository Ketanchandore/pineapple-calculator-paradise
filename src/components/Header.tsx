
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ModernButton } from "@/components/ui/modern-button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "#all-calculators" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-of-service" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow"></div>
              <span className="relative rounded-full bg-gradient-to-br from-primary to-yellow-400 p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Calculator className="text-white dark:text-black" size={24} />
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-display text-foreground tracking-wide font-bold group-hover:text-primary transition-colors duration-300">
                🍍 Pineapple Calculator Hub
              </span>
            </div>
            <div className="sm:hidden">
              <span className="text-xl font-display text-foreground font-bold">🍍</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith('#') ? '/' : link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-md px-2 py-1"
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 scale-x-0 hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {user ? (
              <ModernButton
                onClick={handleLogout}
                size="sm"
                glassEffect
                ripple
                className="hidden sm:inline-flex"
              >
                Sign Out
              </ModernButton>
            ) : (
              <ModernButton
                onClick={() => navigate("/auth")}
                size="sm"
                glassEffect
                ripple
                className="hidden sm:inline-flex"
              >
                Sign In
              </ModernButton>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors focus-ring"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden transition-all duration-300 ease-out overflow-hidden",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-2 pt-4 border-t border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith('#') ? '/' : link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 focus-ring"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="mt-3 pt-3 border-t border-border/40">
              {user ? (
                <ModernButton
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  size="sm"
                  glassEffect
                  ripple
                  className="w-full"
                >
                  Sign Out
                </ModernButton>
              ) : (
                <ModernButton
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/auth");
                  }}
                  size="sm"
                  glassEffect
                  ripple
                  className="w-full"
                >
                  Sign In
                </ModernButton>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
