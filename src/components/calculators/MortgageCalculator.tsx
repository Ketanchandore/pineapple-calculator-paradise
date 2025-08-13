import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Home, TrendingUp, Calculator, RotateCcw, Download, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  payoffDate: string;
  schedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('300000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [downPayment, setDownPayment] = useState('60000');
  const [propertyTax, setPropertyTax] = useState('3000');
  const [insurance, setInsurance] = useState('1200');
  const [pmi, setPmi] = useState('250');
  const [termUnit, setTermUnit] = useState('years');
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numPayments = termUnit === 'years' ? parseFloat(loanTerm) * 12 : parseFloat(loanTerm);
    
    if (principal <= 0 || monthlyRate <= 0 || numPayments <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers.",
        variant: "destructive",
      });
      return;
    }

    // Calculate monthly payment (P&I only)
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);

    // Additional monthly costs
    const monthlyPropertyTax = parseFloat(propertyTax) / 12;
    const monthlyInsurance = parseFloat(insurance) / 12;
    const monthlyPmi = parseFloat(pmi);

    const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyInsurance + monthlyPmi;
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - principal;

    // Calculate payoff date
    const today = new Date();
    const payoffDate = new Date(today.getFullYear(), today.getMonth() + numPayments, today.getDate());

    // Generate amortization schedule
    const schedule: MortgageResult['schedule'] = [];
    let balance = principal;

    for (let month = 1; month <= numPayments && month <= 360; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });

      if (balance <= 0) break;
    }

    setResult({
      monthlyPayment: totalMonthlyPayment,
      totalPayment,
      totalInterest,
      payoffDate: payoffDate.toLocaleDateString(),
      schedule,
    });
  };

  const handleReset = () => {
    setLoanAmount('300000');
    setInterestRate('6.5');
    setLoanTerm('30');
    setDownPayment('60000');
    setPropertyTax('3000');
    setInsurance('1200');
    setPmi('250');
    setTermUnit('years');
    setResult(null);
    setShowSchedule(false);
  };

  const handleShare = async () => {
    if (!result) return;

    const shareText = `Mortgage Calculator Results:
Monthly Payment: $${result.monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2 })}
Total Payment: $${result.totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2 })}
Total Interest: $${result.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2 })}
Payoff Date: ${result.payoffDate}

Calculated on PineappleHub.com`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mortgage Calculator Results',
          text: shareText,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to Clipboard",
          description: "Results copied to clipboard!",
        });
      }
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to Clipboard",
        description: "Results copied to clipboard!",
      });
    }
  };

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2 
    }).format(amount);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loanAmount && interestRate && loanTerm && downPayment) {
        calculateMortgage();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [loanAmount, interestRate, loanTerm, downPayment, propertyTax, insurance, pmi, termUnit]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Home className="h-6 w-6 text-primary" />
            Mortgage Calculator
          </CardTitle>
          <p className="text-muted-foreground">Calculate monthly payments, total interest, and amortization schedule</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="homePrice">Home Price</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="homePrice"
                  type="number"
                  placeholder="300,000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="downPayment">Down Payment</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="downPayment"
                  type="number"
                  placeholder="60,000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestRate">Interest Rate</Label>
              <div className="relative">
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  placeholder="6.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="pr-8"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">%</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanTerm">Loan Term</Label>
              <div className="flex gap-2">
                <Input
                  id="loanTerm"
                  type="number"
                  placeholder="30"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="flex-1"
                />
                <Select value={termUnit} onValueChange={setTermUnit}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="years">Years</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyTax">Annual Property Tax</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="propertyTax"
                  type="number"
                  placeholder="3,000"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="insurance">Annual Insurance</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="insurance"
                  type="number"
                  placeholder="1,200"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pmi">Monthly PMI</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="pmi"
                  type="number"
                  placeholder="250"
                  value={pmi}
                  onChange={(e) => setPmi(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={calculateMortgage} className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculate
            </Button>
            <Button onClick={handleReset} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
            {result && (
              <>
                <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button 
                  onClick={() => setShowSchedule(!showSchedule)} 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  {showSchedule ? 'Hide' : 'Show'} Schedule
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Mortgage Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary">Monthly Payment</h3>
                <p className="text-2xl font-bold">{formatCurrency(result.monthlyPayment)}</p>
                <p className="text-xs text-muted-foreground">Principal, Interest, Tax, Insurance & PMI</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <h3 className="font-semibold text-secondary-foreground">Total Interest</h3>
                <p className="text-2xl font-bold">{formatCurrency(result.totalInterest)}</p>
                <p className="text-xs text-muted-foreground">Over loan lifetime</p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <h3 className="font-semibold text-accent-foreground">Total Payment</h3>
                <p className="text-2xl font-bold">{formatCurrency(result.totalPayment)}</p>
                <p className="text-xs text-muted-foreground">Principal + Interest only</p>
              </div>
              <div className="text-center p-4 bg-muted/10 rounded-lg">
                <h3 className="font-semibold text-muted-foreground">Payoff Date</h3>
                <p className="text-2xl font-bold">{result.payoffDate}</p>
                <p className="text-xs text-muted-foreground">Final payment date</p>
              </div>
            </div>

            {/* Loan Breakdown */}
            <div className="space-y-3">
              <h4 className="font-semibold">Loan Amount Breakdown</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Home Price:</span>
                  <span>{formatCurrency(parseFloat(loanAmount))}</span>
                </div>
                <div className="flex justify-between">
                  <span>Down Payment:</span>
                  <span>-{formatCurrency(parseFloat(downPayment))}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Loan Amount:</span>
                  <span>{formatCurrency(parseFloat(loanAmount) - parseFloat(downPayment))}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Amortization Schedule */}
      {result && showSchedule && (
        <Card>
          <CardHeader>
            <CardTitle>Amortization Schedule (First 12 Months)</CardTitle>
            <p className="text-sm text-muted-foreground">Principal and Interest payments only</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Month</th>
                    <th className="text-right p-2">Payment</th>
                    <th className="text-right p-2">Principal</th>
                    <th className="text-right p-2">Interest</th>
                    <th className="text-right p-2">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.slice(0, 12).map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-2">{row.month}</td>
                      <td className="p-2 text-right">{formatCurrency(row.payment)}</td>
                      <td className="p-2 text-right">{formatCurrency(row.principal)}</td>
                      <td className="p-2 text-right">{formatCurrency(row.interest)}</td>
                      <td className="p-2 text-right">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {result.schedule.length > 12 && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                Showing first 12 months of {result.schedule.length} total payments
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MortgageCalculator;