
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AgeCalculatorPage from "./pages/calculators/AgeCalculatorPage";
import BMICalculatorPage from "./pages/calculators/BMICalculatorPage";
import EMICalculatorPage from "./pages/calculators/EMICalculatorPage";

// Rapid stub imports, you can copy and extend as needed
const SipCalculatorPage = () => import("./pages/calculators/SipCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const SwpCalculatorPage = () => import("./pages/calculators/SwpCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const PercentageCalculatorPage = () => import("./pages/calculators/PercentageCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const HomeLoanCalculatorPage = () => import("./pages/calculators/HomeLoanCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const CompoundInterestCalculatorPage = () => import("./pages/calculators/CompoundInterestCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const IncomeTaxCalculatorPage = () => import("./pages/calculators/IncomeTaxCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const FDCalculatorPage = () => import("./pages/calculators/FDCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const DateCalculatorPage = () => import("./pages/calculators/DateCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const CalorieCalculatorPage = () => import("./pages/calculators/CalorieCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const HomeLoanEmiCalculatorPage = () => import("./pages/calculators/HomeLoanEmiCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const LoanCalculatorPage = () => import("./pages/calculators/LoanCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const DaysCalculatorPage = () => import("./pages/calculators/DaysCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const GstCalculatorPage = () => import("./pages/calculators/GstCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const MutualFundCalculatorPage = () => import("./pages/calculators/MutualFundCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const PregnancyCalculatorPage = () => import("./pages/calculators/PregnancyCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);
const NpsCalculatorPage = () => import("./pages/calculators/NpsCalculatorPage").then(m=>m.default).catch(()=><>Coming soon...</>);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculators/age" element={<AgeCalculatorPage />} />
          <Route path="/calculators/bmi" element={<BMICalculatorPage />} />
          <Route path="/calculators/emi" element={<EMICalculatorPage />} />
          <Route path="/calculators/sip" element={ <React.Suspense fallback={<>Loading...</>}> <SipCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/swp" element={ <React.Suspense fallback={<>Loading...</>}> <SwpCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/percentage" element={ <React.Suspense fallback={<>Loading...</>}> <PercentageCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/home-loan" element={ <React.Suspense fallback={<>Loading...</>}> <HomeLoanCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/compound-interest" element={ <React.Suspense fallback={<>Loading...</>}> <CompoundInterestCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/income-tax" element={ <React.Suspense fallback={<>Loading...</>}> <IncomeTaxCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/fd" element={ <React.Suspense fallback={<>Loading...</>}> <FDCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/date" element={ <React.Suspense fallback={<>Loading...</>}> <DateCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/calorie" element={ <React.Suspense fallback={<>Loading...</>}> <CalorieCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/home-loan-emi" element={ <React.Suspense fallback={<>Loading...</>}> <HomeLoanEmiCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/loan" element={ <React.Suspense fallback={<>Loading...</>}> <LoanCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/days" element={ <React.Suspense fallback={<>Loading...</>}> <DaysCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/gst" element={ <React.Suspense fallback={<>Loading...</>}> <GstCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/mutual-fund" element={ <React.Suspense fallback={<>Loading...</>}> <MutualFundCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/pregnancy" element={ <React.Suspense fallback={<>Loading...</>}> <PregnancyCalculatorPage /> </React.Suspense> } />
          <Route path="/calculators/nps" element={ <React.Suspense fallback={<>Loading...</>}> <NpsCalculatorPage /> </React.Suspense> } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
