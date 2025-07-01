
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { format, addDays, isValid, differenceInDays } from "date-fns";
import { Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PREGNANCY_DAYS = 280; // 40 weeks

function getTrimester(weeks: number): string {
  if (weeks < 13) return "First Trimester";
  if (weeks < 27) return "Second Trimester";
  if (weeks <= 40) return "Third Trimester";
  return "Past due";
}

const PregnancyCalculator = () => {
  const [lmp, setLmp] = useState<Date | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Computed values
  const today = new Date();
  let edd: Date | null = null;
  let daysPregnant = 0;
  let weeksPregnant = 0;
  let daysPregnantRemainder = 0;
  let daysToGo = PREGNANCY_DAYS;
  let trimester = "";

  if (lmp && isValid(lmp)) {
    edd = addDays(lmp, PREGNANCY_DAYS);
    daysPregnant = differenceInDays(today, lmp);
    weeksPregnant = Math.floor(daysPregnant / 7);
    daysPregnantRemainder = daysPregnant % 7;
    daysToGo = PREGNANCY_DAYS - daysPregnant;
    if (daysPregnant < 0) {
      trimester = "";
      setShowResult(false);
    } else if (daysPregnant > PREGNANCY_DAYS) {
      trimester = "Past due";
    } else {
      trimester = getTrimester(weeksPregnant);
    }
  }

  function handleReset() {
    setLmp(null);
    setShowResult(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!lmp || !isValid(lmp)) {
      setShowResult(false);
      return;
    }
    setShowResult(true);
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
          <Baby className="text-[#00B86B]" />
          Pregnancy Calculator
        </CardTitle>
        <p className="text-center text-gray-600">
          Check your estimated due date, gestational age and trimester.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              First day of your last menstrual period (LMP)
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !lmp && "text-muted-foreground"
                  )}
                >
                  {lmp ? format(lmp, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={lmp ?? undefined}
                  onSelect={setLmp}
                  initialFocus
                  disabled={(date) =>
                    date > today || date < new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-3">
            <Button
              variant="default"
              type="submit"
              disabled={!lmp || !isValid(lmp)}
              className="flex-1"
            >
              Calculate
            </Button>
            <Button
              variant="outline"
              type="button"
              className="flex-1"
              onClick={handleReset}
              disabled={!lmp}
            >
              Reset
            </Button>
          </div>
        </form>
        {showResult && lmp && isValid(lmp) && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-700 font-bold text-lg mb-3">
              <Baby size={24} />
              Pregnant for{" "}
              <span className="text-orange-600">
                {weeksPregnant} {weeksPregnant === 1 ? "week" : "weeks"}
                {daysPregnantRemainder > 0 &&
                  ` ${daysPregnantRemainder} day${daysPregnantRemainder > 1 ? "s" : ""}`}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Estimated Due Date:</span>
                <span className="text-green-700">
                  {edd ? format(edd, "PPP") : "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Current Trimester:</span>
                <span>{trimester}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Days to go:</span>
                <span>
                  {daysToGo > 0 ? daysToGo : 0} day{daysToGo !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Gestational Age:</span>
                <span>
                  {weeksPregnant} week{weeksPregnant !== 1 ? "s" : ""},{" "}
                  {daysPregnantRemainder} day
                  {daysPregnantRemainder !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
            {daysPregnant > PREGNANCY_DAYS && (
              <div className="mt-3 text-red-600 font-semibold text-sm">
                This pregnancy is past due.
              </div>
            )}
          </div>
        )}
        {!showResult && lmp && !isValid(lmp) && (
          <div className="mt-4 text-red-600 text-sm">Please pick a valid date.</div>
        )}
      </CardContent>
    </Card>
  );
};

const PregnancyCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
      <Sidebar />
      <section className="flex-1 px-8 py-8">
        <h1 className="text-3xl font-display font-bold text-[#00B86B] mb-7 flex items-center gap-2">
          <span>Pregnancy Calculator</span>
        </h1>
        <PregnancyCalculator />
      </section>
    </main>
    <Footer />
  </div>
);

export default PregnancyCalculatorPage;
