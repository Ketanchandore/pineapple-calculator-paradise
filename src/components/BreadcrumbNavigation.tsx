import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    'calculators': 'Calculators',
    'age': 'Age Calculator',
    'bmi': 'BMI Calculator', 
    'emi': 'EMI Calculator',
    'sip': 'SIP Calculator',
    'compound-interest': 'Compound Interest Calculator',
    'home-loan': 'Home Loan Calculator',
    'percentage': 'Percentage Calculator',
    'date': 'Date Calculator',
    'calorie': 'Calorie Calculator',
    'days': 'Days Calculator',
    'gst': 'GST Calculator',
    'income-tax': 'Income Tax Calculator',
    'loan': 'Loan Calculator',
    'mutual-fund': 'Mutual Fund Calculator',
    'nps': 'NPS Calculator',
    'fd': 'FD Calculator',
    'swp': 'SWP Calculator',
    'home-loan-emi': 'Home Loan EMI Calculator',
    'pregnancy': 'Pregnancy Calculator',
    'fertilizer': 'Fertilizer Calculator',
    'ecommerce': 'E-commerce Calculator',
    'about': 'About Us',
    'contact': 'Contact',
    'privacy-policy': 'Privacy Policy',
    'terms-of-service': 'Terms of Service',
    'disclaimer': 'Disclaimer',
    'calculator-guide': 'Calculator Guide',
    'compare-calculators': 'Compare Calculators',
    'blog': 'Blog',
    'finance-calculators': 'Finance Calculators',
    'health-calculators': 'Health Calculators',
    'math-calculators': 'Math Calculators',
  };

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  const generateStructuredData = () => {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pineapple-calculator-paradise.lovable.app/"
        }
      ]
    };

    pathnames.forEach((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const displayName = breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
      
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": displayName,
        "item": `https://pineapple-calculator-paradise.lovable.app${routeTo}`
      });
    });

    return breadcrumbList;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      <nav className="flex items-center flex-wrap gap-2 text-sm glass-button px-4 py-2.5 rounded-xl">
        <Link
          to="/"
          className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-target"
          aria-label="Home"
        >
          <Home className="h-4 w-4" />
        </Link>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <div key={name} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default BreadcrumbNavigation;
