import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import FDCalculator from "@/components/calculators/FDCalculator";

const FDCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="FD Calculator" description="Calculate fixed deposit maturity amounts and effective returns quickly.">
    <LazyCalculatorWrapper>
      <FDCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default FDCalculatorPage;
