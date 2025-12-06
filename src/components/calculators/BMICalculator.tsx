import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeartPulse, Printer, Share2, RefreshCcw, Sparkles, Activity, Scale } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const BMI_CATEGORIES = [
  { upper: 18.5, label: "Underweight", color: "text-yellow-500", bgColor: "bg-yellow-500/10", advice: "Consider gaining weight for optimal health." },
  { upper: 24.9, label: "Normal weight", color: "text-primary", bgColor: "bg-primary/10", advice: "Great! Maintain your healthy weight." },
  { upper: 29.9, label: "Overweight", color: "text-orange-500", bgColor: "bg-orange-500/10", advice: "Consider a healthier diet and exercise." },
  { upper: Infinity, label: "Obesity", color: "text-destructive", bgColor: "bg-destructive/10", advice: "Consult a healthcare provider for guidance." }
];

const METRIC = "metric";
const IMPERIAL = "imperial";

function calcBMI(weight: number, height: number, unit: string) {
  if (unit === METRIC) {
    if (!weight || !height) return null;
    return weight / Math.pow(height / 100, 2);
  } else {
    if (!weight || !height) return null;
    return (weight / Math.pow(height, 2)) * 703;
  }
}

function idealWeightRange(height: number, unit: string) {
  if (unit === METRIC) {
    return {
      min: Math.round(18.5 * Math.pow(height / 100, 2) * 10) / 10,
      max: Math.round(24.9 * Math.pow(height / 100, 2) * 10) / 10,
    };
  } else {
    return {
      min: Math.round((18.5 * Math.pow(height, 2) / 703) * 10) / 10,
      max: Math.round((24.9 * Math.pow(height, 2) / 703) * 10) / 10,
    };
  }
}

