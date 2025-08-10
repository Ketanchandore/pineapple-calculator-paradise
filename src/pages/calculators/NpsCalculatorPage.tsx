import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import NpsCalculator from "@/components/calculators/NpsCalculator";

const NpsCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="NPS Calculator" description="Project NPS corpus, pension amount, and market growth with instant results.">
    <LazyCalculatorWrapper>
      <NpsCalculator />
    </LazyCalculatorWrapper>
  </CalculatorPageLayout>
);

export default NpsCalculatorPage;
