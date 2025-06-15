
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Share2, RefreshCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Currency and duration options
const currencyOptions = [
  { label: "INR ₹", value: "INR" },
  { label: "USD $", value: "USD" },
  { label: "EUR €", value: "EUR" }
];

const termUnits = [
  { label: "Months", value: "months" },
  { label: "Years", value: "years" }
];

// Simple utility for currency formatting
function formatCurrency(amount: number, currency: string) {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}

// SIP Calculation: Monthly Investment, Rate (Annual %), Tenure (months)
// M = P × [ ( (1 + r)^n - 1 ) / r ] × (1+r)
// M = Maturity value, P = monthly investment, r = monthly rate, n = months
function calculateSIP(monthly: number, rate: number, months: number) {
  const monthlyRate = rate / 12 / 100;
  const n = months;
  if (!monthly || !rate || !months) return null;
  const maturity =
    monthly *
    ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const invested = monthly * n;
  const gain = maturity - invested;
  return {
    maturity,
    invested,
    gain,
  };
}

// FAQ contents
const FAQS = [
  {
    q: "What is a SIP Calculator?",
    a: "A SIP (Systematic Investment Plan) Calculator helps you estimate the maturity amount of periodic investments in mutual funds over time, including gains from compounding."
  },
  {
    q: "How is SIP maturity calculated?",
    a: "SIP maturity is calculated using the monthly investment, annual interest rate, and tenure. The result is the future value of a series of recurring investments."
  },
  {
    q: "Can I compare different scenarios?",
    a: "Yes, you can instantly change the amount, rate, tenure, or currency to see updated results."
  }
];

