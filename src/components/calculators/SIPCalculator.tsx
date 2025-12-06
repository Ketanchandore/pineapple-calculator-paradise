import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Printer, Share2, RefreshCcw, Sparkles, PiggyBank } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const currencyOptions = [
  { label: "₹ INR", value: "INR" },
  { label: "$ USD", value: "USD" },
  { label: "€ EUR", value: "EUR" },
  { label: "£ GBP", value: "GBP" },
  { label: "A$ AUD", value: "AUD" },
];

const termUnits = [
  { label: "Years", value: "years" },
  { label: "Months", value: "months" },
];

function formatCurrency(amount: number, currency: string) {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "USD",
    maximumFractionDigits: 0,
  });
}

function calculateSIP(monthly: number, rate: number, months: number) {
  const monthlyRate = rate / 12 / 100;
  if (!monthly || !rate || !months) return null;
  const maturity = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const invested = monthly * months;
  const gain = maturity - invested;
  return { maturity, invested, gain };
}

export default function SIPCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [termUnit, setTermUnit] = useState("years");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [anim, setAnim] = useState(false);

  const parsedMonthly = Number(monthly.replace(/,/g, ""));
  const parsedRate = Number(rate.replace(/,/g, ""));
  const parsedTerm = Number(term.replace(/,/g, ""));
  const displayTermMonths = termUnit === "months" ? parsedTerm : parsedTerm * 12;

  useEffect(() => {
    if (!monthly && !rate && !term) return setError(null);
    if (parsedMonthly <= 0 || isNaN(parsedMonthly)) return setError("Enter a valid monthly investment.");
    if (parsedRate <= 0 || parsedRate > 50 || isNaN(parsedRate)) return setError("Enter a valid return rate.");
    if (parsedTerm <= 0 || isNaN(parsedTerm) || displayTermMonths > 600) return setError("Enter a valid tenure.");
    setError(null);
  }, [monthly, rate, term, termUnit]);

  const sipResult = (!error && parsedMonthly && parsedRate && parsedTerm)
    ? calculateSIP(parsedMonthly, parsedRate, displayTermMonths)
    : null;

  const triggerAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 700);
  };

  const handleReset = () => {
    setMonthly("");
    setRate("");
    setTerm("");
    setTouched(false);
    setError(null);
  };

  const handlePrint = () => window.print();
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Share this calculator with others." });
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent 
                      flex items-center justify-center shadow-glow">
          <TrendingUp className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-gradient">SIP Calculator</h2>
          <p className="text-sm text-muted-foreground">Calculate investment returns</p>
        </div>
      </div>

      <form onSubmit={e => { e.preventDefault(); triggerAnim(); }} autoComplete="off" className="space-y-5">
        {/* Currency Selection */}
        <div className="flex flex-wrap gap-2">
          {currencyOptions.map(opt => (
            <button
              key={opt.value}
              type="button"
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all touch-target",
                currency === opt.value 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "glass-button hover:bg-primary/10"
              )}
              onClick={() => setCurrency(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Monthly Investment */}
        <div className="space-y-2">
          <Label htmlFor="monthly" className="text-base font-medium">Monthly Investment</Label>
          <Input
            id="monthly"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 5,000"
            value={monthly}
            onChange={e => { setMonthly(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Expected Return */}
        <div className="space-y-2">
          <Label htmlFor="rate" className="text-base font-medium">
            Expected Return <span className="text-muted-foreground text-sm">(% per year)</span>
          </Label>
          <Input
            id="rate"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 12"
            value={rate}
            onChange={e => { setRate(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Investment Period */}
        <div className="space-y-2">
          <Label htmlFor="term" className="text-base font-medium">Investment Period</Label>
          <div className="flex gap-3">
            <Input
              id="term"
              type="text"
              inputMode="decimal"
              placeholder={termUnit === "years" ? "e.g. 10" : "e.g. 120"}
              value={term}
              onChange={e => { setTerm(e.target.value.replace(/[^0-9]/g, "")); setTouched(true); }}
              className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30 flex-1"
            />
            <select
              className="glass-button border-border/50 h-12 px-4 rounded-xl text-foreground focus:ring-2 focus:ring-primary/30"
              value={termUnit}
              onChange={e => setTermUnit(e.target.value)}
            >
              {termUnits.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            className="btn-gradient flex items-center gap-2 touch-target"
            disabled={!!error || !monthly || !rate || !term}
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
          <button type="button" onClick={handlePrint} className="glass-button px-4 py-2.5 rounded-xl touch-target" aria-label="Print">
            <Printer className="w-4 h-4" />
          </button>
          <button type="button" onClick={handleShare} className="glass-button px-4 py-2.5 rounded-xl text-primary touch-target" aria-label="Share">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Results */}
      {sipResult && !error && (
        <div className={cn(
          "mt-8 glass-hero rounded-2xl p-6 animate-scale-in",
          anim && "ring-2 ring-primary/50 shadow-glow"
        )}>
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="w-5 h-5 text-primary" />
            <span className="text-lg font-display font-bold text-gradient">Investment Result</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                {formatCurrency(sipResult.maturity, currency)}
              </div>
              <div className="text-sm text-muted-foreground">Maturity Value</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-display font-bold text-foreground">
                {formatCurrency(sipResult.invested, currency)}
              </div>
              <div className="text-sm text-muted-foreground">Total Invested</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-display font-bold text-accent">
                {formatCurrency(sipResult.gain, currency)}
              </div>
              <div className="text-sm text-muted-foreground">Total Returns</div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            Investment: {formatCurrency(sipResult.invested, currency)} + Returns: {formatCurrency(sipResult.gain, currency)}
          </div>
        </div>
      )}

      {!sipResult && touched && !error && (
        <div className="mt-6 glass-button rounded-2xl p-6 text-center">
          <TrendingUp className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
          <p className="text-muted-foreground">Enter investment details to calculate returns</p>
        </div>
      )}

      <p className="mt-6 text-xs text-muted-foreground text-center">
        <strong>Disclaimer:</strong> SIP returns are estimates. Actual returns may vary based on market conditions.
      </p>
    </div>
  );
}
