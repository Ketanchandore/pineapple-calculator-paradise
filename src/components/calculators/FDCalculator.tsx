
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Info, Printer, Share2, Loader2, RotateCcw } from "lucide-react";

type FrequencyOption = {
  label: string;
  value: number;
};
const frequencies: FrequencyOption[] = [
  { label: "Annually", value: 1 },
  { label: "Half-Yearly", value: 2 },
  { label: "Quarterly", value: 4 },
  { label: "Monthly", value: 12 }
];
const currencyList = [
  { label: "₹ INR", symbol: "₹" },
  { label: "$ USD", symbol: "$" },
  { label: "€ EUR", symbol: "€" },
];

function calculateFD(principal: number, rate: number, tenure: number, freq: number) {
  const r = rate / (100 * freq);
  const n = freq * tenure;
  const amount = principal * Math.pow(1 + r, n);
  const interest = amount - principal;
  return {
    maturityAmount: Number(amount.toFixed(2)),
    interestEarned: Number(interest.toFixed(2))
  };
}

const FDCalculator = () => {
  const [principal, setPrincipal] = useState<number | "">("");
  const [rate, setRate] = useState<number | "">("");
  const [tenure, setTenure] = useState<number | "">("");
  const [frequency, setFrequency] = useState<number>(1);
  const [currency, setCurrency] = useState(currencyList[0].symbol);
  const [result, setResult] = useState<{maturityAmount: number; interestEarned: number} | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!principal || principal <= 0 || !rate || rate <= 0 || !tenure || tenure <= 0) {
      toast({ title: "Please enter valid investment details." });
      setResult(null);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const res = calculateFD(Number(principal), Number(rate), Number(tenure), Number(frequency));
      setResult(res);
      setLoading(false);
    }, 400); // simulate some calculation/loading time
  };

  const handleReset = () => {
    setPrincipal("");
    setRate("");
    setTenure("");
    setFrequency(1);
    setCurrency(currencyList[0].symbol);
    setResult(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "FD Calculator Result",
        text: `Maturity Amount: ${currency} ${(result?.maturityAmount ?? "").toLocaleString()}\nInterest Earned: ${currency} ${(result?.interestEarned ?? "").toLocaleString()}`
      });
    } else {
      toast({ title: "Sharing not supported in this browser." });
    }
  };

  const getCurrencyLabel = (symbol: string) => {
    return currencyList.find(c => c.symbol === symbol)?.label ?? symbol;
  };

  return (
    <Card className="max-w-xl mx-auto border border-[#F7E572] shadow-lg bg-white dark:bg-[#232300] animate-fade-in">
      <CardContent className="px-6 py-7">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
          <div className="grid sm:grid-cols-2 gap-2 items-end">
            <div>
              <Label htmlFor="principal">Principal Amount</Label>
              <div className="flex gap-2">
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="max-w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyList.map(cur => (
                      <SelectItem key={cur.label} value={cur.symbol}>
                        {cur.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="principal"
                  type="number"
                  min={1}
                  placeholder="Amount"
                  value={principal}
                  onChange={e => setPrincipal(Number(e.target.value))}
                  required
                  className="flex-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="rate">Annual Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                min={0.01}
                step="0.01"
                value={rate}
                placeholder="e.g. 7.25"
                onChange={e => setRate(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2 items-end">
            <div>
              <Label htmlFor="tenure">Tenure (years)</Label>
              <Input
                id="tenure"
                type="number"
                min={1}
                value={tenure}
                placeholder="Years"
                onChange={e => setTenure(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <Label htmlFor="frequency">Compounding Frequency</Label>
              <Select value={String(frequency)} onValueChange={val => setFrequency(Number(val))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {frequencies.map(f => (
                    <SelectItem key={f.label} value={String(f.value)}>
                      {f.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-3 mt-1 flex-wrap">
            <Button disabled={loading} type="submit" className="gap-1">
              {loading && <Loader2 className="animate-spin w-4 h-4" />}
              Calculate
            </Button>
            <Button type="button" onClick={handleReset} variant="outline" className="gap-1">
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button type="button" onClick={handlePrint} variant="ghost" className="gap-1">
              <Printer className="w-4 h-4" />
              Print
            </Button>
            <Button type="button" onClick={handleShare} variant="ghost" className="gap-1">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </form>

        <div className="my-6">
          <div className="flex items-start gap-2 mb-1">
            <Info className="w-5 h-5 text-[#00B86B] mt-0.5" />
            <span className="text-sm text-muted-foreground">
              <b>FD (Fixed Deposit)</b> is a low-risk savings plan where you invest a lump sum and earn interest compounded at a certain frequency over time. This calculator helps estimate your maturity amount and total interest for your investment.
            </span>
          </div>
        </div>

        {result && (
          <div
            className="mt-8 text-base bg-[#FAF9E3] dark:bg-[#1c1c00] font-semibold text-[#3B4D17] dark:text-[#b2ffce] p-5 rounded-xl shadow animate-fade-in relative"
          >
            <div className="flex justify-between items-center gap-2 mb-2">
              <span>
                <b className="text-[#849248]">Maturity Amount:</b>
              </span>
              <span className="text-2xl font-bold text-[#00B86B]">
                {currency} {result.maturityAmount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center gap-2 mb-2">
              <span>
                <b>Total Interest Earned:</b>
              </span>
              <span className="text-lg font-bold text-[#3B4D17] dark:text-[#b2ffce]">
                {currency} {result.interestEarned.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>
                <b>Principal Invested:</b>
              </span>
              <span>
                {currency} {Number(principal).toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="pt-8">
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer select-none">What is a Fixed Deposit?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              A Fixed Deposit (FD) is a financial instrument provided by banks which gives investors a higher rate of interest than a regular savings account, until the given maturity date.
            </div>
          </details>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer select-none">How is FD interest calculated?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              FD interest is compounded at the chosen frequency (annually, quarterly, etc) using the formula: <br />
              <span className="font-mono">A = P (1 + r/n)<sup>nt</sup></span><br />
              where:
              <ul className="list-disc pl-5">
                <li><b>P</b> = Principal</li>
                <li><b>r</b> = Interest Rate (decimal)</li>
                <li><b>n</b> = Compounding Frequency</li>
                <li><b>t</b> = Tenure (in years)</li>
              </ul>
            </div>
          </details>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer select-none">Are there taxes on FD returns?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              <b>Yes</b>, FD interest is taxable as per your income tax slab. TDS might be deducted by the bank if interest exceeds the exemption limit.
            </div>
          </details>
        </div>
      </CardContent>
    </Card>
  );
};

export default FDCalculator;

