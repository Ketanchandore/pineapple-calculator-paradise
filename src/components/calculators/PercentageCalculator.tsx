
import React, { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Percent, Loader2, Printer, Share2, Copy, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Operation =
  | "percentOf"
  | "isWhatPercentOf"
  | "percentChange";

const operationOptions: { label: string; value: Operation; description: string }[] = [
  {
    label: "What is X% of Y?",
    value: "percentOf",
    description: "Find the value that is X percent of Y",
  },
  {
    label: "X is what percent of Y?",
    value: "isWhatPercentOf",
    description: "Find the percentage that X is of Y",
  },
  {
    label: "Percent change from X to Y",
    value: "percentChange",
    description: "Find the percent increase or decrease from X to Y",
  },
];

// Memoized calculation function
const calculate = (op: Operation, a: number, b: number) => {
  switch (op) {
    case "percentOf":
      return (a / 100) * b;
    case "isWhatPercentOf":
      if (b === 0) return NaN;
      return (a / b) * 100;
    case "percentChange":
      if (a === 0) return NaN;
      return ((b - a) / Math.abs(a)) * 100;
    default:
      return NaN;
  }
};

const PercentageCalculator: React.FC = () => {
  const [operation, setOperation] = useState<Operation>("percentOf");
  const [inputA, setInputA] = useState<string>("");
  const [inputB, setInputB] = useState<string>("");
  const [result, setResult] = useState<null | number>(null);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState<string>("");

  // Memoized validation
  const isValid = useMemo(() => {
    if (inputA.trim() === "" || inputB.trim() === "") return false;
    if (isNaN(Number(inputA)) || isNaN(Number(inputB))) return false;
    if (operation !== "isWhatPercentOf" && Number(inputB) === 0) return false;
    return true;
  }, [inputA, inputB, operation]);

  const handleCalculate = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      toast({ title: "Enter valid numbers to calculate." });
      setResult(null);
      setDisplay("");
      return;
    }
    
    setLoading(true);
    // Use requestAnimationFrame for smooth UI updates
    requestAnimationFrame(() => {
      const a = parseFloat(inputA);
      const b = parseFloat(inputB);
      const r = calculate(operation, a, b);
      setResult(r);
      
      // Generate display string
      let exp = "";
      if (operation === "percentOf") {
        exp = `${a}% of ${b} = ${r}`;
      } else if (operation === "isWhatPercentOf") {
        exp = `${a} is ${(isNaN(r) ? "" : r.toFixed(2))}% of ${b}`;
      } else if (operation === "percentChange") {
        if (isNaN(r)) {
          exp = "Not defined (starting value is zero)";
        } else {
          exp = `Percent change from ${a} to ${b} = ${r.toFixed(2)}%`;
        }
      }
      setDisplay(exp);
      setLoading(false);
    });
  }, [inputA, inputB, operation, isValid]);

  const handleReset = useCallback(() => {
    setInputA("");
    setInputB("");
    setResult(null);
    setDisplay("");
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(() => {
    if (navigator.share && display) {
      navigator.share({
        title: "Percentage Calculator Result",
        text: display
      });
    } else if (display) {
      toast({ title: "Result copied!", description: display });
      navigator.clipboard.writeText(display);
    } else {
      toast({ title: "Nothing to share yet." });
    }
  }, [display]);

  const handleCopy = useCallback(() => {
    if (display) {
      navigator.clipboard.writeText(display);
      toast({ title: "Copied to clipboard!", description: display });
    } else {
      toast({ title: "Nothing to copy yet." });
    }
  }, [display]);

  const setOperationType = useCallback((newOp: Operation) => {
    setOperation(newOp);
    setResult(null);
    setDisplay("");
  }, []);

  // Memoized input hints
  const inputHints = useMemo(() => {
    switch (operation) {
      case "percentOf":
        return (
          <div className="text-xs text-muted-foreground pl-1">
            <span>e.g., <b>What is 20% of 150?</b> — Enter X=20, Y=150.</span>
          </div>
        );
      case "isWhatPercentOf":
        return (
          <div className="text-xs text-muted-foreground pl-1">
            <span>e.g., <b>40 is what percent of 200?</b> — Enter X=40, Y=200.</span>
          </div>
        );
      case "percentChange":
        return (
          <div className="text-xs text-muted-foreground pl-1">
            <span>e.g., <b>Percent change from 120 to 180?</b> — X=120 (old), Y=180 (new).</span>
          </div>
        );
      default:
        return null;
    }
  }, [operation]);

  const currentOption = useMemo(() => 
    operationOptions.find(op => op.value === operation), [operation]
  );

  return (
    <Card className="max-w-xl mx-auto border border-[#F7E572] bg-white dark:bg-[#1e1e00] shadow-lg animate-fade-in">
      <CardContent className="px-6 py-8">
        <form className="flex flex-col gap-4" onSubmit={handleCalculate} autoComplete="off">
          <div>
            <Label htmlFor="operation" className="mb-1">Calculation Type</Label>
            <div className="flex flex-col sm:flex-row gap-2">
              {operationOptions.map((op) => (
                <Button
                  key={op.value}
                  type="button"
                  onClick={() => setOperationType(op.value)}
                  variant={operation === op.value ? "default" : "outline"}
                  className="flex-1 gap-2"
                >
                  <Percent className="w-4 h-4" />
                  {op.label}
                </Button>
              ))}
            </div>
            <div className="pt-1 text-xs text-muted-foreground pl-1 italic">
              {currentOption?.description}
            </div>
          </div>
          
          <div>
            <Label htmlFor="inputA">
              {operation === "percentOf" && "X (Percent)"}
              {operation === "isWhatPercentOf" && "X (Number)"}
              {operation === "percentChange" && "X (From/Old value)"}
            </Label>
            <Input
              id="inputA"
              type="number"
              step="any"
              min="0"
              inputMode="decimal"
              placeholder={operation === "percentChange" ? "Starting value" : "X"}
              value={inputA}
              onChange={(e) => setInputA(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="inputB">
              {operation === "percentOf" && "Y (Number)"}
              {operation === "isWhatPercentOf" && "Y (Number)"}
              {operation === "percentChange" && "Y (To/New value)"}
            </Label>
            <Input
              id="inputB"
              type="number"
              step="any"
              inputMode="decimal"
              min="0"
              placeholder={operation === "percentChange" ? "Ending value" : "Y"}
              value={inputB}
              onChange={(e) => setInputB(e.target.value)}
              required
            />
          </div>
          
          <div>{inputHints}</div>
          
          <div className="flex gap-3 mt-2 flex-wrap">
            <Button disabled={loading || !isValid} type="submit" className="gap-1">
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
            <Button type="button" onClick={handleCopy} variant="ghost" className="gap-1">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </div>
        </form>
        
        <div className="my-6">
          <div className="flex items-start gap-2 mb-2">
            <Info className="w-5 h-5 text-[#00B86B] mt-0.5" />
            <span className="text-sm text-muted-foreground">
              This calculator quickly solves common percentage scenarios. Select the type of percentage operation above, fill in values, and see instant results.
            </span>
          </div>
        </div>
        
        {typeof result === "number" && !isNaN(result) && (
          <div className="mt-7 bg-[#FAF9E3] dark:bg-[#232300] font-medium text-[#2c461a] dark:text-[#b2ffce] p-5 rounded-xl shadow animate-fade-in text-base relative select-all">
            <span className="block mb-1 text-[#A8982D] font-semibold">Result:</span>
            <span className="text-2xl font-bold text-[#00B86B]">
              {operation === "percentOf"
                ? result.toLocaleString()
                : (operation === "isWhatPercentOf" || operation === "percentChange")
                  ? result.toFixed(2) + " %"
                  : result}
            </span>
            <div className="text-sm pt-2 text-muted-foreground">{display}</div>
          </div>
        )}
        
        {/* FAQ section */}
        <div className="pt-8">
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer select-none">What is a percentage?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              A percentage is a number or ratio expressed as a fraction of 100. It's denoted using the symbol "%".
            </div>
          </details>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer select-none">How do you calculate percent of a number?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              To find X% of Y, multiply Y by (X/100). Example: 20% of 50 is 50 × 0.2 = 10.
            </div>
          </details>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer select-none">How do you calculate percent change?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              Percent change = ((new value − old value) ÷ old value) × 100. A negative result is a decrease, positive is an increase.
            </div>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer select-none">Is percentage calculator useful?</summary>
            <div className="pl-3 text-muted-foreground text-sm mt-1">
              Yes! It simplifies quick financial, academic, personal, and business calculations and reduces mistakes.
            </div>
          </details>
        </div>
      </CardContent>
    </Card>
  );
};

export default PercentageCalculator;
