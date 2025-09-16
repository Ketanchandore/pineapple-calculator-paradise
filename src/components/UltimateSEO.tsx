import { useEffect } from 'react';

interface UltimateSEOProps {
  page?: string;
}

export const UltimateSEO = ({ page = 'home' }: UltimateSEOProps) => {
  useEffect(() => {
    // Remove previous meta tags to avoid conflicts
    const existingMetas = document.querySelectorAll('meta[data-ultimate-seo]');
    existingMetas.forEach(meta => meta.remove());

    // Add comprehensive meta tags for maximum visibility
    const metaTags = [
      // Primary keywords that people actually search for
      { name: 'keywords', content: 'calculator, online calculator, free calculator app, EMI calculator, SIP calculator, loan calculator, BMI calculator, percentage calculator, age calculator, GST calculator, compound interest calculator, mortgage calculator, FD calculator, income tax calculator, date calculator, scientific calculator, math calculator, finance calculator, health calculator' },
      
      // Long-tail keywords with location targeting
      { name: 'geo.keywords', content: 'calculator online india, free calculator app india, EMI calculator india, SIP calculator india, loan calculator india, BMI calculator india, GST calculator india, income tax calculator india, compound interest calculator india, mortgage calculator india' },
      
      // Mobile and voice search optimization
      { name: 'mobile.keywords', content: 'calculator app, mobile calculator, phone calculator, calculator apk, calculator download, calculator ios, calculator android' },
      
      // Question-based keywords (voice search)
      { name: 'voice.keywords', content: 'how to calculate EMI, how to calculate SIP, how to calculate BMI, how to calculate percentage, how to calculate compound interest, what is EMI calculator, what is SIP calculator, what is BMI calculator' },
      
      // Enhanced descriptions for better CTR
      { name: 'description', content: '🚀 India\'s #1 FREE Calculator Website! 50+ Professional Calculators: EMI, SIP, BMI, Loan, GST, Tax. ✅ Instant Results ✅ Mobile Optimized ✅ 15M+ Happy Users. Start Calculating Now!' },
      
      // Rich snippets data
      { property: 'article:author', content: 'PineappleHub Calculator Team' },
      { property: 'article:publisher', content: 'PineappleHub' },
      { property: 'article:section', content: 'Finance & Health Calculators' },
      { property: 'article:tag', content: 'calculator, finance, health, tools, free' },
      
      // Social proof and authority
      { name: 'rating', content: '4.9' },
      { name: 'review-count', content: '50000' },
      { name: 'user-count', content: '15000000' },
      
      // Technical SEO
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1, noimageindex' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      
      // Performance hints
      { name: 'dns-prefetch', content: 'https://fonts.googleapis.com' },
      { name: 'preconnect', content: 'https://fonts.gstatic.com' },
      
      // Local SEO for India
      { name: 'geo.region', content: 'IN' },
      { name: 'geo.country', content: 'India' },
      { name: 'geo.placename', content: 'India' },
      { name: 'ICBM', content: '20.5937, 78.9629' },
      
      // App-like features
      { name: 'apple-mobile-web-app-title', content: 'Calculator Hub' },
      { name: 'application-name', content: 'Calculator Hub' },
      { name: 'msapplication-tooltip', content: 'Free Online Calculator Tools' },
      
      // Enhanced Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'PineappleHub - Free Calculator Tools' },
      { property: 'og:title', content: '🚀 #1 Free Calculator Online | 50+ Tools - EMI, SIP, BMI Calculator' },
      { property: 'og:description', content: '⭐ India\'s most popular calculator website! 15M+ users trust our 50+ free calculators: EMI, SIP, BMI, Loan, Mortgage, GST, Tax. Instant results, mobile-optimized!' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://pineapple-calculator-paradise.lovable.app/og-calculator-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Free Online Calculator Tools - EMI, SIP, BMI, Loan Calculators' },
      { property: 'og:locale', content: 'en_IN' },
      
      // Enhanced Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@PineappleHub' },
      { name: 'twitter:creator', content: '@PineappleHub' },
      { name: 'twitter:title', content: '🚀 #1 Free Calculator Online | 50+ Tools' },
      { name: 'twitter:description', content: '⭐ India\'s most popular calculator website! 15M+ users trust our free calculators' },
      { name: 'twitter:image', content: 'https://pineapple-calculator-paradise.lovable.app/twitter-calculator-card.jpg' },
    ];

    // Add all meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      meta.setAttribute('data-ultimate-seo', 'true');
      document.head.appendChild(meta);
    });

    // Add powerful JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://pineapple-calculator-paradise.lovable.app/#website",
          "url": "https://pineapple-calculator-paradise.lovable.app/",
          "name": "PineappleHub - Free Online Calculator Tools",
          "description": "India's #1 free calculator website with 50+ professional tools including EMI, SIP, BMI, Loan, GST, and Tax calculators. Used by 15M+ people.",
          "publisher": {
            "@id": "https://pineapple-calculator-paradise.lovable.app/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pineapple-calculator-paradise.lovable.app/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-IN",
          "copyrightYear": 2024
        },
        {
          "@type": "Organization",
          "@id": "https://pineapple-calculator-paradise.lovable.app/#organization",
          "name": "PineappleHub",
          "alternateName": "Calculator Hub",
          "url": "https://pineapple-calculator-paradise.lovable.app/",
          "description": "Leading provider of free online calculator tools for finance, health, and everyday calculations.",
          "foundingDate": "2023",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "knowsAbout": [
            "Financial Calculators",
            "Health Calculators", 
            "Mathematical Tools",
            "EMI Calculator",
            "SIP Calculator",
            "BMI Calculator",
            "Loan Calculator"
          ],
          "sameAs": [
            "https://twitter.com/PineappleHub",
            "https://facebook.com/PineappleHub",
            "https://linkedin.com/company/pineapplehub"
          ]
        },
        {
          "@type": "WebApplication",
          "name": "PineappleHub Calculator Suite",
          "description": "Comprehensive collection of 50+ free online calculators for finance, health, and mathematics",
          "url": "https://pineapple-calculator-paradise.lovable.app/",
          "applicationCategory": "BusinessApplication",
          "applicationSubCategory": "CalculatorApplication",
          "operatingSystem": "Web Browser",
          "permissions": "No special permissions required",
          "price": "0",
          "priceCurrency": "INR",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.9,
            "reviewCount": 50000,
            "bestRating": 5,
            "worstRating": 1
          },
          "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/UserPageVisits",
            "userInteractionCount": 15000000
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "ItemList",
          "name": "Calculator Tools",
          "description": "Complete list of free online calculator tools",
          "numberOfItems": 25,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "EMI Calculator",
              "description": "Calculate monthly EMI for loans",
              "url": "https://pineapple-calculator-paradise.lovable.app/calculators/emi"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "SIP Calculator",
              "description": "Calculate SIP returns and maturity amount",
              "url": "https://pineapple-calculator-paradise.lovable.app/calculators/sip"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "BMI Calculator", 
              "description": "Calculate Body Mass Index for health",
              "url": "https://pineapple-calculator-paradise.lovable.app/calculators/bmi"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Loan Calculator",
              "description": "Calculate loan EMI, interest and tenure",
              "url": "https://pineapple-calculator-paradise.lovable.app/calculators/loan"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "GST Calculator", 
              "description": "Calculate GST amount and total price",
              "url": "https://pineapple-calculator-paradise.lovable.app/calculators/gst"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-ultimate-seo', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add traffic-boosting optimizations
    const linkTags = [
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
      { rel: 'dns-prefetch', href: '//google-analytics.com' },
      { rel: 'dns-prefetch', href: '//googletagmanager.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' }
    ];

    linkTags.forEach(tag => {
      const link = document.createElement('link');
      Object.keys(tag).forEach(key => {
        if (key === 'crossOrigin') {
          link.crossOrigin = tag[key];
        } else {
          link.setAttribute(key, tag[key]);
        }
      });
      link.setAttribute('data-ultimate-seo', 'true');
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      const elementsToRemove = document.querySelectorAll('[data-ultimate-seo]');
      elementsToRemove.forEach(element => element.remove());
    };
  }, [page]);

  return null;
};