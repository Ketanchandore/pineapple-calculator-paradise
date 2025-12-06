import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import JsonLdStructuredData from "@/components/JsonLdStructuredData";
import React from "react";

export type FAQItem = { question: string; answer: string };

interface CalculatorPageLayoutProps {
  pageTitle: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
  calculatorType?: string;
  faqItems?: FAQItem[];
  children: React.ReactNode;
}

const defaultFaq: FAQItem[] = [
  {
    question: "How accurate are these calculator results?",
    answer:
      "Our calculators use standard industry formulas and provide instant, accurate results for educational and planning purposes.",
  },
  {
    question: "Are these tools free to use?",
    answer:
      "Yes. All calculators on PineappleHub are completely free with no sign-up required.",
  },
  {
    question: "Can I use these calculators on mobile?",
    answer:
      "Absolutely. All tools are optimized for mobile, tablet, and desktop devices.",
  },
];

export default function CalculatorPageLayout({
  pageTitle,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  type,
  calculatorType,
  faqItems,
  children,
}: CalculatorPageLayoutProps) {
  const finalDescription =
    description || `Use the ${pageTitle} for fast, accurate and easy calculations with instant results.`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqItems?.length ? faqItems : defaultFaq).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={`${pageTitle} - Free Online Calculator`}
        description={finalDescription}
        keywords={
          keywords || `${pageTitle.toLowerCase()}, online calculator, free calculator, fast calculator, accurate calculator`
        }
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        type={type}
        structuredData={[faqSchema]}
      />
      <JsonLdStructuredData 
        pageTitle={pageTitle}
        description={finalDescription}
        calculatorType={calculatorType}
        faqs={faqItems}
      />

      <div className="min-h-screen flex flex-col relative">
        {/* Floating Background Orbs */}
        <div className="floating-orb orb-1" aria-hidden="true" />
        <div className="floating-orb orb-2" aria-hidden="true" />
        
        <Header />
        <main className="flex flex-row flex-1 w-full max-w-[1700px] mx-auto">
          <Sidebar />
          <section className="flex-1 px-4 md:px-8 py-6 md:py-8">
            {/* Breadcrumb in glass card */}
            <div className="mb-6">
              <BreadcrumbNavigation />
            </div>
            
            {/* Page Header */}
            <header className="glass-hero rounded-2xl p-6 md:p-8 mb-8 animate-fade-in">
              <h1 className="text-2xl md:text-4xl font-display font-extrabold text-gradient mb-3">
                {pageTitle}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {finalDescription}
              </p>
            </header>
            
            {/* Main Content */}
            <div className="animate-slide-up">
              {children}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
