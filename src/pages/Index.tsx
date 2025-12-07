import { SEOHead } from "@/components/SEOHead";
import JsonLdStructuredData from "@/components/JsonLdStructuredData";
import { ViralTrafficBooster } from "@/components/ViralTrafficBooster";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Free Online Calculator | EMI, SIP, BMI, Mortgage Calculator"
        description="Free professional calculator tools trusted by millions worldwide. 50+ calculators for EMI, SIP, BMI, Mortgage, Compound Interest, Loan, Tax & more. Instant accurate results!"
        keywords="free online calculator, calculator app, EMI calculator, mortgage calculator, SIP calculator, BMI calculator, compound interest calculator, tax calculator, loan calculator, percentage calculator, age calculator, scientific calculator, calorie calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/"
      />
      <JsonLdStructuredData 
        pageTitle="Free Online Calculator | EMI, SIP, BMI, Mortgage Calculator - PineappleHub"
        description="Free professional calculator tools trusted by millions worldwide. 50+ calculators for EMI, SIP, BMI, Mortgage, Compound Interest & more."
      />
      <ViralTrafficBooster />
      
      <div className="min-h-screen flex flex-col relative">
        {/* Floating Background Orbs */}
        <div className="floating-orb orb-1" aria-hidden="true" />
        <div className="floating-orb orb-2" aria-hidden="true" />
        
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CalculatorGrid />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
