import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SWPCalculator from "@/components/calculators/SWPCalculator";

const SwpCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="SWP Calculator" description="Calculate Systematic Withdrawal Plan amounts, tenure, and tax impact.">
    <div className="max-w-3xl">
      <SWPCalculator />
    </div>
  </CalculatorPageLayout>
);

export default SwpCalculatorPage;
