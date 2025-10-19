import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";

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
    </div>
  </CalculatorPageLayout>
);

export default CalorieCalculatorPage;
