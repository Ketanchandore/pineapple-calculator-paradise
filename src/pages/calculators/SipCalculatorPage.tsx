import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SIPCalculator from "@/components/calculators/SIPCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { TrendingUp, Landmark, Calculator, ArrowDownToLine } from "lucide-react";

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
      
      <RelatedCalculators 
        calculators={[
          {
            title: "Mutual Fund Calculator",
            description: "Calculate mutual fund returns",
            icon: TrendingUp,
            link: "/calculators/mutual-fund"
          },
          {
            title: "FD Calculator",
            description: "Calculate fixed deposit returns",
            icon: Landmark,
            link: "/calculators/fd"
          },
          {
            title: "Compound Interest Calculator",
            description: "Calculate compound interest",
            icon: Calculator,
            link: "/calculators/compound-interest"
          },
          {
            title: "SWP Calculator",
            description: "Calculate systematic withdrawal",
            icon: ArrowDownToLine,
            link: "/calculators/swp"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default SipCalculatorPage;
