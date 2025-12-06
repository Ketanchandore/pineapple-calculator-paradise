import { SEOHead } from "@/components/SEOHead";
import { AdvancedSEO } from "@/components/AdvancedSEO";
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
        title="Free Online Calculator | EMI, Mortgage, SIP, BMI Calculator - USA, UK, Australia"
        description="World's #1 FREE calculator tools! 50+ professional calculators for EMI, Mortgage, SIP, BMI, Compound Interest, Tax, Loan. Trusted by 15M+ users in USA, UK, Australia, Canada & 150+ countries. Instant accurate results!"
        keywords="free online calculator, calculator app, EMI calculator USA, mortgage calculator UK, SIP calculator, BMI calculator Australia, compound interest calculator, tax calculator Canada, loan calculator, percentage calculator, age calculator, date calculator, free calculator tools worldwide"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/"
      />
      <AdvancedSEO 
        title="Free Online Calculator | EMI, Mortgage, SIP, BMI Calculator"
        description="World's #1 FREE Calculator Suite - 50+ Tools for Finance, Health & Math"
        keywords="calculator, free calculator, online calculator, EMI calculator, mortgage calculator, BMI calculator"
      />
      <JsonLdStructuredData 
        pageTitle="Free Online Calculator - EMI, Mortgage, SIP, BMI Calculator | PineappleHub"
        description="World's #1 FREE Calculator Suite! 50+ professional calculators for EMI, Mortgage, SIP, BMI. Trusted by 15M+ users in USA, UK, Australia & worldwide."
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
