import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";

const CompoundInterestCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Compound Interest Calculator" description="Calculate compound interest, maturity value, and growth over time with charts and instant results.">
    <LazyCalculatorWrapper>
      <CompoundInterestCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default CompoundInterestCalculatorPage;
