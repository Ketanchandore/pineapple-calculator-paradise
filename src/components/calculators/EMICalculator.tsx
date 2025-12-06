import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, Printer, Share2, RefreshCcw, Sparkles, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

function formatCurrency(amount: number, currency: string) {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}

function calculateEMI(principal: number, rate: number, term: number) {
  const monthlyRate = rate / 12 / 100;
  if (monthlyRate === 0) {
    const emi = principal / term;
    return { emi, total: principal, interest: 0 };
  }
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, term) / (Math.pow(1 + monthlyRate, term) - 1);
  const total = emi * term;
  const interest = total - principal;
  return { emi, total, interest };
}

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

export default function EMICalculator() {
  const [currency, setCurrency] = useState("USD");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [termUnit, setTermUnit] = useState("years");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [anim, setAnim] = useState(false);

  const parsedPrincipal = Number(principal.replace(/,/g, ""));
  const parsedRate = Number(rate.replace(/,/g, ""));
  const parsedTerm = Number(term.replace(/,/g, ""));
  const displayTermMonths = termUnit === "months" ? parsedTerm : parsedTerm * 12;

  useEffect(() => {
    if (!principal && !rate && !term) return setError(null);
    if (parsedPrincipal <= 0 || isNaN(parsedPrincipal)) return setError("Enter a valid loan amount.");
    if (parsedRate <= 0 || parsedRate > 100 || isNaN(parsedRate)) return setError("Enter a valid interest rate.");
    if (parsedTerm <= 0 || isNaN(parsedTerm) || displayTermMonths > 600) return setError("Enter a valid loan tenure.");
    setError(null);
  }, [principal, rate, term, termUnit]);

  const emiResult = (!error && parsedPrincipal && parsedRate && parsedTerm)
    ? calculateEMI(parsedPrincipal, parsedRate, displayTermMonths)
    : null;

  const triggerAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 700);
  };

  const handleReset = () => {
    setPrincipal("");
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
          <Wallet className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-gradient">EMI Calculator</h2>
          <p className="text-sm text-muted-foreground">Calculate loan EMI instantly</p>
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

        {/* Loan Amount */}
        <div className="space-y-2">
          <Label htmlFor="principal" className="text-base font-medium">Loan Amount</Label>
          <Input
            id="principal"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 500,000"
            value={principal}
            onChange={e => { setPrincipal(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <Label htmlFor="rate" className="text-base font-medium">
            Interest Rate <span className="text-muted-foreground text-sm">(% per year)</span>
          </Label>
          <Input
            id="rate"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 7.5"
            value={rate}
            onChange={e => { setRate(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Loan Tenure */}
        <div className="space-y-2">
          <Label htmlFor="term" className="text-base font-medium">Loan Tenure</Label>
          <div className="flex gap-3">
            <Input
              id="term"
              type="text"
              inputMode="decimal"
              placeholder={termUnit === "years" ? "e.g. 20" : "e.g. 240"}
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
            disabled={!!error || !principal || !rate || !term}
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
      {emiResult && !error && (
        <div className={cn(
          "mt-8 glass-hero rounded-2xl p-6 animate-scale-in",
          anim && "ring-2 ring-primary/50 shadow-glow"
        )}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-lg font-display font-bold text-gradient">EMI Result</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                {formatCurrency(emiResult.emi, currency)}
              </div>
              <div className="text-sm text-muted-foreground">Monthly EMI</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-display font-bold text-foreground">
                {formatCurrency(emiResult.total, currency)}
              </div>
              <div className="text-sm text-muted-foreground">Total Payment</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-display font-bold text-accent">
                {formatCurrency(emiResult.interest, currency)}
              </div>
              <div className="text-sm text-muted-foreground">Total Interest</div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            Principal: {formatCurrency(parsedPrincipal, currency)} + Interest: {formatCurrency(emiResult.interest, currency)}
          </div>
        </div>
      )}

      {!emiResult && touched && !error && (
        <div className="mt-6 glass-button rounded-2xl p-6 text-center">
          <Wallet className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
          <p className="text-muted-foreground">Enter loan details to calculate EMI</p>
        </div>
      )}

      <p className="mt-6 text-xs text-muted-foreground text-center">
        <strong>Disclaimer:</strong> EMI calculation is for guidance only. Consult your lender for exact details.
      </p>
    </div>
  );
}
