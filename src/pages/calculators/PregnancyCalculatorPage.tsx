import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PregnancyCalculatorInner from "./_pregnancy_inner";

const PregnancyCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Pregnancy Calculator - Due Date & Week Calculator | Free Tool" 
    description="Calculate pregnancy due date, gestational age, and trimester. Free pregnancy week calculator based on LMP. Try now!"
    calculatorType="health"
    keywords="pregnancy calculator, due date calculator, pregnancy week calculator, gestational age, trimester calculator, conception calculator"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/pregnancy"
  >
    <div className="max-w-3xl">
      <PregnancyCalculatorInner />
    </div>
  </CalculatorPageLayout>
);

export default PregnancyCalculatorPage;
