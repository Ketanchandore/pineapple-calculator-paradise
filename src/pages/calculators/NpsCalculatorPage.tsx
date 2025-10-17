import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import NpsCalculator from "@/components/calculators/NpsCalculator";

const NpsCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="NPS Calculator" description="Project NPS corpus, pension amount, and market growth with instant results.">
    <div className="max-w-3xl">
      <NpsCalculator />
    </div>
  </CalculatorPageLayout>
);

export default NpsCalculatorPage;
