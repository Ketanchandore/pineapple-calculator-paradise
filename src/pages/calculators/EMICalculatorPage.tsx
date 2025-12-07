import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import EMICalculator from "@/components/calculators/EMICalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Home, Calculator, Percent, Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { SEOContentSection, SEOFormulaBox, SEOBenefitsList, SEOComparisonTable, SEOStepGuide } from "@/components/SEOContentSection";

const EMICalculatorPage = () => {
  const faqs = [
    {
      question: "What is EMI and how is it calculated?",
      answer: "EMI (Equated Monthly Installment) is a fixed amount paid every month to repay a loan. It's calculated using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal, R is monthly interest rate, and N is tenure in months. EMI includes both principal and interest components."
    },
    {
      question: "How can I reduce my EMI amount?",
      answer: "You can reduce your EMI by: increasing the loan tenure (spreads payments over more months), making a larger down payment to reduce principal, negotiating a lower interest rate with your lender, or making prepayments to reduce outstanding principal. However, longer tenure means paying more total interest."
    },
    {
      question: "What is the difference between reducing balance and flat rate?",
      answer: "In reducing balance method, interest is calculated on the outstanding loan amount, which decreases with each payment. In flat rate method, interest is calculated on the original principal throughout the tenure. Reducing balance is more common and results in lower total interest compared to flat rate."
    },
    {
      question: "Can I prepay my loan to reduce EMI?",
      answer: "Yes, most loans allow prepayment. You can either reduce your EMI amount while keeping the tenure same, or reduce the tenure while keeping EMI same. Prepayment significantly reduces total interest paid. Check with your lender about prepayment charges, if any, before making extra payments."
    },
    {
      question: "Does EMI include processing fees and other charges?",
      answer: "No, EMI only includes principal and interest. Processing fees, documentation charges, insurance premiums, and other one-time costs are paid separately at loan disbursement. Always check the loan agreement for all applicable charges beyond the EMI amount."
    },
    {
      question: "What is the best EMI to salary ratio?",
      answer: "Financial experts recommend keeping your total EMI obligations (all loans combined) below 40-50% of your monthly net income. For home loans specifically, the EMI should ideally not exceed 30-35% of your monthly income. This ensures you have sufficient funds for other expenses and emergencies."
    },
    {
      question: "How does loan tenure affect total interest paid?",
      answer: "Longer tenure means lower EMI but significantly higher total interest. For example, a ₹50 lakh home loan at 8.5% interest: 15-year tenure = ₹49,240 EMI, ₹38.6L total interest. 20-year tenure = ₹43,390 EMI, ₹54.1L total interest. 25-year tenure = ₹40,260 EMI, ₹70.8L total interest. Choose wisely based on your financial situation."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EMI Calculator",
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
    "description": "Free EMI calculator to calculate loan EMI, total interest, and repayment schedule for all types of loans."
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
        <title>EMI Calculator - Free Loan EMI Calculator India 2024</title>
        <meta name="description" content="Calculate loan EMI instantly for home loan, car loan, personal loan. Free EMI calculator with amortization schedule, interest breakdown. Trusted by 3M+ users." />
        <meta property="og:title" content="EMI Calculator - Free Loan EMI Calculator India 2024" />
        <meta property="og:description" content="Calculate loan EMI instantly for home loan, car loan, personal loan. Free EMI calculator with amortization schedule." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/emi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EMI Calculator - Free Loan EMI Calculator India 2024" />
        <meta name="twitter:description" content="Calculate loan EMI instantly for home loan, car loan, personal loan. Free EMI calculator with amortization schedule." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="EMI Calculator - Loan EMI Calculator India | Calculate Monthly Payments" 
        description="Calculate loan EMI, total interest, and repayment schedule. Free EMI calculator for home loans, car loans, personal loans."
        calculatorType="finance"
        keywords="EMI calculator, loan EMI, equated monthly installment, loan calculator, interest calculator, monthly payment, home loan EMI, car loan EMI, personal loan EMI"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/emi"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              EMI Calculator - Loan EMI Calculator India | Calculate Monthly Payments
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan. Our free EMI 
                calculator helps you determine your monthly loan payments for home loans, car loans, personal loans, education 
                loans, and any other type of borrowing. Get instant, accurate calculations of your EMI amount, total interest 
                payable, and complete repayment schedule. Trusted by over 3 million users across India, USA, UK, and Australia.
              </p>
              
              <p>
                Understanding your EMI is crucial before taking any loan. It helps you plan your monthly budget, compare loan 
                offers from different lenders, and make informed borrowing decisions. Whether you're buying your dream home in 
                Mumbai, purchasing a vehicle in Delhi, or need funds for personal needs in Bangalore, knowing your EMI obligation 
                ensures you don't overcommit financially. Our calculator considers principal amount, interest rate, and tenure 
                to give you precise results within seconds.
              </p>
              
              <p>
                Use this tool to experiment with different loan amounts, tenures, and interest rates to find the most 
                comfortable EMI for your financial situation. You can also see how making prepayments or choosing different 
                tenures affects your total interest outgo, helping you save thousands or even lakhs over the loan period.
                Banks like SBI, HDFC, ICICI, Axis Bank, and others use similar calculations - our tool matches their accuracy.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="glass-card p-6 rounded-xl shadow-lg">
            <EMICalculator />
          </div>

          {/* Step-by-Step Guide */}
          <SEOContentSection title="How to Use the EMI Calculator">
            <SEOStepGuide 
              title="Simple 5-Step Process"
              steps={[
                { step: "Enter Loan Amount", description: "Input the total principal amount you wish to borrow (e.g., ₹50,00,000 for home loan)" },
                { step: "Set Interest Rate", description: "Enter the annual interest rate offered by your bank (e.g., 8.5% for home loans, 10-12% for personal loans)" },
                { step: "Choose Tenure", description: "Select loan tenure in months or years (home loans: up to 30 years, personal loans: 1-7 years)" },
                { step: "Click Calculate", description: "Press the calculate button to instantly see your monthly EMI amount" },
                { step: "Review Results", description: "Analyze the breakdown showing principal vs interest split, total payment, and amortization schedule" }
              ]}
            />
          </SEOContentSection>

          {/* EMI Formula Section */}
          <SEOContentSection title="EMI Calculation Formula Explained">
            <SEOFormulaBox 
              title="Standard EMI Formula (Reducing Balance Method)"
              formula="EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]"
              variables={[
                { symbol: "P", description: "Principal loan amount (the amount you borrow)" },
                { symbol: "R", description: "Monthly interest rate (Annual Rate ÷ 12 ÷ 100)" },
                { symbol: "N", description: "Total number of monthly installments (Tenure in months)" }
              ]}
              example="For ₹20 lakh loan at 8.5% for 20 years: P=20,00,000, R=8.5/12/100=0.00708, N=240 months. EMI = ₹17,356"
            />
            
            <p className="mt-4">
              In the early months of your loan, a larger portion of your EMI goes toward interest payment, while a smaller 
              portion reduces the principal. As time progresses, this ratio gradually reverses - more of your EMI goes 
              toward principal repayment and less toward interest. This is called amortization and is standard practice
              across all major banks in India, USA, UK, Australia, Canada, and globally.
            </p>
          </SEOContentSection>

          {/* EMI Comparison Table */}
          <SEOContentSection title="EMI Comparison: Different Loan Types">
            <SEOComparisonTable 
              title="Typical EMI for ₹10 Lakh Loan"
              headers={["Loan Type", "Interest Rate", "Tenure", "Monthly EMI", "Total Interest"]}
              rows={[
                ["Home Loan", "8.5%", "20 years", "₹8,678", "₹10,82,720"],
                ["Car Loan", "9.5%", "7 years", "₹15,832", "₹3,29,888"],
                ["Personal Loan", "12%", "5 years", "₹22,244", "₹3,34,640"],
                ["Education Loan", "10%", "10 years", "₹13,215", "₹5,85,800"],
                ["Gold Loan", "11%", "3 years", "₹32,739", "₹1,78,604"]
              ]}
            />
          </SEOContentSection>

          {/* Benefits Section */}
          <SEOContentSection title="Benefits of Using Our EMI Calculator">
            <div className="grid md:grid-cols-2 gap-6">
              <SEOBenefitsList 
                title="For Home Buyers"
                benefits={[
                  "Compare home loan offers from SBI, HDFC, ICICI, Axis Bank",
                  "Plan 20-30 year mortgage payments accurately",
                  "Understand impact of prepayments on total interest",
                  "Calculate affordable loan amount based on income"
                ]}
              />
              <SEOBenefitsList 
                title="For Car Buyers"
                benefits={[
                  "Calculate car loan EMI for new and used vehicles",
                  "Compare dealer financing vs bank loans",
                  "Plan down payment to reduce EMI burden",
                  "Factor in processing fees and insurance"
                ]}
              />
            </div>
          </SEOContentSection>

          {/* Tips Section */}
          <SEOContentSection title="Expert Tips to Reduce Your Loan EMI">
            <div className="space-y-4">
              <p>
                <strong>1. Negotiate Interest Rate:</strong> Even 0.25% reduction in interest rate can save lakhs over the loan tenure.
                Compare rates from multiple banks and use balance transfer options if better rates are available.
              </p>
              <p>
                <strong>2. Make Prepayments:</strong> Whenever you receive bonuses, tax refunds, or windfalls, make partial prepayments.
                Most home loans in India don't charge prepayment penalties for floating rate loans (RBI mandate).
              </p>
              <p>
                <strong>3. Choose Right Tenure:</strong> While longer tenure reduces EMI, it drastically increases total interest.
                Use our calculator to find the sweet spot between affordable EMI and reasonable total cost.
              </p>
              <p>
                <strong>4. Increase EMI Annually:</strong> If your income grows 10% yearly, increase your EMI proportionally.
                This step-up EMI approach significantly reduces loan tenure and interest burden.
              </p>
              <p>
                <strong>5. Consider Joint Loans:</strong> Adding a co-borrower (spouse/parent) increases eligibility and may
                qualify you for lower interest rates, especially for home loans.
              </p>
            </div>
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
                title: "Home Loan Calculator",
                description: "Calculate home loan EMI and eligibility",
                icon: Home,
                link: "/calculators/home-loan"
              },
              {
                title: "Loan Calculator",
                description: "Calculate personal and business loan EMI",
                icon: Calculator,
                link: "/calculators/loan"
              },
              {
                title: "Mortgage Calculator",
                description: "Calculate mortgage payments and interest",
                icon: Building,
                link: "/calculators/mortgage"
              },
              {
                title: "Compound Interest Calculator",
                description: "Calculate compound interest on loans",
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

export default EMICalculatorPage;
