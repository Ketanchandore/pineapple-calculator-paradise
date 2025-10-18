import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, DollarSign, Heart, Percent, FileText, Shield, Mail, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sitemap = () => {
  const sections = [
    {
      title: "Finance Calculators",
      icon: DollarSign,
      links: [
        { name: "SIP Calculator", path: "/calculators/sip" },
        { name: "EMI Calculator", path: "/calculators/emi" },
        { name: "Home Loan Calculator", path: "/calculators/home-loan" },
        { name: "Home Loan EMI Calculator", path: "/calculators/home-loan-emi" },
        { name: "Loan Calculator", path: "/calculators/loan" },
        { name: "Mortgage Calculator", path: "/calculators/mortgage" },
        { name: "Compound Interest Calculator", path: "/calculators/compound-interest" },
        { name: "Income Tax Calculator", path: "/calculators/income-tax" },
        { name: "GST Calculator", path: "/calculators/gst" },
        { name: "Mutual Fund Calculator", path: "/calculators/mutual-fund" },
        { name: "FD Calculator", path: "/calculators/fd" },
        { name: "SWP Calculator", path: "/calculators/swp" },
        { name: "NPS Calculator", path: "/calculators/nps" },
      ]
    },
    {
      title: "Health & Fitness Calculators",
      icon: Heart,
      links: [
        { name: "BMI Calculator", path: "/calculators/bmi" },
        { name: "BMR Calculator", path: "/calculators/bmr" },
        { name: "Calorie Calculator", path: "/calculators/calorie" },
        { name: "Pregnancy Calculator", path: "/calculators/pregnancy" },
        { name: "Age Calculator", path: "/calculators/age" },
      ]
    },
    {
      title: "Math & Utility Calculators",
      icon: Calculator,
      links: [
        { name: "Percentage Calculator", path: "/calculators/percentage" },
        { name: "Scientific Calculator", path: "/calculators/scientific" },
        { name: "Date Calculator", path: "/calculators/date" },
        { name: "Days Calculator", path: "/calculators/days" },
        { name: "Currency Calculator", path: "/calculators/currency" },
        { name: "Fertilizer Calculator", path: "/calculators/fertilizer" },
        { name: "E-Commerce Calculator", path: "/calculators/ecommerce" },
      ]
    },
    {
      title: "Category Pages",
      icon: Percent,
      links: [
        { name: "Finance Calculators", path: "/finance-calculators" },
        { name: "Health Calculators", path: "/health-calculators" },
        { name: "Math Calculators", path: "/math-calculators" },
      ]
    },
    {
      title: "Company Pages",
      icon: Info,
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ]
    },
    {
      title: "Legal Pages",
      icon: Shield,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Disclaimer", path: "/disclaimer" },
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Sitemap - All Calculator Tools | Pineapple Calculator Paradise"
        description="Complete sitemap of all free online calculators including finance, health, math, and utility tools. Easy navigation to find the perfect calculator for your needs."
        keywords="sitemap, all calculators, calculator directory, finance calculators, health calculators, math calculators"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/sitemap"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Site Map
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse all our free online calculators and pages organized by category. 
                Find exactly what you need quickly and easily.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon className="w-5 h-5 text-primary" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              to={link.path}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-2 group"
                            >
                              <span className="text-primary mt-0.5">→</span>
                              <span className="group-hover:underline">{link.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? We're constantly adding new calculators!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <Mail className="w-4 h-4" />
                Contact us with your suggestions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
