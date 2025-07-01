
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays, addWeeks, addMonths, addYears, differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DateCalculator = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const [days, setDays] = useState<number>(0);
  const [weeks, setWeeks] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [mode, setMode] = useState<"calculate" | "difference">("calculate");
  const [result, setResult] = useState<Date | null>(null);
  const [difference, setDifference] = useState<any>(null);

  const handleCalculate = () => {
    if (!fromDate) return;

    let resultDate = new Date(fromDate);
    
    if (operation === "add") {
      resultDate = addDays(resultDate, days);
      resultDate = addWeeks(resultDate, weeks);
      resultDate = addMonths(resultDate, months);
      resultDate = addYears(resultDate, years);
    } else {
      resultDate = addDays(resultDate, -days);
      resultDate = addWeeks(resultDate, -weeks);
      resultDate = addMonths(resultDate, -months);
      resultDate = addYears(resultDate, -years);
    }

    setResult(resultDate);
  };

  const handleDifferenceCalculate = () => {
    if (!fromDate || !toDate) return;

    const diff = {
      days: differenceInDays(toDate, fromDate),
      weeks: differenceInWeeks(toDate, fromDate),
      months: differenceInMonths(toDate, fromDate),
      years: differenceInYears(toDate, fromDate)
    };

    setDifference(diff);
  };

  const reset = () => {
    setFromDate(null);
    setToDate(null);
    setDays(0);
    setWeeks(0);
    setMonths(0);
    setYears(0);
    setResult(null);
    setDifference(null);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Date Calculator</CardTitle>
        <div className="flex justify-center gap-4">
          <Button
            variant={mode === "calculate" ? "default" : "outline"}
            onClick={() => setMode("calculate")}
          >
            Add/Subtract
          </Button>
          <Button
            variant={mode === "difference" ? "default" : "outline"}
            onClick={() => setMode("difference")}
          >
            Find Difference
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {mode === "calculate" ? (
          <>
            <div>
              <Label>From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !fromDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={fromDate || undefined}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex gap-4">
              <Button
                variant={operation === "add" ? "default" : "outline"}
                onClick={() => setOperation("add")}
              >
                Add
              </Button>
              <Button
                variant={operation === "subtract" ? "default" : "outline"}
                onClick={() => setOperation("subtract")}
              >
                Subtract
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="years">Years</Label>
                <Input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div>
                <Label htmlFor="months">Months</Label>
                <Input
                  id="months"
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div>
                <Label htmlFor="weeks">Weeks</Label>
                <Input
                  id="weeks"
                  type="number"
                  value={weeks}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div>
                <Label htmlFor="days">Days</Label>
                <Input
                  id="days"
                  type="number"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  min="0"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleCalculate} className="flex-1">
                Calculate
              </Button>
              <Button onClick={reset} variant="outline" className="flex-1">
                Reset
              </Button>
            </div>

            {result && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800">Result:</h3>
                <p className="text-lg text-green-700">{format(result, "PPP")}</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>From Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !fromDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={fromDate || undefined}
                      onSelect={setFromDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>To Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !toDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={toDate || undefined}
                      onSelect={setToDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleDifferenceCalculate} className="flex-1">
                Calculate Difference
              </Button>
              <Button onClick={reset} variant="outline" className="flex-1">
                Reset
              </Button>
            </div>

            {difference && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">Difference:</h3>
                <div className="grid grid-cols-2 gap-2 text-blue-700">
                  <p>Years: {difference.years}</p>
                  <p>Months: {difference.months}</p>
                  <p>Weeks: {difference.weeks}</p>
                  <p>Days: {difference.days}</p>
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DateCalculator;
