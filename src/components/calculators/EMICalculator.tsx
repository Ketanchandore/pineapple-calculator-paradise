
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Share2, RefreshCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Mini utility for currency formatting
function formatCurrency(amount: number, currency: string) {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}

// -- EMI Calculation Logic --
function calculateEMI(principal: number, rate: number, term: number): { emi: number; total: number; interest: number } {
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

// FAQ Data
const FAQS = [
  {
    q: "What is EMI?",
    a: "EMI stands for Equated Monthly Installment. It's the fixed payment you make every month towards a loan, covering both principal and interest."
  },
  {
    q: "How is EMI calculated?",
    a: "EMI is calculated using the principal amount, interest rate, and tenure. Our calculator uses the standard reducing balance EMI formula."
  },
  {
    q: "Can I compare different loan terms?",
    a: "Yes. You can change the loan amount, rate or term and all results update instantly—no page reloads needed."
  }
];

const currencyOptions = [
  { label: "INR ₹", value: "INR" },
  { label: "USD $", value: "USD" },
  { label: "EUR €", value: "EUR" },
  // Add more if needed
];

const termUnits = [
  { label: "Months", value: "months" },
  { label: "Years", value: "years" }
];

function convertTerm(input: number, from: string, to: string) {
  if (from === to) return input;
  if (from === "years" && to === "months") return input * 12;
  if (from === "months" && to === "years") return input / 12;
  return input;
}

export default function EMICalculator() {
  // Inputs
  const [currency, setCurrency] = useState("INR");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [termUnit, setTermUnit] = useState("years");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [anim, setAnim] = useState(false);

  // Results
  const parsedPrincipal = Number(principal.replace(/,/g, ""));
  const parsedRate = Number(rate.replace(/,/g, ""));
  let parsedTerm = Number(term.replace(/,/g, ""));

  let displayTermMonths = termUnit === "months" ? parsedTerm : parsedTerm * 12;

  // Validation
  useEffect(() => {
    if (!principal && !rate && !term) return setError(null);
    if (parsedPrincipal <= 0 || isNaN(parsedPrincipal)) return setError("Enter a valid principal amount.");
    if (parsedRate <= 0 || parsedRate > 100 || isNaN(parsedRate)) return setError("Enter a valid annual interest rate.");
    if (parsedTerm <= 0 || isNaN(parsedTerm) || displayTermMonths > 1200) return setError("Enter a valid loan tenure.");
    setError(null);
  }, [principal, rate, term, termUnit]);

  // Result
  const emiResult = (!error && parsedPrincipal && parsedRate && parsedTerm)
    ? calculateEMI(parsedPrincipal, parsedRate, displayTermMonths)
    : null;

  // Animation
  const triggerAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 700);
  };

  // Actions
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
    toast({ title: "Link copied!", description: "You can share this calculator with others." });
  };

  // Term input handling (unit conversion + masking)
  const handleTermChange = (val: string) => {
    setTerm(val.replace(/[^0-9.]/g, ""));
    setTouched(true);
  };

  // UI
  return (
    <div className="bg-white dark:bg-[#222610] rounded-2xl shadow-2xl border border-[#ffe066] p-6 max-w-xl mx-auto animate-fade-in">
      <h1 className="text-2xl font-bold text-[#00B86B] dark:text-[#FFE066] mb-3">EMI Calculator</h1>
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
          <Label htmlFor="principal">Loan Amount</Label>
          <Input
            id="principal"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 5,00,000"
            value={principal}
            onChange={e => { setPrincipal(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        <div>
          <Label htmlFor="rate">Interest Rate <span className="font-normal text-xs">(per annum, %)</span></Label>
          <Input
            id="rate"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 7.5"
            value={rate}
            onChange={e => { setRate(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Label htmlFor="term">Loan Tenure</Label>
            <Input
              id="term"
              type="text"
              inputMode="decimal"
              placeholder={termUnit === "years" ? "e.g. 20" : "e.g. 240"}
              value={term}
              onChange={e => handleTermChange(e.target.value)}
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
      {/* Results */}
      <div className="h-3" />
      {emiResult && !error && (
        <div
          className={cn(
            "mt-6 text-lg font-semibold text-[#3B4D17] dark:text-[#F9FFCA] bg-[#FAF9E3] dark:bg-[#222610] p-5 rounded-2xl shadow animate-fade-in transition-all",
            anim && "ring-4 ring-[#00B86B]/40"
          )}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg font-bold text-[#00B86B] dark:text-[#FFE066]">EMI Result:</span>
          </div>
          <ul className="text-base space-y-1">
            <li><b>Monthly EMI:</b> {formatCurrency(emiResult.emi, currency)}</li>
            <li><b>Total Repayment Amount:</b> {formatCurrency(emiResult.total, currency)}</li>
            <li><b>Total Interest Payable:</b> {formatCurrency(emiResult.interest, currency)}</li>
            <li>
              <b>Breakup:</b> {formatCurrency(parsedPrincipal, currency)} (Principal) + {formatCurrency(emiResult.interest, currency)} (Interest)
            </li>
          </ul>
          <div className="text-sm mt-3 text-[#019b70] dark:text-[#eaf28a]">
            <b>Tip:</b> EMIs are rounded to the nearest paisa/cent for your convenience.
          </div>
        </div>
      )}
      {!emiResult && touched && !error && (
        <div className="mt-6 bg-[#fffcdb] dark:bg-[#39331d] rounded-2xl p-5 text-[#A8982D] text-base shadow-md">
          Enter values above to get your EMI result instantly!
        </div>
      )}

      {/* How it Works */}
      <section className="mt-8 mb-4">
        <h2 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]" id="how-it-works">How does the EMI Calculator work?</h2>
        <p className="text-base text-[#4A5B1C] dark:text-[#f0f097] mb-1">
          This calculator uses the standard EMI formula and gives results as you type. Instantly see monthly installment, total payment, principal and interest split. Try changing currency, tenure or rate for quick what-if analysis.
        </p>
        <p className="text-sm text-[#84865C]">Press <b>Calculate</b> for confirmation, use <b>Reset</b>, <b>Print</b> or <b>Share</b> for more options!</p>
      </section>

      {/* Formula/Explanation */}
      <section className="mb-4">
        <h2 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]">EMI Calculation Formula</h2>
        <div className="text-base text-[#4A5B1C] dark:text-[#f0f097]">
          EMI = [P × r × (1 + r)^n] / [(1 + r)^n – 1] <br />
          <b>P</b> = Principal, <b>r</b> = monthly interest rate (annual rate / 12 / 100), <b>n</b> = number of months.
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
        <b>Disclaimer:</b> EMI calculation is to guide your planning, consult your lender for exact details.
      </div>
    </div>
  );
}
