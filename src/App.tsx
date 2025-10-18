
import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AgeCalculatorPage from "./pages/calculators/AgeCalculatorPage";
import BMICalculatorPage from "./pages/calculators/BMICalculatorPage";
import EMICalculatorPage from "./pages/calculators/EMICalculatorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import CookieBanner from "@/components/CookieBanner";
import AuthPage from "./pages/Auth";
import FertilizerCalculatorPage from "./pages/calculators/FertilizerCalculatorPage";
import ECommerceCalculatorPage from "./pages/calculators/ECommerceCalculatorPage";

// Lazy load remaining calculators
const SipCalculatorPage = React.lazy(() => import("./pages/calculators/SipCalculatorPage"));
const SwpCalculatorPage = React.lazy(() => import("./pages/calculators/SwpCalculatorPage"));
const PercentageCalculatorPage = React.lazy(() => import("./pages/calculators/PercentageCalculatorPage"));
const HomeLoanCalculatorPage = React.lazy(() => import("./pages/calculators/HomeLoanCalculatorPage"));
const CompoundInterestCalculatorPage = React.lazy(() => import("./pages/calculators/CompoundInterestCalculatorPage"));
const IncomeTaxCalculatorPage = React.lazy(() => import("./pages/calculators/IncomeTaxCalculatorPage"));
const FDCalculatorPage = React.lazy(() => import("./pages/calculators/FDCalculatorPage"));
const DateCalculatorPage = React.lazy(() => import("./pages/calculators/DateCalculatorPage"));
const CalorieCalculatorPage = React.lazy(() => import("./pages/calculators/CalorieCalculatorPage"));
const HomeLoanEmiCalculatorPage = React.lazy(() => import("./pages/calculators/HomeLoanEmiCalculatorPage"));
const LoanCalculatorPage = React.lazy(() => import("./pages/calculators/LoanCalculatorPage"));
const DaysCalculatorPage = React.lazy(() => import("./pages/calculators/DaysCalculatorPage"));
const GstCalculatorPage = React.lazy(() => import("./pages/calculators/GstCalculatorPage"));
const MutualFundCalculatorPage = React.lazy(() => import("./pages/calculators/MutualFundCalculatorPage"));
const PregnancyCalculatorPage = React.lazy(() => import("./pages/calculators/PregnancyCalculatorPage"));
const NpsCalculatorPage = React.lazy(() => import("./pages/calculators/NpsCalculatorPage"));
const BMRCalculatorPage = React.lazy(() => import("./pages/calculators/BMRCalculatorPage"));
const CurrencyCalculatorPage = React.lazy(() => import("./pages/calculators/CurrencyCalculatorPage"));
const ScientificCalculatorPage = React.lazy(() => import("./pages/calculators/ScientificCalculatorPage"));
const MortgageCalculatorPage = React.lazy(() => import("./pages/calculators/MortgageCalculatorPage"));

// Category pages
const FinanceCalculators = React.lazy(() => import("./pages/categories/FinanceCalculators"));
const HealthCalculators = React.lazy(() => import("./pages/categories/HealthCalculators"));
const MathCalculators = React.lazy(() => import("./pages/categories/MathCalculators"));
const SitemapPage = React.lazy(() => import("./pages/Sitemap"));

const queryClient = new QueryClient();

const Fallback = <div className="text-center text-[#00B86B] py-12">Loading...</div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PerformanceMonitor />
      <BrowserRouter>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculators/age" element={<AgeCalculatorPage />} />
          <Route path="/calculators/bmi" element={<BMICalculatorPage />} />
          <Route path="/calculators/emi" element={<EMICalculatorPage />} />
          <Route path="/calculators/ecommerce" element={<ECommerceCalculatorPage />} />
          <Route path="/calculators/sip" element={<Suspense fallback={Fallback}><SipCalculatorPage /></Suspense>} />
          <Route path="/calculators/swp" element={<Suspense fallback={Fallback}><SwpCalculatorPage /></Suspense>} />
          <Route path="/calculators/percentage" element={<Suspense fallback={Fallback}><PercentageCalculatorPage /></Suspense>} />
          <Route path="/calculators/home-loan" element={<Suspense fallback={Fallback}><HomeLoanCalculatorPage /></Suspense>} />
          <Route path="/calculators/compound-interest" element={<Suspense fallback={Fallback}><CompoundInterestCalculatorPage /></Suspense>} />
          <Route path="/calculators/income-tax" element={<Suspense fallback={Fallback}><IncomeTaxCalculatorPage /></Suspense>} />
          <Route path="/calculators/fd" element={<Suspense fallback={Fallback}><FDCalculatorPage /></Suspense>} />
          <Route path="/calculators/date" element={<Suspense fallback={Fallback}><DateCalculatorPage /></Suspense>} />
          <Route path="/calculators/calorie" element={<Suspense fallback={Fallback}><CalorieCalculatorPage /></Suspense>} />
          <Route path="/calculators/home-loan-emi" element={<Suspense fallback={Fallback}><HomeLoanEmiCalculatorPage /></Suspense>} />
          <Route path="/calculators/loan" element={<Suspense fallback={Fallback}><LoanCalculatorPage /></Suspense>} />
          <Route path="/calculators/days" element={<Suspense fallback={Fallback}><DaysCalculatorPage /></Suspense>} />
          <Route path="/calculators/gst" element={<Suspense fallback={Fallback}><GstCalculatorPage /></Suspense>} />
          <Route path="/calculators/mutual-fund" element={<Suspense fallback={Fallback}><MutualFundCalculatorPage /></Suspense>} />
          <Route path="/calculators/pregnancy" element={<Suspense fallback={Fallback}><PregnancyCalculatorPage /></Suspense>} />
          <Route path="/calculators/nps" element={<Suspense fallback={Fallback}><NpsCalculatorPage /></Suspense>} />
          <Route path="/calculators/bmr" element={<Suspense fallback={Fallback}><BMRCalculatorPage /></Suspense>} />
          <Route path="/calculators/currency" element={<Suspense fallback={Fallback}><CurrencyCalculatorPage /></Suspense>} />
          <Route path="/calculators/scientific" element={<Suspense fallback={Fallback}><ScientificCalculatorPage /></Suspense>} />
          <Route path="/calculators/mortgage" element={<Suspense fallback={Fallback}><MortgageCalculatorPage /></Suspense>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/calculators/fertilizer" element={<FertilizerCalculatorPage />} />
          <Route path="/finance-calculators" element={<Suspense fallback={Fallback}><FinanceCalculators /></Suspense>} />
          <Route path="/health-calculators" element={<Suspense fallback={Fallback}><HealthCalculators /></Suspense>} />
          <Route path="/math-calculators" element={<Suspense fallback={Fallback}><MathCalculators /></Suspense>} />
          <Route path="/sitemap" element={<Suspense fallback={Fallback}><SitemapPage /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
