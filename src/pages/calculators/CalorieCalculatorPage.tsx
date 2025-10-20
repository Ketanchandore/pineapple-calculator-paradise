import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Scale, Activity, HeartPulse, Baby } from "lucide-react";

const CalorieCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Calorie Calculator - Daily Calorie Needs & TDEE | Free Calculator" 
    description="Calculate daily calorie needs for weight loss or gain. Free TDEE calculator with personalized nutrition recommendations. Try now!"
    calculatorType="health"
    keywords="calorie calculator, TDEE calculator, daily calorie needs, BMR calculator, weight loss calculator, calorie deficit"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/calorie"
  >
    <div className="max-w-3xl">
      <CalorieCalculator />
      
      <RelatedCalculators 
        calculators={[
          {
            title: "BMI Calculator",
            description: "Calculate Body Mass Index",
            icon: Scale,
            link: "/calculators/bmi"
          },
          {
            title: "BMR Calculator",
            description: "Calculate Basal Metabolic Rate",
            icon: Activity,
            link: "/calculators/bmr"
          },
          {
            title: "Age Calculator",
            description: "Calculate exact age in years",
            icon: HeartPulse,
            link: "/calculators/age"
          },
          {
            title: "Pregnancy Calculator",
            description: "Calculate pregnancy due date",
            icon: Baby,
            link: "/calculators/pregnancy"
          }
        ]}
      />
    </div>
  </CalculatorPageLayout>
);

export default CalorieCalculatorPage;
