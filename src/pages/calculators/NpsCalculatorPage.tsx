import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import NpsCalculator from "@/components/calculators/NpsCalculator";

const NpsCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="NPS Calculator" 
    description="Free NPS calculator to project your pension corpus and monthly pension. Calculate National Pension Scheme returns and retirement savings instantly."
    calculatorType="investment"
    keywords="NPS calculator, national pension scheme, NPS returns, pension calculator, retirement planning, NPS corpus calculator"
  >
    <div className="max-w-3xl">
      <NpsCalculator />
    </div>
  </CalculatorPageLayout>
);

export default NpsCalculatorPage;
