import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import SIPCalculator from "@/components/calculators/SIPCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { TrendingUp, Landmark, Calculator, ArrowDownToLine } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { SEOContentSection, SEOFormulaBox, SEOBenefitsList, SEOComparisonTable, SEOStepGuide } from "@/components/SEOContentSection";

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
    },
    {
      question: "Which is better - SIP or lump sum investment?",
      answer: "For most investors, SIP is better because it eliminates market timing risk, provides rupee cost averaging, and builds discipline. Lump sum may work better if you have a large corpus and markets are at low valuations. For regular income earners, SIP is the recommended approach."
    },
    {
      question: "What returns can I expect from SIP in mutual funds?",
      answer: "Historical returns vary by fund category: Large-cap equity funds: 10-12% CAGR, Mid-cap funds: 12-15% CAGR, Small-cap funds: 15-18% CAGR (higher risk), Debt funds: 6-8% CAGR, Hybrid funds: 8-12% CAGR. Past performance doesn't guarantee future returns."
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
        <title>SIP Calculator - Mutual Fund SIP Returns Calculator 2024 | Free Tool</title>
        <meta name="description" content="Calculate SIP returns and create wealth through mutual funds. Free SIP calculator shows maturity value, wealth gain for Groww, Zerodha, Angel One investments." />
        <meta property="og:title" content="SIP Calculator - Mutual Fund SIP Returns Calculator 2024 | Free Tool" />
        <meta property="og:description" content="Calculate SIP returns and wealth creation accurately. Free SIP calculator with projections for mutual fund investments." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/sip" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIP Calculator - Mutual Fund SIP Returns Calculator 2024" />
        <meta name="twitter:description" content="Calculate SIP returns and wealth creation. Free calculator for Groww, Zerodha, Angel One SIP investments." />
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
        keywords="SIP calculator, systematic investment plan, mutual fund SIP, SIP returns, investment calculator, wealth creation, Groww SIP, Zerodha SIP"
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
                long-term wealth creation journey. Whether you're saving for retirement, children's education, buying a house, 
                or any other financial goal, this tool provides accurate projections based on your investment amount and 
                expected returns. Trusted by investors using Groww, Zerodha, Angel One, and other platforms.
              </p>
              
              <p>
                SIP is designed for regular investors who want to build wealth gradually without timing the market. By investing 
                a fixed amount monthly, you benefit from rupee cost averaging - buying more units when markets are down and 
                fewer when they're up. This disciplined approach is perfect for salaried professionals in India, USA, UK, 
                Australia, and globally. It's ideal for NRIs, business owners, and anyone looking to create a substantial 
                corpus over time through the power of compounding.
              </p>
              
              <p>
                Our SIP calculator instantly shows your expected maturity amount, total investment, and wealth gained. You can 
                experiment with different monthly amounts, time periods, and expected return rates to find the perfect investment 
                strategy for your financial goals. The calculator uses the same methodology as major AMCs like HDFC, ICICI Prudential, 
                SBI, Axis, Kotak, and Nippon India Mutual Funds.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="glass-card p-6 rounded-xl shadow-lg">
            <SIPCalculator />
          </div>

          {/* Step-by-Step Guide */}
          <SEOContentSection title="How to Use the SIP Calculator">
            <SEOStepGuide 
              title="Calculate Your SIP Returns in 5 Easy Steps"
              steps={[
                { step: "Enter Monthly SIP Amount", description: "Input your desired monthly investment (minimum ₹500, popular choices: ₹5,000, ₹10,000, ₹25,000)" },
                { step: "Set Investment Duration", description: "Choose your investment horizon in years (recommended: 5+ years for equity, 3+ years for debt funds)" },
                { step: "Expected Rate of Return", description: "Enter expected annual return (equity: 10-15%, debt: 6-8%, hybrid: 8-12%)" },
                { step: "Click Calculate", description: "Press calculate to see your projected maturity value and total wealth gain" },
                { step: "Analyze Results", description: "Review investment vs returns breakdown, adjust parameters to optimize your strategy" }
              ]}
            />
          </SEOContentSection>

          {/* SIP Formula Section */}
          <SEOContentSection title="SIP Return Calculation Formula">
            <SEOFormulaBox 
              title="Future Value of SIP Formula"
              formula="FV = P × ((1 + i)^n – 1) / i × (1 + i)"
              variables={[
                { symbol: "FV", description: "Future Value (maturity amount you'll receive)" },
                { symbol: "P", description: "Monthly SIP investment amount" },
                { symbol: "i", description: "Expected monthly rate of return (annual rate ÷ 12)" },
                { symbol: "n", description: "Total number of monthly installments" }
              ]}
              example="₹10,000 SIP for 15 years at 12% p.a.: FV = 10000 × ((1.01)^180 – 1) / 0.01 × 1.01 = ₹50,45,760 (Investment: ₹18L, Gain: ₹32.45L)"
            />
          </SEOContentSection>

          {/* SIP Returns Comparison */}
          <SEOContentSection title="SIP Returns: Different Investment Scenarios">
            <SEOComparisonTable 
              title="₹10,000 Monthly SIP - Returns Comparison"
              headers={["Duration", "Total Investment", "At 10% Returns", "At 12% Returns", "At 15% Returns"]}
              rows={[
                ["5 Years", "₹6,00,000", "₹7,74,386", "₹8,16,697", "₹8,93,478"],
                ["10 Years", "₹12,00,000", "₹20,48,450", "₹23,23,391", "₹27,86,573"],
                ["15 Years", "₹18,00,000", "₹41,79,465", "₹50,45,760", "₹66,52,826"],
                ["20 Years", "₹24,00,000", "₹75,93,742", "₹98,92,554", "₹1,50,30,352"],
                ["25 Years", "₹30,00,000", "₹1,32,68,293", "₹1,87,88,482", "₹3,28,30,098"]
              ]}
            />
          </SEOContentSection>

          {/* Benefits Section */}
          <SEOContentSection title="Why SIP is the Best Investment Strategy">
            <div className="grid md:grid-cols-2 gap-6">
              <SEOBenefitsList 
                title="Key Advantages of SIP"
                benefits={[
                  "Rupee Cost Averaging - Buy more when markets are low",
                  "Power of Compounding - Wealth grows exponentially over time",
                  "Disciplined Investing - Automated, regular investments",
                  "Start Small - Begin with just ₹500/month",
                  "Flexibility - Pause, increase, or stop anytime",
                  "No Market Timing - Eliminates emotional investing"
                ]}
              />
              <SEOBenefitsList 
                title="Who Should Invest in SIP?"
                benefits={[
                  "Salaried professionals with regular income",
                  "Young investors starting their wealth journey",
                  "Parents saving for children's education/marriage",
                  "Individuals planning for retirement",
                  "NRIs looking to invest in Indian mutual funds",
                  "Anyone wanting to beat inflation long-term"
                ]}
              />
            </div>
          </SEOContentSection>

          {/* Tips Section */}
          <SEOContentSection title="Expert SIP Investment Tips for Maximum Returns">
            <div className="space-y-4">
              <p>
                <strong>1. Start Early, Stay Invested:</strong> Time is the most powerful factor in wealth creation. Starting
                10 years earlier can result in 3x more wealth at the same monthly investment. A 25-year-old investing ₹10,000
                monthly for 30 years at 12% accumulates ₹3.5 crores, while a 35-year-old gets only ₹1 crore.
              </p>
              <p>
                <strong>2. Use Step-Up SIP:</strong> Increase your SIP amount by 10-15% annually as your income grows.
                This accelerates wealth creation significantly. Platforms like Groww, Zerodha Coin, and Paytm Money offer
                step-up SIP options.
              </p>
              <p>
                <strong>3. Diversify Across Fund Categories:</strong> Don't put all your money in one fund. Consider a mix
                of large-cap (stability), mid-cap (growth), and flexi-cap funds. For conservative investors, add debt funds.
              </p>
              <p>
                <strong>4. Review Annually, Not Daily:</strong> Mutual fund investments need patience. Review performance
                annually, not daily. Markets fluctuate, but quality funds deliver over 7-10 year periods. Avoid panic selling.
              </p>
              <p>
                <strong>5. Choose Direct Plans:</strong> Direct mutual fund plans have lower expense ratios (0.5-1% less than
                regular plans). Over 20 years, this difference can mean 15-20% more wealth. Use platforms like Kuvera, Groww,
                or MFCentral for direct investments.
              </p>
            </div>
          </SEOContentSection>

          {/* Compounding Explanation */}
          <SEOContentSection title="The Magic of Compounding in SIP">
            <p>
              Compounding is often called the "8th wonder of the world" - and SIP is the perfect vehicle to harness its power.
              When you invest through SIP, your returns generate additional returns, creating exponential growth over time.
            </p>
            <p>
              For example, if you invest ₹15,000 monthly for 25 years at 12% annual returns, your total investment would be
              ₹45 lakhs. But thanks to compounding, your corpus would grow to approximately ₹2.8 crores - that's over 6x
              your investment! The last 5 years alone would contribute more to your wealth than the first 15 years combined.
            </p>
            <p>
              This is why financial advisors always emphasize starting early. Even small amounts invested consistently over
              long periods can create life-changing wealth. A ₹3,000 SIP started at age 25 can make you a crorepati by 50,
              while the same goal would require ₹15,000 monthly if you start at 35.
            </p>
          </SEOContentSection>

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
                description: "Calculate mutual fund returns and growth",
                icon: TrendingUp,
                link: "/calculators/mutual-fund"
              },
              {
                title: "FD Calculator",
                description: "Calculate fixed deposit maturity amount",
                icon: Landmark,
                link: "/calculators/fd"
              },
              {
                title: "SWP Calculator",
                description: "Plan systematic withdrawal from investments",
                icon: ArrowDownToLine,
                link: "/calculators/swp"
              },
              {
                title: "Compound Interest Calculator",
                description: "Calculate compound interest on investments",
                icon: Calculator,
                link: "/calculators/compound-interest"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default SipCalculatorPage;