const BMICalculator = () => {
  const [unit, setUnit] = useState<typeof METRIC | typeof IMPERIAL>(METRIC);
  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<typeof BMI_CATEGORIES[0] | null>(null);
  const [idealRange, setIdealRange] = useState<{min: number, max: number} | null>(null);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    let bmiVal = null;
    if (unit === METRIC) {
      const w = parseFloat(weightKg);
      const h = parseFloat(heightCm);
      if (w > 0 && h > 0) {
        bmiVal = calcBMI(w, h, unit);
        setIdealRange(idealWeightRange(h, unit));
      }
    } else {
      const w = parseFloat(weightLbs);
      const totalIn = (parseFloat(heightFt) || 0) * 12 + (parseFloat(heightInch) || 0);
      if (w > 0 && totalIn > 0) {
        bmiVal = calcBMI(w, totalIn, unit);
        setIdealRange(idealWeightRange(totalIn, unit));
      }
    }

    if (bmiVal) {
      setBmi(Number(bmiVal.toFixed(1)));
      const cat = BMI_CATEGORIES.find(c => bmiVal! <= c.upper)!;
      setCategory(cat);
    } else {
      setBmi(null);
      setCategory(null);
      setIdealRange(null);
    }
  }, [unit, weightKg, heightCm, weightLbs, heightFt, heightInch]);

  const handleReset = () => {
    setWeightKg("");
    setHeightCm("");
    setWeightLbs("");
    setHeightFt("");
    setHeightInch("");
    setBmi(null);
    setCategory(null);
    setIdealRange(null);
  };

  const triggerAnim = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 700);
  };

  const handlePrint = () => window.print();
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Share this calculator with friends." });
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent 
                      flex items-center justify-center shadow-glow">
          <HeartPulse className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-gradient">BMI Calculator</h2>
          <p className="text-sm text-muted-foreground">Calculate Body Mass Index</p>
        </div>
      </div>

      {/* Unit Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          className={cn(
            "flex-1 py-3 rounded-xl font-medium transition-all touch-target",
            unit === METRIC 
              ? "bg-primary text-primary-foreground shadow-glow" 
              : "glass-button hover:bg-primary/10"
          )}
          onClick={() => setUnit(METRIC)}
        >
          Metric (kg/cm)
        </button>
        <button
          type="button"
          className={cn(
            "flex-1 py-3 rounded-xl font-medium transition-all touch-target",
            unit === IMPERIAL 
              ? "bg-primary text-primary-foreground shadow-glow" 
              : "glass-button hover:bg-primary/10"
          )}
          onClick={() => setUnit(IMPERIAL)}
        >
          Imperial (lbs/ft)
        </button>
      </div>

      <form onSubmit={e => { e.preventDefault(); triggerAnim(); }} className="space-y-5">
        {unit === METRIC ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="weight-kg" className="text-base font-medium">Weight (kg)</Label>
              <Input
                id="weight-kg"
                type="number"
                placeholder="e.g. 70"
                value={weightKg}
                onChange={e => setWeightKg(e.target.value)}
                className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height-cm" className="text-base font-medium">Height (cm)</Label>
              <Input
                id="height-cm"
                type="number"
                placeholder="e.g. 175"
                value={heightCm}
                onChange={e => setHeightCm(e.target.value)}
                className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="weight-lbs" className="text-base font-medium">Weight (lbs)</Label>
              <Input
                id="weight-lbs"
                type="number"
                placeholder="e.g. 154"
                value={weightLbs}
                onChange={e => setWeightLbs(e.target.value)}
                className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-base font-medium">Height</Label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder="ft"
                  value={heightFt}
                  onChange={e => setHeightFt(e.target.value)}
                  className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30 flex-1"
                />
                <Input
                  type="number"
                  placeholder="in"
                  value={heightInch}
                  onChange={e => setHeightInch(e.target.value)}
                  className="glass-button border-border/50 h-12 text-lg focus:ring-2 focus:ring-primary/30 flex-1"
                />
              </div>
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" className="btn-gradient flex items-center gap-2 touch-target">
            <Sparkles className="w-4 h-4" />
            Calculate
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="glass-button px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 
                     hover:bg-muted/50 transition-colors touch-target"
          >
            <RefreshCcw className="w-4 h-4" />
            Reset
          </button>
          <button type="button" onClick={handlePrint} className="glass-button px-4 py-2.5 rounded-xl touch-target" aria-label="Print">
            <Printer className="w-4 h-4" />
          </button>
          <button type="button" onClick={handleShare} className="glass-button px-4 py-2.5 rounded-xl text-primary touch-target" aria-label="Share">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Results */}
      {bmi && category && (
        <div className={cn(
          "mt-8 glass-hero rounded-2xl p-6 animate-scale-in",
          anim && "ring-2 ring-primary/50 shadow-glow"
        )}>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-primary" />
            <span className="text-lg font-display font-bold text-gradient">Your BMI Result</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <div className={cn("text-4xl font-display font-bold", category.color)}>{bmi}</div>
              <div className="text-sm text-muted-foreground">BMI Score</div>
            </div>
            <div className={cn("rounded-xl p-4 text-center", category.bgColor)}>
              <div className={cn("text-xl font-display font-bold", category.color)}>{category.label}</div>
              <div className="text-sm text-muted-foreground">Category</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{category.advice}</p>

          {idealRange && (
            <div className="glass-button rounded-xl p-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Ideal Weight Range:</span>
                <span className="font-semibold text-foreground">
                  {idealRange.min} - {idealRange.max} {unit === METRIC ? "kg" : "lbs"}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-muted-foreground">Healthy BMI Range:</span>
                <span className="font-semibold text-primary">18.5 - 24.9</span>
              </div>
            </div>
          )}
        </div>
      )}

      <p className="mt-6 text-xs text-muted-foreground text-center">
        <strong>Disclaimer:</strong> BMI is a screening tool. Consult a healthcare provider for personalized advice.
      </p>
    </div>
  );
};

export default BMICalculator;
