import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanEmiCalculator from "@/components/calculators/HomeLoanEmiCalculator";

const HomeLoanEmiCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Home Loan EMI Calculator" description="Compute your home loan EMI, interest outgo, and amortization schedule instantly with our accurate calculator.">
    <div className="max-w-3xl">
      <HomeLoanEmiCalculator />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanEmiCalculatorPage;
