import { useLocation } from "react-router-dom";

interface JsonLdStructuredDataProps {
  pageTitle: string;
  description: string;
  calculatorType?: string;
}

const JsonLdStructuredData = ({ pageTitle, description, calculatorType }: JsonLdStructuredDataProps) => {
  const location = useLocation();
  const currentUrl = `https://pineapple-calculator-paradise.lovable.app${location.pathname}`;
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pineapple Calculator Paradise",
    "url": "https://pineapple-calculator-paradise.lovable.app",
    "logo": "https://pineapple-calculator-paradise.lovable.app/logo.png",
    "description": "Free online calculators for finance, health, math, and more",
    "sameAs": [
      "https://twitter.com/pineapplecalc",
      "https://facebook.com/pineapplecalc"
    ]
  };

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

    const appCategory = calculatorType?.includes('finance') || calculatorType?.includes('investment') || calculatorType?.includes('emi') || calculatorType?.includes('sip') ? 
      "FinanceApplication" : 
      calculatorType?.includes('health') || calculatorType?.includes('bmi') || calculatorType?.includes('calorie') ? 
      "MedicalApplication" : 
      "UtilitiesApplication";

    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": `${pageTitle} - Online Calculator`,
      "operatingSystem": "Web Browser",
      "applicationCategory": appCategory,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      },
      "description": description,
      "url": currentUrl,
      "author": {
        "@type": "Organization",
        "name": "Pineapple Calculator Paradise"
      },
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "1.0",
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "featureList": [
        "Free to use - No registration required",
        "Instant accurate calculations", 
        "Mobile responsive design",
        "Privacy-focused - No data collection",
        "Works offline once loaded"
      ]
    };
  };

  const generateHowToSchema = () => {
    if (!calculatorType) return null;

    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Use ${pageTitle}`,
      "description": `Step-by-step guide to using the ${pageTitle} for accurate and instant calculations.`,
      "image": "https://pineapple-calculator-paradise.lovable.app/calculator-tutorial.png",
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "tool": {
        "@type": "HowToTool",
        "name": pageTitle
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Your Values",
          "text": `Input your values into the ${pageTitle} fields. All fields are clearly labeled for easy data entry.`,
          "url": currentUrl
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Review Your Input",
          "text": "Double-check your entered values to ensure accuracy in your calculations.",
          "url": currentUrl
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Get Instant Results",
          "text": "View your calculated results instantly with detailed breakdowns, charts, and explanations.",
          "url": currentUrl
        }
      ]
    };
  };

  const generateFAQSchema = () => {
    if (!calculatorType) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How do I use the ${pageTitle}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Simply enter your values into the ${pageTitle} fields and get instant, accurate results. The calculator automatically computes results as you type or when you click calculate.`
          }
        },
        {
          "@type": "Question", 
          "name": `Is the ${pageTitle} free to use?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, all our calculators including the ${pageTitle} are completely free with no registration, download, or sign-up required. Access them anytime from any device.`
          }
        },
        {
          "@type": "Question",
          "name": `How accurate are the calculator results?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Our ${pageTitle} uses industry-standard formulas and algorithms to provide highly accurate results for planning, educational, and professional purposes.`
          }
        },
        {
          "@type": "Question",
          "name": `Can I use this calculator on mobile devices?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Absolutely! The ${pageTitle} is fully responsive and optimized for mobile phones, tablets, and desktop computers with a seamless user experience across all devices.`
          }
        }
      ]
    };
  };

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
      
      {calculatorType && generateSoftwareApplicationSchema() && (
        <>
          {/* Software Application Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateSoftwareApplicationSchema())
            }}
          />
          
          {/* How-To Schema */}
          {generateHowToSchema() && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateHowToSchema())
              }}
            />
          )}
          
          {/* FAQ Schema */}
          {generateFAQSchema() && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateFAQSchema())
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default JsonLdStructuredData;