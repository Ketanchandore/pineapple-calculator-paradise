
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Gender = "male" | "female";
type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";
type Goal = "maintain" | "lose" | "gain";

const activityMap: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: "Sedentary (little or no exercise)", multiplier: 1.2 },
  light: { label: "Lightly Active (light exercise/sports 1-3 days/week)", multiplier: 1.375 },
  moderate: { label: "Moderately Active (moderate exercise/sports 3-5 days/week)", multiplier: 1.55 },
  active: { label: "Active (hard exercise/sports 6-7 days/week)", multiplier: 1.725 },
  very_active: { label: "Very Active (very hard exercise, physical job, or training)", multiplier: 1.9 },
};

const goalMap: Record<Goal, string> = {
  maintain: "Maintain Weight",
  lose: "Lose Weight",
  gain: "Gain Weight",
};

function calculateBMR(
  gender: Gender,
  weight: number,
  height: number,
  age: number
): number {
  // Mifflin-St Jeor Equation
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function getCaloricGoal(
  maintenance: number,
  goal: Goal
): { label: string; calories: number; advice: string } {
  switch (goal) {
    case "maintain":
      return {
        label: "Maintenance Calories",
        calories: Math.round(maintenance),
        advice: "To maintain your weight, eat around this much daily.",
      };
    case "lose":
      return {
        label: "Weight Loss Calories",
        calories: Math.round(maintenance - 500),
        advice: "A 500 calorie deficit per day equals about 0.5kg (1lb) weight loss per week.",
      };
    case "gain":
      return {
        label: "Weight Gain Calories",
        calories: Math.round(maintenance + 500),
        advice: "A 500 calorie surplus per day equals about 0.5kg (1lb) weight gain per week.",
      };
    default:
      return { label: "", calories: 0, advice: "" };
  }
}

const CalorieCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState<number>(170); // cm
  const [weight, setWeight] = useState<number>(70); // kg
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [showResult, setShowResult] = useState(false);

  // Results
  let bmr = calculateBMR(gender, weight, height, age);
  let maintenance = bmr * activityMap[activity].multiplier;
  let calorieGoal = getCaloricGoal(maintenance, goal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <Card className="max-w-xl mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-[#00B86B] text-2xl">Calorie Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="age">Age (years)</Label>
              <Input
                id="age"
                type="number"
                min={10}
                max={100}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label>Gender</Label>
              <div className="flex gap-3 mt-1">
                <Button
                  type="button"
                  variant={gender === "male" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setGender("male")}
                >
                  Male
                </Button>
                <Button
                  type="button"
                  variant={gender === "female" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setGender("female")}
                >
                  Female
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                min={100}
                max={250}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                min={20}
                max={250}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                required
                className="mt-1"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="activity">Activity Level</Label>
              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                className="mt-1 w-full border rounded-md py-2 px-3 text-base"
                required
              >
                {Object.entries(activityMap).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <Label>Goal</Label>
              <div className="flex gap-3 mt-1">
                {(["maintain", "lose", "gain"] as Goal[]).map((g) => (
                  <Button
                    key={g}
                    type="button"
                    variant={goal === g ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setGoal(g)}
                  >
                    {goalMap[g]}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-4" size="lg">
            Calculate
          </Button>
        </form>
        {showResult && (
          <div className="mt-8 bg-[#FFF6BF] rounded-lg p-6 text-center animate-fade-in">
            <div className="mb-3">
              <div className="font-semibold text-base mb-2 text-[#305C20]">
                Your Basal Metabolic Rate (BMR)
              </div>
              <div className="text-2xl font-bold text-[#00B86B] mb-1">{Math.round(bmr)} kcal/day</div>
              <div className="text-sm text-[#6E6A23]">This is the number of calories your body burns at rest.</div>
            </div>
            <hr className="mb-4" />
            <div className="mb-3">
              <div className="font-semibold text-base mb-2 text-[#305C20]">
                Total Daily Calorie Needs ({activityMap[activity].label})
              </div>
              <div className="text-2xl font-bold text-[#00B86B] mb-1">{Math.round(maintenance)} kcal/day</div>
              <div className="text-sm text-[#6E6A23]">This is the estimated calories needed per day to maintain your current weight based on your activity.</div>
            </div>
            <hr className="mb-4" />
            <div>
              <div className="font-semibold text-base mb-2 text-[#305C20]">
                {calorieGoal.label}
              </div>
              <div className="text-2xl font-bold text-[#FF8C1C] mb-1">{calorieGoal.calories} kcal/day</div>
              <div className="text-sm text-[#6E6A23]">{calorieGoal.advice}</div>
            </div>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setShowResult(false)}
            >
              Try Another Calculation
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalorieCalculator;

