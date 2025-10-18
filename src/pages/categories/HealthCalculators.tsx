import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Heart, Activity, Apple, Baby, Scale, Flame } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HealthCalculators = () => {
  const calculators = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and determine if you're underweight, normal weight, overweight, or obese.",
      icon: Scale,
      link: "/calculators/bmi",
      category: "Fitness"
    },
    {
      title: "BMR Calculator",
      description: "Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest.",
      icon: Activity,
      link: "/calculators/bmr",
      category: "Fitness"
    },
    {
      title: "Calorie Calculator",
      description: "Calculate your daily calorie needs based on age, weight, height, and activity level.",
      icon: Flame,
      link: "/calculators/calorie",
      category: "Nutrition"
    },
    {
      title: "Pregnancy Calculator",
      description: "Calculate your due date, gestational age, and trimester based on LMP or conception date.",
      icon: Baby,
      link: "/calculators/pregnancy",
      category: "Pregnancy"
    },
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, days, hours, and even seconds from your birth date.",
      icon: Heart,
      link: "/calculators/age",
      category: "Utility"
    }
  ];

  return (
    <>
      <SEOHead
        title="Health & Fitness Calculators - Free BMI, Calorie & Body Tools"
        description="Free online health calculators for BMI, BMR, calories, pregnancy, and fitness. Get instant health metrics and personalized recommendations for better wellness."
        keywords="health calculators, BMI calculator, calorie calculator, BMR calculator, pregnancy calculator, fitness calculators, body mass index"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/health-calculators"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">

          <div className="max-w-6xl mx-auto mt-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Health & Fitness Calculators - Free Online Tools
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Take control of your health journey with our comprehensive collection of free health and 
                fitness calculators. Track your BMI, calculate calorie needs, monitor pregnancy milestones, 
                and achieve your wellness goals with accurate, science-backed tools.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
              <p>
                Our health calculators are designed by health professionals and use WHO-approved formulas and 
                medical standards. Whether you're tracking fitness progress, planning nutrition, or monitoring 
                pregnancy, our tools provide reliable health metrics to support your wellness journey.
              </p>
              <p>
                From calculating your Body Mass Index (BMI) to determining daily calorie requirements and 
                pregnancy due dates, our calculators give you instant, actionable health insights. All tools 
                are free, easy to use, and work on any device. Make informed health decisions backed by 
                accurate calculations trusted by fitness enthusiasts and healthcare professionals worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calc, index) => {
                const Icon = calc.icon;
                return (
                  <Link key={index} to={calc.link}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {calc.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {calc.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {calc.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Use Our Health Calculators?</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Medically Accurate:</strong> Based on WHO and medical standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>100% Free:</strong> No registration or subscription required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Privacy Protected:</strong> All calculations done locally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Easy to Use:</strong> Simple inputs, instant results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Mobile Optimized:</strong> Works perfectly on all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Expert Guidance:</strong> Results with health recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthCalculators;
