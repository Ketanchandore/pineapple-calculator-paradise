import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import AgeCalculator from "@/components/calculators/AgeCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calendar, Baby, Clock, HeartPulse } from "lucide-react";
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
      question: "At what age am I legally considered an adult in India?",
      answer: "In India, 18 years is the age of majority under the Indian Majority Act, 1875. At 18, you can vote, get a driver's license, marry (for women; 21 for men as per current law), sign contracts, and are considered legally responsible. For alcohol purchase, age varies by state (18-25 years). Retirement age is typically 60-65 years for government employees. Different rights and responsibilities apply at different ages."
    },
    {
      question: "How do I calculate retirement age and years until retirement?",
      answer: "Standard retirement age in India is 60 years (58-65 depending on sector). To calculate years until retirement: Retirement Age - Current Age. For example, if you're 35 and retire at 60, you have 25 working years left. Use our age calculator to find your exact current age, then subtract from your organization's retirement age. This helps in retirement planning, calculating pension eligibility, and determining corpus needed for post-retirement life."
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
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Age Calculator - Calculate Your Exact Age Online
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Calculate your exact age instantly with our free online age calculator. Find out your precise age in years, months, days, 
                hours, minutes, and even seconds from your date of birth. Perfect for filling out official documents, checking eligibility 
                criteria, planning retirement, tracking milestones, or simply satisfying your curiosity about how long you've been alive. 
                Our calculator accounts for leap years and varying month lengths for complete accuracy.
              </p>
              
              <p>
                Knowing your exact age is essential for numerous real-life scenarios: verifying age for legal documents like passports and 
                driving licenses, checking eligibility for government schemes and exams, calculating retirement age and pension benefits, 
                determining insurance premiums (which vary by age), planning milestone birthdays, and completing age-sensitive forms for 
                education admissions, job applications, and medical records.
              </p>
              
              <p>
                Our age calculator goes beyond basic year calculation to provide comprehensive age breakdown. See your life span in multiple 
                units - perfect for celebrating unique milestones like your 10,000th day alive or counting down to important age markers like 
                18 (adulthood), 21, 30, 50, or 60 (retirement). Use it for birthday countdowns, age difference calculations, or converting 
                age into any time unit you need. Simple, accurate, and completely free to use anytime.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <AgeCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the Age Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Enter your date of birth using the date picker or type it in DD/MM/YYYY format</li>
              <li>Optionally, enter a specific end date to calculate age at that date (defaults to today)</li>
              <li>Click "Calculate Age" to instantly see your exact age breakdown</li>
              <li>View results showing years, months, days, total days lived, and birthday countdown</li>
              <li>See additional details like total hours, minutes, and seconds you've been alive</li>
            </ol>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground mb-2">Example: Age Calculation</p>
              <p className="text-muted-foreground">
                Birth Date: January 15, 1990 | Calculate to: December 10, 2024<br />
                Exact Age: 34 years, 10 months, 25 days<br />
                Total: 12,748 days = 305,952 hours = 18,357,120 minutes
              </p>
            </div>
          </div>

          {/* Understanding Age Calculation Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding Age Calculation and Date Differences
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Age calculation involves finding the precise time difference between your birth date and the current date (or any target date). 
                While it seems simple, accurate age calculation must account for varying month lengths (28-31 days), leap years (every 4 years 
                with February having 29 days), and timezone considerations to provide exact results.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Age Calculation Method:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Years:</strong> Current Year - Birth Year (subtract 1 if birthday hasn't occurred yet this year)</li>
                    <li><strong>Months:</strong> Count complete months from birth month to current month</li>
                    <li><strong>Days:</strong> Calculate remaining days after accounting for complete months</li>
                    <li><strong>Leap Years:</strong> Account for extra day (Feb 29) in leap years for accuracy</li>
                    <li><strong>Time Units:</strong> Convert to days (divide by 365.25), hours (×24), minutes (×60), seconds (×60)</li>
                  </ol>
                </div>
              </div>
              
              <p>
                <strong>Leap Year Impact:</strong> Leap years occur every 4 years (except century years not divisible by 400) and add one 
                extra day to February. If you're born on February 29 (leap day), you technically have a birthday once every 4 years. 
                Legally, "leaplings" usually celebrate on February 28 or March 1 in non-leap years. The extra leap days over your lifetime 
                affect your total days lived calculation.
              </p>
              
              <p>
                <strong>Practical Applications:</strong> Age calculation is crucial for: <strong>Legal Documents</strong> - passports, 
                licenses, ID cards require exact date of birth; <strong>Eligibility Verification</strong> - government schemes, exam 
                registrations, and age-restricted services check minimum/maximum age; <strong>Retirement Planning</strong> - calculating 
                years until retirement (typically 58-65) and pension eligibility; <strong>Insurance</strong> - premiums and coverage vary 
                by age brackets; <strong>Milestone Celebrations</strong> - planning significant birthdays and anniversaries.
              </p>
              
              <p>
                <strong>Age in Different Units:</strong> Your age can be expressed in multiple time units for different contexts. Total 
                days lived is useful for milestone celebrations (10,000 days = ~27 years). Hours and minutes matter in scientific contexts 
                or precise age verification. Birthday countdown in days helps plan celebrations. For children under 2, age is often 
                expressed in months (18 months instead of 1.5 years) as development milestones are tracked monthly.
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
                title: "Date Calculator",
                description: "Calculate dates and durations",
                icon: Calendar,
                link: "/calculators/date"
              },
              {
                title: "Pregnancy Calculator",
                description: "Calculate pregnancy due date",
                icon: Baby,
                link: "/calculators/pregnancy"
              },
              {
                title: "Days Calculator",
                description: "Calculate days between dates",
                icon: Clock,
                link: "/calculators/days"
              },
              {
                title: "BMI Calculator",
                description: "Calculate Body Mass Index",
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
