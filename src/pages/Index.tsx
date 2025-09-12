import { SEOHead } from "@/components/SEOHead";
import { SEOEnhancer } from "@/components/SEOEnhancer";
import { AdvancedSEO } from "@/components/AdvancedSEO";
import JsonLdStructuredData from "@/components/JsonLdStructuredData";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="🏆 Best Free Online Calculator Tools 2024 | 50+ Calculators | PineappleHub"
        description="⚡ World's #1 free calculator collection! 50+ professional calculators: Age, BMI, EMI, SIP, Loan, GST, Tax, Health, Finance & more. Instant results, mobile-friendly, no signup required!"
        keywords="best calculator, top calculator, free calculator 2024, professional calculator, advanced calculator, calculator tools, online calculator, calculator app, calculator website, calculate anything, free calculation tools, instant calculator, accurate calculator, mobile calculator, financial calculator, health calculator, business calculator, scientific calculator, math calculator, percentage calculator, conversion calculator, age calculator, BMI calculator, EMI calculator, SIP calculator, loan calculator, mortgage calculator, tax calculator, GST calculator, income tax calculator, compound interest calculator, investment calculator, retirement calculator, pregnancy calculator, ovulation calculator, calorie calculator, BMR calculator, fitness calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/"
      />
      <AdvancedSEO 
        title="Best Free Online Calculator Tools 2024"
        description="⚡ World's #1 free calculator collection! 50+ professional calculators for all your needs."
        keywords="best calculator, top calculator, free calculator 2024, professional calculator"
      />
      <SEOEnhancer page="home" />
      <JsonLdStructuredData 
        pageTitle="Free Online Calculator Tools - PineappleHub"
        description="🚀 Access 30+ free online calculators instantly! Age, BMI, EMI, SIP, Loan, GST, Income Tax, Pregnancy, Date & more. No signup required."
      />
      <div className="min-h-screen flex flex-col bg-background">
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
