import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import FDCalculator from "@/components/calculators/FDCalculator";

const FDCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="FD Calculator - Fixed Deposit Maturity Calculator | Free Tool" 
    description="Calculate FD maturity amount and interest earnings. Free fixed deposit calculator with accurate return projections. Try now!"
    calculatorType="investment"
    keywords="FD calculator, fixed deposit calculator, FD maturity, FD interest calculator, bank FD, deposit calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/fd"
  >
    <div className="max-w-3xl">
      <FDCalculator />
    </div>
  </CalculatorPageLayout>
);

export default FDCalculatorPage;
