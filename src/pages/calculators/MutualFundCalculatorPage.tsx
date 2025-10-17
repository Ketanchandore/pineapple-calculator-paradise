import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import MutualFundCalculator from "@/components/calculators/MutualFundCalculator";

const MutualFundCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Mutual Fund Calculator" description="Estimate mutual fund returns, SIP growth, and wealth creation.">
    <div className="max-w-3xl">
      <MutualFundCalculator />
    </div>
  </CalculatorPageLayout>
);

export default MutualFundCalculatorPage;
