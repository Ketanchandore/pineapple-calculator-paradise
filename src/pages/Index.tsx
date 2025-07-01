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
