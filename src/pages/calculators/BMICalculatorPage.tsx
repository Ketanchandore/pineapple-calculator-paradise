import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import BMICalculator from "@/components/calculators/BMICalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Activity, Flame, Baby, Calendar } from "lucide-react";

const BMICalculatorPage = () => {
  const faqs = [
    {
      question: "What is a healthy BMI range?",
      answer: "A healthy BMI for adults is typically between 18.5 and 24.9. This range is associated with the lowest health risks and optimal wellness outcomes according to the World Health Organization. Maintaining a BMI within this range can help reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers."
    },
    {
      question: "How accurate is the BMI calculator?",
      answer: "Our BMI calculator uses the standard WHO formula and is highly accurate for the general population. However, BMI doesn't account for muscle mass, bone density, or body composition, so it should be used as one of several health indicators. For a comprehensive health assessment, consider additional metrics like body fat percentage, waist circumference, and overall fitness level."
    },
    {
      question: "Can I use this calculator for children?",
      answer: "This calculator is designed for adults aged 18 and above. Children and teenagers have different BMI standards based on age and gender. Please consult pediatric growth charts for children. Pediatricians use BMI-for-age percentiles to assess healthy weight ranges for young people."
    },
    {
      question: "What should I do if my BMI is high?",
      answer: "If your BMI indicates overweight or obesity, consider consulting a healthcare provider. They can assess your overall health, body composition, and recommend personalized lifestyle changes including diet and exercise modifications. A high BMI may increase your risk for various health conditions, but a healthcare professional can provide individualized guidance based on your complete health profile."
    },
    {
      question: "Does BMI apply to all ethnicities?",
      answer: "BMI cutoff points may vary for different ethnic groups. Some populations may have higher health risks at lower BMI levels. For example, Asian populations may experience health risks at BMI levels starting at 23, rather than 25. Consult healthcare providers familiar with ethnicity-specific guidelines for the most accurate assessment of your health status."
    }
  ];

  return (
  <CalculatorPageLayout 
    pageTitle="BMI Calculator - Free Body Mass Index Calculator | Pineapple Calculator" 
    description="Calculate your Body Mass Index (BMI) instantly. Free, accurate BMI calculator with detailed health recommendations. Try now!"
    calculatorType="health"
    keywords="BMI calculator, body mass index, BMI chart, healthy weight, obesity calculator, weight status, free BMI calculator, calculate BMI"
    canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/bmi"
    faqItems={faqs}
  >
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Introduction Section */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          BMI Calculator - Free Body Mass Index Calculator
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Calculate your Body Mass Index (BMI) quickly and accurately with our free online BMI calculator. 
            Simply enter your height and weight to determine if you're underweight, normal weight, overweight, 
            or obese according to WHO standards.
          </p>
          
          <p>
            Our BMI calculator is trusted by fitness enthusiasts, healthcare professionals, and individuals 
            monitoring their health. Get instant results with detailed explanations of what your BMI means for 
            your overall health. Whether you're starting a fitness journey, consulting with your doctor, or 
            tracking your wellness progress, our BMI calculator provides the reliable metrics you need.
          </p>
          
          <p>
            Understanding your BMI is crucial for maintaining optimal health. This simple yet powerful tool 
            helps you assess whether your weight is in a healthy range for your height, enabling you to make 
            informed decisions about diet, exercise, and lifestyle changes.
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
            Body Mass Index (BMI) is a widely-used screening tool that measures body fat based on your height 
            and weight. Developed by Belgian mathematician Adolphe Quetelet in the 1830s, BMI provides a 
            reliable indicator of body fatness for most people and is used to screen for weight categories 
            that may lead to health problems.
          </p>
          
          <p className="font-semibold text-foreground">
            The BMI formula is simple: BMI = weight (kg) / height (m)²
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
            <p className="font-semibold text-foreground mb-3">BMI categories according to WHO standards:</p>
            <ul className="space-y-2">
              <li><strong>Underweight:</strong> BMI less than 18.5</li>
              <li><strong>Normal weight:</strong> BMI 18.5 to 24.9</li>
              <li><strong>Overweight:</strong> BMI 25 to 29.9</li>
              <li><strong>Obese:</strong> BMI 30 or greater</li>
            </ul>
          </div>
          
          <p>
            While BMI is a useful screening tool, it has limitations. It doesn't distinguish between muscle 
            mass and fat mass, so athletes with high muscle mass may have elevated BMI scores despite low 
            body fat. Always consult healthcare professionals for personalized health advice.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What is a healthy BMI range?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              A healthy BMI for adults is typically between 18.5 and 24.9. This range is associated with 
              the lowest health risks and optimal wellness outcomes according to the World Health Organization. 
              Maintaining a BMI within this range can help reduce the risk of chronic diseases such as heart 
              disease, diabetes, and certain cancers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-semibold">
              How accurate is the BMI calculator?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Our BMI calculator uses the standard WHO formula and is highly accurate for the general population. 
              However, BMI doesn't account for muscle mass, bone density, or body composition, so it should be 
              used as one of several health indicators. For a comprehensive health assessment, consider additional 
              metrics like body fat percentage, waist circumference, and overall fitness level.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Can I use this calculator for children?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              This calculator is designed for adults aged 18 and above. Children and teenagers have different 
              BMI standards based on age and gender. Please consult pediatric growth charts for children. 
              Pediatricians use BMI-for-age percentiles to assess healthy weight ranges for young people.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What should I do if my BMI is high?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              If your BMI indicates overweight or obesity, consider consulting a healthcare provider. They can 
              assess your overall health, body composition, and recommend personalized lifestyle changes including 
              diet and exercise modifications. A high BMI may increase your risk for various health conditions, 
              but a healthcare professional can provide individualized guidance based on your complete health profile.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Does BMI apply to all ethnicities?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              BMI cutoff points may vary for different ethnic groups. Some populations may have higher health 
              risks at lower BMI levels. For example, Asian populations may experience health risks at BMI levels 
              starting at 23, rather than 25. Consult healthcare providers familiar with ethnicity-specific 
              guidelines for the most accurate assessment of your health status.
            </AccordionContent>
          </AccordionItem>
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
);
};

export default BMICalculatorPage;
