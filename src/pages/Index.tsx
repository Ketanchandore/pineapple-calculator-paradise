
import Header from "@/components/Header";
import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pineapple Calculator Hub - Free Online Calculators</title>
        <meta name="description" content="All calculators in one place. Free, accurate, fast and easy to use. Try age, finance, health, loan, investment calculators & more." />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Pineapple Calculator Hub" />
        <meta property="og:title" content="Pineapple Calculator Hub" />
        <meta property="og:description" content="A modern hub for all your calculation needs: finance, health, math & more!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pineapplehub.com/" />
        <link rel="canonical" href="https://pineapplehub.com/" />
        
        {/* JSON-LD Structured Data for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pineapple Calculator Hub - Home",
            "description": "Free online calculators for all your calculation needs",
            "url": "https://pineapplehub.com/",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 19,
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "EMI Calculator",
                  "url": "https://pineapplehub.com/calculators/emi",
                  "description": "Calculate your EMI for loans"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 2,
                  "name": "SIP Calculator", 
                  "url": "https://pineapplehub.com/calculators/sip",
                  "description": "Calculate SIP returns for investments"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <SidebarProvider>
        <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
          <Header />
          <main className="flex-1 w-full flex flex-row max-w-[1800px] mx-auto">
            <AppSidebar />
            <section className="flex-1 px-2 sm:px-4 lg:px-12 pt-6 md:pt-10 animate-fade-in">
              <HeroSection />
              <CalculatorGrid />
            </section>
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
};

export default Index;
