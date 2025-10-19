import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import GstCalculator from "@/components/calculators/GstCalculator";

const GstCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="GST Calculator India - Goods and Services Tax Calculator | Free Tool" 
    description="Calculate GST inclusive and exclusive amounts instantly. Free GST calculator India with complete tax breakdown. Try now!"
    calculatorType="finance"
    keywords="GST calculator, goods and services tax, GST calculation, tax calculator India, GST inclusive, GST exclusive"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/gst"
  >
    <div className="max-w-3xl">
      <GstCalculator />
    </div>
  </CalculatorPageLayout>
);

export default GstCalculatorPage;
