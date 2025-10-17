import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import GstCalculator from "@/components/calculators/GstCalculator";

const GstCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="GST Calculator" description="Calculate GST inclusive/exclusive amounts and tax breakdowns instantly.">
    <div className="max-w-3xl">
      <GstCalculator />
    </div>
  </CalculatorPageLayout>
);

export default GstCalculatorPage;
