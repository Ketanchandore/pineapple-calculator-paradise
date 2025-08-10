import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";

const CalorieCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Calorie Calculator" description="Estimate daily calorie needs and track health goals with our fast calorie calculator.">
    <div className="max-w-3xl">
      <CalorieCalculator />
    </div>
  </CalculatorPageLayout>
);

export default CalorieCalculatorPage;
