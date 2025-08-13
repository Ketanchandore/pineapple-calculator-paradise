import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap, Share2, RotateCcw, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BMRResult {
  bmr: number;
  tdee: {
    sedentary: number;
    light: number;
    moderate: number;
    active: number;
    extra: number;
  };
  weightGoals: {
    lose2: number;
    lose1: number;
    maintain: number;
    gain1: number;
    gain2: number;
  };
}

const BMRCalculator = () => {
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState<BMRResult | null>(null);

  const activityLevels = {
    sedentary: { multiplier: 1.2, label: 'Sedentary', description: 'Little to no exercise' },
    light: { multiplier: 1.375, label: 'Light', description: 'Light exercise 1-3 days/week' },
    moderate: { multiplier: 1.55, label: 'Moderate', description: 'Moderate exercise 3-5 days/week' },
    active: { multiplier: 1.725, label: 'Active', description: 'Hard exercise 6-7 days/week' },
    extra: { multiplier: 1.9, label: 'Very Active', description: 'Very hard exercise, physical job' },
  };

  const calculateBMR = () => {
    let weightKg = parseFloat(weight);
    let heightCm = parseFloat(height);
    const ageYears = parseFloat(age);

    if (!weightKg || !heightCm || !ageYears) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields.",
        variant: "destructive",
      });
      return;
    }

    // Convert imperial to metric if needed
    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592; // lbs to kg
      heightCm = heightCm * 2.54; // inches to cm
    }

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    }

    // Calculate TDEE for different activity levels
    const tdee = {
      sedentary: bmr * activityLevels.sedentary.multiplier,
      light: bmr * activityLevels.light.multiplier,
      moderate: bmr * activityLevels.moderate.multiplier,
      active: bmr * activityLevels.active.multiplier,
      extra: bmr * activityLevels.extra.multiplier,
    };

    // Calculate weight goals based on selected activity level
    const selectedTDEE = tdee[activityLevel as keyof typeof tdee];
    const weightGoals = {
      lose2: selectedTDEE - 1000, // Lose 2 lbs/week
      lose1: selectedTDEE - 500,  // Lose 1 lb/week
      maintain: selectedTDEE,     // Maintain weight
      gain1: selectedTDEE + 500,  // Gain 1 lb/week
      gain2: selectedTDEE + 1000, // Gain 2 lbs/week
    };

    setResult({ bmr, tdee, weightGoals });
  };

  const handleReset = () => {
    setAge('30');
    setGender('male');
    setWeight('70');
    setHeight('170');
    setActivityLevel('moderate');
    setUnit('metric');
    setResult(null);
  };

  const handleShare = async () => {
    if (!result) return;

    const shareText = `BMR Calculator Results:
Basic Metabolic Rate: ${Math.round(result.bmr)} calories/day
Total Daily Energy: ${Math.round(result.tdee[activityLevel as keyof typeof result.tdee])} calories/day

Weight Goals:
• Lose 2 lbs/week: ${Math.round(result.weightGoals.lose2)} cal/day
• Lose 1 lb/week: ${Math.round(result.weightGoals.lose1)} cal/day
• Maintain weight: ${Math.round(result.weightGoals.maintain)} cal/day
• Gain 1 lb/week: ${Math.round(result.weightGoals.gain1)} cal/day
• Gain 2 lbs/week: ${Math.round(result.weightGoals.gain2)} cal/day

Calculated on PineappleHub.com`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'BMR Calculator Results',
          text: shareText,
        });
      } catch (error) {
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to Clipboard",
          description: "Results copied to clipboard!",
        });
      }
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to Clipboard",
        description: "Results copied to clipboard!",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (age && weight && height) {
        calculateBMR();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [age, gender, weight, height, activityLevel, unit]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Zap className="h-6 w-6 text-primary" />
            BMR Calculator
          </CardTitle>
          <p className="text-muted-foreground">
            Calculate your Basal Metabolic Rate and daily calorie needs
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Unit Selection */}
          <div className="flex justify-center">
            <RadioGroup value={unit} onValueChange={setUnit} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric">Metric (kg, cm)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial">Imperial (lbs, inches)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="30"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-muted-foreground">years</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                placeholder={unit === 'metric' ? '70' : '154'}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-muted-foreground">
                {unit === 'metric' ? 'kg' : 'lbs'}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="number"
                step="0.1"
                placeholder={unit === 'metric' ? '170' : '67'}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="text-center"
              />
              <p className="text-xs text-muted-foreground">
                {unit === 'metric' ? 'cm' : 'inches'}
              </p>
            </div>
          </div>

          {/* Activity Level */}
          <div className="space-y-3">
            <Label>Activity Level</Label>
            <RadioGroup value={activityLevel} onValueChange={setActivityLevel} className="space-y-3">
              {Object.entries(activityLevels).map(([key, level]) => (
                <div key={key} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50">
                  <RadioGroupItem value={key} id={key} />
                  <div className="flex-1">
                    <Label htmlFor={key} className="font-medium cursor-pointer">
                      {level.label}
                    </Label>
                    <p className="text-xs text-muted-foreground">{level.description}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {level.multiplier}x
                  </Badge>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={calculateBMR} className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Calculate BMR
            </Button>
            <Button onClick={handleReset} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
            {result && (
              <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BMR and TDEE */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Your Metabolic Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary">Basal Metabolic Rate (BMR)</h3>
                <p className="text-3xl font-bold">{Math.round(result.bmr)}</p>
                <p className="text-sm text-muted-foreground">calories per day at rest</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Total Daily Energy Expenditure (TDEE)</h4>
                {Object.entries(result.tdee).map(([key, value]) => (
                  <div 
                    key={key}
                    className={`flex justify-between items-center p-3 rounded-lg border ${
                      key === activityLevel ? 'bg-primary/10 border-primary' : 'bg-muted/20'
                    }`}
                  >
                    <div>
                      <span className="font-medium">{activityLevels[key as keyof typeof activityLevels].label}</span>
                      {key === activityLevel && <Badge className="ml-2" variant="default">Current</Badge>}
                    </div>
                    <span className="font-bold">{Math.round(value)} cal/day</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weight Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Weight Management Goals
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Based on your {activityLevels[activityLevel as keyof typeof activityLevels].label.toLowerCase()} activity level
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { key: 'lose2', label: 'Lose 2 lbs/week', color: 'text-red-600', icon: '📉' },
                { key: 'lose1', label: 'Lose 1 lb/week', color: 'text-orange-600', icon: '📊' },
                { key: 'maintain', label: 'Maintain weight', color: 'text-green-600', icon: '⚖️' },
                { key: 'gain1', label: 'Gain 1 lb/week', color: 'text-blue-600', icon: '📈' },
                { key: 'gain2', label: 'Gain 2 lbs/week', color: 'text-purple-600', icon: '📊' },
              ].map(({ key, label, color, icon }) => (
                <div key={key} className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
                  <div className="flex items-center gap-2">
                    <span>{icon}</span>
                    <span className="font-medium">{label}</span>
                  </div>
                  <span className={`font-bold ${color}`}>
                    {Math.round(result.weightGoals[key as keyof typeof result.weightGoals])} cal/day
                  </span>
                </div>
              ))}

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Note:</strong> For healthy weight loss, aim for 1-2 lbs per week. 
                  Consult a healthcare provider before making significant dietary changes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Information Section */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding BMR & TDEE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">What is BMR?</h4>
              <p className="text-sm text-muted-foreground">
                Basal Metabolic Rate is the number of calories your body needs to maintain basic functions 
                like breathing, circulation, and cell production while at rest.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What is TDEE?</h4>
              <p className="text-sm text-muted-foreground">
                Total Daily Energy Expenditure includes your BMR plus calories burned through 
                daily activities and exercise.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Factors Affecting BMR</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Age (BMR decreases with age)</li>
              <li>Gender (males typically have higher BMR)</li>
              <li>Body composition (muscle burns more calories than fat)</li>
              <li>Genetics and hormones</li>
              <li>Body size and weight</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BMRCalculator;