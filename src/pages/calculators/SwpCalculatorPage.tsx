import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SWPCalculator from "@/components/calculators/SWPCalculator";

const SwpCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="SWP Calculator" 
    description="Free SWP calculator for Systematic Withdrawal Plan. Calculate monthly withdrawals, remaining corpus, and tax impact on mutual fund investments."
    calculatorType="investment"
    keywords="SWP calculator, systematic withdrawal plan, mutual fund withdrawal, SWP returns, retirement income calculator"
  >
    <div className="max-w-3xl">
      <SWPCalculator />
    </div>
  </CalculatorPageLayout>
);

export default SwpCalculatorPage;
