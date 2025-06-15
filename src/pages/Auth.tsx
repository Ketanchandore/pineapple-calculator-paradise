
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
