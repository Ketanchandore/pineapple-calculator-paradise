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
        title="🚀 Free Calculator Online India | EMI, SIP, BMI Calculator - No Download Required"
        description="🇮🇳 India's #1 FREE Calculator App! 50+ Tools: EMI Calculator, SIP Calculator, BMI Calculator, Loan Calculator, GST Calculator. ✅ 15M+ Users ✅ Mobile Friendly ✅ Instant Results"
        keywords="calculator online india, free calculator app, EMI calculator, SIP calculator, BMI calculator, loan calculator, GST calculator, income tax calculator, percentage calculator, age calculator, compound interest calculator, home loan calculator, FD calculator, scientific calculator, date calculator, calorie calculator, BMR calculator, pregnancy calculator, mortgage calculator, mutual fund calculator, NPS calculator, SWP calculator, calculator app download, online calculator free, best calculator india, finance calculator, health calculator, math calculator, calculator tools, calculator website"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/"
      />
      <UltimateSEO page="home" />
      <TrafficMagnet />
      <AdvancedSEO 
        title="🚀 Free Calculator Online India | EMI, SIP, BMI Calculator"
        description="🇮🇳 India's #1 FREE Calculator App! 50+ Tools Used by 15M+ People"
        keywords="calculator online india, free calculator app, EMI calculator, SIP calculator, BMI calculator"
      />
      <SEOEnhancer page="home" />
      <SEODominator page="home" />
      <ContentOptimizer pageTi="Free Online Calculator India" category="general" />
      <TrafficBooster 
        keywords={['calculator online india', 'free calculator app', 'EMI calculator india', 'SIP calculator india', 'BMI calculator india']}
        competitors={['calculator.net', 'rapidtables.com', 'calculator-online.net']}
      />
      <JsonLdStructuredData 
        pageTitle="🚀 Free Calculator Online India | EMI, SIP, BMI Calculator - PineappleHub"
        description="🇮🇳 India's #1 FREE Calculator App! 50+ Tools: EMI Calculator, SIP Calculator, BMI Calculator. Used by 15M+ people. Mobile-friendly, instant results!"
      />
      <ViralTrafficBooster />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <SocialProofBanner />
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
