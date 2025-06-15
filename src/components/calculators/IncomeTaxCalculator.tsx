import React, { useState } from "react";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Layers, Printer, Share2, RefreshCcw } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { toast } from "@/hooks/use-toast";

type RegimeType = "new" | "old";

const ageGroups = [
  { value: "below-60", label: "Below 60 years" },
  { value: "60-80", label: "Senior (60-80 years)" },
  { value: "above-80", label: "Super Senior (Above 80 years)" },
];

const slabDetails = {
  "new": [
    { limit: 300000, percent: 0 },
    { limit: 600000, percent: 5 },
    { limit: 900000, percent: 10 },
    { limit: 1200000, percent: 15 },
    { limit: 1500000, percent: 20 },
    { limit: Infinity, percent: 30 },
  ],
  "old": [
    { limit: 250000, percent: 0 },
    { limit: 500000, percent: 5 },
    { limit: 1000000, percent: 20 },
    { limit: Infinity, percent: 30 },
  ],
};

function calculateTax(income: number, regime: RegimeType, ageGroup: string, deductions: number) {
  let taxableIncome = Math.max(0, income - (regime === "old" ? deductions : 0));
  let totalTax = 0;
  let slabs = regime === "old"
    ? [
        ...(ageGroup === "below-60"
          ? [{ limit: 250000, percent: 0 }]
          : ageGroup === "60-80"
            ? [{ limit: 300000, percent: 0 }]
            : [{ limit: 500000, percent: 0 }]),
        { limit: 500000, percent: 5 },
        { limit: 1000000, percent: 20 },
        { limit: Infinity, percent: 30 },
      ]
    : slabDetails["new"];
  let prevLimit = 0;
  for (const slab of slabs) {
    const slabAmount = Math.min(slab.limit, taxableIncome) - prevLimit;
    if (slabAmount > 0) {
      totalTax += (slabAmount * slab.percent) / 100;
      prevLimit = slab.limit;
    }
    if (taxableIncome <= slab.limit) break;
  }
  // Old regime: rebate u/s 87A for income up to 5L, new regime for 7L (FY2023-24+)
  if (regime === "old" && taxableIncome <= 500000) totalTax = 0;
  if (regime === "new" && taxableIncome <= 700000) totalTax = 0;
  // Add 4% cess
  if (totalTax > 0) totalTax += totalTax * 0.04;
  return { totalTax: Math.round(totalTax), taxableIncome };
}

const FAQS = [
  {
    q: "Which tax regime should I pick?",
    a: (
      <>
        <div>
          The <span className="font-bold text-[#00B86B]">Old Regime</span> suits those with high deductions and investments, while the <span className="font-bold text-[#FFD966]">New Regime</span> has lower rates but very limited deductions.
        </div>
      </>
    ),
  },
  {
    q: "What deductions are allowed?",
    a: "Only the old regime allows claiming most deductions (like 80C, 80D, HRA, etc). The new regime allows only a handful. Choose based on your eligible deductions.",
  },
  {
    q: "Does this calculator guarantee accuracy?",
    a: "No. This calculator gives estimated tax for individual salaried taxpayers based on entered details and known FY2023-24 slabs. For definitive advice, consult a CA or the Income Tax website.",
  },
  {
    q: "What is cess?",
    a: "Cess is a 4% tax levied on the total income tax amount, applicable for both regimes.",
  },
];

