import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";

const IncomeTaxCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Income Tax Calculator" description="Calculate income tax liability under old and new regimes instantly.">
    <div className="max-w-3xl">
      <IncomeTaxCalculator />
    </div>
  </CalculatorPageLayout>
);

export default IncomeTaxCalculatorPage;
