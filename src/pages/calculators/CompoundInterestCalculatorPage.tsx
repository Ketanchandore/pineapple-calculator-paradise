import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";

const CompoundInterestCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Compound Interest Calculator" description="Calculate compound interest, maturity value, and growth over time with charts and instant results.">
    <div className="max-w-3xl">
      <CompoundInterestCalculator />
    </div>
  </CalculatorPageLayout>
);

export default CompoundInterestCalculatorPage;
