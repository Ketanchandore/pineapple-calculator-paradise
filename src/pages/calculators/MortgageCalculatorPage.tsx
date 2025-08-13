import { SEOHead } from "@/components/SEOHead";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import MortgageCalculator from "@/components/calculators/MortgageCalculator";

const MortgageCalculatorPage = () => {
  const faqItems = [
    {
      question: "How is my monthly mortgage payment calculated?",
      answer: "Your monthly payment includes Principal & Interest (P&I), property taxes, homeowners insurance, and PMI if applicable. The P&I is calculated using the loan amount, interest rate, and loan term using the standard amortization formula."
    },
    {
      question: "What is PMI and when do I need it?",
      answer: "PMI (Private Mortgage Insurance) is typically required when your down payment is less than 20% of the home's value. It protects the lender if you default on the loan. PMI can usually be removed once you have 20% equity in your home."
    },
    {
      question: "Should I choose a 15-year or 30-year mortgage?",
      answer: "A 15-year mortgage has higher monthly payments but lower total interest costs and builds equity faster. A 30-year mortgage has lower monthly payments but costs more in total interest. Choose based on your budget and long-term financial goals."
    },
    {
      question: "How much house can I afford?",
      answer: "Generally, your total monthly housing costs shouldn't exceed 28% of your gross monthly income. This includes mortgage payment, taxes, insurance, and PMI. Consider your other debts and expenses when determining affordability."
    },
    {
      question: "What is an amortization schedule?",
      answer: "An amortization schedule shows how each mortgage payment is split between principal and interest over the life of the loan. Early payments are mostly interest, while later payments are mostly principal."
    },
    {
      question: "How do property taxes affect my payment?",
      answer: "Property taxes are typically collected monthly as part of your mortgage payment and held in an escrow account. The lender pays your annual property tax bill from this account. Tax amounts vary by location and property value."
    },
    {
      question: "Can I pay off my mortgage early?",
      answer: "Yes, most mortgages allow early payoff. You can make extra principal payments or pay bi-weekly instead of monthly. Check your loan terms for any prepayment penalties before making extra payments."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mortgage Calculator",
    "applicationCategory": "FinanceApplication",
    "description": "Calculate monthly mortgage payments, total interest, and view amortization schedules. Includes property taxes, insurance, and PMI calculations.",
    "url": "https://pineapplehub.com/calculators/mortgage",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Monthly payment calculation",
      "Amortization schedule",
      "Property tax and insurance inclusion",
      "PMI calculation",
      "Total interest calculation",
      "Payoff date estimation",
      "Loan comparison tools"
    ]
  };

  return (
    <>
      <SEOHead
        title="Mortgage Calculator - Monthly Payment & Amortization Schedule | PineappleHub"
        description="Calculate your monthly mortgage payment, view amortization schedule, and estimate total costs. Includes property taxes, insurance, and PMI. Free mortgage calculator with detailed breakdown."
        keywords="mortgage calculator, home loan calculator, monthly payment calculator, amortization schedule, mortgage payment, home buying calculator, loan calculator, real estate calculator"
        canonicalUrl="https://pineapplehub.com/calculators/mortgage"
        structuredData={structuredData}
      />
      <CalculatorPageLayout
        pageTitle="Mortgage Calculator"
        description="Calculate your monthly mortgage payment including principal, interest, taxes, insurance, and PMI. View detailed amortization schedules and total loan costs to make informed home buying decisions."
        faqItems={faqItems}
      >
        <LazyCalculatorWrapper>
          <MortgageCalculator />
        </LazyCalculatorWrapper>
      </CalculatorPageLayout>
    </>
  );
};

export default MortgageCalculatorPage;