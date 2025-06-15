
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AgeCalculator from "@/components/calculators/AgeCalculator";

const AgeCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
      <Sidebar />
      <section className="flex-1 px-4 md:px-12 py-8">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#00B86B] mb-4 animate-fade-in">
          Age Calculator
        </h1>
        <div className="bg-white rounded-2xl shadow-lg border border-[#ffe066] mb-8 p-5 md:p-7 max-w-xl animate-fade-in">
          <h2 className="font-semibold text-lg text-[#A8982D] mb-2">How to use this calculator?</h2>
          <ul className="list-disc px-5 text-[#4A5B1C] text-base space-y-1">
            <li>Enter your date of birth in the input field below.</li>
            <li>Press the <b className="text-[#00B86B]">Calculate Age</b> button.</li>
            <li>Your precise age will be shown instantly below.</li>
          </ul>
          <p className="mt-3 text-sm text-[#A8A85B]">Tip: Works for any date, even future dates.</p>
        </div>
        <AgeCalculator />
      </section>
    </main>
    <Footer />
  </div>
);

export default AgeCalculatorPage;
