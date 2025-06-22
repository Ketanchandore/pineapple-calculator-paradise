import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";
import { Helmet } from "react-helmet";

const IncomeTaxCalculatorPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which tax regime should I pick?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Old Regime suits those with high deductions and investments (like 80C, 80D, HRA), while the New Regime has lower tax rates but very limited deductions. Choose based on your eligible deductions."
        }
      },
      {
        "@type": "Question",
        "name": "What is cess?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cess is a 4% tax levied on the total income tax amount, applicable for both old and new regimes."
        }
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Income Tax Calculator (India)",
    "description": "Calculate your income tax for FY 2023-24 (AY 2024-25) under both the Old and New Tax Regimes. Free and easy to use.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires a modern browser",
    "url": "https://pineapplecalculator.com/calculators/income-tax"
  };

  return (
    <>
      <Helmet>
        <title>Income Tax Calculator 2024-25 (India) - Old & New Regime</title>
        <meta name="description" content="Calculate your income tax for FY 2023-24 (AY 2024-25) with our free online tool. Compare Old vs. New tax regimes instantly for your salary." />
        <meta name="keywords" content="income tax calculator, tax calculator india, fy 2023-24, ay 2024-25, old regime, new regime, salary tax calculator" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
        <Header />
        <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
          <Sidebar />
          <section className="flex-1 px-8 py-8">
            <h1 className="text-3xl font-display font-bold text-[#00B86B] mb-7">
              Income Tax Calculator (FY 2023-24)
            </h1>
            <IncomeTaxCalculator />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IncomeTaxCalculatorPage;
