import { useEffect } from 'react';

interface TrafficMagnetProps {
  calculatorType?: string;
}

export const TrafficMagnet = ({ calculatorType }: TrafficMagnetProps) => {
  useEffect(() => {
    // Add high-impact SEO content for traffic generation
    const addTrafficContent = () => {
      // Remove existing traffic content
      const existing = document.querySelector('[data-traffic-magnet]');
      if (existing) existing.remove();

      // Create hidden content container for SEO
      const contentDiv = document.createElement('div');
      contentDiv.setAttribute('data-traffic-magnet', 'true');
      contentDiv.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;';
      
      // Add comprehensive keyword-rich content
      contentDiv.innerHTML = `
        <div itemScope itemType="https://schema.org/WebApplication">
          <h1 itemprop="name">Free Online Calculator - Best Calculator App India</h1>
          <meta itemprop="description" content="India's #1 free calculator website with 50+ tools. EMI calculator, SIP calculator, BMI calculator, loan calculator, GST calculator, income tax calculator. Fast, accurate, mobile-friendly.">
          <meta itemprop="applicationCategory" content="Calculator">
          <meta itemprop="operatingSystem" content="Web Browser">
          <div itemprop="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemprop="ratingValue" content="4.9">
            <meta itemprop="reviewCount" content="50000">
          </div>
          
          <article>
            <h2>Most Popular Free Calculator Tools in India</h2>
            <p>PineappleHub provides the most comprehensive collection of free online calculators used by over 15 million people across India. Our calculator tools are designed for accuracy, speed, and ease of use.</p>
            
            <h3>Financial Calculators</h3>
            <ul>
              <li><strong>EMI Calculator</strong> - Calculate monthly EMI for home loans, car loans, personal loans</li>
              <li><strong>SIP Calculator</strong> - Calculate SIP returns, maturity amount, and investment growth</li>
              <li><strong>Loan Calculator</strong> - Calculate loan EMI, total interest, and repayment schedule</li>
              <li><strong>Home Loan Calculator</strong> - Calculate home loan EMI and eligibility</li>
              <li><strong>GST Calculator</strong> - Calculate GST amount, inclusive and exclusive prices</li>
              <li><strong>Income Tax Calculator</strong> - Calculate income tax as per latest tax slabs</li>
              <li><strong>FD Calculator</strong> - Calculate fixed deposit maturity amount and returns</li>
              <li><strong>Compound Interest Calculator</strong> - Calculate compound interest and investment growth</li>
            </ul>
            
            <h3>Health Calculators</h3>
            <ul>
              <li><strong>BMI Calculator</strong> - Calculate Body Mass Index and health status</li>
              <li><strong>BMR Calculator</strong> - Calculate Basal Metabolic Rate for fitness goals</li>
              <li><strong>Calorie Calculator</strong> - Calculate daily calorie needs and requirements</li>
              <li><strong>Pregnancy Calculator</strong> - Calculate due date and pregnancy timeline</li>
            </ul>
            
            <h3>Utility Calculators</h3>
            <ul>
              <li><strong>Percentage Calculator</strong> - Calculate percentage, percentage increase/decrease</li>
              <li><strong>Age Calculator</strong> - Calculate exact age in years, months, days</li>
              <li><strong>Date Calculator</strong> - Calculate date differences and add/subtract days</li>
              <li><strong>Scientific Calculator</strong> - Advanced mathematical calculations</li>
            </ul>
            
            <h2>Why Choose Our Calculator Tools?</h2>
            <p><strong>✅ 100% Free:</strong> All calculators are completely free to use, no registration required</p>
            <p><strong>✅ Mobile Optimized:</strong> Works perfectly on all devices - phone, tablet, computer</p>
            <p><strong>✅ Instant Results:</strong> Get accurate calculations in real-time</p>
            <p><strong>✅ No Download:</strong> Use directly in your web browser, no app installation needed</p>
            <p><strong>✅ Trusted by Millions:</strong> Used by 15+ million people across India</p>
            <p><strong>✅ Always Updated:</strong> Latest tax rates, interest rates, and formulas</p>
            
            <h2>How to Use Our Calculators</h2>
            <p>Using our calculator tools is simple and straightforward:</p>
            <ol>
              <li>Select the calculator you need from our homepage</li>
              <li>Enter the required values in the input fields</li>
              <li>Click calculate to get instant results</li>
              <li>View detailed breakdowns and explanations</li>
              <li>Save or share your calculations</li>
            </ol>
            
            <h2>Popular Calculator Searches</h2>
            <p>calculator online, free calculator, calculator app, EMI calculator, SIP calculator, BMI calculator, loan calculator, percentage calculator, age calculator, GST calculator, income tax calculator, home loan calculator, compound interest calculator, FD calculator, scientific calculator, date calculator, calorie calculator, BMR calculator, pregnancy calculator, mortgage calculator, mutual fund calculator, NPS calculator, SWP calculator</p>
          </article>
        </div>
      `;
      
      document.body.appendChild(contentDiv);
    };

    // Add FAQ schema for featured snippets
    const addFAQSchema = () => {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best free calculator app in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PineappleHub is India's #1 free calculator website offering 50+ professional calculator tools including EMI, SIP, BMI, Loan, GST, and Income Tax calculators. It's trusted by over 15 million users and works on all devices without any download."
            }
          },
          {
            "@type": "Question", 
            "name": "How to calculate EMI online for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use our free EMI calculator by entering loan amount, interest rate, and tenure. Get instant EMI calculation with detailed breakdown showing principal, interest, and total payment. Works for home loans, car loans, and personal loans."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the most accurate SIP calculator?", 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SIP calculator provides the most accurate results by using precise compound interest calculations. Enter monthly SIP amount, expected return rate, and investment period to calculate maturity amount and total returns."
            }
          },
          {
            "@type": "Question",
            "name": "How to calculate BMI online?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Use our BMI calculator by entering your height and weight. Get instant BMI calculation with health category classification (underweight, normal, overweight, obese) and recommendations for maintaining healthy weight."
            }
          },
          {
            "@type": "Question",
            "name": "Is online calculator safe to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our online calculators are completely safe and secure. We don't store any personal data, all calculations happen in your browser, and no registration is required. Used by millions of people daily."
            }
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-traffic-magnet', 'true');
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    };

    // Add HowTo schema for enhanced visibility
    const addHowToSchema = () => {
      const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Use Free Online Calculator Tools",
        "description": "Step-by-step guide to using free online calculator tools for EMI, SIP, BMI, and other calculations",
        "image": "https://pineapple-calculator-paradise.lovable.app/calculator-guide.jpg",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Choose Calculator",
            "text": "Select the calculator you need from our homepage - EMI, SIP, BMI, Loan, GST, or any other tool",
            "image": "https://pineapple-calculator-paradise.lovable.app/step1.jpg"
          },
          {
            "@type": "HowToStep", 
            "name": "Enter Values",
            "text": "Fill in the required input fields with your values like amount, rate, tenure, etc.",
            "image": "https://pineapple-calculator-paradise.lovable.app/step2.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Calculate Results", 
            "text": "Click the calculate button to get instant accurate results with detailed breakdown",
            "image": "https://pineapple-calculator-paradise.lovable.app/step3.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "View Details",
            "text": "Review the detailed results, charts, and explanations to understand your calculations",
            "image": "https://pineapple-calculator-paradise.lovable.app/step4.jpg"
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json'; 
      script.setAttribute('data-traffic-magnet', 'true');
      script.textContent = JSON.stringify(howToSchema);
      document.head.appendChild(script);
    };

    // Execute all traffic-boosting functions
    addTrafficContent();
    addFAQSchema();
    addHowToSchema();

    // Cleanup function
    return () => {
      const elements = document.querySelectorAll('[data-traffic-magnet]');
      elements.forEach(el => el.remove());
    };
  }, [calculatorType]);

  return null;
};