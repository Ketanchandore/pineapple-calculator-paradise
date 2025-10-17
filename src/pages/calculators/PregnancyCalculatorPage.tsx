import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PregnancyCalculatorInner from "./_pregnancy_inner";

const PregnancyCalculatorPage = () => (
  <CalculatorPageLayout 
    pageTitle="Pregnancy Calculator" 
    description="Free pregnancy calculator to check due date, gestational age, and trimester. Accurate pregnancy week calculator based on LMP or conception date."
    calculatorType="health"
    keywords="pregnancy calculator, due date calculator, pregnancy week calculator, gestational age, trimester calculator, conception calculator"
  >
    <div className="max-w-3xl">
      <PregnancyCalculatorInner />
    </div>
  </CalculatorPageLayout>
);

export default PregnancyCalculatorPage;
