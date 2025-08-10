import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";

const HomeLoanCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Home Loan Calculator" description="Estimate home loan EMI, interest, and repayment schedule accurately.">
    <LazyCalculatorWrapper>
      <HomeLoanCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default HomeLoanCalculatorPage;
