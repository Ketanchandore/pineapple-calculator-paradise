
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NpsCalculator = () => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(10);
  const [annuityReturn, setAnnuityReturn] = useState<number>(6);
  const [result, setResult] = useState<any>(null);

  const calculateNPS = () => {
    const investmentYears = retirementAge - currentAge;
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = investmentYears * 12;
    
    // Calculate corpus at retirement
    const corpusAtRetirement = monthlyContribution * 
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    
    // Total contribution
    const totalContribution = monthlyContribution * totalMonths;
    
    // At retirement, 60% must be used to buy annuity, 40% can be withdrawn
    const annuityAmount = corpusAtRetirement * 0.6;
    const lumpSumWithdrawal = corpusAtRetirement * 0.4;
    
    // Monthly pension from annuity
    const monthlyPension = (annuityAmount * annuityReturn / 100) / 12;
    
    return {
      corpusAtRetirement: Math.round(corpusAtRetirement),
      totalContribution: Math.round(totalContribution),
      totalGrowth: Math.round(corpusAtRetirement - totalContribution),
      annuityAmount: Math.round(annuityAmount),
      lumpSumWithdrawal: Math.round(lumpSumWithdrawal),
      monthlyPension: Math.round(monthlyPension),
      investmentYears
    };
  };

  const handleCalculate = () => {
    if (retirementAge <= currentAge) {
      alert("Retirement age must be greater than current age");
      return;
    }
    setResult(calculateNPS());
  };

  const reset = () => {
    setCurrentAge(30);
    setRetirementAge(60);
    setMonthlyContribution(5000);
    setExpectedReturn(10);
    setAnnuityReturn(6);
    setResult(null);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">NPS Calculator</CardTitle>
        <p className="text-sm text-gray-600 text-center">
          National Pension System calculator with tax benefits
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currentAge">Current Age</Label>
            <Input
              id="currentAge"
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              min="18"
              max="65"
            />
          </div>
          <div>
            <Label htmlFor="retirementAge">Retirement Age</Label>
            <Input
              id="retirementAge"
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              min="19"
              max="75"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="monthlyContribution">Monthly Contribution (₹)</Label>
          <Input
            id="monthlyContribution"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            min="500"
            step="500"
          />
        </div>

        <div>
          <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
          <Input
            id="expectedReturn"
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            min="1"
            max="15"
            step="0.1"
          />
        </div>

        <div>
          <Label htmlFor="annuityReturn">Expected Annuity Return (%)</Label>
          <Input
            id="annuityReturn"
            type="number"
            value={annuityReturn}
            onChange={(e) => setAnnuityReturn(Number(e.target.value))}
            min="1"
            max="10"
            step="0.1"
          />
        </div>

        <div className="flex gap-4">
          <Button onClick={handleCalculate} className="flex-1">
            Calculate NPS
          </Button>
          <Button onClick={reset} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>

        {result && (
          <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">NPS Calculation Result</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Investment Period:</span>
                <span className="font-bold text-blue-600">{result.investmentYears} years</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Total Contribution:</span>
                <span className="font-bold text-blue-600">₹{result.totalContribution.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Total Growth:</span>
                <span className="font-bold text-green-600">₹{result.totalGrowth.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border-2 border-orange-200">
                <span className="font-medium text-gray-700">Corpus at Retirement:</span>
                <span className="font-bold text-orange-600 text-lg">₹{result.corpusAtRetirement.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Lump Sum Withdrawal (40%):</span>
                <span className="font-bold text-purple-600">₹{result.lumpSumWithdrawal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Annuity Amount (60%):</span>
                <span className="font-bold text-indigo-600">₹{result.annuityAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border-2 border-green-200">
                <span className="font-medium text-gray-700">Monthly Pension:</span>
                <span className="font-bold text-green-600 text-lg">₹{result.monthlyPension.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              *NPS offers tax benefits under Section 80C and 80CCD. Calculations are approximate and actual returns may vary.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NpsCalculator;
