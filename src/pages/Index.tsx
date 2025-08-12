import { SEOHead } from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="PineappleHub - Free Online Calculator Tools | Age, BMI, EMI, SIP & More"
        description="Free online calculator tools for all your needs. Calculate Age, BMI, EMI, SIP, Compound Interest, Date calculations & more. Fast, accurate, and easy to use calculators."
        keywords="calculator, online calculator, age calculator, BMI calculator, EMI calculator, SIP calculator, compound interest, date calculator, free tools, finance calculator, health calculator"
        canonicalUrl="https://pineapplehub.com/"
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
