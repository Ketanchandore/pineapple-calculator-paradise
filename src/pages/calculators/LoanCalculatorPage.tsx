import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LoanCalculator from "@/components/calculators/LoanCalculator";

const LoanCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Loan Calculator - Personal Loan EMI Calculator | Free Tool" 
    description="Calculate loan EMI, interest, and repayment schedule instantly. Free loan calculator for personal, car, home loans. Try now!"
    calculatorType="finance"
    keywords="loan calculator, EMI calculator, loan EMI, personal loan calculator, loan repayment, monthly payment calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/loan"
  >
    <div className="max-w-3xl">
      <LoanCalculator />
    </div>
  </CalculatorPageLayout>
);

export default LoanCalculatorPage;
