import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import HomeLoanEmiCalculator from "@/components/calculators/HomeLoanEmiCalculator";

const HomeLoanEmiCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Home Loan EMI Calculator" description="Compute your home loan EMI, interest outgo, and amortization schedule instantly with our accurate calculator.">
    <LazyCalculatorWrapper>
      <HomeLoanEmiCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default HomeLoanEmiCalculatorPage;
