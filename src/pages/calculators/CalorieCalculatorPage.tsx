
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";

const CalorieCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <div className="flex-1 flex flex-col items-center justify-center px-2 py-10">
      <CalorieCalculator />
      <Button asChild variant="outline" className="mt-8">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  </div>
);
export default CalorieCalculatorPage;
