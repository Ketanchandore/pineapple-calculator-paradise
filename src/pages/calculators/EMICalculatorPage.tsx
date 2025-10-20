import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import EMICalculator from "@/components/calculators/EMICalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Home, Calculator, Percent, Building } from "lucide-react";

const EMICalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="EMI Calculator - Loan EMI Calculator India | Calculate Monthly Payments" 
    description="Calculate loan EMI, total interest, and repayment schedule. Free EMI calculator for home loans, car loans, personal loans."
    calculatorType="finance"
    keywords="EMI calculator, loan EMI, equated monthly installment, loan calculator, interest calculator, monthly payment"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/emi"
  >
    <div className="max-w-3xl">
      <EMICalculator />
      
      <RelatedCalculators 
        calculators={[
          {
            title: "Home Loan Calculator",
            description: "Calculate home loan EMI & eligibility",
            icon: Home,
            link: "/calculators/home-loan"
          },
          {
            title: "Loan Calculator",
            description: "Calculate personal loan payments",
            icon: Calculator,
            link: "/calculators/loan"
          },
          {
            title: "Compound Interest Calculator",
            description: "Calculate compound interest",
            icon: Percent,
            link: "/calculators/compound-interest"
          },
          {
            title: "Mortgage Calculator",
            description: "Calculate mortgage payments",
            icon: Building,
            link: "/calculators/mortgage"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default EMICalculatorPage;
