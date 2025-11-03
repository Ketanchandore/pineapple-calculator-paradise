import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const CompareCalculators = () => {
  const comparisons = [
    {
      title: "SIP vs FD: Which is Better for Investment?",
      subtitle: "Compare returns, risks, and benefits",
      features: [
        { feature: "Expected Returns", sip: "12-15% annually", fd: "5-7% annually", winner: "sip" },
        { feature: "Risk Level", sip: "Market-linked", fd: "Zero risk", winner: "fd" },
        { feature: "Lock-in Period", sip: "None (ELSS 3 years)", fd: "1-10 years", winner: "sip" },
        { feature: "Tax Benefits", sip: "₹1.5L under 80C", fd: "₹1.5L under 80C", winner: "both" },
        { feature: "Liquidity", sip: "High (can withdraw)", fd: "Low (penalty on early withdrawal)", winner: "sip" },
        { feature: "Inflation Beat", sip: "Yes", fd: "No", winner: "sip" }
      ],
      verdict: "SIP is better for long-term wealth creation, FD is better for capital protection",
      links: [
        { text: "Try SIP Calculator", to: "/calculators/sip" },
        { text: "Try FD Calculator", to: "/calculators/fd" }
      ]
    },
    {
      title: "EMI vs Home Loan: What's the Difference?",
      subtitle: "Understand loan types and choose wisely",
      features: [
        { feature: "Purpose", sip: "Any loan type", fd: "Specific to housing", winner: "both" },
        { feature: "Interest Rate", sip: "Varies by loan", fd: "Lower (7-8%)", winner: "fd" },
        { feature: "Loan Amount", sip: "Depends on type", fd: "Up to ₹5 Cr+", winner: "fd" },
        { feature: "Tax Benefits", sip: "None", fd: "₹2L on interest (80EEA)", winner: "fd" },
        { feature: "Repayment Period", sip: "1-7 years typically", fd: "Up to 30 years", winner: "fd" },
        { feature: "Processing Time", sip: "Fast approval", fd: "Longer (property verification)", winner: "sip" }
      ],
      verdict: "Home loans offer better rates and tax benefits for property purchase",
      links: [
        { text: "Try EMI Calculator", to: "/calculators/emi" },
        { text: "Try Home Loan Calculator", to: "/calculators/home-loan" }
      ]
    },
    {
      title: "BMI vs BMR: Which Calculator Should I Use?",
      subtitle: "Understand the difference for weight management",
      features: [
        { feature: "What it Measures", sip: "Weight vs Height ratio", fd: "Calories burned at rest", winner: "both" },
        { feature: "Purpose", sip: "Obesity classification", fd: "Daily calorie needs", winner: "both" },
        { feature: "Accuracy", sip: "General indicator", fd: "More personalized", winner: "fd" },
        { feature: "Best For", sip: "Quick health check", fd: "Diet planning", winner: "both" },
        { feature: "Factors Used", sip: "Height, Weight", fd: "Height, Weight, Age, Gender", winner: "fd" },
        { feature: "Result Type", sip: "Category (Normal, Overweight)", fd: "Calorie number", winner: "both" }
      ],
      verdict: "Use BMI for quick health assessment, BMR for detailed calorie planning",
      links: [
        { text: "Try BMI Calculator", to: "/calculators/bmi" },
        { text: "Try BMR Calculator", to: "/calculators/bmr" }
      ]
    },
    {
      title: "Old Tax Regime vs New Tax Regime",
      subtitle: "Calculate which regime saves you more tax",
      features: [
        { feature: "Tax Rates", sip: "Higher slabs, many deductions", fd: "Lower slabs, fewer deductions", winner: "depends" },
        { feature: "80C Benefit", sip: "₹1.5L deduction", fd: "Not available", winner: "sip" },
        { feature: "Standard Deduction", sip: "₹50,000", fd: "₹50,000", winner: "both" },
        { feature: "HRA Exemption", sip: "Available", fd: "Not available", winner: "sip" },
        { feature: "Simplicity", sip: "Complex with docs", fd: "Simple, no proof needed", winner: "fd" },
        { feature: "Best For", sip: "High deductions", fd: "No deductions", winner: "depends" }
      ],
      verdict: "Old regime better if you have deductions, new regime better for simple tax filing",
      links: [
        { text: "Try Income Tax Calculator", to: "/calculators/income-tax" }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Compare Calculators - SIP vs FD, EMI vs Loan | Calculator Comparison"
        description="Compare calculators side-by-side. SIP vs FD, BMI vs BMR, Old vs New Tax Regime, EMI vs Home Loan. Make informed decisions with detailed comparisons."
        keywords="calculator comparison, sip vs fd, bmi vs bmr, tax regime comparison, emi vs home loan, investment comparison, calculator guide"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/compare-calculators"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ⚖️ Calculator Comparisons
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare different calculators side-by-side. Understand differences, benefits, and choose the right tool for your needs.
            </p>
          </div>

          {/* Comparisons */}
          {comparisons.map((comparison, index) => (
            <Card key={index} className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{comparison.title}</CardTitle>
                <p className="text-muted-foreground">{comparison.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Feature</th>
                        <th className="text-center p-3 font-semibold">Option 1</th>
                        <th className="text-center p-3 font-semibold">Option 2</th>
                        <th className="text-center p-3 font-semibold">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.features.map((item, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-3 font-medium">{item.feature}</td>
                          <td className={`p-3 text-center ${item.winner === 'sip' || item.winner === 'both' ? 'bg-green-50 font-semibold' : ''}`}>
                            {item.sip}
                          </td>
                          <td className={`p-3 text-center ${item.winner === 'fd' || item.winner === 'both' ? 'bg-green-50 font-semibold' : ''}`}>
                            {item.fd}
                          </td>
                          <td className="p-3 text-center">
                            {item.winner === 'sip' && <Check className="w-5 h-5 text-green-600 mx-auto" />}
                            {item.winner === 'fd' && <Check className="w-5 h-5 text-green-600 mx-auto" />}
                            {item.winner === 'both' && <span className="text-blue-600 font-semibold">Both</span>}
                            {item.winner === 'depends' && <span className="text-orange-600 text-sm">Depends</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-3">Verdict:</p>
                  <p className="text-blue-800">{comparison.verdict}</p>
                </div>

                <div className="mt-4 flex gap-3 flex-wrap">
                  {comparison.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.to}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* SEO Content */}
          <article className="prose prose-lg max-w-none mt-12">
            <h2>Why Compare Calculators?</h2>
            <p>
              Choosing the right calculator for your specific need can save you time and help you make better decisions. Our comparison guides help you understand:
            </p>
            <ul>
              <li>Key differences between similar calculators</li>
              <li>Which calculator is best for your situation</li>
              <li>Benefits and limitations of each tool</li>
              <li>When to use which calculator</li>
            </ul>

            <h2>Popular Calculator Comparisons</h2>
            
            <h3>Financial Calculator Comparisons</h3>
            <p>
              <strong>SIP vs FD vs PPF:</strong> Compare returns, tax benefits, liquidity, and lock-in periods to choose the best investment option for your goals.
            </p>
            <p>
              <strong>EMI vs Flat Rate:</strong> Understand how reducing balance EMI differs from flat rate interest calculations and save thousands on loans.
            </p>
            <p>
              <strong>Home Loan vs Loan Against Property:</strong> Compare interest rates, processing fees, and tax benefits to decide which is better for your property needs.
            </p>

            <h3>Health Calculator Comparisons</h3>
            <p>
              <strong>BMI vs Body Fat Percentage:</strong> BMI is a quick indicator but doesn't differentiate between muscle and fat. Body fat percentage is more accurate for fitness tracking.
            </p>
            <p>
              <strong>BMR vs TDEE:</strong> BMR is your baseline calorie burn while TDEE includes activity. Use BMR for general understanding, TDEE for diet planning.
            </p>

            <h3>Tax Calculator Comparisons</h3>
            <p>
              <strong>Old vs New Tax Regime:</strong> Old regime offers more deductions but higher slabs. New regime has lower rates but fewer deductions. Compare based on your actual deductions.
            </p>

            <h2>How to Choose the Right Calculator</h2>
            <p>Follow these steps:</p>
            <ol>
              <li><strong>Define Your Goal:</strong> Are you planning investment, calculating loan, or tracking health?</li>
              <li><strong>Compare Features:</strong> Use our comparison tables to see which calculator offers what you need</li>
              <li><strong>Try Both:</strong> Many situations benefit from using multiple calculators for comprehensive planning</li>
              <li><strong>Read Guides:</strong> Check our calculator guides for detailed tutorials and tips</li>
            </ol>

            <h2>Common Calculator Mistakes to Avoid</h2>
            <ul>
              <li><strong>Using Wrong Calculator:</strong> EMI calculator for flat rate loans gives incorrect results</li>
              <li><strong>Ignoring Fees:</strong> Include processing fees, GST, and other charges for accurate loan calculations</li>
              <li><strong>Not Updating Rates:</strong> Interest rates change; use current rates for accurate projections</li>
              <li><strong>Short-term vs Long-term:</strong> Choose calculators based on your time horizon</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Calculate?</h2>
            <p className="text-muted-foreground mb-6">
              Try all our calculators and compare results yourself
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold"
            >
              Browse All Calculators
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CompareCalculators;