function formatNumber(x: number) {
  if (isNaN(x)) return "-";
  return x.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

const IncomeTaxCalculator: React.FC = () => {
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState<RegimeType>("new");
  const [age, setAge] = useState("below-60");
  const [deductions, setDeductions] = useState("");
  const [lastCalc, setLastCalc] = useState<{ tax: number; taxableIncome: number } | null>(null);

  const handleCalc = () => {
    if (!income || isNaN(Number(income)) || Number(income) <= 0) {
      toast({ title: "Invalid income", description: "Please enter a valid annual income." });
      return;
    }
    if (regime === "old" && (isNaN(Number(deductions)) || Number(deductions) < 0)) {
      toast({ title: "Invalid deductions", description: "Deductions must be zero or positive." });
      return;
    }
    const result = calculateTax(Number(income), regime, age, Number(deductions) || 0);
    setLastCalc({ tax: result.totalTax, taxableIncome: result.taxableIncome });
  };

  const handleReset = () => {
    setIncome("");
    setAge("below-60");
    setRegime("new");
    setDeductions("");
    setLastCalc(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Income Tax Estimation",
        text: `Total Tax: ₹${lastCalc ? formatNumber(lastCalc.tax) : "0"} according to the Income Tax Calculator (pineapplehub)`,
        // May want: url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(
        `Total Tax: ₹${lastCalc ? formatNumber(lastCalc.tax) : "0"} (pineapplehub.com)`
      );
      toast({ title: "Copied!", description: "Summary copied to clipboard." });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl px-6 py-10 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#00B86B] text-center mb-3 flex items-center gap-2 justify-center">
        <Layers className="text-[#FFD966]" /> Income Tax Calculator
      </h2>
      <div className="mb-6 text-center text-[#A8982D]">
        Calculate your income tax for FY 2023-24 (AY 2024-25) as per Old & New regime.
      </div>
      <form>
        <div className="space-y-4">
          <FormItem>
            <FormLabel>Annual Gross Income (₹)</FormLabel>
            <FormControl>
              <Input
                inputMode="numeric"
                pattern="[0-9]*"
                value={income}
                placeholder="Enter your total income e.g. 1200000"
                onChange={e =>
                  /^\d*$/.test(e.target.value) ? setIncome(e.target.value) : undefined
                }
                autoFocus
              />
            </FormControl>
            <FormDescription>
              Salary, interest, rent, business etc. Use pre-tax value before deductions.
            </FormDescription>
          </FormItem>
          <FormItem>
            <FormLabel>Age Group</FormLabel>
            <Select value={age} onValueChange={setAge}>
              <SelectTrigger>
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
              <SelectContent>
                {ageGroups.map(ag => (
                  <SelectItem key={ag.value} value={ag.value}>{ag.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem>
            <FormLabel>Tax Regime</FormLabel>
            <Select value={regime} onValueChange={v => setRegime(v as RegimeType)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose regime" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New Regime (default)</SelectItem>
                <SelectItem value="old">Old Regime</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          {regime === "old" && (
            <FormItem>
              <FormLabel>Total Deductions (₹)</FormLabel>
              <FormControl>
                <Input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={deductions}
                  placeholder="Claimed under 80C, 80D, HRA, etc"
                  onChange={e =>
                    /^\d*$/.test(e.target.value) ? setDeductions(e.target.value) : undefined
                  }
                />
              </FormControl>
              <FormDescription>
                Sum of all exemptions & deductions (Old regime only)
              </FormDescription>
            </FormItem>
          )}
          <div className="flex flex-col md:flex-row gap-3 mt-2 items-center justify-center">
            <Button onClick={handleCalc} type="button" className="w-full md:w-auto">
              Calculate Tax
            </Button>
            <Button variant="secondary" type="button" onClick={handleReset} className="w-full md:w-auto">
              <RefreshCcw className="mr-2" size={18} /> Reset
            </Button>
            <Button variant="outline" type="button" onClick={handlePrint} className="w-full md:w-auto" aria-label="Print result">
              <Printer size={18} className="mr-1" /> Print
            </Button>
            <Button variant="outline" type="button" onClick={handleShare} className="w-full md:w-auto" aria-label="Share result">
              <Share2 size={18} className="mr-1" /> Share
            </Button>
          </div>
        </div>
      </form>
      {lastCalc && (
        <div className="mt-7 p-5 bg-[#f9f7ee] border border-[#ffe066] rounded-lg text-center shadow">
          <div className="text-lg font-bold text-[#2A2605] mb-2">Estimated Tax Payable</div>
          <div className="text-3xl font-display mb-1 text-[#00B86B]">
            ₹{formatNumber(lastCalc.tax)}
          </div>
          <div className="text-md text-[#937d2c] mb-2">
            Taxable Income: ₹{formatNumber(lastCalc.taxableIncome)}<br />
            (Including cess and regime selected)
          </div>
        </div>
      )}

      <Accordion type="single" collapsible className="mt-8">
        <AccordionItem value="faq">
          <AccordionTrigger className="font-bold text-lg text-[#00B86B] px-2 py-3 bg-[#f6ffe8] rounded-md">FAQs</AccordionTrigger>
          <AccordionContent className="mt-3 px-2">
            <ul className="space-y-4">
              {FAQS.map((qna, idx) => (
                <li key={idx}>
                  <div className="font-semibold">{qna.q}</div>
                  <div className="text-[#74660c]">{qna.a}</div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-7 text-xs text-center text-muted-foreground">
        For latest rules, always verify with ITD. Consult a CA for personalized advice.<br/>
        Calculator by <a href="/" className="text-[#FFD966] hover:underline">PineappleHub 🍍</a>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
