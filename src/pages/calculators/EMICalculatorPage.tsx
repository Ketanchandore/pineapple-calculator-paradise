import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import EMICalculator from "@/components/calculators/EMICalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Home, Calculator, Percent, Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

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
        <title>EMI Calculator - Free Loan EMI Calculator India</title>
        <meta name="description" content="Calculate loan EMI, total interest & repayment instantly. Free EMI calculator for all loan types." />
        <meta property="og:title" content="EMI Calculator - Free Loan EMI Calculator India" />
        <meta property="og:description" content="Calculate loan EMI, total interest & repayment instantly. Free EMI calculator for all loan types." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/emi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EMI Calculator - Free Loan EMI Calculator India" />
        <meta name="twitter:description" content="Calculate loan EMI, total interest & repayment instantly. Free EMI calculator for all loan types." />
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
        keywords="EMI calculator, loan EMI, equated monthly installment, loan calculator, interest calculator, monthly payment"
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
                payable, and complete repayment schedule.
              </p>
              
              <p>
                Understanding your EMI is crucial before taking any loan. It helps you plan your monthly budget, compare loan 
                offers from different lenders, and make informed borrowing decisions. Whether you're buying your dream home, 
                purchasing a vehicle, or need funds for personal needs, knowing your EMI obligation ensures you don't 
                overcommit financially. Our calculator considers principal amount, interest rate, and tenure to give you 
                precise results within seconds.
              </p>
              
              <p>
                Use this tool to experiment with different loan amounts, tenures, and interest rates to find the most 
                comfortable EMI for your financial situation. You can also see how making prepayments or choosing different 
                tenures affects your total interest outgo, helping you save thousands or even lakhs over the loan period.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <EMICalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the EMI Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Enter the total loan amount (principal) you wish to borrow</li>
              <li>Input the annual interest rate offered by your lender</li>
              <li>Select the loan tenure in months or years</li>
              <li>Click "Calculate EMI" to see your monthly installment amount instantly</li>
              <li>Review the breakdown showing total interest payable and complete repayment amount</li>
            </ol>
          </div>

          {/* Understanding EMI Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding EMI and Formula
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                EMI is calculated using a mathematical formula that ensures you pay the same amount every month throughout 
                the loan tenure. The standard EMI formula is:
              </p>
              
              <p className="font-semibold text-foreground bg-primary/5 border border-primary/20 rounded-lg p-4">
                EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
              </p>
              
              <div className="space-y-2">
                <p className="font-medium text-foreground">Where:</p>
                <ul className="space-y-2">
                  <li><strong>P</strong> = Principal loan amount</li>
                  <li><strong>R</strong> = Monthly interest rate (Annual rate ÷ 12 ÷ 100)</li>
                  <li><strong>N</strong> = Loan tenure in months</li>
                </ul>
              </div>
              
              <p>
                In the early months of your loan, a larger portion of your EMI goes toward interest payment, while a smaller 
                portion reduces the principal. As time progresses, this ratio gradually reverses - more of your EMI goes 
                toward principal repayment and less toward interest. This is because interest is calculated on the reducing 
                outstanding balance.
              </p>
              
              <p>
                For example, a ₹20 lakh home loan at 8.5% annual interest for 20 years results in an EMI of approximately 
                ₹17,250. Over the loan period, you'll pay about ₹21.4 lakhs as interest, making the total repayment around 
                ₹41.4 lakhs. By understanding this breakdown, you can make smart decisions about prepayments and tenure 
                selection to minimize your interest burden.
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
                title: "Home Loan Calculator",
                description: "Calculate home loan EMI & eligibility",
                icon: Home,
                link: "/calculators/home-loan"
              },
              {
                title: "Loan Calculator",
                description: "Calculate personal loan payments",
                icon: Calculator,
                link: "/calculators/loan"
              },
              {
                title: "Compound Interest Calculator",
                description: "Calculate compound interest",
                icon: Percent,
                link: "/calculators/compound-interest"
              },
              {
                title: "Mortgage Calculator",
                description: "Calculate mortgage payments",
                icon: Building,
                link: "/calculators/mortgage"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default EMICalculatorPage;
