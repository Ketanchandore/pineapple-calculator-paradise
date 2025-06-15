
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Header />
    <main className="flex flex-col gap-10 flex-1 items-center justify-center">
      <div className="max-w-lg mx-auto text-center rounded-xl bg-white shadow-lg p-10 mt-8 animate-fade-in">
        <h1 className="text-5xl font-display text-[#00B86B] font-bold mb-3 drop-shadow">404</h1>
        <p className="text-xl text-[#83560B] mb-6">Sorry, we couldn't find that calculator or page.</p>
        <Link to="/" className="btn-pineapple mt-2 inline-block hover-scale">
          Go to Home
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
