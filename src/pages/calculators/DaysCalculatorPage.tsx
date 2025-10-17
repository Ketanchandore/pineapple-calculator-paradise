import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import DaysCalculator from "@/components/calculators/DaysCalculator";

const DaysCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Days Calculator" 
    description="Free days calculator to find days between dates or add/subtract days. Calculate date difference, working days, and duration instantly."
    calculatorType="utility"
    keywords="days calculator, date calculator, days between dates, calculate days, date difference, working days calculator"
  >
    <div className="max-w-3xl">
      <DaysCalculator />
    </div>
  </CalculatorPageLayout>
);

export default DaysCalculatorPage;
