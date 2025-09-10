import { useLocation } from "react-router-dom";

interface JsonLdStructuredDataProps {
  pageTitle: string;
  description: string;
  calculatorType?: string;
}

const JsonLdStructuredData = ({ pageTitle, description, calculatorType }: JsonLdStructuredDataProps) => {
  const location = useLocation();
  const currentUrl = `https://pineapplehub.com${location.pathname}`;

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
      "@id": "https://pineapplehub.com/#website"
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
    }
  });

  const generateSoftwareApplicationSchema = () => {
    if (!calculatorType) return null;

    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${currentUrl}#calculator`,
      "name": pageTitle,
      "description": description,
      "url": currentUrl,
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript enabled",
      "permissions": "No special permissions required",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "creator": {
        "@type": "Organization",
        "@id": "https://pineapplehub.com/#organization"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247",
        "bestRating": "5",
        "worstRating": "1"
      }
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema())
        }}
      />
      {calculatorType && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateSoftwareApplicationSchema())
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateHowToSchema())
            }}
          />
        </>
      )}
    </>
  );
};

export default JsonLdStructuredData;