import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, TrendingUp, Receipt, Percent } from "lucide-react";

const PercentageCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Percentage Calculator - Calculate Percentage Increase & Decrease" 
    description="Free percentage calculator for instant calculations. Find percentage increase, decrease, and ratio quickly. Easy-to-use tool!"
    calculatorType="utility"
    keywords="percentage calculator, calculate percentage, percentage increase, percentage decrease, percentage change, ratio calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/percentage"
  >
    <div className="max-w-3xl">
      <PercentageCalculator />
      
      <RelatedCalculators 
        calculators={[
          {
            title: "Scientific Calculator",
            description: "Advanced scientific calculations",
            icon: Calculator,
            link: "/calculators/scientific"
          },
          {
            title: "Compound Interest Calculator",
            description: "Calculate investment growth",
            icon: TrendingUp,
            link: "/calculators/compound-interest"
          },
          {
            title: "GST Calculator",
            description: "Calculate GST & tax amounts",
            icon: Receipt,
            link: "/calculators/gst"
          },
          {
            title: "EMI Calculator",
            description: "Calculate loan payments",
            icon: Percent,
            link: "/calculators/emi"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default PercentageCalculatorPage;
