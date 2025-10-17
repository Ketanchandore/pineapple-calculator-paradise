import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";

const CompoundInterestCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Compound Interest Calculator" 
    description="Free compound interest calculator with charts. Calculate maturity value, growth over time, and compound returns for investments and savings."
    calculatorType="investment"
    keywords="compound interest calculator, compound interest, investment calculator, maturity value, interest calculator, savings calculator"
  >
    <div className="max-w-3xl">
      <CompoundInterestCalculator />
    </div>
  </CalculatorPageLayout>
);

export default CompoundInterestCalculatorPage;
