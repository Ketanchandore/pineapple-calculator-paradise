import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState<any>(null);
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
        <Link to="/about" className="hover:text-[#00B86B] transition-colors">About</Link>
        <Link to="/privacy-policy" className="hover:text-[#00B86B] transition-colors">Privacy</Link>
        <Link to="/terms-of-service" className="hover:text-[#00B86B] transition-colors">Terms</Link>
        <Link to="/contact" className="hover:text-[#00B86B] transition-colors">Contact</Link>
        {user ? (
          <button
            className="bg-[#00B86B] text-white px-3 py-1 rounded font-bold hover:bg-[#01995C] transition ml-2"
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <Link
            to="/auth"
            className="bg-[#00B86B] text-white px-3 py-1 rounded font-bold hover:bg-[#01995C] transition ml-2"
          >
            Log in/Sign up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
