import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import MutualFundCalculator from "@/components/calculators/MutualFundCalculator";

const MutualFundCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Mutual Fund Calculator" 
    description="Free mutual fund calculator to estimate returns, SIP growth, and wealth creation. Calculate lumpsum and SIP returns with accurate projections."
    calculatorType="investment"
    keywords="mutual fund calculator, MF calculator, SIP returns, lumpsum calculator, mutual fund returns, investment calculator"
  >
    <div className="max-w-3xl">
      <MutualFundCalculator />
    </div>
  </CalculatorPageLayout>
);

export default MutualFundCalculatorPage;
