import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";

const PercentageCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Percentage Calculator" description="Calculate percentage changes, increase/decrease, and ratios easily.">
    <div className="max-w-3xl">
      <PercentageCalculator />
    </div>
  </CalculatorPageLayout>
);

export default PercentageCalculatorPage;
