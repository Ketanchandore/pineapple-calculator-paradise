
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = "calculator, online calculator, free tools",
  canonicalUrl,
  ogImage = "https://pineapplehub.com/og-image.jpg",
  type = "website"
}: SEOHeadProps) => {
  const fullTitle = title.includes('PineappleHub') ? title : `${title} | PineappleHub`;
  const url = canonicalUrl || `https://pineapplehub.com${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
