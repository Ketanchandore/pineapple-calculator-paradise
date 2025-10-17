import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import FDCalculator from "@/components/calculators/FDCalculator";

const FDCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="FD Calculator" 
    description="Free fixed deposit calculator to calculate maturity amount and returns. Estimate FD interest, tenure, and total earnings instantly."
    calculatorType="investment"
    keywords="FD calculator, fixed deposit calculator, FD maturity, FD interest calculator, bank FD, deposit calculator"
  >
    <div className="max-w-3xl">
      <FDCalculator />
    </div>
  </CalculatorPageLayout>
);

export default FDCalculatorPage;
