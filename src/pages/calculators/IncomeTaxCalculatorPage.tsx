import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";

const IncomeTaxCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Income Tax Calculator" 
    description="Free income tax calculator for instant tax liability calculation. Compare old vs new tax regime. Calculate your tax savings online now!"
    calculatorType="finance"
    keywords="income tax calculator, tax calculator, tax liability, old regime, new regime, tax savings, IT calculator"
  >
    <div className="max-w-3xl">
      <IncomeTaxCalculator />
    </div>
  </CalculatorPageLayout>
);

export default IncomeTaxCalculatorPage;
