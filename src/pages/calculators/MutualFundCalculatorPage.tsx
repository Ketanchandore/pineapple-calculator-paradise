import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import MutualFundCalculator from "@/components/calculators/MutualFundCalculator";

const MutualFundCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Mutual Fund Calculator - SIP & Lumpsum Returns | Free Tool" 
    description="Calculate mutual fund returns, SIP growth, and wealth creation. Free MF calculator with accurate return projections. Try now!"
    calculatorType="investment"
    keywords="mutual fund calculator, MF calculator, SIP returns, lumpsum calculator, mutual fund returns, investment calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/mutual-fund"
  >
    <div className="max-w-3xl">
      <MutualFundCalculator />
    </div>
  </CalculatorPageLayout>
);

export default MutualFundCalculatorPage;
