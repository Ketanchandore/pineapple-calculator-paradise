
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Share2, RefreshCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Currency options
const currencyOptions = [
  { label: "INR ₹", value: "INR" },
  { label: "USD $", value: "USD" },
  { label: "EUR €", value: "EUR" },
];

// Tenure units and withdrawal frequencies
const termUnits = [
  { label: "Months", value: "months" },
  { label: "Years", value: "years" },
];
const frequencyOptions = [
  { label: "Monthly", value: "monthly", divisor: 12 },
  { label: "Quarterly", value: "quarterly", divisor: 4 },
  { label: "Yearly", value: "yearly", divisor: 1 },
];

// Currency formatter
function formatCurrency(amount: number, currency: string) {
  if (isNaN(amount)) return "";
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}

// SWP Maturity calculation logic
/**
 * @param principal Initial investment
 * @param withdrawal Withdrawal amount each period
 * @param rate Expected annual return (in percent, e.g., 8 for 8%)
 * @param months How many months the SWP runs
 * @param freqPerYear Withdrawal frequency (times per year)
 * Returns final corpus + details
 */
function calculateSWP(
  principal: number,
  withdrawal: number,
  rate: number,
  months: number,
  freqPerYear: number
) {
  if (!principal || !withdrawal || !rate || !months || !freqPerYear) return null;
  const periods = Math.floor(months / (12 / freqPerYear));
  const periodRate = Math.pow(1 + rate / 100, 1 / freqPerYear) - 1;
  let corpus = principal;
  let totalWithdrawn = 0;
  let details: { period: number, withdrawal: number, interest: number, balance: number }[] = [];
  for (let i = 1; i <= periods; ++i) {
    const interest = corpus * periodRate;
    corpus += interest;
    let withdrawnThis = corpus >= withdrawal ? withdrawal : corpus;
    corpus -= withdrawnThis;
    totalWithdrawn += withdrawnThis;
    details.push({
      period: i,
      withdrawal: withdrawnThis,
      interest,
      balance: corpus,
    });
    if (corpus <= 0) {
      corpus = 0;
      break;
    }
  }
  return {
    finalCorpus: corpus,
    totalWithdrawn,
    totalInterest: details.reduce((sum, d) => sum + d.interest, 0),
    periods: details.length,
    schedule: details,
  };
}

const FAQS = [
  {
    q: "What is a SWP Calculator?",
    a: "A SWP (Systematic Withdrawal Plan) Calculator estimates how regular withdrawals from an investment impact the remaining balance, factoring compounding returns.",
  },
  {
    q: "How does the calculator work?",
    a: "Enter your initial investment, withdrawal, expected returns, and tenure. The calculator shows how long your funds last and the final corpus.",
  },
  {
    q: "Can I choose withdrawal frequency?",
    a: "Yes. Switch between monthly, quarterly, or yearly withdrawals.",
  },
];

