import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import NpsCalculator from "@/components/calculators/NpsCalculator";

const NpsCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="NPS Calculator - National Pension Scheme Returns | Free Tool" 
    description="Calculate NPS pension corpus and monthly pension. Free NPS calculator for retirement planning and wealth creation. Try now!"
    calculatorType="investment"
    keywords="NPS calculator, national pension scheme, NPS returns, pension calculator, retirement planning, NPS corpus calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/nps"
  >
    <div className="max-w-3xl">
      <NpsCalculator />
    </div>
  </CalculatorPageLayout>
);

export default NpsCalculatorPage;
