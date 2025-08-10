import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import EMICalculator from "@/components/calculators/EMICalculator";

const EMICalculatorPage = () => (
  <CalculatorPageLayout pageTitle="EMI Calculator" description="Calculate EMI, total interest, and loan payoff with our easy EMI calculator for all loan types.">
    <LazyCalculatorWrapper>
      <EMICalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default EMICalculatorPage;
