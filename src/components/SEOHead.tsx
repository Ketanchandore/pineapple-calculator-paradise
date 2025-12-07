import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
  structuredData?: any | any[];
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = "calculator, online calculator, free tools, financial calculator, health calculator, date calculator, percentage calculator, BMI calculator, EMI calculator, SIP calculator",
  canonicalUrl,
  ogImage = "https://pineapple-calculator-paradise.lovable.app/og-image.jpg",
  type = "website",
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = title.includes('PineappleHub') ? title : `${title} | PineappleHub`;
  const baseUrl = 'https://pineapple-calculator-paradise.lovable.app';
  const url = canonicalUrl || `${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : '/'}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PineappleHub" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="geo.region" content="US" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PineappleHub" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Mobile */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data: any, i: number) => (
            <script key={`sd-${i}`} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        )
      )}
    </Helmet>
  );
};
