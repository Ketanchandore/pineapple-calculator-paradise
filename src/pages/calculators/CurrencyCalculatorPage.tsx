import { SEOHead } from "@/components/SEOHead";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import CurrencyCalculator from "@/components/calculators/CurrencyCalculator";

const CurrencyCalculatorPage = () => {
  const faqItems = [
    {
      question: "How often are exchange rates updated?",
      answer: "Our currency exchange rates are fetched from live API sources and update in real-time when you use the calculator. For the most current rates, click the 'Refresh Rates' button to get the latest exchange rate data."
    },
    {
      question: "Which currencies are supported?",
      answer: "We support 20+ major world currencies including USD, EUR, GBP, JPY, CHF, CAD, AUD, CNY, INR, BRL, and many more. All major trading currencies and popular international currencies are available."
    },
    {
      question: "Are the exchange rates accurate for financial transactions?",
      answer: "Our rates are indicative and great for estimates, but actual bank and financial institution rates may differ due to spreads, fees, and timing. For official transactions, always check with your bank or financial provider."
    },
    {
      question: "Can I convert between any two currencies?",
      answer: "Yes! You can convert between any of the supported currencies. Use the dropdown menus to select your source and target currencies, or click the swap button to reverse the conversion quickly."
    },
    {
      question: "What factors affect exchange rates?",
      answer: "Exchange rates fluctuate based on economic indicators, interest rates, inflation, political stability, trade balances, and market speculation. Rates can change multiple times throughout the day."
    },
    {
      question: "How do I use the currency converter?",
      answer: "Simply enter the amount you want to convert, select the source currency (what you have), select the target currency (what you want), and the conversion will happen automatically. Use the swap button to reverse currencies quickly."
    },
    {
      question: "Is this currency converter free to use?",
      answer: "Yes, our currency converter is completely free to use with no limits on conversions. You can perform unlimited currency calculations and access real-time exchange rates at no cost."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Currency Converter",
    "applicationCategory": "FinanceApplication",
    "description": "Free online currency converter with live exchange rates for 20+ world currencies. Convert between USD, EUR, GBP, JPY, and more instantly.",
    "url": "https://pineapplehub.com/calculators/currency",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Live exchange rates",
      "20+ world currencies",
      "Real-time conversion",
      "Currency swap function",
      "Historical rate display",
      "Mobile-friendly interface",
      "Share conversion results"
    ]
  };

  return (
    <>
      <SEOHead
        title="Currency Converter - Live Exchange Rates | PineappleHub"
        description="Free online currency converter with live exchange rates. Convert between USD, EUR, GBP, JPY, INR and 20+ world currencies instantly. Real-time forex calculator with accurate rates."
        keywords="currency converter, exchange rate calculator, forex converter, live exchange rates, currency exchange, money converter, international currency, USD EUR GBP converter"
        canonicalUrl="https://pineapplehub.com/calculators/currency"
        structuredData={structuredData}
      />
      <CalculatorPageLayout
        pageTitle="Currency Converter"
        description="Convert between world currencies with live exchange rates. Get instant conversions for USD, EUR, GBP, JPY, INR and 20+ major currencies. Perfect for travelers, businesses, and international transactions."
        faqItems={faqItems}
      >
        <LazyCalculatorWrapper>
          <CurrencyCalculator />
        </LazyCalculatorWrapper>
      </CalculatorPageLayout>
    </>
  );
};

export default CurrencyCalculatorPage;