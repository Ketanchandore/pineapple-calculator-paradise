
import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Share2, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  weeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

function computeAge(dobString: string): AgeResult | null {
  if (!dobString) return null;
  const birthDate = new Date(dobString);
  if (isNaN(birthDate.getTime())) return null;
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthLen = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLen;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = now.getTime() - birthDate.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const weeks = Math.floor(totalDays / 7);

  return {
    years,
    months,
    days,
    weeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds
  };
}

const FAQ_DATA = [
  {
    q: "Can I use this for any date?",
    a: "Yes! The Age Calculator works for any valid date, past or future, and gives you the exact difference."
  },
  {
    q: "Why does my age change later in the day?",
    a: "The age calculation is to the exact second, so after your birthday on the current day, your displayed age may update."
  },
  {
    q: "How do I print or share my age result?",
    a: "Use the Print or Share buttons below the result. You can directly print, or copy/share the result with a link."
  }
];

const AgeCalculator = () => {
  const [dob, setDob] = useState<string>("");
  const [touched, setTouched] = useState(false);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string>("");
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (!dob) {
      setResult(null);
      setError("");
      return;
    }
    if (isNaN(new Date(dob).getTime()) || new Date(dob) > new Date()) {
      setResult(null);
      setError("Please enter a valid date of birth (cannot be future date).");
      return;
    }
    setError("");
    setResult(computeAge(dob));
  }, [dob]);

  // For highlight animation on calculation
  const handleCalcAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 800);
  };

  const handleReset = () => {
    setDob("");
    setTouched(false);
    setError("");
    setResult(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({ title: "Link copied!", description: "Share this calculator with friends." });
  };

  return (
    <div className="bg-white dark:bg-[#242d1e] rounded-2xl shadow-2xl border border-[#ffe066] p-6 max-w-xl mx-auto animate-fade-in">
      <h2 className="text-xl font-semibold mb-3 text-[#00B86B] dark:text-[#FFE066]">Online Age Calculator</h2>
      <form
        className="flex flex-col gap-5"
        onSubmit={e => { e.preventDefault(); handleCalcAnim(); }}
        autoComplete="off"
      >
        <Label htmlFor="dob" className="text-base mb-1">Enter your Date of Birth:</Label>
        <Input
          id="dob"
          type="date"
          value={dob}
          onChange={e => { setDob(e.target.value); setTouched(true); }}
          onBlur={() => setTouched(true)}
          required
          placeholder="YYYY-MM-DD"
          aria-invalid={!!error}
          className={cn("border rounded-2xl px-4 py-3 text-lg bg-[#FFF9EC] dark:bg-[#222610] border-[#dde28f] focus:outline-none focus:ring-2 focus:ring-[#00B86B] w-full transition-all", error && "border-red-400")}
        />
        {error && <span className="text-sm text-red-500 -mt-3">{error}</span>}
        <div className="flex gap-3 mt-1">
          <button
            type="submit"
            className="btn-pineapple rounded-2xl shadow font-medium px-6 py-2 transition-all hover-scale"
            onClick={handleCalcAnim}
            disabled={!dob || !!error}
          >Calculate</button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#FFD600]/70 hover:bg-[#F8E474] dark:bg-[#3B420F] dark:text-white rounded-2xl px-6 py-2 font-medium shadow transition-all hover-scale flex items-center gap-2 ml-2"
          >
            <RefreshCcw className="h-5" /> Reset
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="bg-[#fff9e2] hover:bg-[#fff6be] text-[#8e9800] rounded-2xl px-4 py-2 shadow flex items-center gap-2 hover-scale focus:outline-none dark:bg-[#222610] ml-2"
          >
            <Printer className="h-5" /> Print
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="bg-[#d9fffa]/80 rounded-2xl px-4 py-2 text-[#019b70] ml-2 shadow hover:bg-[#acffe2] flex items-center gap-2 hover-scale transition-all"
          >
            <Share2 className="h-5" /> Share
          </button>
        </div>
      </form>

      <div className="h-3" />
      {/* Age Results */}
      {result && !error && (
        <div
          className={cn("mt-6 text-lg font-semibold text-[#3B4D17] dark:text-[#F9FFCA] bg-[#FAF9E3] dark:bg-[#222610] p-5 rounded-2xl shadow animate-fade-in transition-all", anim && "ring-4 ring-[#00B86B]/40")}
          tabIndex={0}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg font-bold text-[#00B86B] dark:text-[#FFE066]">Your Age:</span>
          </div>
          <ul className="text-base space-y-1">
            <li><b>Years:</b> {result.years}</li>
            <li><b>Months:</b> {result.months}</li>
            <li><b>Days:</b> {result.days}</li>
            <li><b>Weeks (rounded):</b> {result.weeks}</li>
            <li><b>Total Days:</b> {result.totalDays.toLocaleString()}</li>
            <li><b>Total Hours:</b> {result.totalHours.toLocaleString()}</li>
            <li><b>Total Minutes:</b> {result.totalMinutes.toLocaleString()}</li>
            <li><b>Total Seconds:</b> {result.totalSeconds.toLocaleString()}</li>
          </ul>
          <div className="text-sm mt-3 text-[#019b70] dark:text-[#eaf28a]">
            <b>Tip:</b> These values are precise up to this very second!
          </div>
        </div>
      )}
      {!result && touched && !error && (
        <div className="mt-6 bg-[#fffcdb] dark:bg-[#39331d] rounded-2xl p-5 text-[#A8982D] text-base shadow-md">
          Enter your date of birth to calculate your age in detail.
        </div>
      )}

      {/* How it Works */}
      <section className="mt-8 mb-4">
        <h3 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]">How does the Age Calculator work?</h3>
        <p className="text-base text-[#4A5B1C] dark:text-[#f0f097] mb-1">
          This calculator finds your exact age (up to the current second) from your date of birth. It shows years, months, days, weeks, total days, hours, minutes, and seconds using precise calendar math. All calculations are automatic and update instantly as you type.
        </p>
        <p className="text-sm text-[#84865C]">Press <b>Calculate</b> for highlight, use <b>Reset</b>, <b>Print</b> or <b>Share</b> for more options!</p>
      </section>

      {/* Formula/Explanation */}
      <section className="mb-4">
        <h3 className="font-semibold text-lg mb-1 text-[#A8982D] dark:text-[#FFE066]">Age Calculation Formula</h3>
        <div className="text-base text-[#4A5B1C] dark:text-[#f0f097]">
          <b>Age</b> = Current Date − Date of Birth. <br />
          Calendar-aware calculation is used to break down into years, months, days.
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h3 className="font-semibold text-lg mb-2 text-[#A8982D] dark:text-[#FFE066]">Frequently Asked Questions</h3>
        <ul className="text-base text-[#5C6C32] dark:text-[#ecfccb] space-y-1">
          {FAQ_DATA.map(({ q, a }) => (
            <li key={q}><b>Q:</b> {q} <br /><b>A:</b> {a}</li>
          ))}
        </ul>
      </section>
      <div className="mt-6 text-xs text-[#A96907] dark:text-[#ffe066]">
        <b>Disclaimer:</b> For general use only – not medical advice.
      </div>
    </div>
  );
};

export default AgeCalculator;
