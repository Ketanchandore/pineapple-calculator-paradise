import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import MutualFundCalculator from "@/components/calculators/MutualFundCalculator";

const MutualFundCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Mutual Fund Calculator" description="Estimate mutual fund returns, SIP growth, and wealth creation.">
    <LazyCalculatorWrapper>
      <MutualFundCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default MutualFundCalculatorPage;
