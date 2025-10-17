import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import BMICalculator from "@/components/calculators/BMICalculator";

const BMICalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="BMI Calculator" 
    description="Check your Body Mass Index and healthy weight range using our accurate BMI calculator."
    calculatorType="health"
    keywords="BMI calculator, body mass index, BMI chart, healthy weight, obesity calculator, weight status"
  >
    <div className="max-w-3xl">
      <BMICalculator />
    </div>
  </CalculatorPageLayout>
);

export default BMICalculatorPage;
