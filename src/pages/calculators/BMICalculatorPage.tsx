import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import BMICalculator from "@/components/calculators/BMICalculator";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const BMICalculatorPage = () => {
  const [dark, setDark] = useState(false);
  React.useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is BMI accurate for everyone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMI is a useful screening tool for most adults, but it doesn't consider muscle mass, bone density, or overall body composition."
        }
      },
      {
        "@type": "Question",
        "name": "What is a healthy BMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A BMI between 18.5 and 24.9 is considered healthy for most adults."
        }
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Calculator",
    "description": "Calculate your BMI (Body Mass Index) instantly with metric or imperial units. Get BMI category, ideal weight, and healthy ranges.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires a modern browser",
    "url": "https://pineapplecalculator.com/calculators/bmi"
  };

  return (
    <>
      <Helmet>
        <title>BMI Calculator - Check Your Body Mass Index (Metric/Imperial)</title>
        <meta name="description" content="Calculate your BMI (Body Mass Index) instantly with metric or imperial units. Get BMI category, ideal weight, healthy ranges, and advice. Mobile-friendly & fast." />
        <meta name="keywords" content="BMI calculator, body mass index, metric, imperial, healthy weight, health, calculator tool, weight range" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-[#FFFDF6] dark:bg-[#181d16] transition-all duration-300">
        <Header />
        <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
          <Sidebar />
          <section className="flex-1 px-4 md:px-12 py-8">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#00B86B] dark:text-[#F7E572] mb-2 animate-fade-in">
              BMI Calculator – Body Mass Index
            </h1>
            <h2 className="font-semibold text-xl text-[#4A5B1C] dark:text-[#FFE066] mb-4 animate-fade-in">
              Instantly estimate your Body Mass Index, BMI category, and ideal weight range. 
              Supports both <b>Metric</b> and <b>Imperial</b> units.
            </h2>
            <div className="bg-white dark:bg-[#242d1e] rounded-2xl shadow-lg border border-[#ffe066] mb-8 p-5 md:p-7 max-w-xl animate-fade-in">
              <h2 className="font-semibold text-lg text-[#A8982D] mb-2">How to use this BMI calculator?</h2>
              <ul className="list-disc px-5 text-[#4A5B1C] dark:text-[#f0f097] text-base space-y-1">
                <li>Select your preferred unit system (Metric or Imperial).</li>
                <li>Enter your height and weight in the fields below.</li>
                <li>Results appear instantly – check your BMI, category, and weight tips.</li>
              </ul>
              <p className="mt-3 text-sm text-[#A8A85B]">This tool is for general guidance and is not medical advice.</p>
            </div>
            <BMICalculator />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BMICalculatorPage;
