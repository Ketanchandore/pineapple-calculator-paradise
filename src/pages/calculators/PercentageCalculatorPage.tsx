import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";

const PercentageCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Percentage Calculator" 
    description="Free percentage calculator for instant calculations. Find percentage increase, decrease, change, and ratio. Easy online percentage tool."
    calculatorType="utility"
    keywords="percentage calculator, calculate percentage, percentage increase, percentage decrease, percentage change, ratio calculator"
  >
    <div className="max-w-3xl">
      <PercentageCalculator />
    </div>
  </CalculatorPageLayout>
);

export default PercentageCalculatorPage;
