import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SIPCalculator from "@/components/calculators/SIPCalculator";

const SipCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="SIP Calculator" 
    description="Calculate SIP returns, maturity value, and wealth creation with our fast and accurate SIP calculator."
    calculatorType="investment"
    keywords="SIP calculator, systematic investment plan, mutual fund SIP, SIP returns, investment calculator, wealth creation"
  >
    <div className="max-w-3xl">
      <SIPCalculator />
    </div>
  </CalculatorPageLayout>
);

export default SipCalculatorPage;
