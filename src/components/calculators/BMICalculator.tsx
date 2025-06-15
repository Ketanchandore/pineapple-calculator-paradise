
import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClipboardList, Printer, Share2, RefreshCcw } from "lucide-react";

const BMI_CATEGORIES = [
  { upper: 18.5, label: "Underweight", color: "#FFAD3B", advice: "Consider gaining weight for optimal health." },
  { upper: 24.9, label: "Normal weight", color: "#00B86B", advice: "Maintain your weight for best health!" },
  { upper: 29.9, label: "Overweight", color: "#FFE066", advice: "Consider a healthier diet and regular exercise." },
  { upper: Infinity, label: "Obesity", color: "#FF5560", advice: "It's important to manage your weight for health." }
];

const METRIC = "metric";
const IMPERIAL = "imperial";

const idealBmiRange = { min: 18.5, max: 24.9 };

function calcBMI({weight, height, unit}: {weight: number, height: number, unit: string}) {
  if (unit === METRIC) {
    if (!weight || !height) return null;
    return weight / ((height / 100) ** 2);
  } else {
    // imperial: lbs, ft/in
    if (!weight || !height) return null;
    return (weight / (height ** 2)) * 703;
  }
}

function toMetric({weightLbs, heightFt, heightInch}: {weightLbs: number, heightFt: number, heightInch: number}) {
  const kg = weightLbs * 0.45359237;
  const totalIn = (heightFt * 12) + heightInch;
  const cm = totalIn * 2.54;
  return {kg: Math.round(kg * 100) / 100, cm: Math.round(cm * 10) / 10};
}

function toImperial({weightKg, heightCm}: {weightKg: number, heightCm: number}) {
  const lbs = weightKg / 0.45359237;
  const totalIn = heightCm / 2.54;
  const ft = Math.floor(totalIn / 12);
  const inch = Math.round(totalIn - (ft * 12));
  return {lbs: Math.round(lbs * 100) / 100, ft, inch};
}

function idealWeightRange(height: number, unit: string): {min: number, max: number} {
  // Returns ideal weight (kg or lbs) for given height and unit, based on BMI 18.5 and 24.9
  if (unit === METRIC) {
    return {
      min: Math.round(idealBmiRange.min * Math.pow(height / 100, 2) * 10) / 10,
      max: Math.round(idealBmiRange.max * Math.pow(height / 100, 2) * 10) / 10,
    };
  } else {
    // imperial: height in inches
    return {
      min: Math.round((idealBmiRange.min * Math.pow(height, 2) / 703) * 10) / 10,
      max: Math.round((idealBmiRange.max * Math.pow(height, 2) / 703) * 10) / 10,
    }
  }
}

