import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import GstCalculator from "@/components/calculators/GstCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Percent, Calculator, Receipt, TrendingUp } from "lucide-react";

const GstCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="GST Calculator India - Goods and Services Tax Calculator | Free Tool" 
    description="Calculate GST inclusive and exclusive amounts instantly. Free GST calculator India with complete tax breakdown. Try now!"
    calculatorType="finance"
    keywords="GST calculator, goods and services tax, GST calculation, tax calculator India, GST inclusive, GST exclusive"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/gst"
  >
    <div className="max-w-3xl">
      <GstCalculator />
      
      <RelatedCalculators 
        calculators={[
          {
            title: "Percentage Calculator",
            description: "Calculate percentages easily",
            icon: Percent,
            link: "/calculators/percentage"
          },
          {
            title: "Income Tax Calculator",
            description: "Calculate income tax liability",
            icon: Calculator,
            link: "/calculators/income-tax"
          },
          {
            title: "E-Commerce Calculator",
            description: "Calculate e-commerce margins",
            icon: Receipt,
            link: "/calculators/ecommerce"
          },
          {
            title: "SIP Calculator",
            description: "Calculate mutual fund SIP returns",
            icon: TrendingUp,
            link: "/calculators/sip"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default GstCalculatorPage;
