
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";
import BMICalculator from "@/components/calculators/BMICalculator";

const BMICalculatorPage = () => {
  return (
    <>
      <SEOHead
        title="BMI Calculator - Calculate Body Mass Index | Health & Fitness Tool"
        description="Free BMI calculator to check your Body Mass Index. Calculate BMI using metric or imperial units. Get instant results with health recommendations and ideal weight ranges."
        keywords="BMI calculator, body mass index, BMI chart, healthy weight, overweight calculator, underweight calculator, fitness calculator, health tool"
        canonicalUrl="https://pineapplehub.com/calculators/bmi"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackButton />
        <div className="mt-6">
          <BMICalculator />
        </div>
      </div>
    </>
  );
};

export default BMICalculatorPage;
