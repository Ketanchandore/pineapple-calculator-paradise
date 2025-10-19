import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import EMICalculator from "@/components/calculators/EMICalculator";

const EMICalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="EMI Calculator - Loan EMI Calculator India | Calculate Monthly Payments" 
    description="Calculate loan EMI, total interest, and repayment schedule. Free EMI calculator for home loans, car loans, personal loans."
    calculatorType="finance"
    keywords="EMI calculator, loan EMI, equated monthly installment, loan calculator, interest calculator, monthly payment"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/emi"
  >
    <div className="max-w-3xl">
      <EMICalculator />
    </div>
  </CalculatorPageLayout>
);

export default EMICalculatorPage;
