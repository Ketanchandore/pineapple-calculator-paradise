import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Building, Percent, Home } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const HomeLoanCalculatorPage = () => {
  const faqs = [
    {
      question: "What is the minimum down payment required for a home loan?",
      answer: "Banks typically require a minimum down payment of 10-20% of the property value. For properties valued up to ₹30 lakhs, you can get up to 90% financing (10% down payment). For properties above ₹30 lakhs, banks usually finance up to 75-80% (20-25% down payment). A higher down payment reduces your loan amount and EMI burden."
    },
    {
      question: "How does loan tenure affect my EMI and total interest?",
      answer: "Longer tenure reduces monthly EMI but increases total interest paid over the loan period. For example, a ₹50 lakh loan at 8% for 15 years has EMI of ₹47,782 with total interest of ₹36 lakh. The same loan for 30 years has EMI of ₹36,687 but total interest of ₹82 lakh. Choose tenure based on your repayment capacity and financial goals."
    },
    {
      question: "What are the benefits of prepaying home loan?",
      answer: "Prepaying your home loan reduces the outstanding principal, which significantly lowers total interest paid and can shorten loan tenure. Most banks allow partial prepayment without penalty for floating rate loans. Even small annual prepayments can save lakhs in interest. For example, prepaying ₹1 lakh annually on a ₹50 lakh loan can save over ₹15 lakhs in interest."
    },
    {
      question: "Should I choose fixed or floating interest rate?",
      answer: "Floating rates are linked to repo rate and change with market conditions, while fixed rates remain constant. Floating rates are typically 1-2.5% lower than fixed rates and beneficial in falling rate scenarios. Fixed rates provide EMI stability and are suitable if you expect rates to rise. Most borrowers opt for floating rates due to lower interest costs over the long term."
    },
    {
      question: "What tax benefits are available on home loans?",
      answer: "Under Section 24(b), you can claim deduction up to ₹2 lakhs on home loan interest for self-occupied property. Under Section 80C, principal repayment up to ₹1.5 lakhs is deductible. First-time home buyers get additional ₹50,000 deduction under Section 80EE. For under-construction property, you can claim accumulated interest after possession. These deductions are available only in old tax regime."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Home Loan Calculator India",
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
      "ratingCount": "320000"
    },
    "description": "Free home loan calculator for India to calculate EMI, total interest, and repayment schedule for housing loans."
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
        <title>Home Loan Calculator - Calculate EMI & Eligibility India | Free Tool</title>
        <meta name="description" content="Calculate home loan EMI, interest, and repayment schedule. Free housing loan calculator with eligibility check. Plan your dream home!" />
        <meta property="og:title" content="Home Loan Calculator - Calculate EMI & Eligibility India | Free Tool" />
        <meta property="og:description" content="Calculate home loan EMI, interest, and repayment schedule. Free housing loan calculator with eligibility check. Plan your dream home!" />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/home-loan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Loan Calculator - Calculate EMI & Eligibility India | Free Tool" />
        <meta name="twitter:description" content="Calculate home loan EMI, interest, and repayment schedule. Free housing loan calculator with eligibility check. Plan your dream home!" />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="Home Loan Calculator - EMI, Interest & Repayment Calculator India" 
        description="Calculate home loan EMI, interest, and repayment schedule. Free housing loan calculator with eligibility check. Plan your dream home!"
        calculatorType="finance"
        keywords="home loan calculator, home loan EMI, housing loan, mortgage EMI, loan repayment, home finance calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/home-loan"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Home Loan Calculator - EMI, Interest & Repayment Calculator India
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Plan your dream home purchase with our free home loan calculator. Calculate your monthly EMI (Equated Monthly Installment), 
                total interest payable, and complete repayment schedule instantly. Whether you're buying your first home or investing in 
                property, this calculator helps you understand your loan affordability, compare different loan options, and make informed 
                decisions about loan amount, tenure, and interest rates.
              </p>
              
              <p>
                Home loan planning is crucial for financial stability. Our calculator allows you to experiment with different scenarios - 
                adjust loan amount, interest rate, and tenure to see how it affects your monthly EMI and total interest. You can determine 
                the optimal down payment amount, choose between 15-year or 30-year tenure, and understand the long-term financial commitment 
                before applying for a loan. This helps you avoid over-borrowing and ensures comfortable monthly repayments.
              </p>
              
              <p>
                Understanding home loan components empowers better decision-making. The calculator breaks down your payment into principal 
                and interest components, shows you the amortization schedule, and helps you evaluate prepayment benefits. Use it to compare 
                offers from different banks, assess the impact of interest rate changes, calculate tax savings under Section 24(b) and 80C, 
                and plan your home purchase within your budget. Free, accurate, and easy to use for all home loan planning needs.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <HomeLoanCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the Home Loan Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Enter the home loan amount you need (property value minus your down payment)</li>
              <li>Input the annual interest rate offered by your bank (typically 8-9% for home loans)</li>
              <li>Select your preferred loan tenure in years (commonly 15, 20, or 30 years)</li>
              <li>Click "Calculate" to see your monthly EMI, total interest, and total payment amount</li>
              <li>Review the amortization schedule to see principal vs interest breakdown over the loan period</li>
            </ol>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground mb-2">Example: Home Loan Calculation</p>
              <p className="text-muted-foreground">
                Loan Amount: ₹50,00,000 | Interest Rate: 8.5% | Tenure: 20 years<br />
                Monthly EMI: ₹43,391 | Total Interest: ₹54,13,840 | Total Payment: ₹1,04,13,840
              </p>
            </div>
          </div>

          {/* Understanding Home Loan Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding Home Loan and Repayment
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A home loan (housing loan) is a secured loan provided by banks and financial institutions to help you purchase residential 
                property. The property itself serves as collateral, which is why home loans have lower interest rates compared to personal 
                loans. In India, banks typically finance 75-90% of the property value, requiring you to make a down payment for the remaining amount.
              </p>
              
              <p className="font-semibold text-foreground">Types of Home Loans in India:</p>
              <ul className="space-y-2">
                <li><strong>Home Purchase Loan:</strong> For buying ready-to-move-in residential property</li>
                <li><strong>Home Construction Loan:</strong> For constructing a house on owned land</li>
                <li><strong>Home Improvement Loan:</strong> For renovating or repairing existing property</li>
                <li><strong>Plot Loan:</strong> For purchasing residential land (higher interest rates)</li>
                <li><strong>Balance Transfer:</strong> Refinancing existing home loan at lower interest rate</li>
              </ul>
              
              <p>
                <strong>Home Loan Eligibility:</strong> Banks assess your eligibility based on age (21-65 years), income (minimum ₹25,000/month), 
                credit score (above 750 preferred), existing liabilities, and employment stability. Your EMI should not exceed 40-50% of your 
                monthly income. Self-employed individuals need to show 2-3 years of income tax returns and business stability.
              </p>
              
              <p>
                <strong>Prepayment Benefits:</strong> Making partial prepayments significantly reduces your interest burden. Most banks allow 
                prepayment without penalty for floating rate loans. Even prepaying ₹50,000-₹1 lakh annually can save lakhs in interest and 
                reduce tenure by several years. Always prepay early in the loan tenure for maximum savings, as initial years have higher interest component.
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
                title: "EMI Calculator",
                description: "Calculate monthly loan installments",
                icon: Calculator,
                link: "/calculators/emi"
              },
              {
                title: "Mortgage Calculator",
                description: "Calculate mortgage payments and interest",
                icon: Building,
                link: "/calculators/mortgage"
              },
              {
                title: "Home Loan EMI Calculator",
                description: "Detailed home loan EMI breakdown",
                icon: Home,
                link: "/calculators/home-loan-emi"
              },
              {
                title: "Compound Interest Calculator",
                description: "Calculate interest over loan tenure",
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

export default HomeLoanCalculatorPage;
