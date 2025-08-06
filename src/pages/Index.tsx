import { SEOHead } from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";

const Index = () => {
  return (
    <>
      <SEOHead
        title="PineappleHub - Free Online Calculator Tools | Age, BMI, EMI, SIP & More"
        description="Free online calculator tools for all your needs. Calculate Age, BMI, EMI, SIP, Compound Interest, Date calculations & more. Fast, accurate, and easy to use calculators."
        keywords="calculator, online calculator, age calculator, BMI calculator, EMI calculator, SIP calculator, compound interest, date calculator, free tools, finance calculator, health calculator"
        canonicalUrl="https://pineapplehub.com/"
      />
      <div className="min-h-screen">
        <HeroSection />
        <CalculatorGrid />
      </div>
    </>
  );
};

export default Index;
