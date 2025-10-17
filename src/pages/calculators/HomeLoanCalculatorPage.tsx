import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";

const HomeLoanCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Home Loan Calculator" description="Estimate home loan EMI, interest, and repayment schedule accurately.">
    <div className="max-w-3xl">
      <HomeLoanCalculator />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanCalculatorPage;
