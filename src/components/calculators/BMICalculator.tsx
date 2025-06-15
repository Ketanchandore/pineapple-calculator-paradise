
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";

const BMI_CATEGORIES = [
  { upper: 18.5, label: "Underweight", color: "#FFAD3B" },
  { upper: 24.9, label: "Normal weight", color: "#00B86B" },
  { upper: 29.9, label: "Overweight", color: "#FFE066" },
  { upper: Infinity, label: "Obesity", color: "#FF5560" }
];

const BMICalculator = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [result, setResult] = useState<null | { bmi: number; category: string; color: string }>(null);

  function calculateBMI() {
    if (!weight || !height || weight <= 0 || height <= 0) {
      toast({ title: "Enter valid weight and height" });
      return;
    }
    const bmiVal = weight / ((height / 100) ** 2);
    const categoryObj = BMI_CATEGORIES.find(cat => bmiVal <= cat.upper)!;
    setResult({
      bmi: Number(bmiVal.toFixed(2)),
      category: categoryObj.label,
      color: categoryObj.color
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-7 max-w-xl mx-auto border border-[#F7E572] animate-fade-in">
      <form
        className="flex flex-col gap-5"
        onSubmit={e => { e.preventDefault(); calculateBMI(); }}
      >
        <label className="text-base font-medium" htmlFor="weight">
          Weight (kg):
        </label>
        <input
          id="weight"
          type="number"
          step="0.1"
          min={1}
          value={weight}
          onChange={e => setWeight(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />

        <label className="text-base font-medium" htmlFor="height">
          Height (cm):
        </label>
        <input
          id="height"
          type="number"
          min={1}
          step="0.1"
          value={height}
          onChange={e => setHeight(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />

        <button className="btn-pineapple mt-4 self-start hover-scale" type="submit">
          Calculate BMI
        </button>
      </form>
      {result && (
        <div className="mt-8 text-lg font-semibold" style={{ color: result.color }}>
          Your BMI is <span className="font-bold">{result.bmi}</span> – <span>{result.category}</span>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
