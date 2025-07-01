
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MutualFundCalculator from "@/components/calculators/MutualFundCalculator";

const MutualFundCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
      <Sidebar />
      <section className="flex-1 px-8 py-8">
        <h1 className="text-3xl font-display font-bold text-[#00B86B] mb-7 flex items-center gap-2">
          <span>Mutual Fund Calculator</span>
        </h1>
        <MutualFundCalculator />
      </section>
    </main>
    <Footer />
  </div>
);

export default MutualFundCalculatorPage;
