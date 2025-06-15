
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState<number | "">("");
  const [interest, setInterest] = useState<number | "">("");
  const [tenure, setTenure] = useState<number | "">("");
  const [result, setResult] = useState<null | { emi: number; total: number; interestPaid: number }>(null);

  function calculateEMI() {
    if (!principal || !interest || !tenure || principal <= 0 || interest <= 0 || tenure <= 0) {
      toast({ title: "Enter valid details." });
      return;
    }
    const monthlyRate = Number(interest) / 12 / 100;
    const n = Number(tenure) * 12;
    const emi =
      (Number(principal) *
        monthlyRate *
        Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
    const total = emi * n;
    const interestPaid = total - Number(principal);
    setResult({ emi: Number(emi.toFixed(2)), total: Number(total.toFixed(2)), interestPaid: Number(interestPaid.toFixed(2)) });
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-7 max-w-xl mx-auto border border-[#F7E572] animate-fade-in">
      <form
        className="flex flex-col gap-5"
        onSubmit={e => { e.preventDefault(); calculateEMI(); }}
      >
        <label className="text-base font-medium" htmlFor="principal">
          Loan Amount (₹):
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

        <label className="text-base font-medium" htmlFor="interest">
          Annual Interest Rate (%):
        </label>
        <input
          id="interest"
          type="number"
          min={0.01}
          step="0.01"
          value={interest}
          onChange={e => setInterest(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 text-lg bg-[#FFF9EC] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full"
          required
        />

        <label className="text-base font-medium" htmlFor="tenure">
          Loan Tenure (years):
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

        <button className="btn-pineapple mt-4 self-start hover-scale" type="submit">
          Calculate EMI
        </button>
      </form>
      {result && (
        <div className="mt-8 text-lg bg-[#FAF9E3] font-semibold text-[#3B4D17] p-4 rounded-lg shadow animate-fade-in">
          <div>
            <b>Monthly EMI:</b>{" "}
            <span className="text-[#00B86B] font-bold">₹ {result.emi}</span>
          </div>
          <div>
            <b>Total Payment:</b> ₹ {result.total}
          </div>
          <div>
            <b>Total Interest Paid:</b> ₹ {result.interestPaid}
          </div>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
