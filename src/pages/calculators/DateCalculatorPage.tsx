import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import DateCalculator from "@/components/calculators/DateCalculator";

const DateCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Date Calculator" description="Calculate date differences, add or subtract days, and get exact durations quickly.">
    <LazyCalculatorWrapper>
      <DateCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default DateCalculatorPage;
