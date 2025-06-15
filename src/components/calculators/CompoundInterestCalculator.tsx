
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

const schema = z.object({
  principal: z.string().min(1, { message: "Enter principal amount" }).refine((val) => Number(val) > 0, { message: "Principal must be greater than zero" }),
  rate: z.string().min(1, { message: "Enter annual interest rate" }).refine((val) => Number(val) > 0, { message: "Interest rate must be greater than zero" }),
  times: z.string().min(1, { message: "Enter compounding frequency" }).refine((val) => Number(val) > 0, { message: "Times/year must be greater than zero" }),
  years: z.string().min(1, { message: "Enter number of years" }).refine((val) => Number(val) > 0, { message: "Years must be greater than zero" }),
  currency: z.enum(["INR", "USD", "EUR"]),
});
type FormValues = z.infer<typeof schema>;

function calculateCompoundInterest(P: number, r: number, n: number, t: number) {
  // P = principal, r = annual interest rate in %, n = compounding per year, t = no. of years
  const amount = P * Math.pow(1 + (r / (n * 100)), n * t);
  return { 
    amount, 
    interest: amount - P 
  };
}

function formatNumber(amount: number, digits = 2) {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export default function CompoundInterestCalculator() {
  const [result, setResult] = useState<{ amount: number; interest: number } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      principal: "",
      rate: "",
      times: "1",
      years: "",
      currency: "INR",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const P = Number(data.principal);
    const r = Number(data.rate);
    const n = Number(data.times);
    const t = Number(data.years);

    const output = calculateCompoundInterest(P, r, n, t);
    setResult(output);

    toast({
      title: "Calculation Successful",
      description: "Scroll down to see your Compound Interest result.",
    });
  };

  const onPrint = () => {
    window.print();
  };

  const onShare = async () => {
    try {
      await navigator.share({
        title: "Compound Interest Calculator Result",
        text: `Future Value: ${result ? formatNumber(result.amount, 2) : ""}`,
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
            Compound Interest Calculator
          </CardTitle>
          <CardDescription className="mt-3 text-muted-foreground">
            Calculate the final balance for your investment with compounding interest.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="principal">Principal Amount</Label>
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
                  placeholder="E.g. 8.5"
                />
                {errors.rate && (
                  <span className="text-xs text-red-500">{errors.rate.message}</span>
                )}
              </div>
              <div>
                <Label htmlFor="times">Compounding Per Year</Label>
                <Input
                  id="times"
                  type="number"
                  {...register("times")}
                  placeholder="E.g. 4 for quarterly"
                />
                <small className="text-xs text-muted-foreground">1 = yearly, 2 = half-yearly, 4 = quarterly, 12 = monthly</small>
                {errors.times && (
                  <span className="text-xs text-red-500 block">{errors.times.message}</span>
                )}
              </div>
              <div>
                <Label htmlFor="years">Number of Years</Label>
                <Input
                  id="years"
                  type="number"
                  {...register("years")}
                  placeholder="E.g. 5"
                />
                {errors.years && (
                  <span className="text-xs text-red-500">{errors.years.message}</span>
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
              Compound Interest Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-[#F4FFF9]/80 dark:bg-[#163824]/80 border">
                <span className="text-muted-foreground text-xs">Total Amount</span>
                <div className="text-lg font-bold mt-1">
                  {currencySymbols[watch("currency")]}{" "}
                  {formatNumber(result.amount, 2)}
                </div>
                <span className="block text-xs text-muted-foreground mt-1">after compounding</span>
              </div>
              <div className="p-4 rounded-md bg-[#FFFDE9]/80 dark:bg-[#3A350D]/80 border">
                <span className="text-muted-foreground text-xs">Total Interest Earned</span>
                <div className="text-lg font-bold mt-1">
                  {currencySymbols[watch("currency")]}{" "}
                  {formatNumber(result.interest, 2)}
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Info className="mr-2 h-4 w-4" />
                Calculate Again
              </Button>
            </div>
            <div className="mt-4 text-sm space-y-3">
              <Alert>
                <AlertTitle>Formula Used:</AlertTitle>
                <AlertDescription>
                  A = P (1 + r/n)<sup>nt</sup><br />
                  Where: 
                  <ul className="list-disc ml-4 mt-1">
                    <li>A = Final Amount</li>
                    <li>P = Principal amount</li>
                    <li>r = Annual interest rate (in decimal)</li>
                    <li>n = Compounding periods / year</li>
                    <li>t = Years</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>How is compound interest calculated?</AccordionTrigger>
            <AccordionContent>
              Compound interest is calculated using the formula: <strong>A = P (1 + r/n)<sup>nt</sup></strong>, where interest is added periodically to the principal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What do the fields mean?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-4 mt-1">
                <li><strong>Principal:</strong> Initial amount invested or loaned.</li>
                <li><strong>Rate:</strong> Annual interest rate, percentage.</li>
                <li><strong>Compounding Per Year:</strong> How many times per year interest is compounded.</li>
                <li><strong>Years:</strong> Number of years the amount is invested/borrowed.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Is this accurate for all types of accounts?</AccordionTrigger>
            <AccordionContent>
              This calculator assumes constant rates and regular compounding. Real-world results may differ depending on account type, taxes, and withdrawal schedules.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-6 p-4 bg-[#F4FFF9]/80 dark:bg-[#1e2e20]/80 rounded-md text-muted-foreground text-xs">
        <Info className="w-4 h-4 inline mb-1 text-[#00B86B]" /> 
        This calculator provides an estimate only. Please check with your bank or advisor before making investment decisions.
      </div>
    </div>
  );
}
