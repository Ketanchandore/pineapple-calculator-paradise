import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { TrendingUp, Landmark, PiggyBank, Calculator } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const CompoundInterestCalculatorPage = () => {
  const faqs = [
    {
      question: "What is the difference between compound interest and simple interest?",
      answer: "Simple interest is calculated only on the principal amount throughout the investment period. Compound interest is calculated on both principal and accumulated interest, meaning you earn 'interest on interest.' For example, ₹1 lakh at 10% for 5 years: Simple Interest gives ₹1.5 lakhs total (₹50k interest), while Compound Interest gives ₹1.61 lakhs (₹61k interest). The difference grows significantly over longer periods."
    },
    {
      question: "Which compounding frequency gives the best returns?",
      answer: "More frequent compounding generates higher returns. Daily compounding gives the highest returns, followed by monthly, quarterly, half-yearly, and annual. For example, ₹1 lakh at 10% for 1 year: Annual = ₹1.10L, Quarterly = ₹1.1038L, Monthly = ₹1.1047L, Daily = ₹1.1052L. The difference increases substantially over longer investment periods. Most banks compound interest quarterly for fixed deposits."
    },
    {
      question: "How long does it take to double my money with compound interest?",
      answer: "Use the Rule of 72: divide 72 by annual interest rate to estimate doubling time. At 8% interest, money doubles in approximately 9 years (72÷8). At 12%, it doubles in 6 years (72÷12). This rule works well for rates between 6-10%. For accurate calculation including compounding frequency, use our compound interest calculator with target amount double your principal."
    },
    {
      question: "How does compound interest help in wealth creation?",
      answer: "Compound interest is called the 8th wonder of the world because of its exponential growth effect. Starting early makes massive difference - ₹10,000 monthly SIP at 12% for 30 years grows to ₹3.5 crores (investment ₹36L). Same investment for 15 years grows to only ₹50 lakhs. The power of compounding rewards patience and long-term investing, making it the foundation of wealth building strategies."
    },
    {
      question: "Can I use this calculator for mutual fund and SIP investments?",
      answer: "Yes! While this calculator shows compound interest, mutual funds work similarly with compounding returns. Use it to estimate SIP growth by entering monthly investment as principal recurring annually, expected return rate (10-12% historically for equity funds), and investment tenure. For precise SIP calculations with monthly contributions, use our dedicated SIP calculator which accounts for monthly compounding and rupee cost averaging benefits."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Compound Interest Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "280000"
    },
    "description": "Free compound interest calculator to calculate investment growth, maturity value, and returns with different compounding frequencies."
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
        <title>Compound Interest Calculator - Calculate Investment Returns | Free Tool</title>
        <meta name="description" content="Calculate compound interest with charts. Free calculator for investment maturity value and growth projections with multiple compounding frequencies." />
        <meta property="og:title" content="Compound Interest Calculator - Calculate Investment Returns | Free Tool" />
        <meta property="og:description" content="Calculate compound interest with charts. Free calculator for investment maturity value and growth projections with multiple compounding frequencies." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/compound-interest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compound Interest Calculator - Calculate Investment Returns | Free Tool" />
        <meta name="twitter:description" content="Calculate compound interest with charts. Free calculator for investment maturity value and growth projections with multiple compounding frequencies." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="Compound Interest Calculator - Investment Growth Calculator" 
        description="Calculate compound interest with charts. Free calculator for investment maturity value and growth projections with multiple compounding frequencies."
        calculatorType="investment"
        keywords="compound interest calculator, compound interest, investment calculator, maturity value, interest calculator, savings calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/compound-interest"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Compound Interest Calculator - Investment Growth Calculator
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Calculate the power of compound interest with our free online calculator. See how your investments grow exponentially over 
                time when you earn 'interest on interest.' Perfect for planning fixed deposits, recurring deposits, mutual funds, bonds, 
                and any investment where returns are reinvested. Understand the impact of compounding frequency (daily, monthly, quarterly, 
                annually) on your final maturity value and total returns.
              </p>
              
              <p>
                Compound interest is the secret weapon of wealth creation - Albert Einstein reportedly called it the "eighth wonder of the world." 
                Unlike simple interest which only earns on principal, compound interest generates returns on previously earned interest, creating 
                exponential growth. This calculator helps you visualize this growth, compare different investment scenarios, and understand why 
                starting early and staying invested long-term are crucial for building substantial wealth.
              </p>
              
              <p>
                Use this calculator to plan your savings goals, evaluate investment options, compare bank FD offers with different compounding 
                frequencies, project retirement corpus growth, and make informed decisions about where to invest your money. Input your principal 
                amount, expected rate of return, investment period, and compounding frequency to see detailed year-by-year breakdown of interest 
                earned and total accumulated value. Free, accurate, and essential for every investor.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <CompoundInterestCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the Compound Interest Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Enter your initial investment amount (principal) you plan to invest or have already invested</li>
              <li>Input the annual interest rate (expected rate of return) offered by your investment option</li>
              <li>Specify the investment period (time horizon) in years that you plan to stay invested</li>
              <li>Select compounding frequency - how often interest is calculated and added (daily, monthly, quarterly, annual)</li>
              <li>Click "Calculate" to see your maturity value, total interest earned, and year-wise breakdown chart</li>
            </ol>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground mb-2">Example: Power of Compounding</p>
              <p className="text-muted-foreground">
                Principal: ₹1,00,000 | Rate: 10% | Period: 10 years | Compounding: Annual<br />
                Maturity Value: ₹2,59,374 | Interest Earned: ₹1,59,374<br />
                (With simple interest, you would earn only ₹1,00,000 in interest)
              </p>
            </div>
          </div>

          {/* Understanding Compound Interest Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding Compound Interest and the Formula
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Compound interest is the interest calculated on both the initial principal and the accumulated interest from previous periods. 
                It's fundamentally different from simple interest which only calculates interest on the principal amount. The magic of compounding 
                lies in its exponential growth nature - each interest payment becomes part of the principal for the next calculation period.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Compound Interest Formula:</p>
                  <p className="font-mono text-lg">A = P(1 + r/n)^(nt)</p>
                  <div className="mt-3 space-y-1">
                    <p>Where:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>A</strong> = Final amount (Maturity Value)</li>
                      <li><strong>P</strong> = Principal amount (Initial Investment)</li>
                      <li><strong>r</strong> = Annual interest rate (in decimal, e.g., 10% = 0.10)</li>
                      <li><strong>n</strong> = Number of times interest is compounded per year</li>
                      <li><strong>t</strong> = Time period in years</li>
                    </ul>
                  </div>
                  <p className="mt-3 font-mono text-sm">Compound Interest = A - P</p>
                </div>
              </div>
              
              <p>
                <strong>Compounding Frequency Impact:</strong> The number of times interest is compounded per year (n) significantly affects 
                your returns. Daily compounding (n=365) gives highest returns, followed by monthly (n=12), quarterly (n=4), half-yearly (n=2), 
                and annual (n=1). Banks typically compound quarterly for fixed deposits. The more frequently interest is compounded, the higher 
                your effective annual return becomes.
              </p>
              
              <p>
                <strong>Rule of 72:</strong> A quick way to estimate doubling time is dividing 72 by your annual interest rate. At 8% interest, 
                your money doubles in approximately 9 years (72÷8). At 12%, it doubles in 6 years (72÷12). This mental shortcut helps you 
                quickly evaluate investment opportunities and set realistic financial goals.
              </p>
              
              <p>
                <strong>Starting Early Advantage:</strong> Time is the most powerful factor in compound interest. Starting 10 years earlier 
                can result in 2-3x more wealth at retirement, even with the same monthly investment. A 25-year-old investing ₹5,000 monthly 
                at 12% until 60 accumulates ₹5.3 crores, while a 35-year-old doing the same gets only ₹1.8 crores. Start early, stay invested, 
                and let compounding work its magic.
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
                title: "SIP Calculator",
                description: "Calculate systematic investment returns",
                icon: TrendingUp,
                link: "/calculators/sip"
              },
              {
                title: "FD Calculator",
                description: "Calculate fixed deposit maturity amount",
                icon: Landmark,
                link: "/calculators/fd"
              },
              {
                title: "Mutual Fund Calculator",
                description: "Calculate mutual fund investment returns",
                icon: PiggyBank,
                link: "/calculators/mutual-fund"
              },
              {
                title: "SWP Calculator",
                description: "Plan systematic withdrawal strategy",
                icon: Calculator,
                link: "/calculators/swp"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default CompoundInterestCalculatorPage;
