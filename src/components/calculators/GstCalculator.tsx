
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GstCalculator = () => {
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [amount, setAmount] = useState<number>(0);
  const [gstRate, setGstRate] = useState<number>(18);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (amount <= 0) return;

    let gstAmount: number;
    let totalAmount: number;
    let baseAmount: number;

    if (mode === "add") {
      // Add GST to base amount
      baseAmount = amount;
      gstAmount = (amount * gstRate) / 100;
      totalAmount = amount + gstAmount;
    } else {
      // Remove GST from total amount
      totalAmount = amount;
      baseAmount = (amount * 100) / (100 + gstRate);
      gstAmount = amount - baseAmount;
    }

    setResult({
      baseAmount: baseAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      gstRate
    });
  };

  const reset = () => {
    setAmount(0);
    setResult(null);
  };

  const commonGstRates = [5, 12, 18, 28];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">GST Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4 justify-center">
          <Button
            variant={mode === "add" ? "default" : "outline"}
            onClick={() => setMode("add")}
          >
            Add GST
          </Button>
          <Button
            variant={mode === "remove" ? "default" : "outline"}
            onClick={() => setMode("remove")}
          >
            Remove GST
          </Button>
        </div>

        <div>
          <Label htmlFor="amount">
            {mode === "add" ? "Base Amount (₹)" : "Total Amount (₹)"}
          </Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min="0"
            step="0.01"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <Label htmlFor="gstRate">GST Rate (%)</Label>
          <div className="flex gap-2 mb-2">
            {commonGstRates.map((rate) => (
              <Button
                key={rate}
                variant={gstRate === rate ? "default" : "outline"}
                size="sm"
                onClick={() => setGstRate(rate)}
              >
                {rate}%
              </Button>
            ))}
          </div>
          <Input
            id="gstRate"
            type="number"
            value={gstRate}
            onChange={(e) => setGstRate(Number(e.target.value))}
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        <div className="flex gap-4">
          <Button onClick={calculate} className="flex-1" disabled={amount <= 0}>
            Calculate
          </Button>
          <Button onClick={reset} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>

        {result && (
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">GST Calculation Result</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Base Amount:</span>
                <span className="font-bold text-blue-600">₹{result.baseAmount}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">GST ({result.gstRate}%):</span>
                <span className="font-bold text-green-600">₹{result.gstAmount}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border-2 border-orange-200">
                <span className="font-medium text-gray-700">Total Amount:</span>
                <span className="font-bold text-orange-600 text-lg">₹{result.totalAmount}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GstCalculator;
