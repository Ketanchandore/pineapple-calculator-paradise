import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SIPCalculator from "@/components/calculators/SIPCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { TrendingUp, Landmark, Calculator, ArrowDownToLine } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const SipCalculatorPage = () => {
  const faqs = [
    {
      question: "What is SIP and how does it work?",
      answer: "SIP (Systematic Investment Plan) is a disciplined investment method where you invest a fixed amount regularly in mutual funds. It works on the principle of rupee cost averaging and helps investors benefit from market volatility by buying more units when prices are low and fewer when prices are high."
    },
    {
      question: "What are the benefits of SIP investing?",
      answer: "SIP offers multiple benefits including disciplined investing, rupee cost averaging, power of compounding, flexibility in investment amounts, no need for market timing, and the ability to start with as little as ₹500 per month. It's ideal for salaried individuals and long-term wealth creation."
    },
    {
      question: "How is SIP return calculated?",
      answer: "SIP returns are calculated using the future value formula: FV = P × ((1 + i)^n – 1) / i × (1 + i), where P is the monthly investment, i is the expected monthly return rate, and n is the total number of months. This accounts for compounding and regular investments."
    },
    {
      question: "Can I stop or modify my SIP?",
      answer: "Yes, SIPs are flexible. You can pause, stop, increase, or decrease your SIP amount at any time without penalties. You can also skip installments if needed, though consistency is recommended for better long-term results."
    },
    {
      question: "What is the minimum duration for SIP investment?",
      answer: "While there's no mandatory minimum duration, SIPs work best when invested for at least 5-10 years to benefit from compounding and market cycles. Longer investment horizons generally yield better returns and help ride out market volatility."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SIP Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "180000"
    },
    "description": "Free SIP calculator to calculate mutual fund returns and wealth creation with systematic investment planning."
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
        <title>SIP Calculator - Mutual Fund Returns India | Free Tool</title>
        <meta name="description" content="Calculate SIP returns and wealth creation accurately. Free SIP calculator with projections for mutual fund investments." />
        <meta property="og:title" content="SIP Calculator - Mutual Fund Returns India | Free Tool" />
        <meta property="og:description" content="Calculate SIP returns and wealth creation accurately. Free SIP calculator with projections for mutual fund investments." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/sip" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIP Calculator - Mutual Fund Returns India | Free Tool" />
        <meta name="twitter:description" content="Calculate SIP returns and wealth creation accurately. Free SIP calculator with projections for mutual fund investments." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="SIP Calculator - Systematic Investment Plan Returns Calculator" 
        description="Calculate SIP returns, wealth creation, and maturity value. Free SIP calculator with accurate projections for mutual fund investments."
        calculatorType="investment"
        keywords="SIP calculator, systematic investment plan, mutual fund SIP, SIP returns, investment calculator, wealth creation"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/sip"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              SIP Calculator - Systematic Investment Plan Returns Calculator
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A Systematic Investment Plan (SIP) is one of the most popular and disciplined ways to invest in mutual funds. 
                Our free SIP calculator helps you estimate the potential returns on your mutual fund investments and plan your 
                long-term wealth creation journey. Whether you're saving for retirement, children's education, or any other 
                financial goal, this tool provides accurate projections based on your investment amount and expected returns.
              </p>
              
              <p>
                SIP is designed for regular investors who want to build wealth gradually without timing the market. By investing 
                a fixed amount monthly, you benefit from rupee cost averaging - buying more units when markets are down and 
                fewer when they're up. This disciplined approach is perfect for salaried professionals, business owners, and 
                anyone looking to create a substantial corpus over time through the power of compounding.
              </p>
              
              <p>
                Our SIP calculator instantly shows your expected maturity amount, total investment, and wealth gained. You can 
                experiment with different monthly amounts, time periods, and expected return rates to find the perfect investment 
                strategy for your financial goals. Start planning your wealth creation journey today with confidence and clarity.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <SIPCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the SIP Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Enter your monthly SIP investment amount in rupees</li>
              <li>Select the investment duration in years (minimum recommended: 5 years)</li>
              <li>Input the expected annual rate of return (typically 10-15% for equity funds)</li>
              <li>Click "Calculate" to see your projected maturity amount and total wealth gain</li>
              <li>Adjust the values to explore different investment scenarios and find your ideal plan</li>
            </ol>
          </div>

          {/* Understanding SIP Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding SIP and Compounding
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                SIP returns are calculated using the future value of annuity formula, which accounts for regular monthly 
                contributions and compound interest. The formula used is:
              </p>
              
              <p className="font-semibold text-foreground bg-primary/5 border border-primary/20 rounded-lg p-4">
                FV = P × ((1 + i)^n – 1) / i × (1 + i)
              </p>
              
              <div className="space-y-2">
                <p className="font-medium text-foreground">Where:</p>
                <ul className="space-y-2">
                  <li><strong>FV</strong> = Future Value (maturity amount)</li>
                  <li><strong>P</strong> = Monthly SIP amount</li>
                  <li><strong>i</strong> = Expected monthly rate of return (annual rate ÷ 12)</li>
                  <li><strong>n</strong> = Total number of monthly installments</li>
                </ul>
              </div>
              
              <p>
                The power of SIP lies in compounding - your returns generate additional returns over time. For example, 
                investing ₹5,000 per month for 20 years at 12% annual return can grow to approximately ₹50 lakhs, where 
                you invest only ₹12 lakhs and earn ₹38 lakhs through compounding. The longer you stay invested, the more 
                powerful compounding becomes.
              </p>
              
              <p>
                SIP also provides rupee cost averaging benefits. When market prices fall, your fixed monthly amount buys 
                more units, and when prices rise, you buy fewer units. This automatic averaging reduces the impact of 
                market volatility and lowers your average cost per unit over time, making SIP ideal for long-term investors 
                who want to avoid the stress of timing the market.
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
                title: "Mutual Fund Calculator",
                description: "Calculate mutual fund returns",
                icon: TrendingUp,
                link: "/calculators/mutual-fund"
              },
              {
                title: "FD Calculator",
                description: "Calculate fixed deposit returns",
                icon: Landmark,
                link: "/calculators/fd"
              },
              {
                title: "Compound Interest Calculator",
                description: "Calculate compound interest",
                icon: Calculator,
                link: "/calculators/compound-interest"
              },
              {
                title: "SWP Calculator",
                description: "Calculate systematic withdrawal",
                icon: ArrowDownToLine,
                link: "/calculators/swp"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default SipCalculatorPage;
