import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LoanCalculator from "@/components/calculators/LoanCalculator";

const LoanCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Loan Calculator" description="Compute loan EMI, interest, and repayment schedules for any loan.">
    <div className="max-w-3xl">
      <LoanCalculator />
    </div>
  </CalculatorPageLayout>
);

export default LoanCalculatorPage;
