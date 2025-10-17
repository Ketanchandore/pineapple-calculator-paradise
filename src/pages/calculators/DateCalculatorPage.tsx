import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import DateCalculator from "@/components/calculators/DateCalculator";

const DateCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Date Calculator" 
    description="Free date calculator to find date differences, add/subtract days, and calculate exact duration. Easy online date calculation tool."
    calculatorType="utility"
    keywords="date calculator, calculate dates, date difference, add days, subtract days, duration calculator, business days"
  >
    <div className="max-w-3xl">
      <DateCalculator />
    </div>
  </CalculatorPageLayout>
);

export default DateCalculatorPage;
