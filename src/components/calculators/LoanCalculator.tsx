
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { Printer, Share2, Info, RefreshCcw } from "lucide-react";
import "@/index.css";

// Validation schema
const schema = z.object({
  principal: z
    .string()
    .min(1, "Enter principal amount")
    .refine((val) => Number(val) > 0, { message: "Principal must be greater than 0" }),
  rate: z
    .string()
    .min(1, "Enter annual interest rate")
    .refine((val) => Number(val) > 0, { message: "Interest rate must be greater than 0" }),
  tenure: z
    .string()
    .min(1, "Enter tenure")
    .refine((val) => Number(val) > 0, { message: "Tenure must be greater than 0" }),
  tenureType: z.enum(["years", "months"]),
  currency: z.enum(["INR", "USD", "EUR"]),
});
type FormValues = z.infer<typeof schema>;

// Loan EMI calculation
function calculateEMI(p: number, r: number, n: number) {
  const monthlyRate = r / (12 * 100);
  const emi =
    (p * monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);
  if (!isFinite(emi)) return 0;
  return emi;
}

// Format numbers nicely
function formatNumber(amount: number, digits: number = 0) {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export default function LoanCalculator() {
  const [result, setResult] = useState<{
    emi: number;
    total: number;
    interest: number;
  } | null>(null);

  const [showDetails, setShowDetails] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      principal: "",
      rate: "",
      tenure: "",
      tenureType: "years",
      currency: "INR",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const principal = Number(data.principal);
    const rate = Number(data.rate);
    let n = Number(data.tenure);
    if (data.tenureType === "years") n *= 12;

    const emi = calculateEMI(principal, rate, n);
    const total = emi * n;
    const interest = total - principal;

    setResult({ emi, total, interest });
    toast({
      title: "Calculation Successful",
      description: "Scroll down to see your Loan results.",
    });
  };

  const onPrint = () => {
    window.print();
  };

  const onShare = async () => {
    try {
      await navigator.share({
        title: "Loan Calculator Result",
        text: `EMI: ${result?.emi ? formatNumber(result.emi, 2) : ""}`,
        url: window.location.href,
      });
    } catch (error) {
      toast({
        title: "Sharing not supported",
        description: "Your browser does not support Web Share API.",
      });
    }
  };

  const onClear = () => {
    reset();
    setResult(null);
  };

  const currencySymbols: Record<string, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  };

  return (
    <div className="max-w-2xl mx-auto my-4 animate-fade-in">
      <Card className="shadow-lg border-[#ffe066]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#00B86B] flex items-center gap-2">
            <Info className="w-6 h-6 text-[#ffe066]" />
            Loan Calculator
          </CardTitle>
          <CardDescription className="mt-3 text-muted-foreground">
            Calculate EMI, total repayment, and interest on any personal, car, education, or other loan.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="principal">Loan Amount</Label>
                <Input
                  id="principal"
                  type="number"
                  {...register("principal")}
                  placeholder="Enter amount"
                />
                {errors.principal && (
                  <span className="text-xs text-red-500">{errors.principal.message}</span>
                )}
              </div>
              <div>
                <Label htmlFor="rate">Interest Rate (annual %)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.01"
                  {...register("rate")}
                  placeholder="E.g. 12"
                />
                {errors.rate && (
                  <span className="text-xs text-red-500">{errors.rate.message}</span>
                )}
              </div>
              <div>
                <Label htmlFor="tenure">Tenure</Label>
                <div className="flex gap-2">
                  <Input
                    id="tenure"
                    type="number"
                    {...register("tenure")}
                    placeholder="E.g. 5"
                  />
                  <select
                    className="border rounded-md px-2 py-1 outline-none bg-background"
                    {...register("tenureType")}
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                {errors.tenure && (
                  <span className="text-xs text-red-500">{errors.tenure.message}</span>
                )}
              </div>
              <div>
                <Label htmlFor="currency">Currency</Label>
                <select
                  id="currency"
                  className="border rounded-md px-2 py-2 w-full outline-none bg-background"
                  {...register("currency")}
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row md:justify-between gap-2 items-stretch">
            <div className="flex-1 flex gap-2">
              <Button type="submit" className="flex-1">
                Calculate
              </Button>
              <Button variant="secondary" type="button" onClick={onClear}>
                <RefreshCcw className="mr-2 h-4 w-4" />
                Clear
              </Button>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button variant="outline" type="button" onClick={onPrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" type="button" onClick={onShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>

      {result && (
        <Card className="shadow-md mt-6 border-[#00B86B] animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              EMI Result Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-md bg-[#F4FFF9]/80 dark:bg-[#163824]/80 border">
                <span className="text-muted-foreground text-xs">EMI</span>
                <div className="text-lg font-bold mt-1">
                  {currencySymbols[watch("currency")]}{" "}
                  {formatNumber(result.emi, 2)}
                </div>
                <span className="block text-xs text-muted-foreground mt-1">per month</span>
              </div>
              <div className="p-4 rounded-md bg-[#FFFDE9]/80 dark:bg-[#3A350D]/80 border">
                <span className="text-muted-foreground text-xs">Total Payment</span>
                <div className="text-lg font-bold mt-1">
                  {currencySymbols[watch("currency")]}{" "}
                  {formatNumber(result.total, 2)}
                </div>
              </div>
              <div className="p-4 rounded-md bg-[#FFFBF7]/80 dark:bg-[#31250C]/80 border">
                <span className="text-muted-foreground text-xs">Total Interest</span>
                <div className="text-lg font-bold mt-1">
                  {currencySymbols[watch("currency")]}{" "}
                  {formatNumber(result.interest, 2)}
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowDetails((v) => !v)}
                size="sm"
              >
                <Info className="mr-2 h-4 w-4" />
                {showDetails ? "Hide Details" : "Show Formula & Details"}
              </Button>
            </div>
            {showDetails && (
              <div className="mt-4 text-sm space-y-3">
                <Alert>
                  <AlertTitle>Formula Used:</AlertTitle>
                  <AlertDescription>
                    <span>
                      EMI = [P × r × (1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> – 1]
                    </span>
                    <br />
                    <span>
                      Where:
                      <ul className="list-disc ml-4 mt-1">
                        <li>P = Loan amount</li>
                        <li>r = Monthly interest rate</li>
                        <li>n = Number of monthly installments</li>
                      </ul>
                    </span>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>What loans can I calculate?</AccordionTrigger>
            <AccordionContent>
              You can estimate EMI, total payment, and interest for any fixed-rate personal, car, education, gold, or other installment loan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How is the EMI calculated?</AccordionTrigger>
            <AccordionContent>
              EMI is calculated using principal, annual interest rate, and tenure, assuming a fixed rate and equal installments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Does the calculator handle prepayments?</AccordionTrigger>
            <AccordionContent>
              No, this calculator assumes no prepayment and a constant interest rate. Actual EMI may vary if you partially pay or change plans.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-6 p-4 bg-[#F4FFF9]/80 dark:bg-[#1e2e20]/80 rounded-md text-muted-foreground text-xs">
        <Info className="w-4 h-4 inline mb-1 text-[#00B86B]" /> This calculator gives only a quick estimate; actual EMI may differ based on bank policies and repayment method.
      </div>
    </div>
  );
}
