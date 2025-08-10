import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import DaysCalculator from "@/components/calculators/DaysCalculator";

const DaysCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Days Calculator" description="Find the number of days between dates or add/subtract days easily.">
    <LazyCalculatorWrapper>
      <DaysCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default DaysCalculatorPage;
