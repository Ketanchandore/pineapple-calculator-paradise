
import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics: React.FC = () => {
  // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </script>
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
      
      {/* Microsoft Bing Webmaster */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      
      {/* Yandex Webmaster */}
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
    </Helmet>
  );
};

export default GoogleAnalytics;
