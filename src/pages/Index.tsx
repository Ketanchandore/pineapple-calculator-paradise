
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const featured = [
  {
    name: "EMI Calculator",
    desc: "Calculate your EMIs instantly for any loan type.",
    path: "/calculators/emi",
    image: "/placeholder.svg",
  },
  {
    name: "Age Calculator",
    desc: "Get your exact age in years, months, days.",
    path: "/calculators/age",
    image: "/placeholder.svg",
  },
  {
    name: "BMI Calculator",
    desc: "Find your Body Mass Index for health tracking.",
    path: "/calculators/bmi",
    image: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
      <Header />
      <main className="flex-1 w-full flex flex-row max-w-[1600px] mx-auto">
        <Sidebar />
        <section className="flex-1 px-6 md:px-12 pt-10 animate-fade-in">
          <div className="animated-bg rounded-3xl px-6 py-14 mb-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h1 className="text-[2.6rem] md:text-5xl font-display font-extrabold mb-5 text-[#2A2605] drop-shadow">
                Welcome to <span className="text-[#00B86B]">Pineapple Calculator Hub</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#374420] font-medium mb-7 max-w-2xl">
                All your finance & daily life calculations in one colourful, world-class portal. Choose from 20+ smart calculators in the sidebar!
              </p>
              <Link to="/calculators/emi" className="btn-pineapple mt-2 inline-block hover-scale shadow-lg">
                Start Calculating Now
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              alt="Dashboards and calculators"
              className="w-[370px] md:w-[450px] rounded-xl border-8 border-[#FFE066] shadow-xl"
              draggable={false}
            />
          </div>

          <div id="all-calculators" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#00B86B] mb-6">Featured Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {featured.map((f) => (
                <Link to={f.path} key={f.path} className="bg-white rounded-2xl p-6 border border-[#ecebb6] shadow hover-scale flex flex-col gap-4 group">
                  <img src={f.image} alt={f.name} className="h-32 w-full object-contain rounded mb-3" />
                  <h3 className="text-xl font-display font-bold text-[#393A1A] group-hover:text-[#00B86B] transition-colors">{f.name}</h3>
                  <p className="text-[#5C6C32] opacity-90">{f.desc}</p>
                  <span className="inline-block mt-auto btn-pineapple w-fit px-6 text-center text-sm group-hover:scale-105 transition-transform">Try Now</span>
                </Link>
              ))}
            </div>
            <div className="md:text-right text-center">
              <Link to="/calculators/age" className="text-[#00B86B] underline font-semibold hover:text-[#305C20] transition">See All Calculators</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
