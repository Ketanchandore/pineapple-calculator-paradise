
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

type Mode = "sip" | "lumpsum";

const defaultState = {
  mode: "sip" as Mode,
  amount: "",
  years: "",
  rate: "",
};

function calculateLumpSum(principal: number, rate: number, years: number) {
  // compound interest formula
  const n = years;
  const r = rate / 100;
  const corpus = principal * Math.pow(1 + r, n);
  return {
    corpus,
    invested: principal,
    gain: corpus - principal,
    chart: Array.from({ length: n + 1 }, (_, i) => ({
      year: i,
      Value: +(principal * Math.pow(1 + r, i)).toFixed(2),
    })),
  };
}

function calculateSIP(monthly: number, rate: number, years: number) {
  // SIP formula: FV = P * [((1 + r)^n - 1) / r] * (1+r)
  const n = years * 12;
  const r = rate / 100 / 12;
  const corpus =
    monthly * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  const invested = monthly * n;
  // Chart by year
  const chart = Array.from({ length: years + 1 }, (_, i) => {
    const n_i = i * 12;
    const value = n_i === 0
      ? 0
      : monthly * (((Math.pow(1 + r, n_i) - 1) / r) * (1 + r));
    return { year: i, Value: +value.toFixed(2) };
  });
  return {
    corpus,
    invested,
    gain: corpus - invested,
    chart,
  };
}

const MutualFundCalculatorPage = () => {
  const [mode, setMode] = useState<Mode>(defaultState.mode);
  const [amount, setAmount] = useState(defaultState.amount);
  const [years, setYears] = useState(defaultState.years);
  const [rate, setRate] = useState(defaultState.rate);
  const [result, setResult] = useState<{ corpus: number; invested: number; gain: number; chart: { year: number; Value: number }[] } | null>(null);

  const resetForm = () => {
    setMode("sip");
    setAmount("");
    setYears("");
    setRate("");
    setResult(null);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = Number(amount);
    const yrs = Number(years);
    const r = Number(rate);
    if (isNaN(amt) || amt <= 0) {
      toast({ title: "Invalid amount", description: "Please enter a valid amount.", variant: "destructive" });
      return;
    }
    if (isNaN(yrs) || yrs <= 0 || yrs > 50) {
      toast({ title: "Invalid duration", description: "Please enter valid years (1-50).", variant: "destructive" });
      return;
    }
    if (isNaN(r) || r <= 0 || r > 50) {
      toast({ title: "Invalid rate", description: "Enter interest rate between 1-50%.", variant: "destructive" });
      return;
    }
    if (mode === "lumpsum") {
      setResult(calculateLumpSum(amt, r, yrs));
    } else {
      setResult(calculateSIP(amt, r, yrs));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl border px-6 py-10 border-[#ffe066] shadow-2xl animate-fade-in">
          <h1 className="text-2xl font-bold text-[#00B86B] text-center mb-2">Mutual Fund Calculator</h1>
          <p className="text-[#A8982D] text-center mb-6 text-base">Estimate your investment growth with lumpsum or SIP investments in mutual funds.</p>
          <form className="space-y-5" onSubmit={handleCalculate} autoComplete="off">
            <div className="flex gap-2 justify-center mb-1">
              <Button
                type="button"
                variant={mode === "sip" ? "default" : "outline"}
                onClick={() => setMode("sip")}
                className="flex-1"
              >
                SIP
              </Button>
              <Button
                type="button"
                variant={mode === "lumpsum" ? "default" : "outline"}
                onClick={() => setMode("lumpsum")}
                className="flex-1"
              >
                Lump Sum
              </Button>
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#5C6C32]">{mode === "sip" ? "Monthly Investment Amount (₹)" : "Investment Amount (₹)"}</label>
              <Input
                type="number"
                min={0}
                inputMode="decimal"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#5C6C32]">Investment Duration (Years)</label>
              <Input
                type="number"
                min={1}
                max={50}
                value={years}
                onChange={e => setYears(e.target.value)}
                placeholder="e.g. 10"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#5C6C32]">Expected Annual Return (%)</label>
              <Input
                type="number"
                min={1}
                max={50}
                step="any"
                value={rate}
                onChange={e => setRate(e.target.value)}
                placeholder="e.g. 12"
                required
              />
            </div>
            <div className="flex gap-2 mt-3">
              <Button type="submit" className="flex-1 bg-[#00B86B] hover:bg-[#00b86bcc] text-white font-semibold">Calculate</Button>
              <Button type="button" variant="outline" className="flex-1" onClick={resetForm}>Reset</Button>
            </div>
          </form>
          {result && (
            <div className="mt-8 bg-[#f9f7ee] border border-[#ffe066] rounded-lg shadow p-5 text-center">
              <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="font-medium text-[#356C16]">Invested: </span>
                  <span className="font-mono">₹{result.invested.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div>
                  <span className="font-medium text-[#356C16]">Est. Gain: </span>
                  <span className="font-mono">₹{result.gain.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div>
                  <span className="font-medium text-[#356C16]">Corpus: </span>
                  <span className="font-mono">₹{result.corpus.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
              <div className="h-64 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={result.chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tickFormatter={v => (v === 1 ? "1 yr" : `${v} yrs`)} />
                    <YAxis tickFormatter={v => `₹${Math.round(v / 1000)}k`} />
                    <Tooltip formatter={val => `₹${Number(val).toLocaleString()}`} labelFormatter={l => (l === 1 ? "Year 1" : `Year ${l}`)} />
                    <Legend />
                    <Bar dataKey="Value" fill="#00b86b" radius={[8, 8, 0, 0]} name="Projected Value" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundCalculatorPage;
