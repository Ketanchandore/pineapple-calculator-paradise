import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Heart, Calendar, Percent, Home as HomeIcon, BookOpen, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CalculatorGuide = () => {
  const guides = [
    {
      category: "Financial Planning",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      calculators: [
        {
          name: "EMI Calculator Guide",
          desc: "Learn how to calculate EMI for home loans, car loans, and personal loans. Understand interest calculations and save thousands on your loans.",
          keywords: "emi calculator, home loan emi, car loan calculator, personal loan emi",
          link: "/calculators/emi"
        },
        {
          name: "SIP Calculator Guide",
          desc: "Master SIP investment planning. Calculate returns, compare mutual funds, and plan your retirement corpus with systematic investment planning.",
          keywords: "sip calculator, mutual fund calculator, investment planning, retirement planning",
          link: "/calculators/sip"
        },
        {
          name: "Income Tax Calculator Guide",
          desc: "Calculate income tax under old and new tax regimes. Maximize deductions, save tax legally, and file ITR correctly.",
          keywords: "income tax calculator, tax saving calculator, itr calculator, tax planning india",
          link: "/calculators/income-tax"
        },
        {
          name: "GST Calculator Guide",
          desc: "Calculate GST amount, reverse GST, and understand tax implications for your business. GST at 5%, 12%, 18%, and 28%.",
          keywords: "gst calculator, gst calculator india, tax calculator, reverse gst calculator",
          link: "/calculators/gst"
        }
      ]
    },
    {
      category: "Health & Fitness",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      calculators: [
        {
          name: "BMI Calculator Guide",
          desc: "Calculate Body Mass Index, understand weight categories, and get personalized health recommendations based on WHO standards.",
          keywords: "bmi calculator, body mass index, weight calculator, health calculator",
          link: "/calculators/bmi"
        },
        {
          name: "BMR Calculator Guide",
          desc: "Calculate Basal Metabolic Rate and daily calorie needs. Plan weight loss, weight gain, or maintenance with accurate TDEE calculations.",
          keywords: "bmr calculator, calorie calculator, metabolism calculator, tdee calculator",
          link: "/calculators/bmr"
        },
        {
          name: "Calorie Calculator Guide",
          desc: "Calculate daily calorie requirements based on age, weight, height, and activity level. Track macros for fitness goals.",
          keywords: "calorie calculator, daily calorie needs, nutrition calculator, macro calculator",
          link: "/calculators/calorie"
        },
        {
          name: "Pregnancy Calculator Guide",
          desc: "Calculate pregnancy due date, track weeks, plan prenatal care. Know conception date and delivery date accurately.",
          keywords: "pregnancy calculator, due date calculator, pregnancy week calculator, conception calculator",
          link: "/calculators/pregnancy"
        }
      ]
    },
    {
      category: "Utility Tools",
      icon: Calculator,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      calculators: [
        {
          name: "Age Calculator Guide",
          desc: "Calculate exact age in years, months, days, hours, and seconds. Find age difference between two dates.",
          keywords: "age calculator, calculate age, age difference calculator, birthday calculator",
          link: "/calculators/age"
        },
        {
          name: "Percentage Calculator Guide",
          desc: "Calculate percentage, percentage increase/decrease, percentage change, and percentage of a number instantly.",
          keywords: "percentage calculator, percent calculator, percentage change calculator, calculate percentage",
          link: "/calculators/percentage"
        },
        {
          name: "Date Calculator Guide",
          desc: "Add or subtract days from dates, calculate date difference, and plan events with our date calculator.",
          keywords: "date calculator, date difference calculator, add days to date, subtract days",
          link: "/calculators/date"
        },
        {
          name: "Scientific Calculator Guide",
          desc: "Perform advanced mathematical operations - trigonometry, logarithms, exponentials, and scientific calculations.",
          keywords: "scientific calculator, math calculator, advanced calculator, engineering calculator",
          link: "/calculators/scientific"
        }
      ]
    },
    {
      category: "Home & Property",
      icon: HomeIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      calculators: [
        {
          name: "Home Loan Calculator Guide",
          desc: "Calculate home loan EMI, eligibility, interest costs. Compare banks and find the best home loan deals in India.",
          keywords: "home loan calculator, housing loan emi, home loan eligibility, mortgage calculator india",
          link: "/calculators/home-loan"
        },
        {
          name: "Mortgage Calculator Guide",
          desc: "Calculate mortgage payments, amortization schedule, and total interest costs for property loans.",
          keywords: "mortgage calculator, property loan calculator, amortization calculator, loan schedule",
          link: "/calculators/mortgage"
        },
        {
          name: "Loan Calculator Guide",
          desc: "Calculate any type of loan - personal, business, education. Compare EMIs and choose the best loan option.",
          keywords: "loan calculator, personal loan calculator, loan emi calculator, business loan",
          link: "/calculators/loan"
        }
      ]
    }
  ];

  const howToUse = [
    {
      step: "1",
      title: "Choose Your Calculator",
      desc: "Select the calculator that matches your need from our collection of 25+ specialized tools."
    },
    {
      step: "2",
      title: "Enter Values",
      desc: "Fill in the required information accurately. Most calculators need just 2-3 inputs."
    },
    {
      step: "3",
      title: "Get Instant Results",
      desc: "Click calculate and get detailed results with charts, breakdowns, and explanations instantly."
    },
    {
      step: "4",
      title: "Make Smart Decisions",
      desc: "Use the results to plan your finances, health, or daily tasks with confidence."
    }
  ];

  return (
    <>
      <SEOHead
        title="Calculator Guide - How to Use Calculators | Expert Tips & Tutorials"
        description="Complete guide to using financial, health, and utility calculators. Learn how to calculate EMI, SIP, BMI, Tax, and more. Step-by-step tutorials with examples."
        keywords="calculator guide, how to calculate emi, sip calculator tutorial, bmi calculator guide, financial calculator tips, calculator how to use, online calculator tutorial, calculator examples"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/calculator-guide"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              📚 Complete Calculator Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to use every calculator like a pro. Expert tips, examples, and step-by-step tutorials to help you make informed decisions.
            </p>
          </div>

          {/* How to Use Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">How to Use Our Calculators</CardTitle>
              <CardDescription>Follow these simple steps to get accurate results every time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {howToUse.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Calculator Guides by Category */}
          {guides.map((category) => (
            <div key={category.category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.calculators.map((calc) => (
                  <Card key={calc.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        <Link to={calc.link} className="text-primary hover:underline">
                          {calc.name}
                        </Link>
                      </CardTitle>
                      <CardDescription>{calc.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-muted-foreground">Keywords:</span>
                        <p className="text-sm text-muted-foreground mt-1">{calc.keywords}</p>
                      </div>
                      <Link 
                        to={calc.link}
                        className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                      >
                        Try Calculator →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* SEO Content */}
          <article className="prose prose-lg max-w-none mt-12">
            <h2>Why Use Online Calculators?</h2>
            <p>
              Online calculators have become essential tools for millions of people worldwide. Whether you're planning your finances, tracking your health, or solving everyday problems, calculators provide instant, accurate results that help you make informed decisions.
            </p>

            <h3>Benefits of Using PineappleHub Calculators:</h3>
            <ul>
              <li><strong>100% Free:</strong> All calculators are completely free with no hidden charges or registration required</li>
              <li><strong>Instant Results:</strong> Get accurate calculations in milliseconds</li>
              <li><strong>Mobile Friendly:</strong> Works perfectly on all devices - phone, tablet, or computer</li>
              <li><strong>Privacy Protected:</strong> All calculations happen in your browser - we don't store your data</li>
              <li><strong>Expert Formulas:</strong> Industry-standard formulas ensure accuracy</li>
              <li><strong>Detailed Breakdowns:</strong> Understand how results are calculated with charts and explanations</li>
            </ul>

            <h2>Popular Calculator Searches in India 2024</h2>
            <p>
              Based on search trends, here are the most popular calculators Indians use:
            </p>
            <ol>
              <li><strong>EMI Calculator:</strong> Calculate home loan, car loan, and personal loan EMIs</li>
              <li><strong>SIP Calculator:</strong> Plan mutual fund investments and retirement corpus</li>
              <li><strong>Income Tax Calculator:</strong> Calculate tax liability and plan tax savings</li>
              <li><strong>BMI Calculator:</strong> Check if your weight is healthy for your height</li>
              <li><strong>GST Calculator:</strong> Calculate GST amounts for business transactions</li>
              <li><strong>Percentage Calculator:</strong> Calculate discounts, marks, and changes</li>
              <li><strong>Age Calculator:</strong> Find exact age for school admissions or job applications</li>
              <li><strong>FD Calculator:</strong> Calculate fixed deposit maturity amounts</li>
            </ol>

            <h2>Calculator Tips for Accurate Results</h2>
            <h3>Financial Calculators:</h3>
            <ul>
              <li>Always use the exact interest rate provided by your bank</li>
              <li>Include all fees and charges for accurate loan calculations</li>
              <li>Consider inflation when planning long-term investments</li>
              <li>Update calculations annually as rates change</li>
            </ul>

            <h3>Health Calculators:</h3>
            <ul>
              <li>Measure weight and height accurately in the morning</li>
              <li>Use consistent units (either metric or imperial)</li>
              <li>Consult a doctor for personalized health advice</li>
              <li>Track changes over time for better insights</li>
            </ul>

            <h3>Date & Time Calculators:</h3>
            <ul>
              <li>Double-check date formats (DD/MM/YYYY or MM/DD/YYYY)</li>
              <li>Consider time zones for international date calculations</li>
              <li>Account for leap years in long-term calculations</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>Are online calculators accurate?</h3>
            <p>
              Yes, our calculators use industry-standard formulas and are thoroughly tested. They provide the same accuracy as professional software, but remember that results are for informational purposes. Always consult with professionals for final decisions.
            </p>

            <h3>Do I need to download anything?</h3>
            <p>
              No downloads required! All calculators work directly in your web browser. Just visit the page and start calculating instantly.
            </p>

            <h3>Can I use calculators on my mobile phone?</h3>
            <p>
              Absolutely! Our calculators are fully responsive and optimized for mobile devices. They work perfectly on smartphones, tablets, and computers.
            </p>

            <h3>Is my data safe?</h3>
            <p>
              Yes, your privacy is protected. All calculations happen locally in your browser. We don't collect, store, or transmit any calculation data.
            </p>

            <h3>Which calculator should I use?</h3>
            <p>
              Choose based on your need:
              <br />- <strong>Finance:</strong> EMI, SIP, Tax, GST, FD calculators
              <br />- <strong>Health:</strong> BMI, BMR, Calorie, Pregnancy calculators  
              <br />- <strong>Utility:</strong> Age, Percentage, Date calculators
              <br />- <strong>Business:</strong> Loan, ROI, Profit margin calculators
            </p>
          </article>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Calculate?</h2>
            <p className="text-muted-foreground mb-6">
              Choose from 25+ professional calculators designed for Indian users
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

export default CalculatorGuide;
