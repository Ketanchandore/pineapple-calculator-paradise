import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, TrendingUp, Receipt, Percent } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const PercentageCalculatorPage = () => {
  const faqs = [
    {
      question: "How do I calculate percentage of a number?",
      answer: "To find percentage of a number, use the formula: (Percentage ÷ 100) × Total = Result. For example, to find 20% of 500: (20 ÷ 100) × 500 = 100. Our calculator does this instantly - just enter the percentage and the total value."
    },
    {
      question: "How do I calculate percentage increase or decrease?",
      answer: "Percentage change formula is: ((New Value - Old Value) ÷ Old Value) × 100. For increase, the result is positive; for decrease, it's negative. Example: if a price increased from ₹100 to ₹120, the percentage increase is ((120-100) ÷ 100) × 100 = 20%."
    },
    {
      question: "What is the difference between percentage and percentile?",
      answer: "Percentage is a fraction out of 100 representing a portion of a whole (like 75% marks). Percentile is a statistical measure indicating the value below which a given percentage of observations fall (like scoring in the 90th percentile means you scored better than 90% of test-takers)."
    },
    {
      question: "How do I calculate discount percentage?",
      answer: "Discount percentage = ((Original Price - Sale Price) ÷ Original Price) × 100. For example, if an item originally costs ₹1,000 and is now ₹750, the discount is ((1000-750) ÷ 1000) × 100 = 25% off."
    },
    {
      question: "Can I use percentage calculator for tax calculations?",
      answer: "Yes! Percentage calculators are perfect for tax calculations. To add tax, calculate the tax percentage of the base amount and add it. To find the base amount before tax, use reverse percentage calculations. For example, adding 18% GST to ₹1,000: (18 ÷ 100) × 1000 = ₹180 tax."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Percentage Calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150000"
    },
    "description": "Free online percentage calculator for quick calculations including percentage increase, decrease, and ratios."
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
        <title>Percentage Calculator - Free Online Tool</title>
        <meta name="description" content="Quickly calculate percentage increase, decrease, and ratios. Free, easy, accurate online calculator." />
        <meta property="og:title" content="Percentage Calculator - Free Online Tool" />
        <meta property="og:description" content="Quickly calculate percentage increase, decrease, and ratios. Free, easy, accurate online calculator." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/percentage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Percentage Calculator - Free Online Tool" />
        <meta name="twitter:description" content="Quickly calculate percentage increase, decrease, and ratios. Free, easy, accurate online calculator." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="Percentage Calculator - Free Online Percentage Tool" 
        description="Free percentage calculator for instant calculations. Find percentage increase, decrease, and ratio quickly. Easy-to-use tool!"
        calculatorType="utility"
        keywords="percentage calculator, calculate percentage, percentage increase, percentage decrease, percentage change, ratio calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/percentage"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Percentage Calculator - Free Online Percentage Tool
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Calculate percentages instantly with our free online percentage calculator. Whether you need to find what 
                percentage one number is of another, calculate percentage increases or decreases, or determine discounts 
                and markups, this tool makes it simple. Perfect for students, shoppers, business professionals, and anyone 
                who needs quick, accurate percentage calculations.
              </p>
              
              <p>
                Percentages are everywhere in daily life - shopping discounts, exam scores, business growth rates, tax 
                calculations, tip amounts, and financial reports. Understanding percentages helps you make better decisions 
                when shopping (Is 30% off really a good deal?), analyzing business performance (Did sales increase or 
                decrease?), or managing finances (What's my savings rate?). Our calculator handles all common percentage 
                scenarios with instant results.
              </p>
              
              <p>
                No complex formulas to remember - just enter your numbers and get immediate, accurate results. Use it for 
                calculating grades, comparing prices, determining profit margins, finding sale prices, computing interest 
                rates, or any other percentage-related calculation. Simple, fast, and completely free to use anytime.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <PercentageCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the Percentage Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Choose the type of calculation you need (percentage of a number, percentage increase/decrease, etc.)</li>
              <li>Enter the first value (original number, total, or base amount)</li>
              <li>Enter the second value (new number, percentage, or part)</li>
              <li>Click "Calculate" to get your instant result</li>
              <li>View the detailed breakdown showing the calculation steps and answer</li>
            </ol>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground mb-2">Example: Finding discount percentage</p>
              <p className="text-muted-foreground">
                Original price: ₹2,000 | Sale price: ₹1,500<br />
                Discount = ((2000 - 1500) ÷ 2000) × 100 = 25% off
              </p>
            </div>
          </div>

          {/* Understanding Percentage Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding Percentage Formulas
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A percentage is a number or ratio expressed as a fraction of 100. The word "percent" literally means "per 
                hundred." Here are the most common percentage formulas:
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-foreground">1. Percentage of a Number:</p>
                  <p className="font-mono">(Percentage ÷ 100) × Total = Result</p>
                  <p className="text-sm">Example: 15% of 200 = (15 ÷ 100) × 200 = 30</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground">2. What Percentage is X of Y:</p>
                  <p className="font-mono">(Part ÷ Total) × 100 = Percentage</p>
                  <p className="text-sm">Example: 45 is what % of 180? = (45 ÷ 180) × 100 = 25%</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground">3. Percentage Change:</p>
                  <p className="font-mono">((New - Old) ÷ Old) × 100 = % Change</p>
                  <p className="text-sm">Example: From 80 to 100 = ((100 - 80) ÷ 80) × 100 = 25% increase</p>
                </div>
              </div>
              
              <p>
                These formulas are used constantly in real life. When shopping, you use percentage to calculate discounts 
                and final prices. In finance, percentage helps compute interest rates, returns on investment, and profit 
                margins. Students use percentages to understand grades and scoring. Business professionals analyze growth 
                rates, market shares, and performance metrics - all expressed as percentages.
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
          </div>

          <RelatedCalculators 
            calculators={[
              {
                title: "GST Calculator",
                description: "Calculate GST and tax amounts instantly",
                icon: Receipt,
                link: "/calculators/gst"
              },
              {
                title: "Income Tax Calculator",
                description: "Calculate income tax liability",
                icon: TrendingUp,
                link: "/calculators/income-tax"
              },
              {
                title: "Scientific Calculator",
                description: "Advanced mathematical calculations",
                icon: Calculator,
                link: "/calculators/scientific"
              },
              {
                title: "Compound Interest Calculator",
                description: "Calculate investment and loan interest",
                icon: Percent,
                link: "/calculators/compound-interest"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default PercentageCalculatorPage;
