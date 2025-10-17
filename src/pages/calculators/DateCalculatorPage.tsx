import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import DateCalculator from "@/components/calculators/DateCalculator";

const DateCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Date Calculator" description="Calculate date differences, add or subtract days, and get exact durations quickly.">
    <div className="max-w-3xl">
      <DateCalculator />
    </div>
  </CalculatorPageLayout>
);

export default DateCalculatorPage;
