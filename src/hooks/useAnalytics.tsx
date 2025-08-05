
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics event tracking hook
export const useAnalytics = () => {
  const location = useLocation();

  // Track page views automatically
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  // Track calculator usage
  const trackCalculatorUse = useCallback((calculatorType: string, action: string = 'calculate') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'Calculator',
        event_label: calculatorType,
        value: 1,
      });
    }
  }, []);

  // Track result sharing
  const trackShare = useCallback((platform: string, calculatorType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share', {
        method: platform,
        content_type: 'calculator_result',
        content_id: calculatorType,
      });
    }
  }, []);

  // Track downloads
  const trackDownload = useCallback((type: string, calculatorType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_download', {
        event_category: 'Download',
        event_label: `${calculatorType}_${type}`,
        file_extension: type,
      });
    }
  }, []);

  // Track user engagement
  const trackEngagement = useCallback((action: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'Engagement',
        value: value || 1,
      });
    }
  }, []);

  return {
    trackCalculatorUse,
    trackShare,
    trackDownload,
    trackEngagement,
  };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
