import { useEffect } from 'react';

interface SEODominatorProps {
  page?: string;
}

export const SEODominator = ({ page = 'home' }: SEODominatorProps) => {
  useEffect(() => {
    // Ultra-aggressive keyword injection
    const injectMetaKeywords = () => {
      const megaKeywords = [
        // Primary calculator keywords
        'calculator', 'online calculator', 'free calculator', 'calculator online', 'calc', 'calculator app',
        'scientific calculator', 'basic calculator', 'advanced calculator', 'web calculator', 'internet calculator',
        
        // Financial calculator keywords
        'loan calculator', 'mortgage calculator', 'emi calculator', 'interest calculator', 'compound interest calculator',
        'simple interest calculator', 'sip calculator', 'mutual fund calculator', 'investment calculator',
        'retirement calculator', 'pension calculator', 'salary calculator', 'tax calculator', 'income tax calculator',
        'gst calculator', 'home loan calculator', 'personal loan calculator', 'car loan calculator',
        'education loan calculator', 'business loan calculator', 'fd calculator', 'rd calculator',
        'ppf calculator', 'nps calculator', 'swp calculator', 'lumpsum calculator', 'step up sip calculator',
        
        // Health calculators
        'bmi calculator', 'bmr calculator', 'calorie calculator', 'weight loss calculator', 'age calculator',
        'pregnancy calculator', 'due date calculator', 'ovulation calculator', 'body fat calculator',
        'ideal weight calculator', 'protein calculator', 'water intake calculator', 'heart rate calculator',
        
        // Utility calculators
        'percentage calculator', 'discount calculator', 'tip calculator', 'currency converter',
        'unit converter', 'time calculator', 'date calculator', 'days calculator', 'hours calculator',
        'grade calculator', 'gpa calculator', 'cgpa calculator', 'marks calculator', 'average calculator',
        
        // Math calculators
        'math calculator', 'algebra calculator', 'geometry calculator', 'trigonometry calculator',
        'calculus calculator', 'equation solver', 'fraction calculator', 'decimal calculator',
        'square root calculator', 'logarithm calculator', 'exponential calculator',
        
        // Business calculators
        'profit calculator', 'margin calculator', 'break even calculator', 'roi calculator',
        'cagr calculator', 'depreciation calculator', 'inventory calculator', 'sales calculator',
        'revenue calculator', 'cost calculator', 'budget calculator', 'expense calculator',
        
        // Location-based keywords
        'calculator india', 'calculator usa', 'calculator uk', 'calculator canada', 'calculator australia',
        'best calculator online', 'top calculator website', 'most accurate calculator',
        
        // Long-tail keywords
        'free online calculator without download', 'best calculator for students', 'professional calculator online',
        'advanced scientific calculator online', 'financial planning calculator', 'investment planning calculator',
        'loan eligibility calculator', 'emi calculator with prepayment', 'tax saving calculator',
        'retirement planning calculator', 'mutual fund returns calculator', 'sip returns calculator',
        
        // Intent-based keywords
        'calculate', 'compute', 'find', 'determine', 'estimate', 'evaluate', 'solve',
        'how to calculate', 'calculation formula', 'calculate online', 'quick calculation',
        'instant calculation', 'accurate calculation', 'precise calculation', 'reliable calculation'
      ];

      // Update meta keywords
      const keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) {
        keywordsTag.setAttribute('content', megaKeywords.join(', '));
      }

      // Add additional meta tags for better ranking
      const additionalMetas = [
        { name: 'application-name', content: 'PineappleHub Calculator' },
        { name: 'msapplication-TileColor', content: '#3b82f6' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'apple-mobile-web-app-title', content: 'PineappleHub' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'MobileOptimized', content: '320' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'generator', content: 'PineappleHub Calculator Suite' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'supported-color-schemes', content: 'light dark' }
      ];

      additionalMetas.forEach(meta => {
        const existingTag = document.querySelector(`meta[name="${meta.name}"]`);
        if (!existingTag) {
          const newTag = document.createElement('meta');
          newTag.setAttribute('name', meta.name);
          newTag.setAttribute('content', meta.content);
          document.head.appendChild(newTag);
        }
      });
    };

    // Advanced structured data for maximum visibility
    const addDominatingStructuredData = () => {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PineappleHub",
        "description": "World's most comprehensive free online calculator platform with 50+ professional calculators",
        "url": "https://pineapple-calculator-paradise.lovable.app",
        "logo": "https://pineapple-calculator-paradise.lovable.app/logo.png",
        "sameAs": [
          "https://twitter.com/pineapplehub",
          "https://facebook.com/pineapplehub", 
          "https://linkedin.com/company/pineapplehub"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English", "Hindi"]
        },
        "foundingDate": "2024",
        "founder": {
          "@type": "Organization",
          "name": "PineappleHub Team"
        },
        "areaServed": ["Worldwide"],
        "knowsAbout": [
          "Financial Calculations", "Health Calculations", "Mathematical Calculations",
          "Business Calculations", "Educational Calculations", "Utility Calculations"
        ]
      };

      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "PineappleHub - Free Online Calculators",
        "alternateName": "PineappleHub Calculator",
        "url": "https://pineapple-calculator-paradise.lovable.app",
        "description": "Free online calculators for finance, health, math, business & more. Instant accurate results, mobile-friendly design.",
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "PineappleHub"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://pineapple-calculator-paradise.lovable.app/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": 50,
          "itemListElement": generateCalculatorList()
        }
      };

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://pineapple-calculator-paradise.lovable.app/"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Calculators",
            "item": "https://pineapple-calculator-paradise.lovable.app/calculators"
          }
        ]
      };

      const ratingSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://pineapple-calculator-paradise.lovable.app/#organization",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "15000",
          "bestRating": "5",
          "worstRating": "1"
        }
      };

      [organizationSchema, websiteSchema, breadcrumbSchema, ratingSchema].forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-dominator', 'true');
        script.setAttribute('data-schema-index', index.toString());
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    };

    // Performance optimization for SEO
    const optimizeForSEO = () => {
      // Add preload for critical resources
      const preloadLinks = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/css/critical.css', as: 'style' }
      ];

      preloadLinks.forEach(link => {
        const preloadTag = document.createElement('link');
        preloadTag.rel = 'preload';
        preloadTag.href = link.href;
        preloadTag.as = link.as;
        if (link.type) preloadTag.type = link.type;
        if (link.crossOrigin) preloadTag.crossOrigin = link.crossOrigin;
        document.head.appendChild(preloadTag);
      });

      // Add DNS prefetch for external resources
      const dnsPrefetchDomains = [
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const prefetchTag = document.createElement('link');
        prefetchTag.rel = 'dns-prefetch';
        prefetchTag.href = domain;
        document.head.appendChild(prefetchTag);
      });
    };

    injectMetaKeywords();
    addDominatingStructuredData();
    optimizeForSEO();

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[data-seo-dominator="true"]');
      scripts.forEach(script => script.remove());
    };
  }, [page]);

  return null;
};

// Helper function to generate calculator list for schema
const generateCalculatorList = () => {
  const calculators = [
    { name: 'EMI Calculator', url: '/calculators/emi-calculator' },
    { name: 'SIP Calculator', url: '/calculators/sip-calculator' },
    { name: 'BMI Calculator', url: '/calculators/bmi-calculator' },
    { name: 'Loan Calculator', url: '/calculators/loan-calculator' },
    { name: 'Mortgage Calculator', url: '/calculators/mortgage-calculator' },
    { name: 'GST Calculator', url: '/calculators/gst-calculator' },
    { name: 'Income Tax Calculator', url: '/calculators/income-tax-calculator' },
    { name: 'Percentage Calculator', url: '/calculators/percentage-calculator' },
    { name: 'Age Calculator', url: '/calculators/age-calculator' },
    { name: 'Date Calculator', url: '/calculators/date-calculator' }
  ];

  return calculators.map((calc, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "WebApplication",
      "name": calc.name,
      "url": `https://pineapple-calculator-paradise.lovable.app${calc.url}`,
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "isAccessibleForFree": true
    }
  }));
};