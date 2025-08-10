import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Baby } from "lucide-react";
import { format, addDays, isValid, differenceInDays } from "date-fns";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const PREGNANCY_DAYS = 280; // 40 weeks

function getTrimester(weeks: number): string {
  if (weeks < 13) return "First Trimester";
  if (weeks < 27) return "Second Trimester";
  if (weeks <= 40) return "Third Trimester";
  return "Past due";
}

const PregnancyCalculatorInner = () => {
  const [lmp, setLmp] = useState<Date | null>(null);
  const [showResult, setShowResult] = useState(false);

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
          <Baby className="text-primary" />
          Pregnancy Calculator
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Check your estimated due date, gestational age and trimester.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-medium text-foreground">
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
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-3">
            <Button variant="default" type="submit" disabled={!lmp || !isValid(lmp)} className="flex-1">
              Calculate
            </Button>
            <Button variant="outline" type="button" className="flex-1" onClick={handleReset} disabled={!lmp}>
              Reset
            </Button>
          </div>
        </form>
        {showResult && lmp && isValid(lmp) && (
          <div className="mt-6 p-4 bg-accent/30 rounded-lg">
            <div className="flex items-center gap-2 text-foreground font-bold text-lg mb-3">
              <Baby size={24} />
              Pregnant for{" "}
              <span className="text-primary">
                {weeksPregnant} {weeksPregnant === 1 ? "week" : "weeks"}
                {daysPregnantRemainder > 0 && ` ${daysPregnantRemainder} day${daysPregnantRemainder > 1 ? "s" : ""}`}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Estimated Due Date:</span>
                <span className="text-primary">{edd ? format(edd, "PPP") : "--"}</span>
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
              <div className="mt-3 text-destructive font-semibold text-sm">This pregnancy is past due.</div>
            )}
          </div>
        )}
        {!showResult && lmp && !isValid(lmp) && (
          <div className="mt-4 text-destructive text-sm">Please pick a valid date.</div>
        )}
      </CardContent>
    </Card>
  );
};

export default PregnancyCalculatorInner;
