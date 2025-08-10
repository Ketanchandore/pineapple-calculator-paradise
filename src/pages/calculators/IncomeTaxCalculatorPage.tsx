import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";

const IncomeTaxCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Income Tax Calculator" description="Calculate income tax liability under old and new regimes instantly.">
    <LazyCalculatorWrapper>
      <IncomeTaxCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default IncomeTaxCalculatorPage;
