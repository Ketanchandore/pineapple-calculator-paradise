import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import AgeCalculator from "@/components/calculators/AgeCalculator";

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
    </div>
  </CalculatorPageLayout>
);

export default AgeCalculatorPage;