export default function SWPCalculator() {
  // Inputs
  const [currency, setCurrency] = useState("INR");
  const [principal, setPrincipal] = useState("");
  const [withdrawal, setWithdrawal] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [termUnit, setTermUnit] = useState("years");
  const [frequency, setFrequency] = useState("monthly");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [anim, setAnim] = useState(false);

  // Parse/format fields
  const parsedPrincipal = Number(principal.replace(/,/g, ""));
  const parsedWithdrawal = Number(withdrawal.replace(/,/g, ""));
  const parsedRate = Number(rate.replace(/,/g, ""));
  let parsedTerm = Number(term.replace(/,/g, ""));
  let displayTermMonths = termUnit === "months" ? parsedTerm : parsedTerm * 12;
  const freqPerYear = frequencyOptions.find((f) => f.value === frequency)?.divisor ?? 12;

  // Validation
  useEffect(() => {
    if (!principal && !withdrawal && !rate && !term) return setError(null);
    if (parsedPrincipal <= 0 || isNaN(parsedPrincipal)) return setError("Enter a valid initial investment.");
    if (parsedWithdrawal <= 0 || isNaN(parsedWithdrawal)) return setError("Enter a valid periodic withdrawal.");
    if (parsedRate < 0 || parsedRate > 50 || isNaN(parsedRate)) return setError("Enter a valid annual return rate.");
    if (parsedTerm <= 0 || isNaN(parsedTerm) || displayTermMonths > 1200) return setError("Enter a valid tenure.");
    setError(null);
  }, [principal, withdrawal, rate, term, termUnit, frequency]);

  // Results
  const swpResult =
    !error &&
    parsedPrincipal &&
    parsedWithdrawal &&
    parsedRate >= 0 &&
    parsedTerm
      ? calculateSWP(parsedPrincipal, parsedWithdrawal, parsedRate, displayTermMonths, freqPerYear)
      : null;

  // Animation trigger
  const triggerAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 700);
  };

  // Actions
  const handleReset = () => {
    setPrincipal("");
    setWithdrawal("");
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
      <h1 className="text-2xl font-bold text-[#00B86B] dark:text-[#FFE066] mb-3">SWP Calculator</h1>
      <form
        className="flex flex-col gap-5"
        onSubmit={e => { e.preventDefault(); triggerAnim(); }}
        autoComplete="off"
      >
        {/* Currency */}
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
        {/* Principal */}
        <div>
          <Label htmlFor="principal">Initial Investment</Label>
          <Input
            id="principal"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 1,00,000"
            value={principal}
            onChange={e => { setPrincipal(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        {/* Withdrawal */}
        <div>
          <Label htmlFor="withdrawal">Withdrawal Amount (per period)</Label>
          <Input
            id="withdrawal"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 5,000"
            value={withdrawal}
            onChange={e => { setWithdrawal(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        {/* Rate */}
        <div>
          <Label htmlFor="rate">Expected Annual Return Rate <span className="font-normal text-xs">(%)</span></Label>
          <Input
            id="rate"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 8"
            value={rate}
            onChange={e => { setRate(e.target.value.replace(/[^0-9.]/g, "")); setTouched(true); }}
            className="rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#181d16] border-[#dde28f] focus:ring-[#00B86B]"
            required
          />
        </div>
        {/* Tenure + Frequency */}
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Label htmlFor="term">Investment Tenure</Label>
            <Input
              id="term"
              type="text"
              inputMode="decimal"
              placeholder={termUnit === "years" ? "e.g. 5" : "e.g. 60"}
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
          <div>
            <Label className="sr-only">Withdrawal Frequency</Label>
            <select
              className="rounded-2xl border border-[#ffe066] bg-[#fff9e2] dark:bg-[#232300] text-[#5C6C32] px-2 py-2 focus:ring-[#00B86B]"
              value={frequency}
              onChange={e => setFrequency(e.target.value)}
              aria-label="Withdrawal Frequency"
            >
              {frequencyOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
        {error && <span className="text-sm text-red-500 -mt-3">{error}</span>}
        {/* Action Buttons */}
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
      {/* Results */}
      {swpResult && !error && (
        <div
          className={cn(
            "mt-6 text-lg font-semibold text-[#3B4D17] dark:text-[#F9FFCA] bg-[#FAF9E3] dark:bg-[#222610] p-5 rounded-2xl shadow animate-fade-in transition-all",
            anim && "ring-4 ring-[#00B86B]/40"
          )}
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="text-lg font-bold text-[#00B86B] dark:text-[#FFE066]">SWP Result:</span>
          </div>
          <ul className="text-base space-y-1">
            <li><b>Total Periods (Withdrawals):</b> {swpResult.periods}</li>
            <li><b>Total Withdrawn:</b> {formatCurrency(swpResult.totalWithdrawn, currency)}</li>
            <li><b>Total Interest Earned:</b> {formatCurrency(swpResult.totalInterest, currency)}</li>
            <li><b>Final Corpus Left:</b> {formatCurrency(swpResult.finalCorpus, currency)}</li>
          </ul>
          <div className="text-sm mt-3 text-[#019b70] dark:text-[#eaf28a]">
            <b>Tip:</b> Withdrawals are processed at the end of each period after adding interest.
          </div>
        </div>
      )}
      {!swpResult && touched && !error && (
        <div className="mt-6 bg-[#fffcdb] dark:bg-[#39331d] rounded-2xl p-5 text-[#A8982D] text-base shadow-md">
          Enter values above to get your SWP calculation instantly!
        </div>
      )}
      {/* Explanation */}
      <section className="mt-8 mb-4">
        <h2 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]" id="how-it-works">
          How does the SWP Calculator work?
        </h2>
        <p className="text-base text-[#4A5B1C] dark:text-[#f0f097] mb-1">
          This calculator helps you plan steady withdrawals from your investments by showing how regular payouts, expected returns, and tenure impact your remaining balance.
        </p>
        <p className="text-sm text-[#84865C]">
          Try different values, frequencies, or currencies to see instant results.
        </p>
      </section>
      {/* Formula */}
      <section className="mb-4">
        <h2 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]">SWP Calculation Formula</h2>
        <div className="text-base text-[#4A5B1C] dark:text-[#f0f097]">
          For each period:<br />
          <span className="font-mono">Corpus<sub>n</sub> = (Corpus<sub>n-1</sub> × (1 + r)) - Withdrawal</span> <br />
          <b>r</b> = (1 + Annual Rate)<sup>1/p</sup> - 1, where <b>p</b> = periods per year.
        </div>
      </section>
      {/* FAQ */}
      <section>
        <h2 className="font-semibold text-lg mb-2 text-[#A8982D] dark:text-[#FFE066]">Frequently Asked Questions</h2>
        <ul className="text-base text-[#5C6C32] dark:text-[#ecfccb] space-y-2">
          {FAQS.map(({ q, a }) => (
            <li key={q}><b>Q:</b> {q} <br /><b>A:</b> {a}</li>
          ))}
        </ul>
      </section>
      <div className="mt-6 text-xs text-[#A96907] dark:text-[#ffe066]">
        <b>Disclaimer:</b> SWP calculator is an estimation tool. Actual returns and withdrawal feasibility vary based on market movements and fund rules.
      </div>
    </div>
  );
}
