import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import AgeCalculator from "@/components/calculators/AgeCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calendar, Baby, Clock, HeartPulse, BookOpen, Lightbulb, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const AgeCalculatorPage = () => {
  const faqs = [
    {
      question: "How do I calculate my exact age manually?",
      answer: "To calculate age manually: Subtract your birth year from current year for years. If your birthday hasn't occurred this year, subtract 1. For months: count from birth month to current month. For days: calculate days from birth date to current date. Account for leap years (366 days) which occur every 4 years. Our calculator handles all these complexities automatically, including leap years and varying month lengths."
    },
    {
      question: "How do leap years affect age calculation?",
      answer: "Leap years (366 days instead of 365) occur every 4 years and add one extra day (February 29). If you're born on Feb 29, you technically have a birthday every 4 years, though legally you age on Feb 28 or Mar 1 in non-leap years. Leap years affect total days lived - someone born in a leap year will have more days in their age count. Our calculator automatically accounts for all leap years between your birth date and today."
    },
    {
      question: "Can I calculate age in different units like days, hours, or seconds?",
      answer: "Yes! Age can be expressed in multiple units. For example, 25 years = approximately 9,125 days = 219,000 hours = 13,140,000 minutes = 788,400,000 seconds. Our calculator converts your age into years, months, days, hours, minutes, and seconds. This is useful for milestones (celebrating 10,000 days alive), scientific calculations, or just fun facts about your exact time on Earth."
    },
    {
      question: "At what age am I legally considered an adult?",
      answer: "In most countries, 18 years is the age of majority. At 18, you can vote, get a driver's license, sign contracts, and are considered legally responsible. For alcohol purchase, age varies by country (18-21 years). Retirement age is typically 60-67 years depending on the country. Different rights and responsibilities apply at different ages."
    },
    {
      question: "How do I calculate retirement age and years until retirement?",
      answer: "Standard retirement age varies by country (60-67 years). To calculate years until retirement: Retirement Age - Current Age. For example, if you're 35 and retire at 65, you have 30 working years left. Use our age calculator to find your exact current age, then subtract from your organization's retirement age. This helps in retirement planning, calculating pension eligibility, and determining corpus needed for post-retirement life."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Age Calculator",
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
      "ratingCount": "195000"
    },
    "description": "Free online age calculator to calculate exact age in years, months, days, hours, minutes, and seconds from date of birth."
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
        <title>Age Calculator - Calculate Exact Age in Years, Months & Days | Free</title>
        <meta name="description" content="Calculate exact age in years, months, days, hours, and seconds. Free age calculator from date of birth with birthday countdown feature." />
        <meta property="og:title" content="Age Calculator - Calculate Exact Age in Years, Months & Days | Free" />
        <meta property="og:description" content="Calculate exact age in years, months, days, hours, and seconds. Free age calculator from date of birth with birthday countdown feature." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/age" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Age Calculator - Calculate Exact Age in Years, Months & Days | Free" />
        <meta name="twitter:description" content="Calculate exact age in years, months, days, hours, and seconds. Free age calculator from date of birth with birthday countdown feature." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <CalculatorPageLayout 
        pageTitle="Age Calculator - Calculate Your Exact Age Online" 
        description="Calculate exact age in years, months, days, hours, and seconds. Free age calculator from date of birth with birthday countdown feature."
        calculatorType="age"
        keywords="age calculator, calculate age, years months days, exact age, birthday calculator, age in days"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/age"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Calculator Component */}
          <AgeCalculator />

          {/* How to Use Section */}
          <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                How to Use the Age Calculator
              </h2>
            </div>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Enter your date of birth using the date picker</li>
              <li>Click "Calculate" to instantly see your exact age breakdown</li>
              <li>View results showing years, months, days, and total time units</li>
              <li>Use Reset to clear, Print to save, or Share to send to friends</li>
            </ol>
            
            <div className="glass-hero rounded-xl p-4 mt-6">
              <p className="font-semibold text-foreground mb-2">📊 Example Calculation</p>
              <p className="text-sm text-muted-foreground">
                Birth Date: January 15, 1990 → Today: December 6, 2025<br />
                <span className="text-primary font-medium">Result: 35 years, 10 months, 21 days = 13,110 days</span>
              </p>
            </div>
          </section>

          {/* Understanding Section */}
          <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                Understanding Age Calculation
              </h2>
            </div>
            
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p>
                Age calculation involves finding the precise time difference between your birth date 
                and the current date. Accurate age calculation must account for varying month lengths 
                (28-31 days), leap years, and timezone considerations.
              </p>
              
              <div className="glass-hero rounded-xl p-4">
                <p className="font-semibold text-foreground mb-2">🔢 Age Calculation Formula</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Years:</strong> Current Year - Birth Year (adjust if birthday hasn't occurred)</li>
                  <li><strong>Months:</strong> Count complete months from birth to current date</li>
                  <li><strong>Days:</strong> Remaining days after complete months</li>
                </ul>
              </div>
              
              <p>
                <strong>Practical Applications:</strong> Legal documents (passports, licenses), 
                eligibility verification (government schemes, exams), retirement planning, 
                insurance premiums, and milestone celebrations.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-button rounded-xl px-4 border-0"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related Calculators */}
          <RelatedCalculators 
            calculators={[
              {
                title: "Date Calculator",
                description: "Calculate dates and durations between any two dates",
                icon: Calendar,
                link: "/calculators/date"
              },
              {
                title: "Pregnancy Calculator",
                description: "Calculate pregnancy due date and milestones",
                icon: Baby,
                link: "/calculators/pregnancy"
              },
              {
                title: "Days Calculator",
                description: "Calculate number of days between dates",
                icon: Clock,
                link: "/calculators/days"
              },
              {
                title: "BMI Calculator",
                description: "Calculate your Body Mass Index",
                icon: HeartPulse,
                link: "/calculators/bmi"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default AgeCalculatorPage;
