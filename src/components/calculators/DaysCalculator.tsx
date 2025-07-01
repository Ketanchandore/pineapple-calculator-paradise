
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DaysCalculator = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    if (!startDate || !endDate) return;

    const days = differenceInDays(endDate, startDate);
    const weeks = differenceInWeeks(endDate, startDate);
    const months = differenceInMonths(endDate, startDate);
    const years = differenceInYears(endDate, startDate);

    setResult({
      days: Math.abs(days),
      weeks: Math.abs(weeks),
      months: Math.abs(months),
      years: Math.abs(years),
      workingDays: Math.abs(days) - Math.floor(Math.abs(days) / 7) * 2,
      direction: days >= 0 ? "future" : "past"
    });
  };

  const reset = () => {
    setStartDate(null);
    setEndDate(null);
    setResult(null);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Days Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick start date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate || undefined}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Pick end date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate || undefined}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={handleCalculate} className="flex-1" disabled={!startDate || !endDate}>
            Calculate Days
          </Button>
          <Button onClick={reset} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>

        {result && (
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Time Difference</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{result.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">{result.weeks}</div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">{result.months}</div>
                <div className="text-sm text-gray-600">Months</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-600">{result.years}</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
            <div className="mt-4 text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-xl font-bold text-orange-600">{result.workingDays}</div>
              <div className="text-sm text-gray-600">Approximate Working Days (Mon-Fri)</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DaysCalculator;
