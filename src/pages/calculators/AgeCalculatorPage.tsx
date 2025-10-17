import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import AgeCalculator from "@/components/calculators/AgeCalculator";

const AgeCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Age Calculator" 
    description="Find your exact age in years, months, days, hours, minutes and seconds with our instant age calculator."
    calculatorType="age"
    keywords="age calculator, calculate age, years months days, exact age, birthday calculator, age in days"
  >
    <div className="max-w-3xl">
      <AgeCalculator />
    </div>
  </CalculatorPageLayout>
);

export default AgeCalculatorPage;
