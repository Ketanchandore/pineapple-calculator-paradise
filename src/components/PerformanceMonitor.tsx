import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Send to analytics (implement when you have GA tracking ID)
      console.log(metric);
    };

    // Core Web Vitals observer
    const observeWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            reportWebVitals({
              name: 'LCP',
              value: entry.startTime,
              url: window.location.href
            });
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as any;
            reportWebVitals({
              name: 'FID',
              value: fidEntry.processingStart - fidEntry.startTime,
              url: window.location.href
            });
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          }
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            url: window.location.href
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      }
    };

    // Start monitoring after page load
    if (document.readyState === 'complete') {
      observeWebVitals();
    } else {
      window.addEventListener('load', observeWebVitals);
    }

    return () => {
      window.removeEventListener('load', observeWebVitals);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;