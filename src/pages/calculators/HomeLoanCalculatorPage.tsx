import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";

const HomeLoanCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Home Loan Calculator" 
    description="Free home loan calculator with instant EMI results. Calculate monthly payments, total interest, and repayment schedule for your dream home."
    calculatorType="finance"
    keywords="home loan calculator, home loan EMI, housing loan, mortgage EMI, loan repayment, home finance calculator"
  >
    <div className="max-w-3xl">
      <HomeLoanCalculator />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanCalculatorPage;
