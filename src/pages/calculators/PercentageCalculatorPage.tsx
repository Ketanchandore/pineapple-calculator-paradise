import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";

const PercentageCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Percentage Calculator" description="Calculate percentage changes, increase/decrease, and ratios easily.">
    <LazyCalculatorWrapper>
      <PercentageCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default PercentageCalculatorPage;
