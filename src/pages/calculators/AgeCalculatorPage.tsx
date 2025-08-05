
import Header from "@/components/Header";
import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import { SidebarInset } from "@/components/ui/sidebar";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import AgeCalculator from "@/components/calculators/AgeCalculator";
import BackButton from "@/components/BackButton";

const AgeCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <div className="flex flex-1">
      <AppSidebar />
      <SidebarInset className="flex-1">
        <main className="flex-1 px-8 py-8">
          <BackButton />
          <h1 className="text-3xl font-display font-bold text-[#00B86B] mb-7">Age Calculator</h1>
          <LazyCalculatorWrapper>
            <AgeCalculator />
          </LazyCalculatorWrapper>
        </main>
      </SidebarInset>
    </div>
    <Footer />
  </div>
);

export default AgeCalculatorPage;
