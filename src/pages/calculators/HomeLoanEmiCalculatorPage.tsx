import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanEmiCalculator from "@/components/calculators/HomeLoanEmiCalculator";

const HomeLoanEmiCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Home Loan EMI Calculator" 
    description="Free home loan EMI calculator with instant results. Compute monthly EMI, interest amount, and complete amortization schedule for housing loans."
    calculatorType="finance"
    keywords="home loan EMI calculator, housing loan EMI, EMI calculation, home loan repayment, amortization schedule, loan EMI"
  >
    <div className="max-w-3xl">
      <HomeLoanEmiCalculator />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanEmiCalculatorPage;
