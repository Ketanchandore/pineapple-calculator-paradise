
import React, { useState } from "react";
import { CalendarIcon, RefreshCcw } from "lucide-react";
import { format, intervalToDuration, isBefore, isEqual } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const DateCalculator: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    if (!fromDate || !toDate) {
      toast({
        title: "Both dates are required.",
        description: "Please select both the start date and end date.",
        variant: "destructive",
      });
      setResult("");
      return;
    }
    if (isBefore(toDate, fromDate)) {
      toast({
        title: "End date must be after start date.",
        description: "Please select valid dates.",
        variant: "destructive",
      });
      setResult("");
      return;
    }
    if (isEqual(fromDate, toDate)) {
      setResult("Both dates are the same: 0 days difference.");
      return;
    }
    const dur = intervalToDuration({ start: fromDate, end: toDate });
    const text = [
      dur.years ? `${dur.years} year${dur.years > 1 ? "s" : ""}` : null,
      dur.months ? `${dur.months} month${dur.months > 1 ? "s" : ""}` : null,
      dur.days ? `${dur.days} day${dur.days > 1 ? "s" : ""}` : null,
    ]
      .filter(Boolean)
      .join(", ");
    setResult(`Difference: ${text || "less than a day"}`);
  };

  const handleReset = () => {
    setFromDate(undefined);
    setToDate(undefined);
    setResult("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl px-6 py-10 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold font-display text-[#00B86B] text-center mb-3 flex items-center gap-2 justify-center">
        <CalendarIcon className="text-[#FFD966]" /> Date Calculator
      </h2>
      <div className="mb-6 text-center text-[#A8982D]">
        Calculate the difference between two dates in years, months, and days.
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleCalculate();
        }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium text-[#5C6C32]">
              Start Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !fromDate && "text-muted-foreground"
                  )}
                  type="button"
                >
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                  {fromDate ? format(fromDate, "PPP") : <span>Pick a start date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={setFromDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                  max={toDate}
                  disabled={date => !!toDate && isBefore(date, new Date("1900-01-01"))}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium text-[#5C6C32]">
              End Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !toDate && "text-muted-foreground"
                  )}
                  type="button"
                >
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                  {toDate ? format(toDate, "PPP") : <span>Pick an end date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={toDate}
                  onSelect={setToDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                  min={fromDate}
                  disabled={date => !!fromDate && isBefore(date, new Date("1900-01-01"))}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <Button type="submit" className="w-full bg-[#00B86B] hover:bg-[#00b86bcc] text-white font-semibold">
            Calculate
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
        <div className="mt-8 p-5 bg-[#f9f7ee] border border-[#ffe066] rounded-lg text-center shadow">
          <span className="font-medium text-[#2A2605]">{result}</span>
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

const DateCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <div className="flex-1 flex items-center justify-center">
      <DateCalculator />
    </div>
  </div>
);

export default DateCalculatorPage;
