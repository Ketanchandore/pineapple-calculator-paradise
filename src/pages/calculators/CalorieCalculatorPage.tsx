import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";

const CalorieCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Calorie Calculator" 
    description="Free calorie calculator to estimate daily calorie needs. Calculate TDEE, BMR, and calories for weight loss, maintenance, or muscle gain goals."
    calculatorType="health"
    keywords="calorie calculator, TDEE calculator, daily calorie needs, BMR calculator, weight loss calculator, calorie deficit"
  >
    <div className="max-w-3xl">
      <CalorieCalculator />
    </div>
  </CalculatorPageLayout>
);

export default CalorieCalculatorPage;
