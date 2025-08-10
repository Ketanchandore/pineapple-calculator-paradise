import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import AgeCalculator from "@/components/calculators/AgeCalculator";

const AgeCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Age Calculator" description="Find your exact age in years, months, days, hours, minutes and seconds with our instant age calculator.">
    <LazyCalculatorWrapper>
      <AgeCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default AgeCalculatorPage;
