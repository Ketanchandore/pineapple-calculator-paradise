import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";

const CompoundInterestCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Compound Interest Calculator - Calculate Investment Returns | Free" 
    description="Calculate compound interest with charts. Free calculator for investment maturity value and growth projections. Try now!"
    calculatorType="investment"
    keywords="compound interest calculator, compound interest, investment calculator, maturity value, interest calculator, savings calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/compound-interest"
  >
    <div className="max-w-3xl">
      <CompoundInterestCalculator />
    </div>
  </CalculatorPageLayout>
);

export default CompoundInterestCalculatorPage;
