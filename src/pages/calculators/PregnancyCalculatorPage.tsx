
import React, { useState } from "react";
import { format, addDays, isValid, differenceInDays, differenceInWeeks } from "date-fns";
import { Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const PREGNANCY_DAYS = 280; // 40 weeks

function getTrimester(weeks: number): string {
  if (weeks < 13) return "First Trimester";
  if (weeks < 27) return "Second Trimester";
  if (weeks <= 40) return "Third Trimester";
  return "Past due";
}

const PregnancyCalculatorPage = () => {
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
      // LMP is in the future
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
    <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl border px-8 py-10 border-[#ffe066] shadow-2xl animate-fade-in max-w-xl w-full">
          <div className="flex justify-center items-center mb-4">
            <Baby size={40} className="text-[#00B86B]" />
          </div>
          <h1 className="text-2xl font-bold text-[#00B86B] mb-2">
            Pregnancy Calculator
          </h1>
          <p className="text-[#A8982D] text-base mb-6">
            Check your estimated due date, gestational age and trimester.
          </p>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <label className="block mb-2 font-medium text-[#A8982D]">
                First day of your last menstrual period (LMP)
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
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
                    className={cn("p-3 pointer-events-auto")}
                    disabled={(date) =>
                      date > today || date < new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                variant="default"
                type="submit"
                disabled={!lmp || !isValid(lmp)}
                className="w-full"
              >
                Calculate
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-full"
                onClick={handleReset}
                disabled={!lmp}
              >
                Reset
              </Button>
            </div>
          </form>
          {showResult && lmp && isValid(lmp) && (
            <div className="mt-8 text-left space-y-4 animate-fade-in">
              <div className="flex items-center gap-2 text-[#00B86B] font-bold text-lg">
                <Baby size={26} className="inline-block" />
                Pregnant for{" "}
                <span className="text-[#FF922B] ml-2">
                  {weeksPregnant} {weeksPregnant === 1 ? "week" : "weeks"}
                  {daysPregnantRemainder > 0 &&
                    ` ${daysPregnantRemainder} day${daysPregnantRemainder > 1 ? "s" : ""}`}
                </span>
              </div>
              <ul className="space-y-1 text-[#59522B] text-base mt-2">
                <li>
                  <span className="font-medium">Estimated Due Date: </span>
                  <span className="text-[#386641]">
                    {edd ? format(edd, "PPP") : "--"}
                  </span>
                </li>
                <li>
                  <span className="font-medium">Current Trimester: </span>
                  <span>{trimester}</span>
                </li>
                <li>
                  <span className="font-medium">Days to go: </span>
                  <span>
                    {daysToGo > 0 ? daysToGo : 0} day{daysToGo !== 1 ? "s" : ""}
                  </span>
                </li>
                <li>
                  <span className="font-medium">Gestational Age: </span>
                  <span>
                    {weeksPregnant} week{weeksPregnant !== 1 ? "s" : ""},{" "}
                    {daysPregnantRemainder} day
                    {daysPregnantRemainder !== 1 ? "s" : ""}
                  </span>
                </li>
              </ul>
              {daysPregnant > PREGNANCY_DAYS && (
                <div className="mt-2 text-red-500 font-semibold">
                  This pregnancy is past due.
                </div>
              )}
            </div>
          )}
          {!showResult && lmp && !isValid(lmp) && (
            <div className="mt-5 text-red-600">Please pick a valid date.</div>
          )}
          <Button asChild variant="outline" className="mt-8 w-full">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PregnancyCalculatorPage;

