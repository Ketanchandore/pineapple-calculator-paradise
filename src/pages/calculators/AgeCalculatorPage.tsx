import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import AgeCalculator from "@/components/calculators/AgeCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calendar, Baby, Clock, HeartPulse } from "lucide-react";

const AgeCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Age Calculator - Calculate Your Exact Age | Free Online Tool" 
    description="Calculate exact age in years, months, days, hours, and seconds. Free age calculator with birthday countdown. Try now!"
    calculatorType="age"
    keywords="age calculator, calculate age, years months days, exact age, birthday calculator, age in days"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/age"
  >
    <div className="max-w-3xl">
      <AgeCalculator />
      
      <RelatedCalculators 
        calculators={[
          {
            title: "Date Calculator",
            description: "Calculate dates and durations",
            icon: Calendar,
            link: "/calculators/date"
          },
          {
            title: "Pregnancy Calculator",
            description: "Calculate pregnancy due date",
            icon: Baby,
            link: "/calculators/pregnancy"
          },
          {
            title: "Days Calculator",
            description: "Calculate days between dates",
            icon: Clock,
            link: "/calculators/days"
          },
          {
            title: "BMI Calculator",
            description: "Calculate Body Mass Index",
            icon: HeartPulse,
            link: "/calculators/bmi"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default AgeCalculatorPage;
