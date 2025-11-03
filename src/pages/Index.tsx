import { SEOHead } from "@/components/SEOHead";
import { SEOEnhancer } from "@/components/SEOEnhancer";
import { AdvancedSEO } from "@/components/AdvancedSEO";
import JsonLdStructuredData from "@/components/JsonLdStructuredData";
import { SEODominator } from "@/components/SEODominator";
import { ContentOptimizer } from "@/components/ContentOptimizer";
import { TrafficBooster } from "@/components/TrafficBooster";
import { UltimateSEO } from "@/components/UltimateSEO";
import { TrafficMagnet } from "@/components/TrafficMagnet";
import { ViralTrafficBooster } from "@/components/ViralTrafficBooster";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { ClickbaitCTASection } from "@/components/ClickbaitCTASection";
import { ShareableContentSection } from "@/components/ShareableContentSection";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="🇮🇳 #1 Free Calculator Online India | EMI, SIP, BMI, GST, Tax Calculator"
        description="India's most trusted FREE calculator website! 25+ tools - EMI Calculator, SIP Calculator, BMI Calculator, GST Calculator, Income Tax Calculator, Home Loan, Age Calculator. 15M+ users. Instant accurate results! 100% Free, No registration."
        keywords="calculator online india, free calculator, calculator app india, EMI calculator, SIP calculator, BMI calculator, GST calculator india, income tax calculator india, home loan calculator, age calculator, percentage calculator, loan calculator india, FD calculator, compound interest calculator, calorie calculator, pregnancy calculator, scientific calculator, date calculator, mortgage calculator india, online calculator free india"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/"
      />
      <UltimateSEO page="home" />
      <AdvancedSEO 
        title="🚀 Free Calculator Online India | EMI, SIP, BMI Calculator"
        description="🇮🇳 India's #1 FREE Calculator App! 50+ Tools Used by 15M+ People"
        keywords="calculator online india, free calculator app, EMI calculator, SIP calculator, BMI calculator"
      />
      <SEOEnhancer page="home" />
      <SEODominator page="home" />
      <ContentOptimizer pageTi="Free Online Calculator India" category="general" />
      <JsonLdStructuredData 
        pageTitle="🚀 Free Calculator Online India | EMI, SIP, BMI Calculator - PineappleHub"
        description="🇮🇳 India's #1 FREE Calculator App! 50+ Tools: EMI Calculator, SIP Calculator, BMI Calculator. Used by 15M+ people. Mobile-friendly, instant results!"
      />
      <ViralTrafficBooster />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CalculatorGrid />
          <ClickbaitCTASection />
          <ShareableContentSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
