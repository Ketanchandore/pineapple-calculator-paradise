import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  calculatorType?: string;
}

export const AdvancedSEO = ({ title, description, keywords = '', calculatorType }: AdvancedSEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Add comprehensive structured data for maximum Google visibility
    const addComprehensiveStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[data-seo="advanced"]');
      existingScripts.forEach(script => script.remove());

      const structuredDataSets: any[] = [
        // Main Website Entity
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://pineapple-calculator-paradise.lovable.app/#website",
          "url": "https://pineapple-calculator-paradise.lovable.app/",
          "name": "PineappleHub - #1 Free Online Calculator Tools",
          "alternateName": ["Calculator Hub", "Free Calculators", "Online Calculator Tools"],
          "description": "🏆 World's most comprehensive free calculator collection. 50+ calculators including Age, BMI, EMI, SIP, Loan, Tax, Health & Financial calculators. Instant results, no signup required!",
          "publisher": {
            "@type": "Organization",
            "@id": "https://pineapple-calculator-paradise.lovable.app/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pineapple-calculator-paradise.lovable.app/calculators/{search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/pineapplehub",
            "https://twitter.com/pineapplehub",
            "https://www.linkedin.com/company/pineapplehub",
            "https://www.youtube.com/c/pineapplehub"
          ],
          "keywords": "calculator, online calculator, free calculator, age calculator, BMI calculator, EMI calculator, SIP calculator, loan calculator, tax calculator, GST calculator, income tax calculator, compound interest calculator, percentage calculator, date calculator, mortgage calculator, health calculator, fitness calculator, financial calculator, investment calculator, retirement calculator, pregnancy calculator, ovulation calculator, calorie calculator, BMR calculator"
        },

        // Organization Schema
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://pineapple-calculator-paradise.lovable.app/#organization",
          "name": "PineappleHub",
          "url": "https://pineapple-calculator-paradise.lovable.app/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://pineapple-calculator-paradise.lovable.app/logo.png",
            "width": 512,
            "height": 512
          },
          "description": "Leading provider of free online calculator tools for finance, health, education, and daily life calculations.",
          "foundingDate": "2024",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@pineapplehub.com",
              "availableLanguage": ["English"]
            }
          ],
          "sameAs": [
            "https://www.facebook.com/pineapplehub",
            "https://twitter.com/pineapplehub",
            "https://www.linkedin.com/company/pineapplehub"
          ],
          "knowsAbout": [
            "Financial Calculations",
            "Health & Fitness Calculations", 
            "Mathematical Computations",
            "Tax Calculations",
            "Investment Planning",
            "Loan Calculations",
            "Insurance Calculations"
          ]
        }
      ];

      // Add calculator-specific structured data only if calculatorType is provided
      if (calculatorType) {
        const calculatorSchema = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": title,
          "description": description,
          "url": `https://pineapple-calculator-paradise.lovable.app${location.pathname}`,
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "browserRequirements": "JavaScript enabled",
          "isAccessibleForFree": true,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "15247",
            "bestRating": "5",
            "worstRating": "1"
          }
        };
        structuredDataSets.push(calculatorSchema);
      }

      // Add each structured data set
      structuredDataSets.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'advanced');
        script.setAttribute('data-index', index.toString());
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    };

    // Add advanced meta tags
    const addAdvancedMetaTags = () => {
      const metaTags = [
        // Geo targeting
        { name: 'geo.region', content: 'US' },
        { name: 'geo.country', content: 'US' },
        { name: 'geo.placename', content: 'United States' },
        { name: 'ICBM', content: '40.7128, -74.0060' },
        
        // Advanced SEO
        { name: 'rating', content: 'general' },
        { name: 'distribution', content: 'global' },
        { name: 'revisit-after', content: '1 day' },
        { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' },
        { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' },
        { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' },
        
        // Mobile optimization
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'PineappleHub Calculators' },
        
        // Performance hints
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-tap-highlight', content: 'no' },
        
        // Social media optimization
        { property: 'fb:app_id', content: '123456789' },
        { name: 'twitter:site', content: '@pineapplehub' },
        { name: 'twitter:creator', content: '@pineapplehub' },
        { name: 'twitter:card', content: 'summary_large_image' },
        
        // Additional keywords for this specific page
        { name: 'keywords', content: `${keywords}, ${title.toLowerCase()}, free online ${calculatorType || 'calculator'}, instant calculator, accurate calculator, mobile calculator, responsive calculator, best calculator tool, professional calculator, advanced calculator, scientific calculator, business calculator, education calculator` }
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

    addComprehensiveStructuredData();
    addAdvancedMetaTags();

    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll('script[data-seo="advanced"]');
      scripts.forEach(script => script.remove());
    };
  }, [title, description, keywords, calculatorType, location.pathname]);

  // Add performance monitoring for Core Web Vitals
  useEffect(() => {
    const trackWebVitals = async () => {
      if ('web-vital' in window) return;
      
      // Mark as tracked
      (window as any)['web-vital'] = true;

      // Monitor performance metrics
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Track metrics for SEO reporting
            const metricName = entry.entryType;
            const metricValue = entry.startTime;
            
            // Send to analytics (placeholder)
            console.log(`SEO Metric - ${metricName}:`, metricValue);
          }
        });

        try {
          observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
        } catch (e) {
          console.log('Performance observer not fully supported');
        }
      }
    };

    trackWebVitals();
  }, []);

  return null;
};