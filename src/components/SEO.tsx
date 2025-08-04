
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
  const location = useLocation();
  const currentUrl = `https://pineapplehub.com${location.pathname}`;
  
  // Dynamic meta based on current route
  const getPageMeta = () => {
    switch (location.pathname) {
      case '/calculators/age':
        return {
          title: 'Free Age Calculator - Calculate Your Exact Age Online | PineappleHub',
          description: 'Calculate your exact age in years, months, days, hours, minutes & seconds. Free online age calculator with instant results. Find age between dates, birthday calculator.',
          keywords: 'age calculator, calculate age, age finder, birthday calculator, date difference calculator, how old am I, age in days, age in months, age counter, exact age, birth date calculator, age from date of birth, years months days calculator, time since birth, age verification, age computation, chronological age, biological age calculator, age gap calculator, date to age converter, precise age calculation, age calculator online free, accurate age calculator, age difference calculator, age calculator with seconds, age calculator years months days, age calculator from birthday, age calculator exact, age calculator precise, date of birth calculator, find my age, what is my age, age determination, age estimation, age calculation formula, age counter online, age calculator widget, age calculator tool, birthday countdown, days since birth, hours since birth, minutes since birth, seconds since birth, age in years, age in months only, age in days only, age in hours, age in minutes, age in seconds, current age calculator, real time age calculator, live age calculator, instant age calculation, quick age finder, simple age calculator, easy age calculator, fast age calculation, age calculator mobile, age calculator responsive, age calculator app, age calculator website, free online calculator, no registration calculator, accurate date calculation, precise time calculation, calendar age calculation, gregorian calendar age, leap year calculation, daylight saving time, timezone aware, international date format, multiple date formats, date validation, input validation, error handling, user friendly interface, mobile responsive design, clean interface, modern design, accessibility compliant, screen reader friendly, keyboard navigation, WCAG compliant, HTML5 semantic, structured data, SEO optimized, fast loading, lightweight calculator, performance optimized, core web vitals, google lighthouse score, search engine friendly, meta tags optimized, social media sharing, open graph tags, twitter cards, canonical urls, sitemap included, robots txt, google analytics ready, conversion tracking, user engagement tracking, bounce rate optimization, page speed optimization, mobile first design, progressive web app, offline capable, service worker, cache strategy, browser compatibility, cross browser testing, chrome safari firefox edge, android ios compatibility, tablet responsive, desktop responsive, print friendly, PDF download, share results, copy to clipboard, email sharing, whatsapp sharing, telegram sharing, facebook sharing, social media integration, result sharing, calculation history, bookmark results, save calculations, export results, import data, bulk calculations, batch processing, API integration, webhook support, third party integration, developer friendly, customizable, white label, embed calculator, iframe support, widget code, shortcode support, wordpress plugin, blogger integration, website integration, calculator embedding, calculation widget, age widget, birthday widget, date widget, time widget, calendar widget, anniversary calculator, milestone calculator, days until birthday, days since birthday, next birthday, birthday reminder, age milestones, life expectancy, retirement calculator, school age calculator, legal age checker, voting age checker, drinking age checker, senior citizen age, child age calculator, teen age calculator, adult age calculator, elderly age calculator, baby age calculator, infant age calculator, toddler age calculator, preschool age calculator, school age ranges, college age calculator, career age calculator, marriage age calculator, pension age calculator, retirement age planner, life stage calculator, generational calculator, zodiac age calculator, chinese zodiac age, astrological age, birth year finder, generation identifier, boomer calculator, millennial calculator, gen z calculator, gen x calculator, demographic calculator, population age, census age data, statistical age analysis, age demographics, age distribution, age groups, age brackets, age categories, age classification, age segmentation, age targeting, marketing age groups, advertising demographics, age based products, age appropriate content, age verification system, age gate, parental controls, child safety, age restrictions, age limits, minimum age requirements, maximum age limits, age eligibility, age qualifications, age criteria, age standards, age policies, age regulations, age compliance, age documentation, age proof, age certificates, birth certificates, identity verification, document validation, official age calculation, legal age determination, court approved calculator, certified age calculator, notarized age proof, sworn age statement, affidavit age, age authentication, biometric age, facial age detection, AI age estimation, machine learning age, computer vision age, photo age analysis, image age recognition, automated age detection, age verification API, age checking service, age validation system'
        };
      case '/calculators/bmi':
        return {
          title: 'BMI Calculator - Body Mass Index Calculator Free Online | PineappleHub',
          description: 'Calculate your BMI (Body Mass Index) for free. Check if you\'re underweight, normal, overweight or obese. Includes BMI chart and health recommendations.',
          keywords: 'BMI calculator, body mass index, weight calculator, height weight calculator, obesity calculator, BMI chart, healthy weight, overweight calculator'
        };
      case '/calculators/emi':
        return {
          title: 'EMI Calculator - Loan EMI Calculator Online Free | PineappleHub',
          description: 'Calculate your loan EMI instantly. Home loan, car loan, personal loan EMI calculator with amortization schedule. Compare interest rates and tenure.',
          keywords: 'EMI calculator, loan calculator, home loan EMI, car loan EMI, personal loan calculator, mortgage calculator, interest calculator, loan EMI'
        };
      default:
        return {
          title: 'PineappleHub - Free Online Calculators for Everyone',
          description: 'Free online calculators for age, BMI, EMI, GST, income tax, SIP, mutual funds & more. Fast, accurate & mobile-friendly calculation tools for daily use.',
          keywords: 'online calculators, free calculators, age calculator, BMI calculator, EMI calculator, GST calculator, income tax calculator, SIP calculator, mutual fund calculator, percentage calculator, compound interest calculator, loan calculator, mortgage calculator, finance calculators, health calculators, math calculators, business calculators, investment calculators, retirement calculators, education calculators, conversion calculators, date calculators, time calculators, scientific calculators, engineering calculators, construction calculators, real estate calculators, insurance calculators, salary calculators, tax calculators, budget calculators, savings calculators, debt calculators, credit calculators, banking calculators, financial planning, wealth management, investment planning, retirement planning, tax planning, loan planning, mortgage planning, insurance planning, education funding, emergency fund, goal planning, budget planning, expense tracking, income tracking, net worth calculation, cash flow analysis, break even analysis, ROI calculation, profit margin, cost analysis, price comparison, discount calculation, markup calculation, currency conversion, unit conversion, measurement conversion, temperature conversion, weight conversion, length conversion, area conversion, volume conversion, speed conversion, pressure conversion, energy conversion, power conversion, data conversion, time zone conversion, date format conversion, number base conversion, fraction calculator, decimal calculator, percentage calculator, ratio calculator, proportion calculator, statistics calculator, probability calculator, algebra calculator, geometry calculator, trigonometry calculator, calculus calculator, physics calculator, chemistry calculator, biology calculator, medical calculator, pharmacy calculator, dosage calculator, nutrition calculator, calorie calculator, diet calculator, fitness calculator, exercise calculator, sports calculator, game calculator, puzzle solver, quiz calculator, grade calculator, GPA calculator, exam calculator, score calculator, ranking calculator, rating calculator'
        };
    }
  };

  const { title, description, keywords } = getPageMeta();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PineappleHub Calculator",
    "description": description,
    "url": currentUrl,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PineappleHub",
      "url": "https://pineapplehub.com"
    },
    "creator": {
      "@type": "Organization",
      "name": "PineappleHub"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "isAccessibleForFree": true,
    "browserRequirements": "Requires JavaScript"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="author" content="PineappleHub" />
      <meta name="publisher" content="PineappleHub" />
      <meta name="copyright" content="© 2024 PineappleHub. All rights reserved." />
      <meta name="theme-color" content="#ffffff" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://pineapplehub.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="PineappleHub - Free Online Calculators" />
      <meta property="og:site_name" content="PineappleHub" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://pineapplehub.com/og-image.jpg" />
      <meta name="twitter:image:alt" content="PineappleHub - Free Online Calculators" />
      <meta name="twitter:creator" content="@PineappleHub" />
      <meta name="twitter:site" content="@PineappleHub" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PineappleHub" />
      <meta name="application-name" content="PineappleHub" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to improve performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Performance Hints */}
      <link rel="preload" as="style" href="/src/index.css" />
      <link rel="prefetch" href="/calculators/age" />
      <link rel="prefetch" href="/calculators/bmi" />
      <link rel="prefetch" href="/calculators/emi" />
    </Helmet>
  );
};

export default SEO;
