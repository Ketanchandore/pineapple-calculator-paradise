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
    'disclaimer': 'Disclaimer'
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
          "item": "https://pineapplehub.com/"
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
        "item": `https://pineapplehub.com${routeTo}`
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
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 bg-card px-4 py-2 rounded-lg border">
        <Link
          to="/"
          className="flex items-center hover:text-primary transition-colors"
          aria-label="Home"
        >
          <Home className="h-4 w-4" />
        </Link>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <div key={name} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-primary transition-colors"
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