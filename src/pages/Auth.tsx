
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up session and navigation
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        navigate("/");
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        navigate("/");
      }
    });
    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!email || !password) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }
    if (form === "signup") {
      // CRITICAL: set redirect URL for email confirmation
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + "/" }
      });
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        setError("Check your email for a confirmation link!");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) setError(error.message);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/" },
    });
    setLoading(false);
    if (error) setError(error.message);
    // No need to navigate: handled by Supabase redirect
  };

  if (user) return null; // Redirect handled above

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF6]">
      <div className="w-full max-w-sm space-y-4 bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-2xl font-bold text-center mb-2">
          {form === "login" ? "Sign In" : "Create Account"}
        </h1>
        <form onSubmit={handleAuth} className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete={form === "signup" ? "new-password" : "current-password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={loading}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Please wait..." : form === "login" ? "Sign In" : "Sign Up"}
          </Button>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
        </form>
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <Button
          variant="outline"
          className="w-full flex gap-2 items-center"
          onClick={handleGoogle}
          type="button"
          disabled={loading}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" className="inline" fill="none">
            <g>
              <path d="M17.64 9.2045C17.64 8.5665 17.5827 7.95225 17.4764 7.35791H9V10.8505H13.8436C13.632 12.0125 12.9404 12.9882 11.8945 13.6543V15.6385H14.6682C16.2382 14.2111 17.64 11.9731 17.64 9.2045Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.4673 17.194 14.6682 15.6385L11.8945 13.6543C11.2336 14.0913 10.3218 14.3633 9 14.3633C6.65536 14.3633 4.67864 12.8092 3.96409 10.7155H1.10449V12.7618C2.29773 15.1162 5.39727 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.7155C3.78273 10.2785 3.68182 9.79955 3.68182 9.29998C3.68182 8.80041 3.78273 8.32141 3.96409 7.88441V5.83813H1.10449C0.686727 6.66027 0.454545 7.62722 0.454545 8.68182C0.454545 9.73642 0.686727 10.7034 1.10449 11.5255L3.96409 10.7155Z" fill="#FBBC05"/>
              <path d="M9 3.63636C10.434 3.63636 11.6776 4.12695 12.6415 5.03545L14.7314 2.94545C13.4655 1.74545 11.43 0.818182 9 0.818182C5.39727 0.818182 2.29773 3.70182 1.10449 6.05636L3.96409 7.88441C4.67864 5.79068 6.65536 3.63636 9 3.63636Z" fill="#EA4335"/>
            </g>
          </svg>
          Continue with Google
        </Button>
        <div className="text-sm text-center">
          {form === "signup" ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setForm("login")} className="text-[#00B86B] underline">
                Sign in
              </button>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <button onClick={() => setForm("signup")} className="text-[#00B86B] underline">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
