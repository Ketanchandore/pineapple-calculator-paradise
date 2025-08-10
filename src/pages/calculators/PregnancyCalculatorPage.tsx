import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PregnancyCalculatorInner from "./_pregnancy_inner";

const PregnancyCalculatorPage = () => (
  <CalculatorPageLayout pageTitle="Pregnancy Calculator" description="Check your estimated due date, gestational age, and trimester with our accurate pregnancy calculator.">
    <div className="max-w-3xl">
      <PregnancyCalculatorInner />
    </div>
  </CalculatorPageLayout>
);

export default PregnancyCalculatorPage;
