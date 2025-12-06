import { memo, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Calculator, Menu, X, User, LogOut, ChevronDown, Search, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Header = memo(() => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/#search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'glass-header shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl 
                          bg-gradient-to-br from-primary to-accent shadow-glow 
                          group-hover:scale-105 transition-transform">
              <Calculator className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl md:text-2xl font-display font-extrabold text-gradient">
                PineappleHub
              </span>
              <div className="text-xs text-muted-foreground -mt-0.5 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>Free Calculator Tools</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" active={isActivePath('/')}>Home</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium 
                                              text-muted-foreground rounded-xl transition-all 
                                              hover:bg-primary/10 hover:text-foreground">
                Calculators
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card w-56 border-border/50">
                <DropdownMenuItem onClick={() => navigate('/finance-calculators')} className="cursor-pointer">
                  💰 Finance Calculators
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/health-calculators')} className="cursor-pointer">
                  🏥 Health Calculators
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/math-calculators')} className="cursor-pointer">
                  🔢 Math Calculators
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate('/#calculators')} 
                  className="cursor-pointer border-t border-border/50 mt-1 pt-2"
                >
                  View All Calculators →
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavLink to="/about" active={isActivePath('/about')}>About</NavLink>
            <NavLink to="/contact" active={isActivePath('/contact')}>Contact</NavLink>
          </nav>

          {/* Search & Auth */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search calculators..."
                  className="pl-10 w-64 h-10 glass-button border-0 focus:ring-2 focus:ring-primary/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Auth Section */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 glass-button">
                      <User className="h-4 w-4" />
                      <span className="max-w-32 truncate">{user.email}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass-card">
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  size="sm"
                  onClick={() => navigate("/auth")}
                  className="btn-gradient"
                >
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 glass-button"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card rounded-2xl mt-2 mb-4 p-4 animate-fade-in">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search calculators..."
                  className="pl-10 bg-background/50 border-border/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-1">
              <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/#calculators" onClick={() => setMobileMenuOpen(false)}>All Calculators</MobileNavLink>
              <MobileNavLink to="/finance-calculators" onClick={() => setMobileMenuOpen(false)}>Finance Calculators</MobileNavLink>
              <MobileNavLink to="/health-calculators" onClick={() => setMobileMenuOpen(false)}>Health Calculators</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
            </nav>
            
            {/* Mobile Auth */}
            <div className="pt-4 mt-4 border-t border-border/50">
              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm text-muted-foreground flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                    className="w-full"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={() => { navigate("/auth"); setMobileMenuOpen(false); }}
                  className="w-full btn-gradient"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

interface NavLinkProps {
  to: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all touch-target ${
      active 
        ? 'bg-primary/10 text-primary' 
        : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, onClick, children }) => (
  <Link
    to={to}
    className="block px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 
               transition-colors touch-target"
    onClick={onClick}
  >
    {children}
  </Link>
);

Header.displayName = 'Header';

export default Header;
