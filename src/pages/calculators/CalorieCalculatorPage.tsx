
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CalorieCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center bg-white rounded-2xl border px-8 py-12 border-[#ffe066] shadow-2xl animate-fade-in max-w-xl w-full">
        <h1 className="text-2xl font-bold text-[#00B86B] mb-4">Calorie Calculator</h1>
        <p className="text-[#A8982D] text-lg mb-6">Calculator coming soon!</p>
        <Button asChild variant="outline" className="mt-2">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  </div>
);
export default CalorieCalculatorPage;

