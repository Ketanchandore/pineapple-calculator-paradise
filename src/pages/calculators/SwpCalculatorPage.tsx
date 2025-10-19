import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SWPCalculator from "@/components/calculators/SWPCalculator";

const SwpCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="SWP Calculator - Systematic Withdrawal Plan | Free Tool" 
    description="Calculate SWP withdrawals and remaining corpus. Free systematic withdrawal plan calculator for retirement income. Try now!"
    calculatorType="investment"
    keywords="SWP calculator, systematic withdrawal plan, mutual fund withdrawal, SWP returns, retirement income calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/swp"
  >
    <div className="max-w-3xl">
      <SWPCalculator />
    </div>
  </CalculatorPageLayout>
);

export default SwpCalculatorPage;
