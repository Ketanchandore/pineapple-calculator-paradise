
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

const AgeCalculator = () => {
  const [dob, setDob] = useState<string>("");
  const [result, setResult] = useState<null | AgeResult>(null);

  function calculateAge(dobStr: string) {
    if (!dobStr) return;
    const birthDate = new Date(dobStr);
    if (isNaN(birthDate.getTime())) {
      toast({ title: "Please enter a valid DOB.", description: "", });
      return;
    }
    const now = new Date();

    // Relative values
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      // Days in previous month
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonth;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Absolute values
    const diffMs = now.getTime() - birthDate.getTime();
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    setResult({
      years,
      months,
      days,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
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
          <div className="mb-2">
            <span>
              <span className="text-[#00B86B] font-bold">{result.years}</span> years,
              <span className="text-[#00B86B] font-bold"> {result.months}</span> months,
              <span className="text-[#00B86B] font-bold"> {result.days}</span> days old
            </span>
          </div>
          <ul className="text-base text-[#519232] space-y-1">
            <li>
              <b>Total Days:</b> {result.totalDays.toLocaleString()}
            </li>
            <li>
              <b>Total Hours:</b> {result.totalHours.toLocaleString()}
            </li>
            <li>
              <b>Total Minutes:</b> {result.totalMinutes.toLocaleString()}
            </li>
            <li>
              <b>Total Seconds:</b> {result.totalSeconds.toLocaleString()}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
