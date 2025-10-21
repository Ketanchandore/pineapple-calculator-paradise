import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Receipt, TrendingUp, Calculator as CalcIcon, Percent } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const IncomeTaxCalculatorPage = () => {
  const faqs = [
    {
      question: "What is the difference between old and new tax regime?",
      answer: "The old regime allows various deductions (80C, 80D, HRA, etc.) but has higher tax rates. The new regime offers lower tax rates but doesn't allow most deductions except standard deduction. Choose old regime if you have significant deductions, otherwise new regime may be better."
    },
    {
      question: "What are the income tax slabs for FY 2024-25?",
      answer: "New regime slabs: 0-3L (nil), 3-7L (5%), 7-10L (10%), 10-12L (15%), 12-15L (20%), above 15L (30%). Old regime: 0-2.5L (nil), 2.5-5L (5%), 5-10L (20%), above 10L (30%). Rebate u/s 87A available for income up to ₹7 lakhs in new regime."
    },
    {
      question: "What is Section 80C and what can I claim under it?",
      answer: "Section 80C allows deduction up to ₹1.5 lakhs in old regime. You can claim: EPF, PPF, life insurance premiums, ELSS mutual funds, home loan principal, NSC, children's tuition fees, 5-year bank FD, and Sukanya Samriddhi Yojana contributions."
    },
    {
      question: "How is HRA exemption calculated?",
      answer: "HRA exemption is the minimum of: (1) Actual HRA received, (2) 50% of salary for metro cities or 40% for non-metro, (3) Excess of rent paid over 10% of salary. This is only available under old tax regime and requires rent receipts as proof."
    },
    {
      question: "What is the standard deduction and who can claim it?",
      answer: "Standard deduction of ₹50,000 is available to all salaried individuals in both old and new regimes. It's automatically deducted from gross salary. Pensioners can also claim ₹15,000 standard deduction on pension income. No proof required."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Income Tax Calculator India",
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
      "ratingCount": "275000"
    },
    "description": "Free income tax calculator for India FY 2024-25 to calculate tax liability and compare old vs new regime."
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
        <title>Income Tax Calculator India 2025 - Instant Tax Estimator</title>
        <meta name="description" content="Free Income Tax Calculator India 2025. Calculate your tax liability, compare regimes, plan savings instantly." />
        <meta property="og:title" content="Income Tax Calculator India 2025 - Instant Tax Estimator" />
        <meta property="og:description" content="Free Income Tax Calculator India 2025. Calculate your tax liability, compare regimes, plan savings instantly." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/income-tax" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Income Tax Calculator India 2025 - Instant Tax Estimator" />
        <meta name="twitter:description" content="Free Income Tax Calculator India 2025. Calculate your tax liability, compare regimes, plan savings instantly." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="Income Tax Calculator - Free Online Tax Calculator India" 
        description="Calculate income tax liability instantly. Free tax calculator India with old vs new regime comparison. Maximize savings now!"
        calculatorType="finance"
        keywords="income tax calculator, tax calculator, tax liability, old regime, new regime, tax savings, IT calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/income-tax"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Income Tax Calculator - Free Online Tax Calculator India
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Calculate your income tax liability for FY 2024-25 (AY 2025-26) instantly with our free income tax 
                calculator. Compare the old tax regime (with deductions) versus the new tax regime (with lower rates) 
                to determine which option saves you more money. Whether you're a salaried employee, business professional, 
                or freelancer, this tool helps you estimate your tax obligation and plan your finances effectively.
              </p>
              
              <p>
                Understanding the difference between old and new tax regimes is crucial for tax planning. The old regime 
                allows deductions under sections like 80C (up to ₹1.5 lakhs), 80D (medical insurance), HRA exemption, and 
                home loan interest, but has higher tax slabs. The new regime offers simplified, lower tax rates but doesn't 
                permit most deductions except standard deduction. Our calculator shows tax liability under both regimes 
                side-by-side, helping you make an informed choice.
              </p>
              
              <p>
                Use this calculator to plan your tax-saving investments, understand your take-home salary, estimate TDS 
                deductions, and optimize your tax liability legally. Input your salary details, deductions, and other income 
                sources to get accurate tax calculations within seconds, ensuring you're never surprised when tax season arrives.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <IncomeTaxCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the Income Tax Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Enter your annual gross salary or total income for the financial year</li>
              <li>Add deductions under sections 80C, 80D, HRA, home loan interest, and others (for old regime)</li>
              <li>Include any other income sources like rental income, interest, or capital gains</li>
              <li>Select your age category (below 60, senior citizen, or super senior citizen)</li>
              <li>View your tax liability comparison between old and new regimes with detailed breakdown</li>
            </ol>
          </div>

          {/* Understanding Income Tax Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding Income Tax Calculation
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Income tax in India is calculated based on income slabs with progressive tax rates. Your taxable income 
                is determined after subtracting eligible deductions and exemptions from your gross total income.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Tax Calculation Steps:</p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Calculate Gross Total Income (salary + other income)</li>
                    <li>Subtract eligible deductions (80C, 80D, etc.) to get Taxable Income</li>
                    <li>Apply income tax slabs to calculate tax liability</li>
                    <li>Add Health & Education Cess (4% of tax)</li>
                    <li>Subtract tax already paid (TDS) to get final tax payable/refundable</li>
                  </ol>
                </div>
              </div>
              
              <p className="font-semibold text-foreground">Common Deductions Under Old Regime:</p>
              <ul className="space-y-2">
                <li><strong>Section 80C:</strong> Up to ₹1.5 lakhs for EPF, PPF, ELSS, life insurance, home loan principal, etc.</li>
                <li><strong>Section 80D:</strong> Up to ₹25,000 for medical insurance (₹50,000 for senior citizens)</li>
                <li><strong>HRA:</strong> House Rent Allowance exemption based on rent paid and salary</li>
                <li><strong>Home Loan Interest:</strong> Up to ₹2 lakhs under Section 24(b)</li>
                <li><strong>Standard Deduction:</strong> ₹50,000 for salaried individuals (available in both regimes)</li>
              </ul>
              
              <p>
                Tax planning throughout the year helps reduce your tax liability legally. Invest in tax-saving instruments 
                before March 31st, maintain proper documentation for deductions, and choose the right tax regime based on 
                your financial situation. For those with significant deductions, the old regime often results in lower tax, 
                while individuals with minimal deductions benefit from the new regime's lower rates.
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
                description: "Calculate GST & tax amounts",
                icon: Receipt,
                link: "/calculators/gst"
              },
              {
                title: "SIP Calculator",
                description: "Calculate mutual fund returns",
                icon: TrendingUp,
                link: "/calculators/sip"
              },
              {
                title: "EMI Calculator",
                description: "Calculate loan payments",
                icon: CalcIcon,
                link: "/calculators/emi"
              },
              {
                title: "Percentage Calculator",
                description: "Calculate percentages easily",
                icon: Percent,
                link: "/calculators/percentage"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default IncomeTaxCalculatorPage;
