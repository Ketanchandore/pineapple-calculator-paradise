import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import SIPCalculator from "@/components/calculators/SIPCalculator";

const SipCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="SIP Calculator" description="Calculate SIP returns, maturity value, and wealth creation with our fast and accurate SIP calculator.">
    <LazyCalculatorWrapper>
      <SIPCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default SipCalculatorPage;
