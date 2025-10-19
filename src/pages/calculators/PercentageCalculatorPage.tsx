import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";

const PercentageCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Percentage Calculator - Calculate Percentage Increase & Decrease" 
    description="Free percentage calculator for instant calculations. Find percentage increase, decrease, and ratio quickly. Easy-to-use tool!"
    calculatorType="utility"
    keywords="percentage calculator, calculate percentage, percentage increase, percentage decrease, percentage change, ratio calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/percentage"
  >
    <div className="max-w-3xl">
      <PercentageCalculator />
    </div>
  </CalculatorPageLayout>
);

export default PercentageCalculatorPage;
