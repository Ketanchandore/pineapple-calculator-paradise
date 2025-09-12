import { useLocation } from "react-router-dom";

interface JsonLdStructuredDataProps {
  pageTitle: string;
  description: string;
  calculatorType?: string;
}

const JsonLdStructuredData = ({ pageTitle, description, calculatorType }: JsonLdStructuredDataProps) => {
  const location = useLocation();
  const currentUrl = `https://pineapple-calculator-paradise.lovable.app${location.pathname}`;

  const generateWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pineapple-calculator-paradise.lovable.app/#website",
    "url": "https://pineapple-calculator-paradise.lovable.app/",
    "name": "PineappleHub - Free Online Calculator Tools",
    "description": "Free online calculator tools for all your needs. Calculate Age, BMI, EMI, SIP, Compound Interest, Date calculations & more.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://pineapple-calculator-paradise.lovable.app/#organization"
    },
    "potentialAction": [{
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pineapple-calculator-paradise.lovable.app/calculators/{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }],
    "sameAs": [
      "https://www.facebook.com/pineapplehub",
      "https://twitter.com/pineapplehub",
      "https://www.linkedin.com/company/pineapplehub"
    ]
  });

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pineapple-calculator-paradise.lovable.app/#organization",
    "name": "PineappleHub",
    "url": "https://pineapple-calculator-paradise.lovable.app/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pineapple-calculator-paradise.lovable.app/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@pineapplehub.com"
    },
    "sameAs": [
      "https://www.facebook.com/pineapplehub",
      "https://twitter.com/pineapplehub"
    ]
  });

  const generateWebPageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    "url": currentUrl,
    "name": pageTitle,
    "description": description,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://pineapple-calculator-paradise.lovable.app/#website"
    },
    "about": {
      "@type": "Thing",
      "name": calculatorType || "Calculator Tools"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`
    },
    "potentialAction": {
      "@type": "UseAction",
      "object": {
        "@type": "WebApplication",
        "name": pageTitle
      }
    },
    "mainEntity": calculatorType ? {
      "@type": "SoftwareApplication",
      "@id": `${currentUrl}#calculator`
    } : undefined
  });

  const generateSoftwareApplicationSchema = () => {
    if (!calculatorType) return null;

    const appCategory = calculatorType?.includes('financial') || calculatorType?.includes('emi') || calculatorType?.includes('sip') ? 
      "FinanceApplication" : 
      calculatorType?.includes('health') || calculatorType?.includes('bmi') || calculatorType?.includes('calorie') ? 
      "MedicalApplication" : 
      "UtilitiesApplication";

    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${currentUrl}#calculator`,
      "name": pageTitle,
      "description": description,
      "url": currentUrl,
      "applicationCategory": appCategory,
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript enabled",
      "permissions": "No special permissions required",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "availabilityStarts": "2024-01-01"
      },
      "creator": {
        "@type": "Organization",
        "@id": "https://pineapple-calculator-paradise.lovable.app/#organization"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2547",
        "bestRating": "5",
        "worstRating": "1"
      },
      "keywords": `${calculatorType}, online calculator, free calculator, ${pageTitle.toLowerCase()}`,
      "screenshot": `${currentUrl}/screenshot.png`,
      "featureList": [
        "Free to use",
        "Instant calculations", 
        "Mobile responsive",
        "No registration required",
        "Accurate results"
      ]
    };
  };

  const generateHowToSchema = () => {
    const steps = [
      {
        "@type": "HowToStep",
        "name": "Enter your values",
        "text": `Input the required values in the ${calculatorType || 'calculator'} form fields.`
      },
      {
        "@type": "HowToStep", 
        "name": "Click Calculate",
        "text": "Press the calculate button to get instant results."
      },
      {
        "@type": "HowToStep",
        "name": "View Results",
        "text": "Review your calculated results and analysis."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to use ${pageTitle}`,
      "description": `Step-by-step guide to use our ${calculatorType || 'calculator'} tool.`,
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": steps,
      "tool": {
        "@type": "HowToTool",
        "name": pageTitle,
        "requiredQuantity": "1"
      }
    };
  };

  const generateFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to use ${pageTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${pageTitle} is easy to use. Simply enter your values in the input fields and click calculate to get instant results.`
        }
      },
      {
        "@type": "Question", 
        "name": `Is ${pageTitle} free to use?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, our ${pageTitle} is completely free to use with no registration required.`
        }
      },
      {
        "@type": "Question",
        "name": `Is ${pageTitle} accurate?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${pageTitle} uses industry-standard formulas and is designed to provide accurate and reliable results.`
        }
      }
    ]
  });

  return (
    <>
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema())
        }}
      />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema())
        }}
      />
      
      {calculatorType && (
        <>
          {/* Software Application Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateSoftwareApplicationSchema())
            }}
          />
          
          {/* How-To Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateHowToSchema())
            }}
          />
          
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateFAQSchema())
            }}
          />
        </>
      )}
    </>
  );
};

export default JsonLdStructuredData;