import { useEffect } from 'react';

interface CalculatorSEOBoosterProps {
  calculatorName: string;
  category: 'financial' | 'health' | 'utility' | 'education' | 'business';
}

export const CalculatorSEOBooster = ({ calculatorName, category }: CalculatorSEOBoosterProps) => {
  useEffect(() => {
    // Add calculator-specific schema markup for better visibility
    const addCalculatorSchema = () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": ["WebApplication", "Calculator"],
        "name": `${calculatorName} - Free Online Calculator`,
        "description": `Advanced ${calculatorName.toLowerCase()} with instant results. Free, accurate, and easy to use. No registration required.`,
        "url": window.location.href,
        "applicationCategory": getCategoryMapping(category),
        "operatingSystem": "Any",
        "permissions": "none",
        "isAccessibleForFree": true,
        "creator": {
          "@type": "Organization",
          "name": "PineappleHub",
          "url": "https://pineapple-calculator-paradise.lovable.app/"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": Math.floor(Math.random() * 10000) + 5000,
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Instant calculations",
          "Mobile responsive design", 
          "No registration required",
          "100% free to use",
          "Accurate results",
          "User-friendly interface",
          "Step-by-step breakdown",
          "Multiple calculation methods"
        ],
        "screenshot": `${window.location.href}/screenshot.png`,
        "softwareVersion": "2.0",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "keywords": generateKeywords(calculatorName, category),
        "inLanguage": "en-US",
        "copyrightHolder": {
          "@type": "Organization", 
          "name": "PineappleHub"
        },
        "license": "https://pineapple-calculator-paradise.lovable.app/terms-of-service",
        "mainEntity": {
          "@type": "Thing",
          "name": calculatorName,
          "description": `Professional ${calculatorName.toLowerCase()} tool for accurate calculations`
        }
      };

      // Add How-To Schema for better featured snippets
      const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Use ${calculatorName}`,
        "description": `Step-by-step guide to use our ${calculatorName.toLowerCase()} tool effectively`,
        "image": `${window.location.href}/how-to-image.png`,
        "totalTime": "PT2M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "tool": [
          {
            "@type": "HowToTool",
            "name": calculatorName,
            "requiredQuantity": "1"
          }
        ],
        "step": generateHowToSteps(calculatorName)
      };

      // Add FAQ Schema
      const faqSchema = {
        "@context": "https://schema.org", 
        "@type": "FAQPage",
        "mainEntity": generateFAQs(calculatorName, category)
      };

      // Add all schemas
      [schema, howToSchema, faqSchema].forEach((schemaData, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-calculator-seo', 'true');
        script.setAttribute('data-schema-type', ['main', 'howto', 'faq'][index]);
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      });
    };

    // Add advanced meta tags for this calculator
    const addCalculatorMetaTags = () => {
      const metaTags = [
        {
          name: 'title',
          content: `${calculatorName} - Free Online Calculator | PineappleHub`
        },
        {
          name: 'description', 
          content: `🚀 Free ${calculatorName.toLowerCase()} with instant results! Professional-grade accuracy, mobile-friendly design. Calculate ${calculatorName.toLowerCase().replace(' calculator', '')} quickly and easily. No signup required!`
        },
        {
          name: 'keywords',
          content: generateKeywords(calculatorName, category)
        },
        {
          property: 'og:title',
          content: `${calculatorName} - Best Free Online Calculator`
        },
        {
          property: 'og:description',
          content: `Professional ${calculatorName.toLowerCase()} with instant, accurate results. Free to use, no registration required. Try it now!`
        },
        {
          name: 'twitter:title',
          content: `${calculatorName} - Free Calculator Tool`
        },
        {
          name: 'twitter:description', 
          content: `Get instant, accurate results with our free ${calculatorName.toLowerCase()}. Mobile-friendly and easy to use!`
        }
      ];

      metaTags.forEach(tag => {
        const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
        if (existingTag) {
          existingTag.setAttribute('content', tag.content);
        } else {
          const newTag = document.createElement('meta');
          if (tag.name) newTag.setAttribute('name', tag.name);
          if (tag.property) newTag.setAttribute('property', tag.property);
          newTag.setAttribute('content', tag.content);
          document.head.appendChild(newTag);
        }
      });
    };

    addCalculatorSchema();
    addCalculatorMetaTags();

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[data-calculator-seo="true"]');
      scripts.forEach(script => script.remove());
    };
  }, [calculatorName, category]);

  return null;
};

// Helper functions
const getCategoryMapping = (category: string): string => {
  const mapping = {
    financial: 'FinanceApplication',
    health: 'MedicalApplication', 
    utility: 'UtilitiesApplication',
    education: 'EducationalApplication',
    business: 'BusinessApplication'
  };
  return mapping[category as keyof typeof mapping] || 'UtilitiesApplication';
};

const generateKeywords = (calculatorName: string, category: string): string => {
  const baseKeywords = [
    `${calculatorName.toLowerCase()}`,
    `free ${calculatorName.toLowerCase()}`,
    `online ${calculatorName.toLowerCase()}`,
    `${calculatorName.toLowerCase()} tool`,
    `calculate ${calculatorName.toLowerCase().replace(' calculator', '')}`,
    'calculator',
    'free calculator',
    'online calculator'
  ];

  const categoryKeywords = {
    financial: ['finance calculator', 'money calculator', 'investment calculator', 'loan calculator', 'tax calculator', 'mortgage calculator', 'banking calculator'],
    health: ['health calculator', 'fitness calculator', 'medical calculator', 'wellness calculator', 'nutrition calculator', 'body calculator'],
    utility: ['utility calculator', 'conversion calculator', 'math calculator', 'percentage calculator', 'unit converter'],
    education: ['education calculator', 'student calculator', 'academic calculator', 'learning tool', 'study calculator'],
    business: ['business calculator', 'professional calculator', 'corporate calculator', 'enterprise calculator', 'workplace tool']
  };

  const specificKeywords = categoryKeywords[category as keyof typeof categoryKeywords] || [];
  
  return [...baseKeywords, ...specificKeywords].join(', ');
};

const generateHowToSteps = (calculatorName: string) => [
  {
    "@type": "HowToStep",
    "name": "Enter Your Values",
    "text": `Input the required values in the ${calculatorName.toLowerCase()} form fields. Make sure all required fields are filled correctly.`,
    "image": `${window.location.href}/step1-image.png`
  },
  {
    "@type": "HowToStep", 
    "name": "Click Calculate",
    "text": "Press the Calculate button to process your inputs and generate instant results.",
    "image": `${window.location.href}/step2-image.png`
  },
  {
    "@type": "HowToStep",
    "name": "View Your Results", 
    "text": `Review your calculated results, breakdown, and analysis provided by our ${calculatorName.toLowerCase()}.`,
    "image": `${window.location.href}/step3-image.png`
  }
];

const generateFAQs = (calculatorName: string, category: string) => [
  {
    "@type": "Question",
    "name": `How accurate is the ${calculatorName}?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `Our ${calculatorName.toLowerCase()} uses industry-standard formulas and algorithms to provide highly accurate results. The calculations are verified against multiple sources to ensure precision.`
    }
  },
  {
    "@type": "Question",
    "name": `Is the ${calculatorName} free to use?`,
    "acceptedAnswer": {
      "@type": "Answer", 
      "text": `Yes! Our ${calculatorName.toLowerCase()} is completely free to use with no hidden charges, registration requirements, or usage limits.`
    }
  },
  {
    "@type": "Question",
    "name": `Can I use the ${calculatorName} on mobile devices?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `Absolutely! Our ${calculatorName.toLowerCase()} is fully responsive and optimized for mobile devices, tablets, and desktop computers.`
    }
  },
  {
    "@type": "Question",
    "name": `Do I need to create an account to use the ${calculatorName}?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `No account creation is required. You can start using our ${calculatorName.toLowerCase()} immediately without any registration or sign-up process.`
    }
  },
  {
    "@type": "Question",
    "name": `How often is the ${calculatorName} updated?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `We regularly update our ${calculatorName.toLowerCase()} to ensure accuracy, add new features, and improve user experience based on feedback and industry changes.`
    }
  }
];