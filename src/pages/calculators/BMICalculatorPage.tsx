
import Header from "@/components/Header";
import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import { SidebarInset } from "@/components/ui/sidebar";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import BMICalculator from "@/components/calculators/BMICalculator";
import BackButton from "@/components/BackButton";

const BMICalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
    <Header />
    <div className="flex flex-1">
      <AppSidebar />
      <SidebarInset className="flex-1">
        <main className="flex-1 px-8 py-8 max-w-6xl mx-auto">
          <BackButton />
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              BMI Calculator
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Calculate your Body Mass Index and health status
            </p>
          </div>
          <LazyCalculatorWrapper>
            <BMICalculator />
          </LazyCalculatorWrapper>
        </main>
      </SidebarInset>
    </div>
    <Footer />
  </div>
);

export default BMICalculatorPage;
