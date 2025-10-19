import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanEmiCalculator from "@/components/calculators/HomeLoanEmiCalculator";

const HomeLoanEmiCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Home Loan EMI Calculator - Housing Loan EMI | Free Tool" 
    description="Calculate home loan EMI with amortization schedule. Free housing loan calculator for accurate monthly payments. Try now!"
    calculatorType="finance"
    keywords="home loan EMI calculator, housing loan EMI, EMI calculation, home loan repayment, amortization schedule, loan EMI"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/home-loan-emi"
  >
    <div className="max-w-3xl">
      <HomeLoanEmiCalculator />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanEmiCalculatorPage;
