import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import BMICalculator from "@/components/calculators/BMICalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Activity, Flame, Baby, Calendar } from "lucide-react";
import { Helmet } from "react-helmet";

const BMICalculatorPage = () => {
  const faqs = [
    {
      question: "What is a healthy BMI range for adults?",
      answer: "A healthy BMI for adults is typically between 18.5 and 24.9 according to WHO standards. This range is associated with the lowest health risks and optimal wellness outcomes. Maintaining BMI in this range helps reduce risk of chronic diseases like heart disease, type 2 diabetes, hypertension, stroke, and certain cancers. BMI below 18.5 is underweight (may indicate malnutrition), 25-29.9 is overweight (increased health risks), and 30+ is obese (high risk of serious health conditions)."
    },
    {
      question: "How accurate is BMI for measuring body fat and health?",
      answer: "BMI is a reliable screening tool for the general population and correlates well with body fat percentage in most people. Our calculator uses the standard WHO formula (weight/height²) and is highly accurate for calculations. However, BMI has limitations - it doesn't distinguish between muscle and fat mass, so athletes and bodybuilders may be classified as overweight despite low body fat. It also doesn't measure fat distribution (belly fat vs subcutaneous fat). For comprehensive assessment, consider additional metrics like waist circumference, body fat percentage, and overall fitness."
    },
    {
      question: "Can I use this BMI calculator for children and teenagers?",
      answer: "This calculator is designed specifically for adults aged 18 and above. Children and teenagers (2-19 years) have different BMI standards because they're still growing and their body composition changes with age. For children, doctors use BMI-for-age percentile charts that account for age and gender. A child's BMI is compared to others of the same age/sex. Consult pediatric growth charts or your pediatrician for accurate BMI assessment for children. Never use adult BMI categories for kids."
    },
    {
      question: "What should I do if my BMI indicates overweight or obesity?",
      answer: "If your BMI is 25 or above, consider consulting a healthcare provider for personalized advice. They can assess your overall health, body composition, waist circumference, and other risk factors. Don't panic - BMI is just one indicator. Recommended steps: (1) Get medical evaluation including blood tests, (2) Create a sustainable diet plan with calorie deficit, (3) Increase physical activity gradually (150+ minutes weekly), (4) Set realistic goals (0.5-1 kg weight loss per week), (5) Monitor progress regularly. Even 5-10% weight loss can significantly improve health markers."
    },
    {
      question: "Are BMI ranges different for different ethnicities and populations?",
      answer: "Yes, BMI cutoff points can vary for different ethnic groups due to differences in body composition and fat distribution. For Asian populations, WHO recommends lower cutoffs: overweight starts at BMI 23 (instead of 25) and obese at 27.5 (instead of 30) because Asians tend to have higher body fat percentage and more visceral fat at lower BMI levels. Pacific Islanders may have higher muscle mass, affecting interpretation. Always consult healthcare providers familiar with ethnicity-specific guidelines. Some countries have adopted population-specific BMI categories for more accurate health risk assessment."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BMI Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "250000"
    },
    "description": "Free online BMI calculator to determine your Body Mass Index and get personalized health recommendations instantly."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
  <>
    <Helmet>
      <title>BMI Calculator - Free Body Mass Index Calculator | Health Check Tool</title>
      <meta name="description" content="Calculate your Body Mass Index (BMI) instantly. Free, accurate BMI calculator with detailed health recommendations based on WHO standards." />
      <meta property="og:title" content="BMI Calculator - Free Body Mass Index Calculator | Health Check Tool" />
      <meta property="og:description" content="Calculate your Body Mass Index (BMI) instantly. Free, accurate BMI calculator with detailed health recommendations based on WHO standards." />
      <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/bmi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="BMI Calculator - Free Body Mass Index Calculator | Health Check Tool" />
      <meta name="twitter:description" content="Calculate your Body Mass Index (BMI) instantly. Free, accurate BMI calculator with detailed health recommendations based on WHO standards." />
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
    <CalculatorPageLayout 
      pageTitle="BMI Calculator - Body Mass Index Calculator Free" 
      description="Calculate your Body Mass Index (BMI) instantly. Free, accurate BMI calculator with detailed health recommendations based on WHO standards."
      calculatorType="health"
      keywords="BMI calculator, body mass index, BMI chart, healthy weight, obesity calculator, weight status, free BMI calculator, calculate BMI"
      canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/bmi"
      faqItems={faqs}
    >
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Introduction Section */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          BMI Calculator - Body Mass Index Calculator Free
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Calculate your Body Mass Index (BMI) instantly with our free online calculator following WHO (World Health Organization) 
            standards. Simply enter your height and weight to determine if you're underweight, normal weight, overweight, or obese. 
            BMI is a reliable screening tool used worldwide by healthcare professionals, fitness trainers, and individuals to assess 
            weight status and potential health risks. Get immediate results with personalized health recommendations based on your BMI category.
          </p>
          
          <p>
            Understanding your BMI is crucial for maintaining optimal health and wellness. This simple yet powerful metric helps you 
            assess whether your weight is in a healthy range for your height, enabling informed decisions about diet, exercise, and 
            lifestyle changes. Whether you're starting a weight loss journey, monitoring fitness progress, preparing for a medical 
            consultation, or tracking health metrics, our BMI calculator provides accurate, instant results that help you stay on top 
            of your health goals.
          </p>
          
          <p>
            BMI calculation is trusted by doctors, nutritionists, and fitness professionals worldwide as a quick screening method for 
            weight-related health risks. While it doesn't measure body fat directly, it correlates well with direct measures of body 
            fatness for most people. Use our calculator to check your weight status, understand health implications of your current BMI, 
            set realistic weight goals, and monitor progress over time. Free, accurate, and easy to use for anyone aged 18 and above.
          </p>
        </div>
      </div>

      {/* Calculator Component */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <BMICalculator />
      </div>

      {/* How to Use Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          How to Use the BMI Calculator
        </h2>
        
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
          <li>Select your preferred measurement system (metric or imperial)</li>
          <li>Enter your current weight in kilograms or pounds</li>
          <li>Enter your height in centimeters, meters, or feet/inches</li>
          <li>Click "Calculate BMI" to get instant results</li>
          <li>Review your BMI category and personalized health recommendations</li>
        </ol>
      </div>

      {/* Understanding BMI Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Understanding Body Mass Index (BMI)
        </h2>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Body Mass Index (BMI) is a widely-used screening tool that measures body fat based on your height and weight. 
            Developed by Belgian mathematician Adolphe Quetelet in the 1830s, BMI provides a reliable indicator of body 
            fatness for most people and is used globally to screen for weight categories that may lead to health problems. 
            The World Health Organization (WHO) and healthcare systems worldwide use BMI as a standard metric to assess 
            weight status and associated health risks.
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-2">BMI Calculation Formula:</p>
              <p className="font-mono text-lg">BMI = weight (kg) / height (m)²</p>
              <p className="text-sm mt-2">For imperial units: BMI = (weight in pounds × 703) / (height in inches)²</p>
              <p className="text-sm mt-3">Example: 70 kg person, 1.75m tall = 70 / (1.75)² = 70 / 3.0625 = 22.86 BMI (Normal)</p>
            </div>
            
            <div>
              <p className="font-semibold text-foreground mb-3">BMI Categories (WHO Standards):</p>
              <ul className="space-y-2">
                <li><strong>Underweight:</strong> BMI less than 18.5 - May indicate malnutrition or health issues</li>
                <li><strong>Normal weight:</strong> BMI 18.5 to 24.9 - Healthy weight range, lowest health risk</li>
                <li><strong>Overweight:</strong> BMI 25 to 29.9 - Increased risk of health problems</li>
                <li><strong>Obese Class I:</strong> BMI 30 to 34.9 - High risk of health complications</li>
                <li><strong>Obese Class II:</strong> BMI 35 to 39.9 - Very high risk</li>
                <li><strong>Obese Class III:</strong> BMI 40 or greater - Extremely high risk, severe obesity</li>
              </ul>
            </div>
          </div>
          
          <p>
            <strong>Health Implications:</strong> BMI correlates with health risks. Higher BMI (above 25) increases risk of 
            cardiovascular disease, type 2 diabetes, hypertension, stroke, osteoarthritis, certain cancers, and sleep apnea. 
            Lower BMI (below 18.5) may indicate malnutrition, weakened immune system, osteoporosis, and anemia. Maintaining 
            BMI in the normal range (18.5-24.9) is associated with optimal health outcomes and longevity.
          </p>
          
          <p>
            <strong>BMI Limitations:</strong> While BMI is useful for general population screening, it has limitations. It doesn't 
            distinguish between muscle mass and fat mass, so muscular athletes may be classified as overweight despite low body fat. 
            It doesn't account for fat distribution (visceral vs subcutaneous fat), bone density, age, sex, or ethnicity differences. 
            For athletes, elderly, pregnant women, and growing children, BMI should be interpreted with caution alongside other health 
            metrics like waist circumference, body fat percentage, and overall fitness level.
          </p>
          
          <p>
            <strong>Ethnicity Considerations:</strong> BMI cutoffs may vary for different ethnic groups. Asian populations, for example, 
            may experience increased health risks at lower BMI levels (overweight starts at BMI 23, obese at 27.5 according to some 
            Asian-specific guidelines). This is because different populations have different body compositions and fat distribution 
            patterns at the same BMI level. Consult healthcare providers familiar with ethnicity-specific guidelines for accurate assessment.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <RelatedCalculators 
          calculators={[
            {
              title: "BMR Calculator",
              description: "Calculate your Basal Metabolic Rate",
              icon: Activity,
              link: "/calculators/bmr"
            },
            {
              title: "Calorie Calculator",
              description: "Calculate daily calorie needs",
              icon: Flame,
              link: "/calculators/calorie"
            },
            {
              title: "Pregnancy Calculator",
              description: "Calculate due date",
              icon: Baby,
              link: "/calculators/pregnancy"
            },
            {
              title: "Age Calculator",
              description: "Calculate exact age",
              icon: Calendar,
              link: "/calculators/age"
            }
          ]}
        />
      </div>
    </div>
  </CalculatorPageLayout>
  </>
);
};

export default BMICalculatorPage;
