import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import EMICalculator from "@/components/calculators/EMICalculator";

const EMICalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="EMI Calculator" 
    description="Calculate EMI, total interest, and loan payoff with our easy EMI calculator for all loan types."
    calculatorType="finance"
    keywords="EMI calculator, loan EMI, equated monthly installment, loan calculator, interest calculator, monthly payment"
  >
    <div className="max-w-3xl">
      <EMICalculator />
    </div>
  </CalculatorPageLayout>
);

export default EMICalculatorPage;
