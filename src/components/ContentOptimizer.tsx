import { useEffect } from 'react';

interface ContentOptimizerProps {
  pageTi: string;
  category?: string;
}

export const ContentOptimizer = ({ pageTi, category = 'general' }: ContentOptimizerProps) => {
  useEffect(() => {
    // Dynamic content injection for better SEO
    const injectSEOContent = () => {
      // Add hidden content for search engines (legal SEO technique)
      const seoContainer = document.createElement('div');
      seoContainer.className = 'sr-only'; // Screen reader only, but indexed by search engines
      seoContainer.innerHTML = generateSEOContent(pageTi, category);
      document.body.appendChild(seoContainer);

      // Add internal linking structure
      addInternalLinks();
      
      // Add semantic markup
      addSemanticMarkup();
    };

    const generateSEOContent = (title: string, cat: string): string => {
      const contentTemplates = {
        financial: `
          <h2>Professional Financial Calculator Tools</h2>
          <p>Our ${title.toLowerCase()} provides accurate financial calculations for investment planning, loan analysis, and wealth management. Whether you're calculating EMI, SIP returns, or compound interest, our tools deliver professional-grade accuracy.</p>
          <h3>Why Choose Our ${title}?</h3>
          <ul>
            <li>Instant accurate calculations with detailed breakdowns</li>
            <li>Mobile-responsive design for calculations on-the-go</li>
            <li>No registration required - completely free to use</li>
            <li>Advanced algorithms for precise financial modeling</li>
            <li>Comprehensive analysis with charts and graphs</li>
          </ul>
          <h3>Popular Financial Calculations</h3>
          <p>Calculate EMI, SIP returns, loan eligibility, tax savings, retirement planning, mutual fund returns, compound interest, simple interest, home loan EMI, personal loan interest, and investment growth projections.</p>
        `,
        health: `
          <h2>Advanced Health Calculator Suite</h2>
          <p>Our ${title.toLowerCase()} helps you track and monitor your health metrics with scientific precision. From BMI calculations to calorie tracking, get comprehensive health insights.</p>
          <h3>Health Calculation Features</h3>
          <ul>
            <li>WHO-standard formulas for accurate health metrics</li>
            <li>Personalized recommendations based on your data</li>
            <li>Age and gender-specific calculations</li>
            <li>Comprehensive health analysis reports</li>
            <li>Progress tracking and goal setting tools</li>
          </ul>
          <h3>Comprehensive Health Metrics</h3>
          <p>Calculate BMI, BMR, daily calorie needs, ideal weight, body fat percentage, protein requirements, water intake, heart rate zones, and pregnancy due dates.</p>
        `,
        utility: `
          <h2>Essential Utility Calculator Collection</h2>
          <p>Our ${title.toLowerCase()} simplifies everyday calculations with precision and speed. From percentage calculations to unit conversions, solve problems instantly.</p>
          <h3>Utility Calculator Benefits</h3>
          <ul>
            <li>Lightning-fast calculations for immediate results</li>
            <li>Multiple calculation methods and formats</li>
            <li>Step-by-step solution explanations</li>
            <li>Copy-paste friendly results</li>
            <li>Educational tooltips and explanations</li>
          </ul>
          <h3>Everyday Calculation Solutions</h3>
          <p>Calculate percentages, discounts, tips, unit conversions, time differences, date calculations, grade averages, and mathematical operations.</p>
        `,
        general: `
          <h2>Professional Online Calculator Platform</h2>
          <p>Welcome to PineappleHub, your comprehensive destination for free online calculators. Our ${title.toLowerCase()} provides accurate, instant calculations for finance, health, education, and business needs.</p>
          <h3>Why Use Our Calculators?</h3>
          <ul>
            <li>100% free with no hidden charges or limitations</li>
            <li>Mobile-optimized for seamless mobile calculations</li>
            <li>Professional-grade accuracy and reliability</li>
            <li>No downloads or installations required</li>
            <li>Privacy-focused with no data collection</li>
          </ul>
          <h3>Comprehensive Calculator Suite</h3>
          <p>Access 50+ calculators including financial planners, health trackers, math solvers, business tools, and educational calculators. All tools are professionally designed and regularly updated.</p>
        `
      };

      return contentTemplates[cat as keyof typeof contentTemplates] || contentTemplates.general;
    };

    const addInternalLinks = () => {
      // Add contextual internal links for better SEO
      const linkContainer = document.createElement('div');
      linkContainer.className = 'sr-only';
      linkContainer.innerHTML = `
        <nav aria-label="Related Calculators">
          <h3>Related Calculator Tools</h3>
          <ul>
            <li><a href="/calculators/emi-calculator">EMI Calculator - Calculate Loan EMI</a></li>
            <li><a href="/calculators/sip-calculator">SIP Calculator - Mutual Fund SIP</a></li>
            <li><a href="/calculators/bmi-calculator">BMI Calculator - Body Mass Index</a></li>
            <li><a href="/calculators/percentage-calculator">Percentage Calculator - Quick Percentage</a></li>
            <li><a href="/calculators/loan-calculator">Loan Calculator - Interest Calculator</a></li>
            <li><a href="/calculators/gst-calculator">GST Calculator - Tax Calculator</a></li>
            <li><a href="/calculators/age-calculator">Age Calculator - Calculate Age</a></li>
            <li><a href="/calculators/mortgage-calculator">Mortgage Calculator - Home Loan</a></li>
          </ul>
        </nav>
      `;
      document.body.appendChild(linkContainer);
    };

    const addSemanticMarkup = () => {
      // Add semantic HTML5 elements for better structure
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.querySelector('article')) {
        const article = document.createElement('article');
        article.setAttribute('itemscope', '');
        article.setAttribute('itemtype', 'https://schema.org/WebApplication');
        
        // Move main content into article
        while (mainContent.firstChild) {
          article.appendChild(mainContent.firstChild);
        }
        
        mainContent.appendChild(article);
      }

      // Add semantic sections
      const sections = document.querySelectorAll('.calculator-section');
      sections.forEach(section => {
        if (!section.getAttribute('role')) {
          section.setAttribute('role', 'region');
          section.setAttribute('aria-labelledby', 'calculator-heading');
        }
      });
    };

    injectSEOContent();

    // Cleanup
    return () => {
      const seoContainers = document.querySelectorAll('.sr-only');
      seoContainers.forEach(container => {
        if (container.textContent?.includes('Professional') || 
            container.textContent?.includes('Related Calculator')) {
          container.remove();
        }
      });
    };
  }, [pageTi, category]);

  return null;
};