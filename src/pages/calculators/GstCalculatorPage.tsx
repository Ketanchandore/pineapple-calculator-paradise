
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Percent, RefreshCcw } from "lucide-react";

const gstRates = [
  { label: "0% (Exempted)", value: "0" },
  { label: "3%", value: "3" },
  { label: "5%", value: "5" },
  { label: "12%", value: "12" },
  { label: "18%", value: "18" },
  { label: "28%", value: "28" },
  { label: "Custom", value: "custom" },
];

type CalcType = "inclusive" | "exclusive";

function calculateGST(amount: number, rate: number, type: CalcType) {
  let gstAmount = 0, net = 0, gross = 0;
  if (type === "inclusive") {
    gstAmount = amount - (amount * 100) / (100 + rate);
    net = amount - gstAmount;
    gross = amount;
  } else {
    gstAmount = (amount * rate) / 100;
    net = amount;
    gross = net + gstAmount;
  }
  return {
    gstAmount,
    net,
    gross,
  };
}

const GstCalculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [rateType, setRateType] = useState<string>("18");
  const [customRate, setCustomRate] = useState<string>("");
  const [calcType, setCalcType] = useState<CalcType>("exclusive");
  const [result, setResult] = useState<{ gstAmount: number; net: number; gross: number } | null>(null);

  const parseRate = () => {
    if (rateType === "custom") {
      const parsed = Number(customRate);
      return isNaN(parsed) ? 0 : parsed;
    }
    return Number(rateType);
  };

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const amt = Number(amount);
    const rate = parseRate();
    if (isNaN(amt) || amt <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than 0.",
        variant: "destructive",
      });
      return;
    }
    if (isNaN(rate) || rate < 0 || rate > 100) {
      toast({
        title: "Invalid GST rate",
        description: "Rate must be between 0 and 100.",
        variant: "destructive",
      });
      return;
    }
    const res = calculateGST(amt, rate, calcType);
    setResult(res);
  };

  const handleReset = () => {
    setAmount("");
    setRateType("18");
    setCustomRate("");
    setCalcType("exclusive");
    setResult(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl px-6 py-10 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#00B86B] text-center mb-3 flex items-center gap-2 justify-center">
        <Percent className="text-[#FFD966]" /> GST Calculator
      </h2>
      <div className="mb-6 text-center text-[#A8982D]">
        Instantly calculate GST amounts, net or gross, for any value and rate.
      </div>
      <form
        onSubmit={handleCalculate}
        className="space-y-6"
        autoComplete="off"
      >
        <div>
          <label className="block mb-1 font-medium text-[#5C6C32]">
            Amount
          </label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            min={0}
            onChange={e => setAmount(e.target.value)}
            step="any"
            required
            inputMode="decimal"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#5C6C32]">
            GST Rate
          </label>
          <Select value={rateType} onValueChange={setRateType}>
            <SelectTrigger>
              <SelectValue placeholder="Select GST rate" />
            </SelectTrigger>
            <SelectContent>
              {gstRates.map(rate => (
                <SelectItem key={rate.value} value={rate.value}>{rate.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {rateType === "custom" && (
            <Input
              type="number"
              className="mt-2"
              min={0}
              max={100}
              step="any"
              placeholder="Custom rate (%)"
              value={customRate}
              onChange={e => setCustomRate(e.target.value)}
              required
            />
          )}
        </div>
        <div>
          <div className="flex gap-3">
            <label className="font-medium text-[#5C6C32]">Calculation Type:</label>
            <Button
              type="button"
              variant={calcType === "exclusive" ? "default" : "outline"}
              onClick={() => setCalcType("exclusive")}
              className="px-4"
            >
              Add GST (Exclusive)
            </Button>
            <Button
              type="button"
              variant={calcType === "inclusive" ? "default" : "outline"}
              onClick={() => setCalcType("inclusive")}
              className="px-4"
            >
              Remove GST (Inclusive)
            </Button>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <Button type="submit" className="w-full bg-[#00B86B] hover:bg-[#00b86bcc] text-white font-semibold">
            Calculate GST
          </Button>
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            className="w-auto flex-shrink-0"
            title="Reset"
          >
            <RefreshCcw className="w-4 h-4 mr-1" /> Reset
          </Button>
        </div>
      </form>
      {result && (
        <div className="mt-8 p-5 bg-[#f9f7ee] border border-[#ffe066] rounded-lg text-center shadow text-[#2A2605]">
          <div>
            <span className="font-medium">GST Amount: </span>
            <span className="font-mono">₹{result.gstAmount.toFixed(2)}</span>
          </div>
          <div>
            <span className="font-medium">Net Amount: </span>
            <span className="font-mono">₹{result.net.toFixed(2)}</span>
          </div>
          <div>
            <span className="font-medium">Gross Amount: </span>
            <span className="font-mono">₹{result.gross.toFixed(2)}</span>
          </div>
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

const GstCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <div className="flex-1 flex items-center justify-center">
      <GstCalculator />
    </div>
  </div>
);

export default GstCalculatorPage;
