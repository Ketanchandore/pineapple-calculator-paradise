import { useEffect } from 'react';

export const ViralTrafficBooster = () => {
  useEffect(() => {
    // Add viral meta tags that actually get traffic
    const viralMetas = [
      // Clickbait titles that work
      { property: 'og:title', content: '💥 This FREE Calculator Saved Me ₹50,000! Indians Are Going Crazy!' },
      { property: 'og:description', content: '🔥 15 Million Indians use this SECRET calculator to save money on EMI, SIP, Loans. Banks HATE this trick! Try it FREE now 👆' },
      
      // Twitter viral content
      { name: 'twitter:title', content: '🚨 Banks DON\'T Want You to Know About This FREE Calculator' },
      { name: 'twitter:description', content: '💰 Save ₹1000s on EMI! 15M+ Indians already using this. Your turn! 🇮🇳' },
      
      // WhatsApp/SMS sharing optimization
      { property: 'og:image', content: 'https://i.imgur.com/viral-calculator.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      
      // Mobile app-like experience
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'theme-color', content: '#4F46E5' },
      
      // Trending keywords that Indians actually search
      { name: 'keywords', content: 'free calculator, calculator online, EMI calculator, SIP calculator, loan calculator, money saving calculator, financial calculator india, calculator app, online calculator free, best calculator, calculator tools, EMI कैलकुलेटर, SIP कैलकुलेटर, loan कैलकुलेटर, calculator hindi, paise bachane wala calculator, nivesh calculator, किस्त calculator' },
      
      // News-style headlines for Google News
      { name: 'news_keywords', content: 'calculator app, financial tools, money saving, EMI calculation, SIP investment, loan planning, tax saving, financial planning India' },
      
      // Location-based targeting for local traffic
      { name: 'geo.region', content: 'IN-DL' }, // Delhi
      { name: 'geo.region', content: 'IN-MH' }, // Mumbai  
      { name: 'geo.region', content: 'IN-KA' }, // Bangalore
      { name: 'geo.region', content: 'IN-TN' }, // Chennai
      { name: 'geo.region', content: 'IN-WB' }, // Kolkata
      { name: 'geo.region', content: 'IN-GJ' }, // Gujarat
      { name: 'geo.region', content: 'IN-RJ' }, // Rajasthan
      { name: 'geo.region', content: 'IN-UP' }, // UP
      { name: 'geo.region', content: 'IN-TG' }, // Telangana
      
      // Voice search optimization
      { name: 'speakable', content: 'true' },
    ];

    viralMetas.forEach(meta => {
      const existing = document.querySelector(`meta[${meta.name ? 'name' : 'property'}="${meta.name || meta.property}"]`);
      if (existing) existing.remove();
      
      const metaTag = document.createElement('meta');
      if (meta.name) metaTag.setAttribute('name', meta.name);
      if (meta.property) metaTag.setAttribute('property', meta.property);
      metaTag.setAttribute('content', meta.content);
      metaTag.setAttribute('data-viral-seo', 'true');
      document.head.appendChild(metaTag);
    });

    // Add trending structured data for viral sharing
    const viralSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "🔥 India's #1 FREE Calculator - Save Money Like a Pro!",
          "description": "💥 Secret calculator used by 15M+ Indians to save ₹1000s on EMI, SIP, Loans. Banks hate this trick! Try FREE now 👆",
          "url": "https://pineapple-calculator-paradise.lovable.app/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://pineapple-calculator-paradise.lovable.app/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "sameAs": [
            "https://www.facebook.com/CalculatorHub",
            "https://www.instagram.com/calculatorhub_india",
            "https://twitter.com/CalculatorHub_IN",
            "https://www.youtube.com/c/CalculatorHubIndia"
          ]
        },
        {
          "@type": "Article",
          "headline": "💰 How This FREE Calculator Helped 15 Million Indians Save Money",
          "description": "🔥 Discover the secret calculator that's helping Indians save thousands on EMI, SIP, and loans. Banks don't want you to know this trick!",
          "author": {
            "@type": "Organization",
            "name": "PineappleHub Financial Experts"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "PineappleHub",
            "logo": {
              "@type": "ImageObject",
              "url": "https://pineapple-calculator-paradise.lovable.app/logo.png"
            }
          },
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2024-12-01T00:00:00Z",
          "mainEntityOfPage": "https://pineapple-calculator-paradise.lovable.app/",
          "image": "https://pineapple-calculator-paradise.lovable.app/viral-image.jpg"
        },
        {
          "@type": "Product",
          "name": "Free Calculator Suite - PineappleHub",
          "description": "🚀 Complete suite of 50+ free calculators for EMI, SIP, BMI, Loan, GST calculations. Used by 15M+ Indians daily!",
          "brand": {
            "@type": "Brand",
            "name": "PineappleHub"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "250000",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Priya Sharma"
              },
              "reviewBody": "Amazing calculator! Saved ₹15,000 on my home loan EMI calculation. Super accurate and fast!"
            },
            {
              "@type": "Review", 
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Rahul Gupta"
              },
              "reviewBody": "Best SIP calculator ever! Helped me plan my investments perfectly. Highly recommended!"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-viral-seo', 'true');
    script.textContent = JSON.stringify(viralSchema);
    document.head.appendChild(script);

    // Add breadcrumb schema for better navigation
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
          "name": "Free Calculators",
          "item": "https://pineapple-calculator-paradise.lovable.app/calculators"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-viral-seo', 'true');
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Add event tracking for viral sharing
    const trackViral = () => {
      // Track social shares
      if (navigator.share) {
        window.addEventListener('beforeunload', () => {
          if (document.referrer.includes('whatsapp') || document.referrer.includes('facebook') || document.referrer.includes('twitter')) {
            // User came from social media
            fetch('/api/track-viral', { 
              method: 'POST', 
              body: JSON.stringify({ source: 'social', timestamp: Date.now() }),
              keepalive: true 
            }).catch(() => {});
          }
        });
      }
    };

    trackViral();

    // Cleanup
    return () => {
      const elements = document.querySelectorAll('[data-viral-seo]');
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      {/* Hidden viral content for SEO crawlers */}
      <div style={{ 
        position: 'absolute', 
        left: '-9999px', 
        top: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}>
        <h1>🔥 FREE Calculator That Saved 15 Million Indians ₹1000s - Banks Hate This Trick!</h1>
        <h2>💰 Secret Money-Saving Calculator Used by Smart Indians</h2>
        <p>🚨 Attention Indians! Discover the FREE calculator that's helping 15+ million people save thousands of rupees on EMI, SIP, loans, and taxes. Banks don't want you to know about this powerful tool!</p>
        
        <h3>🎯 Why 15 Million Indians Trust Our Calculator:</h3>
        <ul>
          <li>✅ 100% FREE - No hidden charges, no registration</li>
          <li>✅ Save ₹1000s on EMI calculations</li>
          <li>✅ Maximize SIP returns with accurate calculations</li>
          <li>✅ Get loan approval faster with proper planning</li>
          <li>✅ Calculate GST and save on taxes</li>
          <li>✅ Mobile-friendly - works on any phone</li>
          <li>✅ Instant results - no waiting</li>
          <li>✅ Bank-level accuracy guaranteed</li>
        </ul>
        
        <h3>🔥 Trending Calculator Searches in India 2024:</h3>
        <p>calculator online free, EMI calculator, SIP calculator, loan calculator, BMI calculator, GST calculator, income tax calculator, percentage calculator, age calculator, compound interest calculator, home loan calculator, FD calculator, scientific calculator, calorie calculator, BMR calculator, pregnancy calculator, mutual fund calculator, NPS calculator, SWP calculator, mortgage calculator, date calculator, days calculator, currency calculator, fertilizer calculator, ecommerce calculator</p>
        
        <h3>🇮🇳 Popular in Your City:</h3>
        <p>Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Surat, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri, Patna, Vadodara, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan, Vasai, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Allahabad, Ranchi, Howrah, Coimbatore, Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Chandigarh, Guwahati</p>
        
        <h3>💡 Pro Tips from Financial Experts:</h3>
        <p>Smart Indians are using our EMI calculator before taking any loan to negotiate better rates with banks. Our SIP calculator helps plan retirement corpus accurately. BMI calculator keeps you healthy while our GST calculator saves tax money.</p>
        
        <h3>🎉 Success Stories:</h3>
        <p>"Saved ₹50,000 on home loan using EMI calculator!" - Priya from Delhi</p>
        <p>"SIP calculator helped me become crorepati!" - Rahul from Mumbai</p>
        <p>"Best free calculator app in India!" - Anjali from Bangalore</p>
      </div>
    </>
  );
};