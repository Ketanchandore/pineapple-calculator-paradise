
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";

const frequencies = [
  { label: "Annually", value: 1 },
  { label: "Half-Yearly", value: 2 },
  { label: "Quarterly", value: 4 },
  { label: "Monthly", value: 12 },
];

function calculateFD(principal: number, rate: number, tenure: number, freq: number) {
  const r = rate / (100 * freq);
  const n = freq * tenure;
  const amount = principal * Math.pow(1 + r, n);
  const interest = amount - principal;
  return {
    maturityAmount: Number(amount.toFixed(2)),
    interestEarned: Number(interest.toFixed(2)),
  };
}

const FDCalculator = () => {
  const [principal, setPrincipal] = useState<number | "">("");
  const [rate, setRate] = useState<number | "">("");
  const [tenure, setTenure] = useState<number | "">("");
  const [frequency, setFrequency] = useState<number>(1);
  const [result, setResult] = useState<null | {maturityAmount: number, interestEarned: number}>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!principal || principal <= 0 || !rate || rate <= 0 || !tenure || tenure <= 0) {
      toast({ title: "Please enter valid investment details." });
      setResult(null);
      return;
    }
    const res = calculateFD(Number(principal), Number(rate), Number(tenure), Number(frequency));
    setResult(res);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-7 max-w-xl mx-auto border border-[#F7E572] animate-fade-in">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="font-medium text-base" htmlFor="principal">
          Principal Amount (₹):
        </label>
        <input
          id="principal"
          type="number"
          min={1}
          value={principal}
          onChange={e => setPrincipal(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />

        <label className="font-medium text-base" htmlFor="rate">
          Annual Interest Rate (%):
        </label>
        <input
          id="rate"
          type="number"
          min={0.01}
          step="0.01"
          value={rate}
          onChange={e => setRate(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />

        <label className="font-medium text-base" htmlFor="tenure">
          Tenure (years):
        </label>
        <input
          id="tenure"
          type="number"
          min={1}
          value={tenure}
          onChange={e => setTenure(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />

        <label className="font-medium text-base" htmlFor="frequency">
          Compounding Frequency:
        </label>
        <select
          id="frequency"
          value={frequency}
          onChange={e => setFrequency(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
        >
          {frequencies.map(f => (
            <option key={f.label} value={f.value}>{f.label}</option>
          ))}
        </select>

        <button className="btn-pineapple mt-4 self-start hover-scale" type="submit">
          Calculate FD
        </button>
      </form>
      {result && (
        <div className="mt-8 text-lg bg-[#FAF9E3] font-semibold text-[#3B4D17] p-4 rounded-lg shadow animate-fade-in">
          <div>
            <b>Maturity Amount:</b>{" "}
            <span className="text-[#00B86B] font-bold">₹ {result.maturityAmount}</span>
          </div>
          <div>
            <b>Total Interest Earned:</b>{" "}
            <span className="text-[#3B4D17] font-bold">₹ {result.interestEarned}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FDCalculator;