export default function SIPCalculator() {
  // Inputs
  const [currency, setCurrency] = useState("INR");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [termUnit, setTermUnit] = useState("years");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [anim, setAnim] = useState(false);

  // Calculated and parsed values
  const parsedMonthly = Number(monthly.replace(/,/g, ""));
  const parsedRate = Number(rate.replace(/,/g, ""));
  let parsedTerm = Number(term.replace(/,/g, ""));
  let displayTermMonths = termUnit === "months" ? parsedTerm : parsedTerm * 12;

  // Validation effect
  useEffect(() => {
    if (!monthly && !rate && !term) return setError(null);
    if (parsedMonthly <= 0 || isNaN(parsedMonthly)) return setError("Enter a valid monthly investment.");
    if (parsedRate <= 0 || parsedRate > 60 || isNaN(parsedRate)) return setError("Enter a valid annual interest rate.");
    if (parsedTerm <= 0 || isNaN(parsedTerm) || displayTermMonths > 1200) return setError("Enter a valid investment tenure.");
    setError(null);
  }, [monthly, rate, term, termUnit]);

  // Results
  const sipResult =
    !error && parsedMonthly && parsedRate && parsedTerm
      ? calculateSIP(parsedMonthly, parsedRate, displayTermMonths)
      : null;

  // Animation
  const triggerAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 700);
  };

  // Actions
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
    toast({ title: "Link copied!", description: "You can share this calculator with others." });
  };

  // UI
  return (
    <div className="bg-white dark:bg-[#232300] rounded-2xl shadow-2xl border border-[#ffe066] p-6 max-w-xl mx-auto animate-fade-in">
      <h1 className="text-2xl font-bold text-[#00B86B] dark:text-[#FFE066] mb-3">SIP Calculator</h1>
      <form
        className="flex flex-col gap-5"
        onSubmit={e => { e.preventDefault(); triggerAnim(); }}
        autoComplete="off"
      >
        <div className="flex gap-4 mb-2 items-center">
          <Label className="mr-2">Currency:</Label>
          <div className="flex gap-1">
            {currencyOptions.map(opt => (
              <button
                key={opt.value}
                className={cn(
                  "px-4 py-1 rounded-xl font-semibold border border-[#ffe066] shadow-sm transition-all hover:bg-[#e5fad9] dark:hover:bg-[#373814]",
                  currency === opt.value ? "bg-[#00B86B] text-white dark:bg-[#FFE066] dark:text-[#232300]" : "bg-[#fff9e2] dark:bg-[#232300] text-[#5C6C32]"
                )}
                type="button"
                onClick={() => setCurrency(opt.value)}
                aria-pressed={currency === opt.value}
              >{opt.label}</button>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="monthly">Monthly Investment Amount</Label>
          <Input
            id="monthly"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 5,000"
            value={monthly}
            onChange={e => { setMonthly(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        <div>
          <Label htmlFor="rate">Expected Annual Return Rate <span className="font-normal text-xs">(%)</span></Label>
          <Input
            id="rate"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 12"
            value={rate}
            onChange={e => { setRate(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Label htmlFor="term">Investment Tenure</Label>
            <Input
              id="term"
              type="text"
              inputMode="decimal"
              placeholder={termUnit === "years" ? "e.g. 10" : "e.g. 120"}
              value={term}
              onChange={e => { setTerm(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
              className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
              required
            />
          </div>
          <div>
            <Label className="sr-only">Tenure Unit</Label>
            <select
              className="rounded-2xl border border-[#ffe066] bg-[#fff9e2] dark:bg-[#232300] text-[#5C6C32] px-2 py-2 focus:ring-[#00B86B]"
              value={termUnit}
              onChange={e => setTermUnit(e.target.value)}
              aria-label="Tenure Unit"
            >
              {termUnits.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
        {error && <span className="text-sm text-red-500 -mt-3">{error}</span>}
        <div className="flex gap-3 mt-1">
          <button
            type="submit"
            className="btn-pineapple rounded-2xl shadow font-medium px-6 py-2 transition-all hover-scale"
            onClick={triggerAnim}
            disabled={!!error}
          >Calculate</button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#FFD600]/70 hover:bg-[#F8E474] dark:bg-[#3B420F] dark:text-white rounded-2xl px-6 py-2 font-medium shadow transition-all hover-scale flex items-center gap-2 ml-2"
          >
            <RefreshCcw className="h-5" /> Reset
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="bg-[#fff9e2] hover:bg-[#fff6be] text-[#8e9800] rounded-2xl px-4 py-2 shadow flex items-center gap-2 hover-scale focus:outline-none dark:bg-[#222610] ml-2"
          >
            <Printer className="h-5" /> Print
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="bg-[#d9fffa]/80 rounded-2xl px-4 py-2 text-[#019b70] ml-2 shadow hover:bg-[#acffe2] flex items-center gap-2 hover-scale transition-all"
          >
            <Share2 className="h-5" /> Share
          </button>
        </div>
      </form>
      <div className="h-3" />
      {sipResult && !error && (
        <div
          className={cn(
            "mt-6 text-lg font-semibold text-[#3B4D17] dark:text-[#F9FFCA] bg-[#FAF9E3] dark:bg-[#222610] p-5 rounded-2xl shadow animate-fade-in transition-all",
            anim && "ring-4 ring-[#00B86B]/40"
          )}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg font-bold text-[#00B86B] dark:text-[#FFE066]">SIP Result:</span>
          </div>
          <ul className="text-base space-y-1">
            <li><b>Total Maturity Value:</b> {formatCurrency(sipResult.maturity, currency)}</li>
            <li><b>Total Invested Amount:</b> {formatCurrency(sipResult.invested, currency)}</li>
            <li><b>Total Gains:</b> {formatCurrency(sipResult.gain, currency)}</li>
            <li>
              <b>Breakup:</b> {formatCurrency(sipResult.invested, currency)} (Invested) + {formatCurrency(sipResult.gain, currency)} (Gains)
            </li>
          </ul>
          <div className="text-sm mt-3 text-[#019b70] dark:text-[#eaf28a]">
            <b>Tip:</b> This calculation assumes end-of-period monthly SIP and annual compounding.
          </div>
        </div>
      )}
      {!sipResult && touched && !error && (
        <div className="mt-6 bg-[#fffcdb] dark:bg-[#39331d] rounded-2xl p-5 text-[#A8982D] text-base shadow-md">
          Enter values above to get your SIP result instantly!
        </div>
      )}
      {/* How it Works */}
      <section className="mt-8 mb-4">
        <h2 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]" id="how-it-works">How does the SIP Calculator work?</h2>
        <p className="text-base text-[#4A5B1C] dark:text-[#f0f097] mb-1">
          This calculator helps you estimate the wealth you can accumulate by making regular monthly investments (SIP) in mutual funds, factoring expected returns and compounding. Try different values to see the impact instantly!
        </p>
        <p className="text-sm text-[#84865C]">Press <b>Calculate</b> for confirmation, use <b>Reset</b>, <b>Print</b> or <b>Share</b> for more options!</p>
      </section>
      {/* Formula/Explanation */}
      <section className="mb-4">
        <h2 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]">SIP Calculation Formula</h2>
        <div className="text-base text-[#4A5B1C] dark:text-[#f0f097]">
          SIP Maturity = P × [ ( (1 + r)<sup>n</sup> – 1 ) / r ] × (1 + r)<br />
          <b>P</b> = Monthly Investment, <b>r</b> = Monthly Interest Rate, <b>n</b> = Number of Months.
        </div>
      </section>
      {/* FAQ Section */}
      <section>
        <h2 className="font-semibold text-lg mb-2 text-[#A8982D] dark:text-[#FFE066]">Frequently Asked Questions</h2>
        <ul className="text-base text-[#5C6C32] dark:text-[#ecfccb] space-y-2">
          {FAQS.map(({ q, a }) => (
            <li key={q}><b>Q:</b> {q} <br /><b>A:</b> {a}</li>
          ))}
        </ul>
      </section>
      <div className="mt-6 text-xs text-[#A96907] dark:text-[#ffe066]">
        <b>Disclaimer:</b> SIP calculator is an estimation tool. Actual returns may vary. Consult your fund provider for details.
      </div>
    </div>
  );
}
