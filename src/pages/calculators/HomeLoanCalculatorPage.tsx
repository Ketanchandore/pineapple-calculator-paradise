import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";

const HomeLoanCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Home Loan Calculator India - EMI Calculator | Free Tool" 
    description="Calculate home loan EMI, interest, and repayment schedule. Free housing loan calculator for your dream home. Get instant results!"
    calculatorType="finance"
    keywords="home loan calculator, home loan EMI, housing loan, mortgage EMI, loan repayment, home finance calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/home-loan"
  >
    <div className="max-w-3xl">
      <HomeLoanCalculator />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanCalculatorPage;
