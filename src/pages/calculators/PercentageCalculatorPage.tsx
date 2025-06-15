
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const PercentageCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
      <Sidebar />
      <section className="flex-1 px-8 py-8">
        <h1 className="text-3xl font-display font-bold text-[#00B86B] mb-7">Percentage Calculator</h1>
        <div className="bg-white rounded-2xl shadow-lg p-7 max-w-xl mx-auto border border-[#F7E572] animate-fade-in opacity-70">
          <p className="text-center text-lg text-[#A8982D]">Calculator coming soon!</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PercentageCalculatorPage;
