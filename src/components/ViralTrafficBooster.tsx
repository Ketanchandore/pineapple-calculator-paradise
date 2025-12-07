import { useEffect } from 'react';

export const ViralTrafficBooster = () => {
  useEffect(() => {
    const baseUrl = 'https://pineapple-calculator-paradise.lovable.app';
    
    // Clean professional meta tags for global SEO
    const seoMetas = [
      // Professional Open Graph tags
      { property: 'og:title', content: 'Free Online Calculator Tools | EMI, SIP, BMI, Mortgage Calculator' },
      { property: 'og:description', content: 'Free professional calculators trusted by millions worldwide. Calculate EMI, SIP, BMI, Mortgage, Compound Interest, Tax & more. 50+ accurate tools.' },
      { property: 'og:image', content: `${baseUrl}/og-image.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Free Online Calculator Tools - PineappleHub' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'PineappleHub' },
      
      // Twitter optimization
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Free Online Calculator Tools | EMI, SIP, BMI Calculator' },
      { name: 'twitter:description', content: 'Professional calculators for finance, health & math. Free, fast & accurate.' },
      { name: 'twitter:image', content: `${baseUrl}/og-image.jpg` },
      
      // Mobile PWA
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'theme-color', content: '#3b82f6' },
      
      // Global targeting keywords (clean, no spammy content)
      { name: 'keywords', content: 'free calculator, online calculator, EMI calculator, SIP calculator, BMI calculator, mortgage calculator USA, loan calculator UK, compound interest calculator, percentage calculator, tax calculator Australia, age calculator, date calculator, calorie calculator, home loan calculator, FD calculator, scientific calculator, financial calculator, health calculator' },
      
      // International geo targeting
      { name: 'geo.region', content: 'US' },
      { name: 'geo.country', content: 'US' },
      
      // Content language
      { httpEquiv: 'content-language', content: 'en' },
    ];

    seoMetas.forEach(meta => {
      const selector = meta.name ? `meta[name="${meta.name}"]` : 
                       meta.property ? `meta[property="${meta.property}"]` :
                       meta.httpEquiv ? `meta[http-equiv="${meta.httpEquiv}"]` : null;
      
      if (selector) {
        const existing = document.querySelector(selector);
        if (existing) existing.remove();
      }
      
      const metaTag = document.createElement('meta');
      if (meta.name) metaTag.setAttribute('name', meta.name);
      if (meta.property) metaTag.setAttribute('property', meta.property);
      if (meta.httpEquiv) metaTag.setAttribute('http-equiv', meta.httpEquiv);
      metaTag.setAttribute('content', meta.content);
      metaTag.setAttribute('data-seo', 'true');
      document.head.appendChild(metaTag);
    });

    // Only WebSite schema with SearchAction for sitelinks (no Product schema!)
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": "PineappleHub - Free Online Calculator Tools",
      "url": baseUrl,
      "description": "Free professional calculator tools for finance, health, and math. EMI, SIP, BMI, Mortgage, Compound Interest calculators used by millions worldwide.",
      "inLanguage": "en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.setAttribute('data-seo', 'true');
    script1.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(script1);

    // Organization schema (clean, professional)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "PineappleHub",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/og-image.jpg`,
        "width": 1200,
        "height": 630
      },
      "description": "Free professional calculator tools for finance, health, and mathematics.",
      "foundingDate": "2024",
      "areaServed": "Worldwide"
    };

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.setAttribute('data-seo', 'true');
    script2.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script2);

    // ItemList for calculator collection (good for Google rich results)
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Free Online Calculator Tools",
      "description": "Collection of 50+ free professional calculators",
      "numberOfItems": 50,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "EMI Calculator",
          "url": `${baseUrl}/calculators/emi`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SIP Calculator",
          "url": `${baseUrl}/calculators/sip`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "BMI Calculator",
          "url": `${baseUrl}/calculators/bmi`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mortgage Calculator",
          "url": `${baseUrl}/calculators/mortgage`
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Compound Interest Calculator",
          "url": `${baseUrl}/calculators/compound-interest`
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Age Calculator",
          "url": `${baseUrl}/calculators/age`
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Percentage Calculator",
          "url": `${baseUrl}/calculators/percentage`
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Loan Calculator",
          "url": `${baseUrl}/calculators/loan`
        }
      ]
    };

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.setAttribute('data-seo', 'true');
    script3.textContent = JSON.stringify(itemListSchema);
    document.head.appendChild(script3);

    // Breadcrumb for homepage
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        }
      ]
    };

    const script4 = document.createElement('script');
    script4.type = 'application/ld+json';
    script4.setAttribute('data-seo', 'true');
    script4.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script4);

    // Track share capability
    if (navigator.share) {
      document.body.setAttribute('data-share-capable', 'true');
    }

    // Cleanup
    return () => {
      const elements = document.querySelectorAll('[data-seo]');
      elements.forEach(el => el.remove());
    };
  }, []);

  return null;
};
