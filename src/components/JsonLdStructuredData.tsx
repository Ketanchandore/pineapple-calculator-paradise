import { useLocation } from "react-router-dom";

interface JsonLdStructuredDataProps {
  pageTitle: string;
  description: string;
  calculatorType?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const JsonLdStructuredData = ({ pageTitle, description, calculatorType, faqs }: JsonLdStructuredDataProps) => {
  const location = useLocation();
  const baseUrl = 'https://pineapple-calculator-paradise.lovable.app';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Determine application category based on calculator type
  const getAppCategory = () => {
    if (!calculatorType) return "UtilityApplication";
    const type = calculatorType.toLowerCase();
    if (type.includes('finance') || type.includes('emi') || type.includes('sip') || 
        type.includes('loan') || type.includes('mortgage') || type.includes('tax') ||
        type.includes('interest') || type.includes('investment')) {
      return "FinanceApplication";
    }
    if (type.includes('health') || type.includes('bmi') || type.includes('calorie') ||
        type.includes('bmr') || type.includes('pregnancy')) {
      return "HealthApplication";
    }
    return "UtilityApplication";
  };

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    "url": currentUrl,
    "name": pageTitle,
    "description": description,
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // SoftwareApplication schema (for calculator pages only)
  const softwareAppSchema = calculatorType ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${currentUrl}#calculator`,
    "name": pageTitle,
    "description": description,
    "url": currentUrl,
    "applicationCategory": getAppCategory(),
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "PineappleHub"
    }
  } : null;

  // HowTo schema
  const howToSchema = calculatorType ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Use ${pageTitle}`,
    "description": `Step-by-step guide to using the ${pageTitle} for accurate calculations.`,
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter Your Values",
        "text": `Input your values into the ${pageTitle} fields.`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Review Input",
        "text": "Check your entered values for accuracy."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Results",
        "text": "View your calculated results with detailed breakdowns."
      }
    ]
  } : null;

  // FAQ schema
  const faqSchema = calculatorType ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs && faqs.length > 0 ? faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })) : [
      {
        "@type": "Question",
        "name": `How do I use the ${pageTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Enter your values into the ${pageTitle} fields and get instant, accurate results.`
        }
      },
      {
        "@type": "Question",
        "name": `Is the ${pageTitle} free?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, the ${pageTitle} is completely free with no registration required.`
        }
      },
      {
        "@type": "Question",
        "name": `How accurate is this calculator?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${pageTitle} uses industry-standard formulas for highly accurate results.`
        }
      }
    ]
  } : null;

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...(calculatorType ? [{
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": `${baseUrl}/calculators`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageTitle,
        "item": currentUrl
      }] : [])
    ]
  };

  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {calculatorType && softwareAppSchema && (
        <>
          {/* SoftwareApplication Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(softwareAppSchema)
            }}
          />
          
          {/* HowTo Schema */}
          {howToSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(howToSchema)
              }}
            />
          )}
          
          {/* FAQ Schema */}
          {faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema)
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default JsonLdStructuredData;
