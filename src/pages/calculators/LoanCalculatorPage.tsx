import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import LoanCalculator from "@/components/calculators/LoanCalculator";

const LoanCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Loan Calculator" description="Compute loan EMI, interest, and repayment schedules for any loan.">
    <LazyCalculatorWrapper>
      <LoanCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default LoanCalculatorPage;
