import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Share2, RefreshCcw, Calendar, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  weeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

function computeAge(dobString: string): AgeResult | null {
  if (!dobString) return null;
  const birthDate = new Date(dobString);
  if (isNaN(birthDate.getTime())) return null;
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthLen = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLen;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = now.getTime() - birthDate.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const weeks = Math.floor(totalDays / 7);

  return {
    years,
    months,
    days,
    weeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds
  };
}

const AgeCalculator = () => {
  const [dob, setDob] = useState<string>("");
  const [touched, setTouched] = useState(false);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string>("");
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (!dob) {
      setResult(null);
      setError("");
      return;
    }
    if (isNaN(new Date(dob).getTime()) || new Date(dob) > new Date()) {
      setResult(null);
      setError("Please enter a valid date of birth (cannot be future date).");
      return;
    }
    setError("");
    setResult(computeAge(dob));
  }, [dob]);

  const handleCalcAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 800);
  };

  const handleReset = () => {
    setDob("");
    setTouched(false);
    setError("");
    setResult(null);
  };

  const handlePrint = () => window.print();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Share this calculator with friends." });
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent 
                      flex items-center justify-center shadow-glow">
          <Calendar className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-gradient">Online Age Calculator</h2>
          <p className="text-sm text-muted-foreground">Calculate your exact age instantly</p>
        </div>
      </div>

      {/* Form */}
      <form
        className="space-y-5"
        onSubmit={e => { e.preventDefault(); handleCalcAnim(); }}
        autoComplete="off"
      >
        <div className="space-y-2">
          <Label htmlFor="dob" className="text-base font-medium text-foreground">
            Enter your Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            value={dob}
            onChange={e => { setDob(e.target.value); setTouched(true); }}
            onBlur={() => setTouched(true)}
            required
            placeholder="YYYY-MM-DD"
            aria-invalid={!!error}
            className={cn(
              "glass-button border-border/50 h-12 text-lg",
              "focus:ring-2 focus:ring-primary/30 focus:border-primary",
              error && "border-destructive"
            )}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="btn-gradient flex items-center gap-2 touch-target"
            onClick={handleCalcAnim}
            disabled={!dob || !!error}
          >
            <Sparkles className="w-4 h-4" />
            Calculate
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="glass-button px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 
                     hover:bg-muted/50 transition-colors touch-target"
          >
            <RefreshCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-2 
                     hover:bg-muted/50 transition-colors touch-target"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-2 
                     text-primary hover:bg-primary/10 transition-colors touch-target"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Results */}
      {result && !error && (
        <div
          className={cn(
            "mt-8 glass-hero rounded-2xl p-6 animate-scale-in",
            anim && "ring-2 ring-primary/50 shadow-glow"
          )}
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-lg font-display font-bold text-gradient">Your Age</span>
          </div>
          
          {/* Age Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <ResultCard label="Years" value={result.years} />
            <ResultCard label="Months" value={result.months} />
            <ResultCard label="Days" value={result.days} />
            <ResultCard label="Weeks" value={result.weeks} />
          </div>

          {/* Detailed Stats */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
            <div className="text-sm">
              <span className="text-muted-foreground">Total Days:</span>
              <span className="ml-2 font-semibold text-foreground">{result.totalDays.toLocaleString()}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Total Hours:</span>
              <span className="ml-2 font-semibold text-foreground">{result.totalHours.toLocaleString()}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Total Minutes:</span>
              <span className="ml-2 font-semibold text-foreground">{result.totalMinutes.toLocaleString()}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Total Seconds:</span>
              <span className="ml-2 font-semibold text-foreground">{result.totalSeconds.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            ✨ Values are precise up to this very second!
          </p>
        </div>
      )}

      {/* Empty State */}
      {!result && touched && !error && (
        <div className="mt-6 glass-button rounded-2xl p-6 text-center">
          <Calendar className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
          <p className="text-muted-foreground">Enter your date of birth to see your age breakdown</p>
        </div>
      )}

      {/* Disclaimer */}
      <p className="mt-6 text-xs text-muted-foreground text-center">
        <strong>Disclaimer:</strong> For general use only – not medical advice.
      </p>
    </div>
  );
};

const ResultCard: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="glass-card rounded-xl p-4 text-center">
    <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default AgeCalculator;
