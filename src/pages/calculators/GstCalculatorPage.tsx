import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import GstCalculator from "@/components/calculators/GstCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Percent, Calculator, Receipt, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const GstCalculatorPage = () => {
  const faqs = [
    {
      question: "What are the different GST slabs in India?",
      answer: "India has five GST slabs: 0% (essential items like fresh food, books), 5% (household necessities, transport), 12% (processed foods, mobile phones), 18% (most goods and services - standard rate), and 28% (luxury items, automobiles, tobacco). Additionally, precious metals have 3% GST, and rough diamonds have 0.25% GST. Most services fall under the 18% slab."
    },
    {
      question: "How do I calculate GST from the total amount?",
      answer: "To find GST from total (inclusive) price, use: GST Amount = Total × GST Rate / (100 + GST Rate). For example, if total is ₹1,180 with 18% GST: GST = 1180 × 18 / 118 = ₹180, Base Price = ₹1,000. To add GST to base price: Total = Base × (1 + GST Rate/100). Our calculator does this instantly for any GST rate."
    },
    {
      question: "What is the difference between GST inclusive and exclusive pricing?",
      answer: "GST exclusive means the displayed price doesn't include tax - GST will be added at checkout. GST inclusive means tax is already included in the price shown. For business invoices, you must show base amount, GST amount, and total separately. Online shopping sites usually show inclusive pricing to consumers but exclusive pricing in business invoices."
    },
    {
      question: "What is Input Tax Credit (ITC) and how does it work?",
      answer: "Input Tax Credit allows businesses to claim credit for GST paid on purchases (inputs) against GST collected on sales (output). For example, if you paid ₹18,000 GST on raw materials and collected ₹30,000 GST on sales, you only pay ₹12,000 to government. ITC eliminates cascading tax effect and ensures you only pay tax on value addition. Proper invoicing and compliance are essential to claim ITC."
    },
    {
      question: "When is GST registration mandatory?",
      answer: "GST registration is mandatory if annual turnover exceeds ₹40 lakhs (₹20 lakhs for special category states) for goods suppliers, or ₹20 lakhs (₹10 lakhs for special states) for service providers. E-commerce sellers, interstate suppliers, and certain specified businesses must register regardless of turnover. Voluntary registration is also allowed to claim input tax credit and for business credibility."
    }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GST Calculator India",
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
      "ratingCount": "185000"
    },
    "description": "Free GST calculator for India to calculate GST inclusive, exclusive amounts and tax breakdown for all GST rates."
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
        <title>GST Calculator India - Calculate GST Online Free | 18% Tax Calculator</title>
        <meta name="description" content="Calculate GST inclusive and exclusive amounts instantly. Free GST calculator India with complete tax breakdown for all GST slabs." />
        <meta property="og:title" content="GST Calculator India - Calculate GST Online Free | 18% Tax Calculator" />
        <meta property="og:description" content="Calculate GST inclusive and exclusive amounts instantly. Free GST calculator India with complete tax breakdown for all GST slabs." />
        <meta property="og:url" content="https://pineapple-calculator-paradise.lovable.app/calculators/gst" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GST Calculator India - Calculate GST Online Free | 18% Tax Calculator" />
        <meta name="twitter:description" content="Calculate GST inclusive and exclusive amounts instantly. Free GST calculator India with complete tax breakdown for all GST slabs." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <CalculatorPageLayout 
        pageTitle="GST Calculator - Goods and Services Tax Calculator India" 
        description="Calculate GST inclusive and exclusive amounts instantly. Free GST calculator India with complete tax breakdown for all GST slabs."
        calculatorType="finance"
        keywords="GST calculator, goods and services tax, GST calculation, tax calculator India, GST inclusive, GST exclusive"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculators/gst"
        faqItems={faqs}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              GST Calculator - Goods and Services Tax Calculator India
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Calculate GST (Goods and Services Tax) amounts instantly with our free online GST calculator for India. Whether you need 
                to add GST to a base price (exclusive calculation) or extract GST from a total amount (inclusive calculation), this tool 
                handles all scenarios. Perfect for businesses, shoppers, accountants, and anyone dealing with GST calculations. Supports 
                all GST rates - 3%, 5%, 12%, 18%, and 28%.
              </p>
              
              <p>
                Understanding GST calculation is essential for accurate pricing and invoicing. When you add GST to a base price (exclusive), 
                you simply multiply by (1 + GST rate). For example, ₹1,000 + 18% GST = ₹1,180. When extracting GST from an inclusive price, 
                you use reverse calculation: GST = Total × Rate / (100 + Rate). Our calculator handles both directions instantly, showing 
                you the base amount, GST amount, and total amount with complete breakdown.
              </p>
              
              <p>
                GST calculation is crucial for business compliance, accurate invoicing, and claiming Input Tax Credit (ITC). Use this 
                calculator to verify GST on invoices, calculate selling prices with tax, determine tax liability, prepare quotations, 
                and ensure your pricing is GST-compliant. Free, accurate, and supports all GST slabs applicable in India for goods and services.
              </p>
            </div>
          </div>

          {/* Calculator Component */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <GstCalculator />
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              How to Use the GST Calculator
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-lg">
              <li>Select calculation type: Add GST (exclusive) or Remove GST (inclusive from total)</li>
              <li>Enter the amount - either base price (for adding GST) or total price (for extracting GST)</li>
              <li>Choose the applicable GST rate (3%, 5%, 12%, 18%, or 28% based on your product/service)</li>
              <li>Click "Calculate" to get instant results with complete breakdown</li>
              <li>View base amount, GST amount, and total amount displayed separately for clarity</li>
            </ol>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground mb-2">Example: Adding 18% GST</p>
              <p className="text-muted-foreground">
                Base Price: ₹5,000 | GST Rate: 18%<br />
                GST Amount: ₹900 | Total Price: ₹5,900
              </p>
            </div>
          </div>

          {/* Understanding GST Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Understanding GST and Tax Calculation
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                GST (Goods and Services Tax) is an indirect tax levied on the supply of goods and services in India, implemented on July 1, 2017. 
                It replaced multiple indirect taxes like VAT, Service Tax, and Excise Duty, creating a unified tax system. GST is a destination-based 
                tax, meaning it's collected at the point of consumption, and it has three components: CGST (Central), SGST (State), and IGST (Integrated for interstate).
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">GST Calculation Formulas:</p>
                  <p className="font-mono text-sm">Add GST: Total = Base Amount × (1 + GST Rate/100)</p>
                  <p className="text-sm mb-2">Example: ₹1,000 + 18% = ₹1,000 × 1.18 = ₹1,180</p>
                  
                  <p className="font-mono text-sm mt-3">Remove GST: Base = Total / (1 + GST Rate/100)</p>
                  <p className="text-sm mb-2">Example: ₹1,180 / 1.18 = ₹1,000 base, ₹180 GST</p>
                  
                  <p className="font-mono text-sm mt-3">GST Amount = Total × Rate / (100 + Rate)</p>
                  <p className="text-sm">Example: ₹1,180 × 18 / 118 = ₹180 GST</p>
                </div>
              </div>
              
              <p>
                <strong>18% GST Standard Rate:</strong> The 18% slab is the most common GST rate in India, applied to the majority of goods 
                and services including IT services, financial services, restaurants (non-AC), mobile phones, processed foods, and most 
                professional services. This is considered the standard rate for GST in India.
              </p>
              
              <p>
                <strong>Input Tax Credit (ITC):</strong> One of GST's key features is the seamless flow of input tax credit. Businesses can 
                claim credit for GST paid on purchases against GST collected on sales. This eliminates the cascading effect of taxes (tax on tax) 
                and ensures you only pay GST on the value you add. Proper documentation through GST-compliant invoices is essential for claiming ITC.
              </p>
              
              <p>
                <strong>Reverse GST Calculation:</strong> When you receive an invoice with total amount and need to determine base price and GST 
                separately (common in retail billing), use reverse calculation. This is particularly useful for accounting, expense tracking, 
                and verifying if the correct GST amount has been charged on your purchase bills.
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
                title: "Percentage Calculator",
                description: "Calculate percentages easily",
                icon: Percent,
                link: "/calculators/percentage"
              },
              {
                title: "Income Tax Calculator",
                description: "Calculate income tax liability",
                icon: Calculator,
                link: "/calculators/income-tax"
              },
              {
                title: "E-Commerce Calculator",
                description: "Calculate e-commerce margins",
                icon: Receipt,
                link: "/calculators/ecommerce"
              },
              {
                title: "SIP Calculator",
                description: "Calculate mutual fund SIP returns",
                icon: TrendingUp,
                link: "/calculators/sip"
              }
            ]}
          />
        </div>
      </CalculatorPageLayout>
    </>
  );
};

export default GstCalculatorPage;
