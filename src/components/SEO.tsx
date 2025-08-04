
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  calculator?: string;
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'PineappleHub - Free Online Calculators | Calculator Tools for Every Need',
  description = 'Free online calculators for EMI, SIP, BMI, Age, Loan, Tax, GST, Percentage, Date, Calorie, and more. Fast, accurate, mobile-friendly calculation tools with instant results.',
  keywords = 'calculator, online calculator, free calculator, EMI calculator, SIP calculator, BMI calculator, loan calculator, tax calculator, GST calculator, percentage calculator, age calculator, date calculator, calorie calculator, compound interest, home loan, mutual fund, financial calculator, health calculator, math calculator, business calculator, education calculator, mobile calculator, responsive calculator, instant calculator, accurate calculator, professional calculator, calculator tools, calculation help, math help, finance help, health tools',
  image = '/og-image.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://pineapplehub.com',
  type = 'website',
  calculator,
  faqData
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PineappleHub",
    "description": description,
    "url": url,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "2.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2547"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to use"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PineappleHub",
      "url": "https://pineapplehub.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url.split('?')[0]}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const calculatorStructuredData = calculator ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${calculator} Calculator - PineappleHub`,
    "applicationCategory": ["UtilityApplication", "FinanceApplication"],
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "description": `Free online ${calculator.toLowerCase()} calculator with instant results. Mobile-friendly, accurate calculations.`,
    "url": url,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Instant calculations",
      "Mobile-friendly design", 
      "Print and download results",
      "Share results",
      "No registration required"
    ]
  } : null;

  const faqStructuredData = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pineapplehub.com"
      },
      calculator ? {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://pineapplehub.com/#calculators"
      } : null,
      calculator ? {
        "@type": "ListItem",
        "position": 3,
        "name": `${calculator} Calculator`,
        "item": url
      } : null
    ].filter(Boolean)
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#00B86B" />
      <link rel="canonical" href={url} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="PineappleHub" />
      <meta name="generator" content="PineappleHub Calculator Platform" />
      <meta name="category" content="Calculators, Finance, Health, Education" />
      <meta name="classification" content="Utility" />
      <meta name="rating" content="General" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="PineappleHub - Free Online Calculator Tools" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="PineappleHub" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PineappleHub" />
      <meta name="twitter:creator" content="@PineappleHub" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="PineappleHub Calculator Tools" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
      
      {calculatorStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(calculatorStructuredData, null, 2)}
        </script>
      )}
      
      {faqStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData, null, 2)}
        </script>
      )}
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default SEO;
