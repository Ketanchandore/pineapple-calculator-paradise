import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, DollarSign, PiggyBank, Home, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FinanceCalculators = () => {
  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate your Systematic Investment Plan returns, wealth creation, and maturity value with accurate projections.",
      icon: TrendingUp,
      link: "/calculators/sip",
      category: "Investment"
    },
    {
      title: "EMI Calculator",
      description: "Calculate loan EMI, total interest payable, and repayment schedule for all types of loans instantly.",
      icon: CreditCard,
      link: "/calculators/emi",
      category: "Loan"
    },
    {
      title: "Home Loan Calculator",
      description: "Calculate your home loan EMI, total interest, and repayment schedule for housing loans.",
      icon: Home,
      link: "/calculators/home-loan",
      category: "Loan"
    },
    {
      title: "Compound Interest Calculator",
      description: "Calculate compound interest on your investments and see how your money grows over time.",
      icon: PiggyBank,
      link: "/calculators/compound-interest",
      category: "Investment"
    },
    {
      title: "Income Tax Calculator",
      description: "Calculate your income tax liability, compare old vs new tax regime, and plan tax savings.",
      icon: DollarSign,
      link: "/calculators/income-tax",
      category: "Tax"
    },
    {
      title: "GST Calculator",
      description: "Calculate GST inclusive, exclusive amounts with complete tax breakdowns for India.",
      icon: Calculator,
      link: "/calculators/gst",
      category: "Tax"
    },
    {
      title: "Mutual Fund Calculator",
      description: "Estimate mutual fund returns, SIP growth, and wealth creation with lumpsum and SIP options.",
      icon: TrendingUp,
      link: "/calculators/mutual-fund",
      category: "Investment"
    },
    {
      title: "FD Calculator",
      description: "Calculate fixed deposit maturity amount, returns, and interest earnings instantly.",
      icon: PiggyBank,
      link: "/calculators/fd",
      category: "Investment"
    },
    {
      title: "SWP Calculator",
      description: "Calculate Systematic Withdrawal Plan monthly withdrawals and remaining corpus.",
      icon: DollarSign,
      link: "/calculators/swp",
      category: "Investment"
    },
    {
      title: "NPS Calculator",
      description: "Project your National Pension Scheme corpus and monthly pension after retirement.",
      icon: PiggyBank,
      link: "/calculators/nps",
      category: "Retirement"
    },
    {
      title: "Loan Calculator",
      description: "Calculate loan EMI, monthly payments, total interest, and repayment schedules.",
      icon: CreditCard,
      link: "/calculators/loan",
      category: "Loan"
    },
    {
      title: "Mortgage Calculator",
      description: "Calculate mortgage payments, interest costs, and amortization schedule.",
      icon: Home,
      link: "/calculators/mortgage",
      category: "Loan"
    }
  ];

  return (
    <>
      <SEOHead
        title="Finance Calculators - Free Financial Planning Tools | Pineapple Calculator Paradise"
        description="Free online financial calculators for loans, investments, taxes, and retirement planning. Calculate EMI, SIP returns, income tax, GST, and more with accurate results."
        keywords="finance calculators, loan calculator, EMI calculator, SIP calculator, income tax calculator, GST calculator, investment calculator, mutual fund calculator"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/finance-calculators"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">

          <div className="max-w-6xl mx-auto mt-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Finance Calculators - Free Online Tools
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Make informed financial decisions with our comprehensive collection of free calculators. 
                Whether you're planning investments, calculating loan EMIs, or managing taxes, our tools 
                provide accurate results to help you achieve your financial goals.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
              <p>
                Our finance calculators are designed to simplify complex financial calculations and help you 
                make better money decisions. From retirement planning with NPS and SIP calculators to managing 
                loans with EMI and mortgage calculators, we provide the tools you need for comprehensive 
                financial planning.
              </p>
              <p>
                All our financial calculators use industry-standard formulas and are regularly updated to 
                reflect current tax laws and regulations. Calculate loan repayments, investment returns, 
                tax liabilities, and retirement corpus with confidence. Our tools are trusted by financial 
                advisors, professionals, and individuals for accurate financial projections.
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
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Use Our Finance Calculators?</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>100% Free:</strong> All calculators completely free with no hidden charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Accurate Results:</strong> Industry-standard formulas for precise calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Instant Calculations:</strong> Get results in seconds without registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Mobile Friendly:</strong> Works seamlessly on all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Regularly Updated:</strong> Tax rates and regulations kept current</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Privacy Focused:</strong> Your financial data stays on your device</span>
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

export default FinanceCalculators;
