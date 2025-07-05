
import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, TrendingUp, DollarSign, Package, Calculator, Download, Share2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

interface CalculationResult {
  profit: number;
  profitMargin: number;
  markup: number;
  revenue: number;
  totalCosts: number;
  roi: number;
  breakEvenUnits: number;
  recommendation: string;
  status: 'excellent' | 'good' | 'fair' | 'poor';
}

const ECommerceCalculator: React.FC = () => {
  const [sellingPrice, setSellingPrice] = useState<string>('');
  const [costPrice, setCostPrice] = useState<string>('');
  const [shippingCost, setShippingCost] = useState<string>('');
  const [platformFees, setPlatformFees] = useState<string>('');
  const [advertisingCost, setAdvertisingCost] = useState<string>('');
  const [otherExpenses, setOtherExpenses] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1');
  const [currency, setCurrency] = useState<string>('USD');
  const [businessType, setBusinessType] = useState<string>('retail');
  const [taxRate, setTaxRate] = useState<string>('0');

  const currencySymbols: Record<string, string> = {
    USD: '$', EUR: '€', GBP: '£', INR: '₹', CAD: 'C$', AUD: 'A$'
  };

  const formatCurrency = useCallback((amount: number): string => {
    const symbol = currencySymbols[currency] || '$';
    return `${symbol}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [currency]);

  const calculation = useMemo((): CalculationResult | null => {
    const selling = parseFloat(sellingPrice) || 0;
    const cost = parseFloat(costPrice) || 0;
    const shipping = parseFloat(shippingCost) || 0;
    const fees = parseFloat(platformFees) || 0;
    const advertising = parseFloat(advertisingCost) || 0;
    const other = parseFloat(otherExpenses) || 0;
    const qty = parseFloat(quantity) || 1;
    const tax = parseFloat(taxRate) || 0;

    if (selling <= 0 || cost <= 0) return null;

    const totalCosts = cost + shipping + fees + advertising + other;
    const taxAmount = (selling * tax) / 100;
    const netRevenue = selling - taxAmount;
    const profit = netRevenue - totalCosts;
    const profitMargin = (profit / netRevenue) * 100;
    const markup = ((selling - cost) / cost) * 100;
    const revenue = selling * qty;
    const roi = (profit / totalCosts) * 100;
    const breakEvenUnits = Math.ceil(totalCosts / (selling - cost));

    let status: 'excellent' | 'good' | 'fair' | 'poor';
    let recommendation: string;

    if (profitMargin >= 30) {
      status = 'excellent';
      recommendation = 'Outstanding profit margin! Consider scaling this product or investing in marketing to increase volume.';
    } else if (profitMargin >= 20) {
      status = 'good';
      recommendation = 'Good profit margin. Look for opportunities to optimize costs or increase prices strategically.';
    } else if (profitMargin >= 10) {
      status = 'fair';
      recommendation = 'Fair profit margin. Focus on reducing costs or finding ways to add more value to justify higher prices.';
    } else {
      status = 'poor';
      recommendation = 'Low profit margin. Consider renegotiating with suppliers, reducing expenses, or finding alternative products with better margins.';
    }

    return {
      profit,
      profitMargin,
      markup,
      revenue,
      totalCosts,
      roi,
      breakEvenUnits,
      recommendation,
      status
    };
  }, [sellingPrice, costPrice, shippingCost, platformFees, advertisingCost, otherExpenses, quantity, taxRate]);

  const exportResults = useCallback(() => {
    if (!calculation) return;
    
    const data = `eCommerce Profit Margin Analysis
${'-'.repeat(40)}
Selling Price: ${formatCurrency(parseFloat(sellingPrice))}
Cost Price: ${formatCurrency(parseFloat(costPrice))}
Total Costs: ${formatCurrency(calculation.totalCosts)}
Profit: ${formatCurrency(calculation.profit)}
Profit Margin: ${calculation.profitMargin.toFixed(2)}%
Markup: ${calculation.markup.toFixed(2)}%
ROI: ${calculation.roi.toFixed(2)}%
Break-even Units: ${calculation.breakEvenUnits}
Status: ${calculation.status.toUpperCase()}
Recommendation: ${calculation.recommendation}`;

    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'profit-margin-analysis.txt';
    a.click();
    URL.revokeObjectURL(url);
  }, [calculation, sellingPrice, costPrice, formatCurrency]);

  const shareResults = useCallback(async () => {
    if (!calculation) return;
    
    const text = `My product has a ${calculation.profitMargin.toFixed(1)}% profit margin with ${formatCurrency(calculation.profit)} profit per unit!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'eCommerce Profit Margin Results',
          text: text,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  }, [calculation, formatCurrency]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'fair': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          eCommerce Profit Margin Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Calculate your profit margins, markup, ROI, and get strategic recommendations for your eCommerce business.
        </p>
      </div>

      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="INR">INR (₹)</SelectItem>
                        <SelectItem value="CAD">CAD (C$)</SelectItem>
                        <SelectItem value="AUD">AUD (A$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select value={businessType} onValueChange={setBusinessType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                        <SelectItem value="dropshipping">Dropshipping</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sellingPrice">* Selling Price</Label>
                    <Input
                      id="sellingPrice"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="costPrice">* Cost Price</Label>
                    <Input
                      id="costPrice"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={costPrice}
                      onChange={(e) => setCostPrice(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">Additional Costs</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="shippingCost">Shipping Cost</Label>
                      <Input
                        id="shippingCost"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={shippingCost}
                        onChange={(e) => setShippingCost(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="platformFees">Platform Fees</Label>
                      <Input
                        id="platformFees"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={platformFees}
                        onChange={(e) => setPlatformFees(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="advertisingCost">Advertising Cost</Label>
                      <Input
                        id="advertisingCost"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={advertisingCost}
                        onChange={(e) => setAdvertisingCost(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="otherExpenses">Other Expenses</Label>
                      <Input
                        id="otherExpenses"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={otherExpenses}
                        onChange={(e) => setOtherExpenses(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                    <Input
                      id="taxRate"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={taxRate}
                      onChange={(e) => setTaxRate(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Profit Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {calculation ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {formatCurrency(calculation.profit)}
                        </div>
                        <div className="text-sm text-gray-600">Net Profit</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {calculation.profitMargin.toFixed(2)}%
                        </div>
                        <div className="text-sm text-gray-600">Profit Margin</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Markup:</span>
                        <span className="font-semibold">{calculation.markup.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI:</span>
                        <span className="font-semibold">{calculation.roi.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Revenue:</span>
                        <span className="font-semibold">{formatCurrency(calculation.revenue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Costs:</span>
                        <span className="font-semibold">{formatCurrency(calculation.totalCosts)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Break-even Units:</span>
                        <span className="font-semibold">{calculation.breakEvenUnits}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Status:</span>
                        <Badge className={`${getStatusColor(calculation.status)} text-white`}>
                          {calculation.status.toUpperCase()}
                        </Badge>
                      </div>
                      <Progress 
                        value={Math.min(calculation.profitMargin, 50)} 
                        className="h-2 mb-3"
                      />
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{calculation.recommendation}</AlertDescription>
                    </Alert>

                    <div className="flex gap-2 pt-4">
                      <Button onClick={exportResults} variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button onClick={shareResults} variant="outline" size="sm" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Enter selling price and cost price to see your profit analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profit Margin Benchmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Excellent</span>
                    <Badge className="bg-green-500 text-white">30%+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Good</span>
                    <Badge className="bg-blue-500 text-white">20-30%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fair</span>
                    <Badge className="bg-yellow-500 text-white">10-20%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Poor</span>
                    <Badge className="bg-red-500 text-white">&lt;10%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Averages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Electronics</span>
                    <span className="font-semibold">15-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fashion</span>
                    <span className="font-semibold">40-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Books</span>
                    <span className="font-semibold">10-15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health & Beauty</span>
                    <span className="font-semibold">25-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home & Garden</span>
                    <span className="font-semibold">20-35%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimization Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Increase Margins:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Bundle products together</li>
                      <li>• Add premium options</li>
                      <li>• Improve product value</li>
                      <li>• Negotiate better supplier rates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reduce Costs:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Optimize shipping methods</li>
                      <li>• Reduce platform fees</li>
                      <li>• Automate processes</li>
                      <li>• Buy in larger quantities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ECommerceCalculator;
