import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LoanCalculator from "@/components/calculators/LoanCalculator";

const LoanCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Loan Calculator" 
    description="Free loan calculator for instant EMI calculation. Compute monthly payments, total interest, and repayment schedules for all loan types."
    calculatorType="finance"
    keywords="loan calculator, EMI calculator, loan EMI, personal loan calculator, loan repayment, monthly payment calculator"
  >
    <div className="max-w-3xl">
      <LoanCalculator />
    </div>
  </CalculatorPageLayout>
);

export default LoanCalculatorPage;
