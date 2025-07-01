
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MutualFundCalculator = () => {
  const [investmentType, setInvestmentType] = useState<"sip" | "lumpsum">("sip");
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [lumpsum, setLumpsum] = useState<number>(100000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);
  const [result, setResult] = useState<any>(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const months = timePeriod * 12;
    
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * months;
    const totalReturns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    };
  };

  const calculateLumpsum = () => {
    const futureValue = lumpsum * Math.pow(1 + expectedReturn / 100, timePeriod);
    const totalReturns = futureValue - lumpsum;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: lumpsum,
      totalReturns: Math.round(totalReturns)
    };
  };

  const handleCalculate = () => {
    if (investmentType === "sip") {
      setResult(calculateSIP());
    } else {
      setResult(calculateLumpsum());
    }
  };

  const reset = () => {
    setMonthlyInvestment(5000);
    setLumpsum(100000);
    setExpectedReturn(12);
    setTimePeriod(10);
    setResult(null);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Mutual Fund Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4 justify-center">
          <Button
            variant={investmentType === "sip" ? "default" : "outline"}
            onClick={() => setInvestmentType("sip")}
          >
            SIP
          </Button>
          <Button
            variant={investmentType === "lumpsum" ? "default" : "outline"}
            onClick={() => setInvestmentType("lumpsum")}
          >
            Lump Sum
          </Button>
        </div>

        {investmentType === "sip" ? (
          <div>
            <Label htmlFor="monthlyInvestment">Monthly Investment (₹)</Label>
            <Input
              id="monthlyInvestment"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              min="500"
              step="500"
            />
          </div>
        ) : (
          <div>
            <Label htmlFor="lumpsum">Lump Sum Investment (₹)</Label>
            <Input
              id="lumpsum"
              type="number"
              value={lumpsum}
              onChange={(e) => setLumpsum(Number(e.target.value))}
              min="1000"
              step="1000"
            />
          </div>
        )}

        <div>
          <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
          <Input
            id="expectedReturn"
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            min="1"
            max="30"
            step="0.1"
          />
        </div>

        <div>
          <Label htmlFor="timePeriod">Time Period (Years)</Label>
          <Input
            id="timePeriod"
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            min="1"
            max="50"
          />
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
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              {investmentType === "sip" ? "SIP" : "Lump Sum"} Calculation Result
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Total Investment:</span>
                <span className="font-bold text-blue-600">₹{result.totalInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Total Returns:</span>
                <span className="font-bold text-green-600">₹{result.totalReturns.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border-2 border-purple-200">
                <span className="font-medium text-gray-700">Future Value:</span>
                <span className="font-bold text-purple-600 text-lg">₹{result.futureValue.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              Returns are calculated based on compound interest and may vary with actual market performance.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MutualFundCalculator;
