import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import FDCalculator from "@/components/calculators/FDCalculator";

const FDCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="FD Calculator" description="Calculate fixed deposit maturity amounts and effective returns quickly.">
    <div className="max-w-3xl">
      <FDCalculator />
    </div>
  </CalculatorPageLayout>
);

export default FDCalculatorPage;
