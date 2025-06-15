
import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Helpers
function formatCurrency(amount: number) {
  if (isNaN(amount)) return "-";
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
}

// Calculation logic
function calculateNps({
  age,
  retirementAge,
  investment,
  expectedReturn,
  annuityPercent,
  annuityRate,
}) {
  // Parameters
  const tenure = retirementAge - age;
  const n = tenure * 12;
  const monthlyRate = expectedReturn / 12 / 100;
  const annuityFraction = annuityPercent / 100;

  // Calculate corpus at retirement
  const corpus =
    investment *
    (((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate));

  // Minimum 40% into annuity (monthly pension), rest is lump sum withdrawal
  const pensionBuyAmount = corpus * annuityFraction;
  const lumpSum = corpus * (1 - annuityFraction);
  // Annual pension based on annuity rate
  const annualPension = pensionBuyAmount * (annuityRate / 100);

  return {
    corpus,
    lumpSum,
    pensionBuyAmount,
    annualPension,
    tenure,
    n,
  };
}

const FAQS = [
  {
    q: "What is NPS?",
    a: "The National Pension System (NPS) is a government-sponsored retirement savings scheme in India."
  },
  {
    q: "How is the projected pension calculated?",
    a: "At retirement, a portion of the corpus is used to buy an annuity, which provides a regular pension. The pension is estimated using your selected annuity rate."
  },
  {
    q: "Is withdrawal tax-free?",
    a: "Up to 60% of the corpus withdrawn as lump sum is tax-free. The annuity/pension is taxable as per your income slab."
  }
];

const DEFAULTS = {
  age: 30,
  retirementAge: 60,
  investment: 5000,
  expectedReturn: 10,
  annuityPercent: 40,
  annuityRate: 6.5
};

export default function NpsCalculatorPage() {
  // Inputs
  const [age, setAge] = useState(DEFAULTS.age.toString());
  const [retirementAge, setRetirementAge] = useState(DEFAULTS.retirementAge.toString());
  const [investment, setInvestment] = useState(DEFAULTS.investment.toString());
  const [expectedReturn, setExpectedReturn] = useState(DEFAULTS.expectedReturn.toString());
  const [annuityPercent, setAnnuityPercent] = useState(DEFAULTS.annuityPercent.toString());
  const [annuityRate, setAnnuityRate] = useState(DEFAULTS.annuityRate.toString());
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Validation and parsed values
  const parsedAge = Number(age);
  const parsedRetirementAge = Number(retirementAge);
  const parsedInvestment = Number(investment);
  const parsedExpectedReturn = Number(expectedReturn);
  const parsedAnnuityPercent = Number(annuityPercent);
  const parsedAnnuityRate = Number(annuityRate);

  // Simple validations
  React.useEffect(() => {
    if (!touched) return setError(null);
    if (
      isNaN(parsedAge) || parsedAge < 18 || parsedAge > 60
    ) return setError("Enter a valid current age (18–60)");
    if (
      isNaN(parsedRetirementAge) ||
      parsedRetirementAge <= parsedAge ||
      parsedRetirementAge > 70
    ) return setError("Retirement age must be greater than current age and ≤ 70.");
    if (
      isNaN(parsedInvestment) ||
      parsedInvestment < 500 ||
      parsedInvestment > 200000
    ) return setError("Investment amount must be ₹500 to ₹2,00,000 per month.");
    if (
      isNaN(parsedExpectedReturn) ||
      parsedExpectedReturn < 4 ||
      parsedExpectedReturn > 15
    ) return setError("Annual return should be 4%–15%.");
    if (
      isNaN(parsedAnnuityPercent) ||
      parsedAnnuityPercent < 40 ||
      parsedAnnuityPercent > 80
    ) return setError("Annuity allocation (pension) should be 40%–80%.");
    if (
      isNaN(parsedAnnuityRate) ||
      parsedAnnuityRate < 4 ||
      parsedAnnuityRate > 8
    ) return setError("Annuity interest rate should be 4%–8%.");
    setError(null);
  }, [
    age, retirementAge, investment, expectedReturn, annuityPercent, annuityRate, touched,
    parsedAge, parsedRetirementAge, parsedInvestment, parsedExpectedReturn, parsedAnnuityPercent, parsedAnnuityRate
  ]);

  // Result
  const result = useMemo(() => {
    if (
      error ||
      !parsedAge || !parsedRetirementAge || !parsedInvestment || !parsedExpectedReturn ||
      !parsedAnnuityPercent || !parsedAnnuityRate
    ) return null;
    return calculateNps({
      age: parsedAge,
      retirementAge: parsedRetirementAge,
      investment: parsedInvestment,
      expectedReturn: parsedExpectedReturn,
      annuityPercent: parsedAnnuityPercent,
      annuityRate: parsedAnnuityRate
    });
  }, [
    parsedAge, parsedRetirementAge, parsedInvestment, parsedExpectedReturn, parsedAnnuityPercent, parsedAnnuityRate, error
  ]);

  const handleReset = () => {
    setAge(DEFAULTS.age.toString());
    setRetirementAge(DEFAULTS.retirementAge.toString());
    setInvestment(DEFAULTS.investment.toString());
    setExpectedReturn(DEFAULTS.expectedReturn.toString());
    setAnnuityPercent(DEFAULTS.annuityPercent.toString());
    setAnnuityRate(DEFAULTS.annuityRate.toString());
    setTouched(false);
    setError(null);
    setShowResult(false);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (error) {
      toast({ title: "Fix the errors above before calculating!" });
      setShowResult(false);
      return;
    }
    setShowResult(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl border px-8 py-10 border-[#ffe066] shadow-2xl animate-fade-in mx-auto">
          <h1 className="text-2xl font-bold text-[#00B86B] mb-2">NPS Calculator</h1>
          <form autoComplete="off" onSubmit={handleCalculate} className="flex flex-col gap-5 mt-2">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Label htmlFor="age">Your Age</Label>
                <Input
                  type="number"
                  id="age"
                  min={18}
                  max={60}
                  placeholder="30"
                  value={age}
                  onChange={e => { setAge(e.target.value); setTouched(true); }}
                  className="rounded-xl px-4 text-lg bg-[#FFF9EC] border-[#dde28f] focus:ring-[#00B86B]"
                  required
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="retirement-age">Retirement Age</Label>
                <Input
                  type="number"
                  id="retirement-age"
                  min={parsedAge + 1}
                  max={70}
                  placeholder="60"
                  value={retirementAge}
                  onChange={e => { setRetirementAge(e.target.value); setTouched(true); }}
                  className="rounded-xl px-4 text-lg bg-[#FFF9EC] border-[#dde28f] focus:ring-[#00B86B]"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="investment">Monthly Investment Amount</Label>
              <Input
                type="number"
                id="investment"
                min={500}
                step={100}
                max={200000}
                placeholder="5000"
                value={investment}
                onChange={e => { setInvestment(e.target.value); setTouched(true); }}
                className="rounded-xl px-4 text-lg bg-[#FFF9EC] border-[#dde28f] focus:ring-[#00B86B]"
                required
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Label htmlFor="expected-return">Expected Return (% p.a.)</Label>
                <Input
                  type="number"
                  id="expected-return"
                  min={4}
                  max={15}
                  step={0.01}
                  placeholder="10"
                  value={expectedReturn}
                  onChange={e => { setExpectedReturn(e.target.value); setTouched(true); }}
                  className="rounded-xl px-4 text-lg bg-[#FFF9EC] border-[#dde28f] focus:ring-[#00B86B]"
                  required
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="annuity-percent">Annuity Allocation (%)</Label>
                <Input
                  type="number"
                  id="annuity-percent"
                  min={40}
                  step={1}
                  max={80}
                  placeholder="40"
                  value={annuityPercent}
                  onChange={e => { setAnnuityPercent(e.target.value); setTouched(true); }}
                  className="rounded-xl px-4 text-lg bg-[#FFF9EC] border-[#dde28f] focus:ring-[#00B86B]"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="annuity-rate">Annuity Interest Rate (% p.a.)</Label>
              <Input
                type="number"
                id="annuity-rate"
                min={4}
                step={0.01}
                max={8}
                placeholder="6.5"
                value={annuityRate}
                onChange={e => { setAnnuityRate(e.target.value); setTouched(true); }}
                className="rounded-xl px-4 text-lg bg-[#FFF9EC] border-[#dde28f] focus:ring-[#00B86B]"
                required
              />
            </div>
            {error && (
              <span className="text-sm text-red-500">{error}</span>
            )}
            <div className="flex gap-3 mt-1">
              <Button
                type="submit"
                className="rounded-xl shadow font-semibold px-6 py-2 bg-[#00B86B] text-white hover:bg-[#019b70] transition-all hover-scale"
                disabled={!!error}
              >
                Calculate
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="rounded-xl px-6 py-2 font-medium flex items-center gap-2 ml-2"
              >
                <RefreshCcw className="h-5" /> Reset
              </Button>
              <Button asChild variant="outline" className="ml-auto">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </form>
          {showResult && result && !error && (
            <div className="mt-7 p-5 rounded-2xl bg-[#FAF9E3] text-[#3B4D17] font-medium shadow ring-4 ring-[#00B86B]/10 animate-fade-in transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-xl text-[#00B86B]">Result at Retirement</span>
              </div>
              <ul className="space-y-1 mb-1">
                <li>
                  <span className="font-semibold text-[#7e8900]">Projected Corpus: </span>
                  {formatCurrency(result.corpus)}
                </li>
                <li>
                  <span className="font-semibold text-[#7e8900]">Lump Sum Withdrawal (up to 60%): </span>
                  {formatCurrency(result.lumpSum)}
                </li>
                <li>
                  <span className="font-semibold text-[#7e8900]">Amount for Annuity (Pension): </span>
                  {formatCurrency(result.pensionBuyAmount)}
                </li>
                <li>
                  <span className="font-semibold text-[#7e8900]">Estimated Annual Pension: </span>
                  {formatCurrency(result.annualPension)}
                  <span className="ml-1 text-sm text-[#8e9800]">({formatCurrency(result.annualPension / 12)} per month)</span>
                </li>
                <li>
                  <span className="font-semibold text-[#7e8900]">Years Invested: </span>
                  {result.tenure} years ({result.n} months)
                </li>
              </ul>
              <div className="mt-2 text-sm text-[#008e66]">
                <b>Tip:</b> NPS corpus is subject to market risk. This tool assumes consistent returns and contribution until retirement.
              </div>
            </div>
          )}
          {!result && touched && !error && (
            <div className="mt-7 bg-[#fffcdb] p-5 rounded-2xl text-[#A8982D] text-base shadow-md">
              Enter values above to see your NPS result.
            </div>
          )}
          {/* FAQ section */}
          <section className="mt-8">
            <h2 className="font-semibold text-lg mb-2 text-[#A8982D]">Frequently Asked Questions</h2>
            <ul className="text-base text-[#5C6C32] space-y-2">
              {FAQS.map(({ q, a }) => (
                <li key={q}>
                  <b>Q:</b> {q} <br />
                  <b>A:</b> {a}
                </li>
              ))}
            </ul>
          </section>
          <div className="mt-6 text-xs text-[#A96907]">
            <b>Disclaimer:</b> This NPS calculator is for estimation only. Actual returns depend on scheme performance and fund house policies. Always consult an advisor for your retirement plan.
          </div>
        </div>
      </div>
    </div>
  );
}
