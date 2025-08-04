
import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Share2, RefreshCcw } from "lucide-react";
import ActionButtons from "@/components/ui/action-buttons";
import AgeCalculatorExamples from "./AgeCalculatorExamples";
import { ExampleData } from "@/components/ui/calculator-examples";
import { cn } from "@/lib/utils";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  weeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

function computeAge(dobString: string): AgeResult | null {
  if (!dobString) return null;
  const birthDate = new Date(dobString);
  if (isNaN(birthDate.getTime())) return null;
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthLen = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLen;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = now.getTime() - birthDate.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const weeks = Math.floor(totalDays / 7);

  return {
    years,
    months,
    days,
    weeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds
  };
}

const FAQ_DATA = [
  {
    q: "Can I use this for any date?",
    a: "Yes! The Age Calculator works for any valid date, past or future, and gives you the exact difference."
  },
  {
    q: "Why does my age change later in the day?",
    a: "The age calculation is to the exact second, so after your birthday on the current day, your displayed age may update."
  },
  {
    q: "How do I print or share my age result?",
    a: "Use the Print or Share buttons below the result. You can directly print, or copy/share the result with a link."
  }
];

const AgeCalculator = () => {
  const [dob, setDob] = useState<string>("");
  const [touched, setTouched] = useState(false);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!dob) {
      setResult(null);
      setError("");
      return;
    }
    if (isNaN(new Date(dob).getTime()) || new Date(dob) > new Date()) {
      setResult(null);
      setError("Please enter a valid date of birth (cannot be future date).");
      return;
    }
    setError("");
    setResult(computeAge(dob));
  }, [dob]);

  // Auto-focus first input
  useEffect(() => {
    const firstInput = document.getElementById('dob');
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleReset = () => {
    setDob("");
    setTouched(false);
    setError("");
    setResult(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && dob && !error) {
      // Calculation happens automatically via useEffect
    }
  };

  const handleUseExample = (example: ExampleData) => {
    // Convert example date to YYYY-MM-DD format for date input
    const exampleDate = example.inputs["Date of Birth"];
    const date = new Date(exampleDate);
    if (!isNaN(date.getTime())) {
      const formattedDate = date.toISOString().split('T')[0];
      setDob(formattedDate);
      setTouched(true);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8" role="main">
      <Card className="max-w-2xl mx-auto animate-fade-in" role="application" aria-label="Age Calculator">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">Age Calculator</CardTitle>
          <p className="text-center text-muted-foreground">
            Calculate your exact age in years, months, days, and more
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4" aria-labelledby="input-section">
            <div>
              <Label htmlFor="dob" className="text-base font-medium">
                Enter your Date of Birth:
              </Label>
              <Input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => { 
                  setDob(e.target.value); 
                  setTouched(true); 
                }}
                onKeyPress={handleKeyPress}
                className={cn(
                  "mt-2 text-lg",
                  error ? "border-destructive ring-destructive focus:ring-destructive" : ""
                )}
                required
                aria-invalid={!!error}
                aria-describedby={error ? "dob-error" : "dob-help"}
                aria-label="Date of birth input"
              />
              {error && (
                <p id="dob-error" className="text-destructive text-sm mt-1" role="alert">
                  {error}
                </p>
              )}
              {!error && (
                <p id="dob-help" className="text-muted-foreground text-sm mt-1">
                  Select your birth date to calculate your exact age
                </p>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1 gap-2"
                aria-label="Reset calculator"
              >
                <RefreshCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
          </section>

          {/* Age Results */}
          {result && !error && (
            <section 
              id="calculator-result"
              className="result-display animate-fade-in"
              aria-labelledby="result-heading"
            >
              <h3 id="result-heading" className="text-xl font-semibold mb-4 text-primary">
                Your Age:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" role="group" aria-label="Age breakdown">
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary" aria-label={`${result.years} years`}>{result.years}</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary" aria-label={`${result.months} months`}>{result.months}</div>
                  <div className="text-sm text-muted-foreground">Months</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary" aria-label={`${result.days} days`}>{result.days}</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary" aria-label={`${result.weeks} weeks`}>{result.weeks}</div>
                  <div className="text-sm text-muted-foreground">Weeks</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4" role="group" aria-label="Total time breakdown">
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <div className="text-lg font-semibold" aria-label={`${result.totalDays.toLocaleString()} total days`}>{result.totalDays.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Days</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <div className="text-lg font-semibold" aria-label={`${result.totalHours.toLocaleString()} total hours`}>{result.totalHours.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Hours</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <div className="text-lg font-semibold" aria-label={`${result.totalMinutes.toLocaleString()} total minutes`}>{result.totalMinutes.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Minutes</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <div className="text-lg font-semibold" aria-label={`${result.totalSeconds.toLocaleString()} total seconds`}>{result.totalSeconds.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Seconds</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                These values are precise up to this very second!
              </p>

              <ActionButtons
                result={result}
                calculatorName="Age Calculator"
                resultElementId="calculator-result"
              />
            </section>
          )}

          {!result && touched && !error && (
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                Enter your date of birth to calculate your age in detail.
              </p>
            </div>
          )}

          {/* Calculator Examples */}
          <AgeCalculatorExamples onUseExample={handleUseExample} />

          {/* How it Works */}
          <section className="mt-8 space-y-4" aria-labelledby="how-it-works">
            <h3 id="how-it-works" className="text-lg font-semibold text-primary">
              How does the Age Calculator work?
            </h3>
            <p className="text-muted-foreground">
              This calculator finds your exact age (up to the current second) from your date of birth. 
              It shows years, months, days, weeks, total days, hours, minutes, and seconds using precise 
              calendar math. All calculations are automatic and update instantly as you type.
            </p>
          </section>

          {/* Formula */}
          <section className="space-y-4" aria-labelledby="formula-heading">
            <h3 id="formula-heading" className="text-lg font-semibold text-primary">
              Age Calculation Formula
            </h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-mono text-sm">
                <strong>Age</strong> = Current Date − Date of Birth
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Calendar-aware calculation is used to break down into years, months, and days.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4" aria-labelledby="faq-heading">
            <h3 id="faq-heading" className="text-lg font-semibold text-primary">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3" role="list">
              {FAQ_DATA.map(({ q, a }, index) => (
                <div key={index} className="border-l-4 border-primary pl-4" role="listitem">
                  <p className="font-medium text-foreground">Q: {q}</p>
                  <p className="text-muted-foreground text-sm mt-1">A: {a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-xs text-muted-foreground text-center mt-6 p-4 bg-muted/30 rounded-lg">
            <strong>Disclaimer:</strong> For general use only – not medical advice.
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AgeCalculator;