const BMICalculator = () => {
  // UI state
  const [unit, setUnit] = useState<typeof METRIC | typeof IMPERIAL>(METRIC);

  // Inputs (controlled and unit-dependent)
  const [weightKg, setWeightKg] = useState<string>("");
  const [heightCm, setHeightCm] = useState<string>("");
  const [weightLbs, setWeightLbs] = useState<string>("");
  const [heightFt, setHeightFt] = useState<string>("");
  const [heightInch, setHeightInch] = useState<string>("");

  // Real-time result
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<{label: string, color: string, advice: string} | null>(null);
  const [idealRange, setIdealRange] = useState<{min: number, max: number} | null>(null);
  const [weightDiff, setWeightDiff] = useState<number | null>(null);

  // Validation
  const [error, setError] = useState<string | null>(null);

  // Synchronize inputs when toggling units
  useEffect(() => {
    if (unit === METRIC && weightLbs && (heightFt || heightInch)) {
      // User switched to metric, convert imperial vals to metric
      const vals = toMetric({
        weightLbs: parseFloat(weightLbs) || 0,
        heightFt: parseFloat(heightFt) || 0,
        heightInch: parseFloat(heightInch) || 0
      });
      setWeightKg(vals.kg ? vals.kg.toString() : "");
      setHeightCm(vals.cm ? vals.cm.toString() : "");
    } else if (unit === IMPERIAL && weightKg && heightCm) {
      // User switched to imperial, convert metric vals to imperial
      const vals = toImperial({
        weightKg: parseFloat(weightKg) || 0,
        heightCm: parseFloat(heightCm) || 0
      });
      setWeightLbs(vals.lbs ? vals.lbs.toString() : "");
      setHeightFt(vals.ft ? vals.ft.toString() : "");
      setHeightInch(vals.inch ? vals.inch.toString() : "");
    }
  // eslint-disable-next-line
  }, [unit]);

  // Live calculation on input change
  useEffect(() => {
    let bmiVal = null;
    let valid = true;
    let errMsg = "";

    if (unit === METRIC) {
      const w = parseFloat(weightKg);
      const h = parseFloat(heightCm);
      if (w > 0 && h > 0) {
        bmiVal = calcBMI({weight: w, height: h, unit});
        setIdealRange(idealWeightRange(h, unit));
        // weight difference (how much to gain/lose to reach healthy range)
        if (bmiVal < idealBmiRange.min) setWeightDiff(((idealWeightRange(h, unit).min - w) * 100) / 100);
        else if (bmiVal > idealBmiRange.max) setWeightDiff(((w - idealWeightRange(h, unit).max) * 100) / 100);
        else setWeightDiff(0);
      } else if ((w && h === 0) || (w === 0 && h)) {
        valid = false;
        errMsg = "Both weight and height required.";
      }
    } else {
      const w = parseFloat(weightLbs);
      const ft = parseFloat(heightFt);
      const inch = parseFloat(heightInch);
      const totalIn = (ft * 12) + (inch || 0);
      if (w > 0 && totalIn > 0) {
        bmiVal = calcBMI({weight: w, height: totalIn, unit});
        setIdealRange(idealWeightRange(totalIn, unit));
        // weight difference (lbs)
        if (bmiVal < idealBmiRange.min) setWeightDiff(((idealWeightRange(totalIn, unit).min - w) * 100) / 100);
        else if (bmiVal > idealBmiRange.max) setWeightDiff(((w - idealWeightRange(totalIn, unit).max) * 100) / 100);
        else setWeightDiff(0);
      } else if ((w && totalIn === 0) || (w === 0 && totalIn)) {
        valid = false;
        errMsg = "Both weight and height required.";
      }
    }

    if (valid && bmiVal) {
      setBmi(Number(bmiVal.toFixed(2)));
      const cat = BMI_CATEGORIES.find(cat => bmiVal <= cat.upper)!;
      setCategory(cat);
      setError(null);
    } else if (!valid && errMsg) {
      setBmi(null);
      setCategory(null);
      setIdealRange(null);
      setError(errMsg);
    } else {
      setBmi(null);
      setCategory(null);
      setIdealRange(null);
      setError(null);
    }
  // eslint-disable-next-line
  }, [unit, weightKg, heightCm, weightLbs, heightFt, heightInch]);

  // Reset all
  function handleReset() {
    setWeightKg("");
    setHeightCm("");
    setWeightLbs("");
    setHeightFt("");
    setHeightInch("");
    setBmi(null);
    setCategory(null);
    setIdealRange(null);
    setWeightDiff(null);
    setError(null);
  }

  // Print result
  function handlePrint() {
    window.print();
  }

  // Share result/link (simple copy link for demo)
  function handleShare() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    toast({ title: "Link copied to clipboard!" });
  }

  // Render input fields based on unit
  const inputFields = unit === METRIC ? (
    <>
      <Label htmlFor="weight-kg">Weight (kg):</Label>
      <Input
        id="weight-kg"
        type="number"
        min={1}
        placeholder="e.g. 65"
        className="rounded-2xl"
        value={weightKg}
        onChange={e => setWeightKg(e.target.value.replace(/[^0-9.]/g, ""))}
        inputMode="decimal"
        autoComplete="off"
        data-testid="input-kg"
      />
      <Label htmlFor="height-cm">Height (cm):</Label>
      <Input
        id="height-cm"
        type="number"
        min={40}
        placeholder="e.g. 170"
        className="rounded-2xl"
        value={heightCm}
        onChange={e => setHeightCm(e.target.value.replace(/[^0-9.]/g, ""))}
        inputMode="decimal"
        autoComplete="off"
        data-testid="input-cm"
      />
    </>
  ) : (
    <>
      <Label htmlFor="weight-lbs">Weight (lbs):</Label>
      <Input
        id="weight-lbs"
        type="number"
        min={10}
        placeholder="e.g. 150"
        className="rounded-2xl"
        value={weightLbs}
        onChange={e => setWeightLbs(e.target.value.replace(/[^0-9.]/g, ""))}
        inputMode="decimal"
        autoComplete="off"
        data-testid="input-lbs"
      />
      <Label htmlFor="height-ft">Height (ft/in):</Label>
      <div className="flex gap-3">
        <Input
          id="height-ft"
          type="number"
          min={1}
          max={8}
          placeholder="ft"
          className="rounded-2xl w-1/2"
          value={heightFt}
          onChange={e => setHeightFt(e.target.value.replace(/[^0-9]/g, ""))}
          inputMode="numeric"
          autoComplete="off"
          data-testid="input-ft"
        />
        <Input
          id="height-inch"
          type="number"
          min={0}
          max={11}
          placeholder="in"
          className="rounded-2xl w-1/2"
          value={heightInch}
          onChange={e => setHeightInch(e.target.value.replace(/[^0-9]/g, ""))}
          inputMode="numeric"
          autoComplete="off"
          data-testid="input-inch"
        />
      </div>
    </>
  );

  return (
    <div className="bg-white dark:bg-[#20261c] rounded-2xl shadow-2xl p-7 max-w-xl mx-auto border border-[#F7E572] animate-fade-in">
      {/* Unit toggle */}
      <div className="flex justify-center mb-5 gap-3 items-center">
        <Button
          variant={unit === METRIC ? "default" : "outline"}
          className={`rounded-2xl px-5 text-base font-semibold transition-all ${unit === METRIC ? "scale-110 shadow" : ""}`}
          onClick={() => setUnit(METRIC)}
          aria-pressed={unit === METRIC}
        >
          Metric
        </Button>
        <span className="font-extrabold text-lg text-muted-foreground">/</span>
        <Button
          variant={unit === IMPERIAL ? "default" : "outline"}
          className={`rounded-2xl px-5 text-base font-semibold transition-all ${unit === IMPERIAL ? "scale-110 shadow" : ""}`}
          onClick={() => setUnit(IMPERIAL)}
          aria-pressed={unit === IMPERIAL}
        >
          Imperial
        </Button>
      </div>

      {/* Inputs */}
      <form
        className="flex flex-col gap-5"
        onSubmit={e => {e.preventDefault();}}
        autoComplete="off"
      >
        {inputFields}
        <div className="mt-2 flex gap-3 flex-wrap">
          <Button
            type="button"
            variant="secondary"
            className="rounded-2xl shadow hover-scale"
            onClick={handleReset}
            title="Clear all"
          >
            <RefreshCcw className="mr-1" /> Reset
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-2xl shadow hover-scale"
            onClick={handlePrint}
            title="Print results"
          >
            <Printer className="mr-1" /> Print
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-2xl shadow hover-scale"
            onClick={handleShare}
            title="Share link"
          >
            <Share2 className="mr-1" /> Share
          </Button>
        </div>
        {error &&
          <div className="mt-3 text-sm text-destructive font-medium animate-fade-in">{error}</div>
        }
      </form>

      {/* Results Section */}
      {(bmi && category) ? (
        <div
          className="mt-8 animate-fade-in"
        >
          <div className="text-lg font-semibold bg-[#FAF9E3] dark:bg-[#263826] rounded-xl p-5 shadow text-[#3B4D17] dark:text-[#D2FFD0]" style={{borderLeft: `9px solid ${category.color}`}}>
            <div className="mb-2 flex items-center gap-1">
              <span className="text-base font-medium">Your BMI is</span>
              <span className="font-bold text-[1.4em] ml-2" style={{color: category.color}}>{bmi}</span>
            </div>
            <div className="mb-1">
              <span>BMI Category: </span>
              <span className="font-bold" style={{color: category.color}}>{category.label}</span>
            </div>
            <div className="text-[0.96em]">{category.advice}</div>
            <div className="mt-3">
              <span className="text-[#769F1A]">Ideal BMI range: <b>18.5 - 24.9</b></span><br />
              {idealRange && (
                <span>
                  Ideal Weight Range:{" "}
                  <b>
                    {idealRange.min} – {idealRange.max} {unit === METRIC ? "kg" : "lbs"}
                  </b>
                </span>
              )}
            </div>
            {weightDiff !== null && weightDiff !== 0 && (
              <div className="mt-2">
                {weightDiff > 0
                  ? <span>Lose <span className="font-bold text-[#FF5560]">{Math.abs(weightDiff)}</span> {unit === METRIC ? "kg" : "lbs"} to reach Normal BMI.</span>
                  : <span>Gain <span className="font-bold text-[#FFAD3B]">{Math.abs(weightDiff)}</span> {unit === METRIC ? "kg" : "lbs"} to reach Normal BMI.</span>
                }
              </div>
            )}
          </div>
        </div>
      ) : null}

      {/* How it Works / Info Section */}
      <div className="mt-8 p-5 bg-[#FFFDF6] dark:bg-[#232821] rounded-2xl shadow border border-[#ecebb6]">
        <h3 className="font-bold text-lg text-[#A8982D] mb-2">How does this BMI calculator work?</h3>
        <p className="text-[#4A5B1C] mb-2 text-base">Body Mass Index (BMI) is a quick screening tool that uses your height and weight to estimate your healthy weight range.</p>
        <ol className="list-decimal ml-7 text-base space-y-1 text-[#689F19]">
          <li>Select Metric or Imperial units and enter your height and weight.</li>
          <li>The calculator instantly shows your BMI, weight category, ideal weight range, and helpful advice.</li>
        </ol>
        <p className="mt-3 text-xs text-[#A8A85B]">The formula for BMI (kg/m² or lbs/in² x 703) is only a guide and does not replace medical advice.</p>
        {/* BMI Formula and Chart */}
        <div className="mt-4">
          <h4 className="font-semibold text-base mb-2 text-[#ADAB00]">BMI Formula:</h4>
          <p className="mb-2">Metric: <b>BMI = weight (kg) / [height (m)]²</b></p>
          <p>Imperial: <b>BMI = weight (lb) / [height (in)]² x 703</b></p>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base mb-2 text-[#ADAB00]">BMI Categories:</h4>
          <table className="w-full text-sm border-collapse bg-white dark:bg-transparent rounded-2xl overflow-hidden shadow">
            <thead>
              <tr className="bg-[#F7E572]/40 dark:bg-[#233418]">
                <th className="px-3 py-2 text-left">Category</th>
                <th className="px-3 py-2 text-left">BMI range</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-1">Underweight</td><td className="px-3 py-1">&lt; 18.5</td></tr>
              <tr className="bg-[#F7E572]/20 dark:bg-[#182711]"><td className="px-3 py-1">Normal weight</td><td className="px-3 py-1">18.5 – 24.9</td></tr>
              <tr><td className="px-3 py-1">Overweight</td><td className="px-3 py-1">25 – 29.9</td></tr>
              <tr className="bg-[#F7E572]/20 dark:bg-[#182711]"><td className="px-3 py-1">Obesity</td><td className="px-3 py-1">&ge; 30</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-7 p-5 bg-[#F4FFD8] dark:bg-[#26300F] rounded-2xl shadow border border-[#ecebb6]">
        <h3 className="font-bold text-lg text-[#A8982D] mb-2">Frequently Asked Questions</h3>
        <div className="mb-2">
          <span className="font-semibold">Is BMI accurate for everyone?</span><br />
          BMI is a useful screening tool for most adults, but it doesn't consider muscle mass, bone density, or overall body composition.
        </div>
        <div className="mb-2">
          <span className="font-semibold">What is a healthy BMI?</span><br />
          A BMI between 18.5 and 24.9 is considered healthy for most adults.
        </div>
        <div>
          <span className="font-semibold">Can children use this calculator?</span><br />
          BMI calculations for children use different criteria; consult a pediatrician for assessment.
        </div>
      </div>
      {/* Health warning */}
      <div className="mt-6 text-xs text-center text-[#B46565] dark:text-[#E09090] italic">Always consult a healthcare provider for personalized health advice.</div>
    </div>
  );
};

export default BMICalculator;

