import { SEOHead } from "@/components/SEOHead";
import { SEOEnhancer } from "@/components/SEOEnhancer";
import JsonLdStructuredData from "@/components/JsonLdStructuredData";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Free Online Calculator Tools - 30+ Calculators | PineappleHub"
        description="🚀 Access 30+ free online calculators instantly! Age, BMI, EMI, SIP, Loan, GST, Income Tax, Pregnancy, Date & more. No signup required. Fast, accurate results in seconds."
        keywords="free online calculator, calculator tools, age calculator, BMI calculator, EMI calculator, SIP calculator, compound interest calculator, home loan calculator, GST calculator, income tax calculator, pregnancy calculator, percentage calculator, date calculator, days calculator, calorie calculator, BMR calculator, loan calculator, mortgage calculator, mutual fund calculator, NPS calculator, scientific calculator, finance calculator, health calculator, investment calculator, tax calculator, business calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/"
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
