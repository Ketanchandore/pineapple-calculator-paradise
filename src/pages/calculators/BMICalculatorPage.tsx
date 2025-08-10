import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import BMICalculator from "@/components/calculators/BMICalculator";

const BMICalculatorPage = () => (
  <CalculatorPageLayout pageTitle="BMI Calculator" description="Check your Body Mass Index and healthy weight range using our accurate BMI calculator.">
    <LazyCalculatorWrapper>
      <BMICalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default BMICalculatorPage;
