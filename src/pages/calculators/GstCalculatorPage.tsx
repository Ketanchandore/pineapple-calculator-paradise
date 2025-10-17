import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import GstCalculator from "@/components/calculators/GstCalculator";

const GstCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="GST Calculator" 
    description="Free GST calculator for instant tax calculation. Calculate GST inclusive, exclusive amounts, and complete tax breakdowns for India."
    calculatorType="finance"
    keywords="GST calculator, goods and services tax, GST calculation, tax calculator India, GST inclusive, GST exclusive"
  >
    <div className="max-w-3xl">
      <GstCalculator />
    </div>
  </CalculatorPageLayout>
);

export default GstCalculatorPage;
