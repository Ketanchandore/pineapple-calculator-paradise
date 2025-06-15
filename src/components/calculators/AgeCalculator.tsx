
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";

const AgeCalculator = () => {
  const [dob, setDob] = useState<string>("");
  const [result, setResult] = useState<null | {
    years: number;
    months: number;
    days: number;
  }>(null);

  function calculateAge(dobStr: string) {
    if (!dobStr) return;
    const birthDate = new Date(dobStr);
    if (isNaN(birthDate.getTime())) {
      toast({ title: "Please enter a valid DOB.", description: "", });
      return;
    }
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    setResult({ years, months, days });
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-7 max-w-xl mx-auto border border-[#F7E572] animate-fade-in">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateAge(dob);
        }}
        className="flex flex-col gap-5"
      >
        <label className="font-medium text-base" htmlFor="dob">
          Date of Birth:
        </label>
        <input
          id="dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />
        <button className="btn-pineapple mt-4 self-start hover-scale" type="submit">
          Calculate Age
        </button>
      </form>
      {result && (
        <div className="mt-8 text-lg font-semibold text-[#3B4D17] bg-[#FAF9E3] p-4 rounded-lg shadow animate-fade-in">
          You are <span className="text-[#00B86B] font-bold">{result.years}</span> years,
          <span className="text-[#00B86B] font-bold"> {result.months}</span> months,
          and <span className="text-[#00B86B] font-bold">{result.days}</span> days old.
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
