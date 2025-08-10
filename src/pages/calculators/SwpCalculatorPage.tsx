import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SWPCalculator from "@/components/calculators/SWPCalculator";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";

const SwpCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="SWP Calculator" description="Calculate Systematic Withdrawal Plan amounts, tenure, and tax impact.">
    <LazyCalculatorWrapper>
      <SWPCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default SwpCalculatorPage;
