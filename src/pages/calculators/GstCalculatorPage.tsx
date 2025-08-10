import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import GstCalculator from "@/components/calculators/GstCalculator";

const GstCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="GST Calculator" description="Calculate GST inclusive/exclusive amounts and tax breakdowns instantly.">
    <LazyCalculatorWrapper>
      <GstCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default GstCalculatorPage;
