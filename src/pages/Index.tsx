
import Header from "@/components/Header";
import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";

const Index = () => {
  return (
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
  );
};

export default Index;
