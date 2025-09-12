import { useEffect } from 'react';

interface SEOEnhancerProps {
  page?: string;
}

export const SEOEnhancer = ({ page = 'home' }: SEOEnhancerProps) => {
  useEffect(() => {
    // Add performance monitoring
    if ('performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            // Track FID
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            // Track CLS
            console.log('CLS:', (entry as any).value);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for older browsers
        console.log('Performance observer not supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Add structured data for rich snippets
    const addRichSnippets = () => {
      const existingScript = document.getElementById('rich-snippets');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'rich-snippets';
      script.type = 'application/ld+json';
      
      const richData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Free Online Calculator Tools",
        "description": "Comprehensive collection of free online calculators",
        "numberOfItems": "30+",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Age Calculator",
            "description": "Calculate your exact age in years, months, days",
            "url": "https://pineapple-calculator-paradise.lovable.app/calculators/age"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "BMI Calculator",
            "description": "Calculate Body Mass Index and health status",
            "url": "https://pineapple-calculator-paradise.lovable.app/calculators/bmi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "EMI Calculator", 
            "description": "Calculate loan EMI for home, car, personal loans",
            "url": "https://pineapple-calculator-paradise.lovable.app/calculators/emi"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "SIP Calculator",
            "description": "Calculate SIP returns and investment growth",
            "url": "https://pineapple-calculator-paradise.lovable.app/calculators/sip"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "GST Calculator",
            "description": "Calculate GST amount and inclusive/exclusive prices",
            "url": "https://pineapple-calculator-paradise.lovable.app/calculators/gst"
          }
        ]
      };

      script.textContent = JSON.stringify(richData);
      document.head.appendChild(script);
    };

    addRichSnippets();

    return () => {
      const script = document.getElementById('rich-snippets');
      if (script) {
        script.remove();
      }
    };
  }, [page]);

  return null;
};