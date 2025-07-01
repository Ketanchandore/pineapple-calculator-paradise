import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
// Dark mode toggle placeholder - you can swap with your preferred implementation.
import { Sun, Moon } from "lucide-react";
import React from "react";
import AgeCalculator from "@/components/calculators/AgeCalculator";

const AgeCalculatorPage = () => {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF6] dark:bg-[#181d16] transition-all duration-300">
      <Header />
      <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
        <Sidebar />
        <section className="flex-1 px-4 md:px-12 py-8">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#00B86B] dark:text-[#F7E572] mb-2 animate-fade-in">
              Age Calculator – Exact Age, Days, Time & More
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
            Instantly calculate your age down to years, months, days, hours, minutes, and seconds! Fully mobile-friendly, live calculations, print/share, and detailed breakdown.
          </h2>
          {/* SEO Meta */}
          <meta name="description" content="Calculate your exact age in years, months, days, weeks, hours, minutes, and seconds. Print, share, or copy results. Most accurate free age calculator online." />
          <meta name="keywords" content="Age calculator, exact age, days old, birthday tool, age in minutes, time calculator, print age, share age" />
          <AgeCalculator />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default AgeCalculatorPage;
