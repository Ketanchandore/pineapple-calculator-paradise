import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Building, Percent, Landmark } from "lucide-react";

const HomeLoanCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Home Loan Calculator India - EMI Calculator | Free Tool" 
    description="Calculate home loan EMI, interest, and repayment schedule. Free housing loan calculator for your dream home. Get instant results!"
    calculatorType="finance"
    keywords="home loan calculator, home loan EMI, housing loan, mortgage EMI, loan repayment, home finance calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/home-loan"
  >
    <div className="max-w-3xl">
      <HomeLoanCalculator />
      
      <RelatedCalculators 
        calculators={[
          {
            title: "EMI Calculator",
            description: "Calculate loan EMI easily",
            icon: Calculator,
            link: "/calculators/emi"
          },
          {
            title: "Mortgage Calculator",
            description: "Calculate mortgage payments",
            icon: Building,
            link: "/calculators/mortgage"
          },
          {
            title: "Compound Interest Calculator",
            description: "Calculate compound interest",
            icon: Percent,
            link: "/calculators/compound-interest"
          },
          {
            title: "FD Calculator",
            description: "Calculate fixed deposit returns",
            icon: Landmark,
            link: "/calculators/fd"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default HomeLoanCalculatorPage;
