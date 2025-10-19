import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import DaysCalculator from "@/components/calculators/DaysCalculator";

const DaysCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Days Calculator - Calculate Days Between Dates | Free Tool" 
    description="Calculate days between dates and working days instantly. Free days calculator for date differences and duration. Try now!"
    calculatorType="utility"
    keywords="days calculator, date calculator, days between dates, calculate days, date difference, working days calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/days"
  >
    <div className="max-w-3xl">
      <DaysCalculator />
    </div>
  </CalculatorPageLayout>
);

export default DaysCalculatorPage;
