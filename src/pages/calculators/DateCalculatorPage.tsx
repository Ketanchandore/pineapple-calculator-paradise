import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import DateCalculator from "@/components/calculators/DateCalculator";

const DateCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Date Calculator - Calculate Date Difference | Free Online Tool" 
    description="Calculate date differences, add/subtract days instantly. Free date calculator for business days and duration. Try now!"
    calculatorType="utility"
    keywords="date calculator, calculate dates, date difference, add days, subtract days, duration calculator, business days"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/date"
  >
    <div className="max-w-3xl">
      <DateCalculator />
    </div>
  </CalculatorPageLayout>
);

export default DateCalculatorPage;
