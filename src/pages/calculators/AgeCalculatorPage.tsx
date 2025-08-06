
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";
import AgeCalculator from "@/components/calculators/AgeCalculator";

const AgeCalculatorPage = () => {
  return (
    <>
      <SEOHead
        title="Age Calculator - Calculate Your Exact Age in Years, Months, Days"
        description="Free online age calculator to find your exact age in years, months, days, hours, minutes and seconds. Calculate age from date of birth instantly with accurate results."
        keywords="age calculator, calculate age, date of birth calculator, exact age, years months days calculator, online age tool"
        canonicalUrl="https://pineapplehub.com/calculators/age"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackButton />
        <div className="mt-6">
          <AgeCalculator />
        </div>
      </div>
    </>
  );
};

export default AgeCalculatorPage;
