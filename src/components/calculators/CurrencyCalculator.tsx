import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown, RefreshCw, TrendingUp, DollarSign, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ExchangeRates {
  [key: string]: number;
}

interface CurrencyInfo {
  code: string;
  name: string;
  flag: string;
}

const popularCurrencies: CurrencyInfo[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
  { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺' },
  { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰' },
  { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷' },
];

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rates, setRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      // Using a free exchange rate API (exchangerate.host)
      const response = await fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      setRates(data.rates);
      setLastUpdated(new Date());
      
      toast({
        title: "Rates Updated",
        description: "Exchange rates have been refreshed successfully.",
      });
    } catch (error) {
      // Fallback rates for demo purposes
      const fallbackRates: ExchangeRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110,
        CHF: 0.92,
        CAD: 1.25,
        AUD: 1.35,
        CNY: 6.45,
        INR: 74.5,
        BRL: 5.2,
        RUB: 75,
        KRW: 1180,
        SEK: 8.6,
        NOK: 8.5,
        SGD: 1.35,
        NZD: 1.42,
        MXN: 20.5,
        ZAR: 14.8,
        HKD: 7.8,
        TRY: 8.5,
      };
      
      setRates(fallbackRates);
      setLastUpdated(new Date());
      
      toast({
        title: "Using Demo Rates",
        description: "Could not fetch live rates. Using demo data for calculation.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency] && amount) {
      const result = parseFloat(amount) * rates[toCurrency];
      setConvertedAmount(result);
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleShare = async () => {
    if (convertedAmount === null) return;

    const fromCurrencyInfo = popularCurrencies.find(c => c.code === fromCurrency);
    const toCurrencyInfo = popularCurrencies.find(c => c.code === toCurrency);
    
    const shareText = `Currency Conversion:
${fromCurrencyInfo?.flag} ${amount} ${fromCurrency} = ${toCurrencyInfo?.flag} ${convertedAmount.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 4 
})} ${toCurrency}

Rate: 1 ${fromCurrency} = ${rates[toCurrency]?.toFixed(4)} ${toCurrency}
Updated: ${lastUpdated?.toLocaleString()}

Calculated on PineappleHub.com`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Currency Conversion Results',
          text: shareText,
        });
      } catch (error) {
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

  const formatCurrency = (value: number, currencyCode: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(value);
  };

  const CurrencySelect = ({ 
    value, 
    onValueChange, 
    label 
  }: { 
    value: string; 
    onValueChange: (value: string) => void; 
    label: string;
  }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue>
            {(() => {
              const currency = popularCurrencies.find(c => c.code === value);
              return currency ? `${currency.flag} ${currency.code} - ${currency.name}` : value;
            })()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {popularCurrencies.map((currency) => (
            <SelectItem key={currency.code} value={currency.code}>
              <div className="flex items-center gap-2">
                <span>{currency.flag}</span>
                <span className="font-medium">{currency.code}</span>
                <span className="text-muted-foreground">- {currency.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <DollarSign className="h-6 w-6 text-primary" />
            Currency Converter
          </CardTitle>
          <p className="text-muted-foreground">Convert between world currencies with live exchange rates</p>
          {lastUpdated && (
            <Badge variant="outline" className="mx-auto">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </Badge>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to convert"
              className="text-lg text-center font-medium"
            />
          </div>

          {/* Currency Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <CurrencySelect
              value={fromCurrency}
              onValueChange={setFromCurrency}
              label="From"
            />

            <CurrencySelect
              value={toCurrency}
              onValueChange={setToCurrency}
              label="To"
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button 
              onClick={swapCurrencies} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
            >
              <ArrowUpDown className="h-4 w-4" />
              Swap
            </Button>
          </div>

          {/* Result */}
          {convertedAmount !== null && (
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-lg">
                    {(() => {
                      const fromCurrencyInfo = popularCurrencies.find(c => c.code === fromCurrency);
                      return (
                        <span className="flex items-center justify-center gap-2">
                          <span>{fromCurrencyInfo?.flag}</span>
                          <span className="font-medium">{amount} {fromCurrency}</span>
                        </span>
                      );
                    })()}
                  </div>
                  <div className="text-sm text-muted-foreground">=</div>
                  <div className="text-3xl font-bold text-primary">
                    {(() => {
                      const toCurrencyInfo = popularCurrencies.find(c => c.code === toCurrency);
                      return (
                        <span className="flex items-center justify-center gap-2">
                          <span>{toCurrencyInfo?.flag}</span>
                          <span>{convertedAmount.toLocaleString('en-US', { 
                            minimumFractionDigits: 2, 
                            maximumFractionDigits: 4 
                          })} {toCurrency}</span>
                        </span>
                      );
                    })()}
                  </div>
                  {rates[toCurrency] && (
                    <div className="text-sm text-muted-foreground">
                      1 {fromCurrency} = {rates[toCurrency].toFixed(4)} {toCurrency}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              onClick={fetchExchangeRates} 
              disabled={loading}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Rates
            </Button>
            {convertedAmount !== null && (
              <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            )}
          </div>

          {/* Popular Currency Pairs */}
          <div className="space-y-3">
            <h4 className="font-semibold text-center">Quick Conversions</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {[
                ['USD', 'EUR'], ['EUR', 'USD'], ['GBP', 'USD'],
                ['USD', 'JPY'], ['USD', 'INR'], ['EUR', 'GBP']
              ].map(([from, to], index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setFromCurrency(from);
                    setToCurrency(to);
                  }}
                  className="text-xs justify-start"
                >
                  {popularCurrencies.find(c => c.code === from)?.flag} {from} → {popularCurrencies.find(c => c.code === to)?.flag} {to}
                </Button>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>Exchange rates are indicative and may differ from actual market rates.</p>
            <p>For financial decisions, please consult current bank rates.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrencyCalculator;