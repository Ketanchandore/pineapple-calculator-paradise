import { SEOHead } from "@/components/SEOHead";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import BMRCalculator from "@/components/calculators/BMRCalculator";

const BMRCalculatorPage = () => {
  const faqItems = [
    {
      question: "What is BMR and why is it important?",
      answer: "BMR (Basal Metabolic Rate) is the number of calories your body needs to maintain basic functions like breathing, circulation, and cell production while at rest. It represents 60-75% of your total daily calorie expenditure and is crucial for weight management planning."
    },
    {
      question: "How accurate is the BMR calculation?",
      answer: "Our calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate BMR formulas for the general population. However, individual variations due to genetics, muscle mass, and metabolic health can affect actual BMR by ±10-15%."
    },
    {
      question: "What's the difference between BMR and TDEE?",
      answer: "BMR is your resting metabolic rate, while TDEE (Total Daily Energy Expenditure) includes your BMR plus calories burned through daily activities and exercise. TDEE is what you actually need to maintain your current weight."
    },
    {
      question: "How do I use BMR for weight loss?",
      answer: "To lose weight, consume fewer calories than your TDEE. A deficit of 500 calories per day typically results in 1 pound of weight loss per week. Never eat below your BMR for extended periods as this can slow your metabolism."
    },
    {
      question: "Does age affect my BMR?",
      answer: "Yes, BMR typically decreases by 2-3% per decade after age 20 due to loss of muscle mass and slower cellular processes. Regular exercise, especially strength training, can help maintain a higher BMR as you age."
    },
    {
      question: "Why do men typically have higher BMR than women?",
      answer: "Men generally have higher BMR due to greater muscle mass, larger body size, and different hormonal profiles. Muscle tissue burns more calories at rest than fat tissue, contributing to this difference."
    },
    {
      question: "Can I increase my BMR naturally?",
      answer: "Yes! Building muscle through strength training, staying hydrated, getting adequate sleep, eating protein-rich foods, and maintaining an active lifestyle can all help increase your BMR naturally."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMR Calculator",
    "applicationCategory": "HealthApplication",
    "description": "Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) with weight management goals. Uses the accurate Mifflin-St Jeor equation.",
    "url": "https://pineapplehub.com/calculators/bmr",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "BMR calculation using Mifflin-St Jeor equation",
      "TDEE calculation for different activity levels",
      "Weight management goals",
      "Metric and Imperial units",
      "Personalized calorie recommendations",
      "Activity level guidance",
      "Scientific accuracy"
    ]
  };

  return (
    <>
      <SEOHead
        title="BMR Calculator - Basal Metabolic Rate & Daily Calories | PineappleHub"
        description="Calculate your BMR (Basal Metabolic Rate) and daily calorie needs with our accurate calculator. Get personalized TDEE and weight management goals based on your activity level."
        keywords="BMR calculator, basal metabolic rate calculator, daily calorie calculator, TDEE calculator, metabolism calculator, weight loss calculator, calorie needs calculator"
        canonicalUrl="https://pineapplehub.com/calculators/bmr"
        structuredData={structuredData}
      />
      <CalculatorPageLayout
        pageTitle="BMR Calculator"
        description="Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) to understand your daily calorie needs. Get personalized recommendations for weight loss, maintenance, or gain based on your activity level."
        faqItems={faqItems}
      >
        <LazyCalculatorWrapper>
          <BMRCalculator />
        </LazyCalculatorWrapper>
      </CalculatorPageLayout>
    </>
  );
};

export default BMRCalculatorPage;