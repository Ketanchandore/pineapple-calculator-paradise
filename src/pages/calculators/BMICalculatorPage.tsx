
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import BMICalculator from "@/components/calculators/BMICalculator";
// Dark mode toggle placeholder - you can swap with your preferred implementation.
import { Sun, Moon } from "lucide-react";
import React, { useState } from "react";

const BMICalculatorPage = () => {
  // Example (basic approach)
  const [dark, setDark] = useState(false);
  React.useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF6] dark:bg-[#181d16] transition-all duration-300">
      <Header />
      <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
        <Sidebar />
        <section className="flex-1 px-4 md:px-12 py-8">
          {/* SEO and H1 */}
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#00B86B] dark:text-[#F7E572] mb-2 animate-fade-in">
              BMI Calculator – Body Mass Index
            </h1>
            <button
              className="rounded-2xl border px-3 py-2 bg-[#FFF9EC] dark:bg-[#293015] text-[#00B86B] dark:text-[#FFE066] shadow transition-all hover-scale"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title="Toggle dark mode"
              onClick={() => setDark(d => !d)}
            >
              {dark ? <Sun /> : <Moon />}
            </button>
          </div>
          <h2 className="font-semibold text-xl text-[#4A5B1C] dark:text-[#FFE066] mb-4 animate-fade-in">
            Instantly estimate your Body Mass Index, BMI category, and ideal weight range. 
            Supports both <b>Metric</b> and <b>Imperial</b> units.
          </h2>
          <meta name="description" content="Calculate your BMI (Body Mass Index) instantly with metric or imperial units. Get BMI category, ideal weight, healthy ranges, and advice. Mobile-friendly &amp; fast." />
          <meta name="keywords" content="BMI calculator, body mass index, metric, imperial, healthy weight, health, calculator tool, weight range" />
          {/* How to use */}
          <div className="bg-white dark:bg-[#242d1e] rounded-2xl shadow-lg border border-[#ffe066] mb-8 p-5 md:p-7 max-w-xl animate-fade-in">
            <h2 className="font-semibold text-lg text-[#A8982D] mb-2">How to use this BMI calculator?</h2>
            <ul className="list-disc px-5 text-[#4A5B1C] dark:text-[#f0f097] text-base space-y-1">
              <li>Select your preferred unit system (Metric or Imperial).</li>
              <li>Enter your height and weight in the fields below (use keyboard, all devices supported).</li>
              <li>Results appear instantly – check your BMI, category, and weight tips below.</li>
              <li>See detailed explanation, formula, chart, FAQs, and advice on healthy weight.</li>
            </ul>
            <p className="mt-3 text-sm text-[#A8A85B]">Works globally. This tool is provided for general guidance – not as medical advice.</p>
          </div>
          <BMICalculator />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BMICalculatorPage;
