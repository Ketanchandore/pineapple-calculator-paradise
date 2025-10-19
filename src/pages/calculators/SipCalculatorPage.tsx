import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SIPCalculator from "@/components/calculators/SIPCalculator";

const SipCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="SIP Calculator - Systematic Investment Plan Returns | Free Online Tool" 
    description="Calculate SIP returns, wealth creation, and maturity value. Free SIP calculator with accurate projections for mutual fund investments."
    calculatorType="investment"
    keywords="SIP calculator, systematic investment plan, mutual fund SIP, SIP returns, investment calculator, wealth creation"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/sip"
  >
    <div className="max-w-3xl">
      <SIPCalculator />
    </div>
  </CalculatorPageLayout>
);

export default SipCalculatorPage;
