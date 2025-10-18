import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, Percent, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MathCalculators = () => {
  const calculators = [
    {
      title: "Percentage Calculator",
      description: "Calculate percentage increase, decrease, change, and ratio with instant accurate results.",
      icon: Percent,
      link: "/calculators/percentage",
      category: "Math"
    },
    {
      title: "Scientific Calculator",
      description: "Advanced scientific calculator with trigonometric, logarithmic, and exponential functions.",
      icon: Calculator,
      link: "/calculators/scientific",
      category: "Math"
    },
    {
      title: "Date Calculator",
      description: "Calculate date differences, add/subtract days, and find exact duration between dates.",
      icon: Calendar,
      link: "/calculators/date",
      category: "Utility"
    },
    {
      title: "Days Calculator",
      description: "Calculate number of days between two dates, including business days and weekends.",
      icon: Calendar,
      link: "/calculators/days",
      category: "Utility"
    }
  ];

  return (
    <>
      <SEOHead
        title="Math Calculators - Free Algebra, Geometry & More | Pineapple Calculator Paradise"
        description="Free online math calculators for percentage, scientific calculations, date calculations, and more. Fast, accurate mathematical tools for students and professionals."
        keywords="math calculators, percentage calculator, scientific calculator, date calculator, mathematical tools, algebra calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/math-calculators"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">

          <div className="max-w-6xl mx-auto mt-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Math Calculators - Free Online Tools
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Simplify complex mathematical calculations with our free online math calculators. From basic 
                percentage calculations to advanced scientific functions, our tools help students, teachers, 
                and professionals solve math problems quickly and accurately.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
              <p>
                Our math calculators are designed to make mathematical calculations simple and accessible for 
                everyone. Whether you're a student working on homework, a teacher creating assignments, or a 
                professional needing quick calculations, our tools provide instant, accurate results for all 
                your mathematical needs.
              </p>
              <p>
                From percentage calculations for everyday use to advanced scientific calculations for complex 
                problems, our calculators use proven mathematical formulas and algorithms. All tools are free, 
                require no registration, and work seamlessly on any device. Trusted by millions of students 
                and professionals worldwide for reliable mathematical computations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calc, index) => {
                const Icon = calc.icon;
                return (
                  <Link key={index} to={calc.link}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {calc.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {calc.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {calc.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Use Our Math Calculators?</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Mathematically Accurate:</strong> Proven formulas and algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Completely Free:</strong> No charges, ads, or hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Step-by-Step Solutions:</strong> Understand how calculations work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Fast Results:</strong> Instant calculations without delays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Cross-Platform:</strong> Works on desktop, tablet, and mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Educational:</strong> Learn while you calculate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MathCalculators;
