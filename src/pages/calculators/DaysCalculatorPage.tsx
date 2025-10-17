import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import DaysCalculator from "@/components/calculators/DaysCalculator";

const DaysCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Days Calculator" description="Find the number of days between dates or add/subtract days easily.">
    <div className="max-w-3xl">
      <DaysCalculator />
    </div>
  </CalculatorPageLayout>
);

export default DaysCalculatorPage;
