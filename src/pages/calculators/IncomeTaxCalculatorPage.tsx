import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";

const IncomeTaxCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Income Tax Calculator India 2024-25 | Old vs New Regime" 
    description="Calculate income tax liability instantly. Free tax calculator India with old vs new regime comparison. Maximize savings now!"
    calculatorType="finance"
    keywords="income tax calculator, tax calculator, tax liability, old regime, new regime, tax savings, IT calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/income-tax"
  >
    <div className="max-w-3xl">
      <IncomeTaxCalculator />
    </div>
  </CalculatorPageLayout>
);

export default IncomeTaxCalculatorPage;
