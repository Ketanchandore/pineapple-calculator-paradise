import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React from "react";
import AgeCalculator from "@/components/calculators/AgeCalculator";
import { Helmet } from "react-helmet";

const AgeCalculatorPage = () => {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use this for any date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Age Calculator works for any valid date, past or future, and gives you the exact difference."
        }
      },
      {
        "@type": "Question",
        "name": "How do I print or share my age result?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the Print or Share buttons below the result. You can directly print, or copy/share the result with a link."
        }
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Age Calculator",
    "description": "Calculate your exact age in years, months, days, weeks, hours, minutes, and seconds. An accurate and free online tool.",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires a modern browser",
    "url": "https://pineapplecalculator.com/calculators/age"
  };

  return (
    <>
      <Helmet>
        <title>Age Calculator - Calculate Your Exact Age Online</title>
        <meta name="description" content="Calculate your exact age in years, months, days, weeks, hours, minutes, and seconds. Print, share, or copy results. The most accurate free age calculator online." />
        <meta name="keywords" content="Age calculator, exact age, days old, birthday tool, age in minutes, time calculator, print age, share age" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-[#FFFDF6] dark:bg-[#181d16] transition-all duration-300">
        <Header />
        <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
          <Sidebar />
          <section className="flex-1 px-4 md:px-12 py-8">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#00B86B] dark:text-[#F7E572] mb-2 animate-fade-in">
              Age Calculator
            </h1>
            <h2 className="font-semibold text-xl text-[#4A5B1C] dark:text-[#FFE066] mb-4 animate-fade-in">
              Instantly find your age in years, months, days, hours, minutes, and seconds.
            </h2>
            <AgeCalculator />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default AgeCalculatorPage;
