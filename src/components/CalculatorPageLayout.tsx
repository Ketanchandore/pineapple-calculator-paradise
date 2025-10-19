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

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
          <Sidebar />
          <section className="flex-1 px-6 md:px-8 py-6 md:py-8">
            <BreadcrumbNavigation />
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-2">
                {pageTitle}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                {finalDescription}
              </p>
            </header>
            {children}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
