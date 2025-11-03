import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp, Heart, Calculator, BookOpen, ArrowRight } from "lucide-react";

const BlogIndex = () => {
  const blogPosts = [
    {
      title: "How to Save ₹50,000 on Home Loan Using EMI Calculator",
      excerpt: "Learn expert tips to reduce your home loan interest and save thousands using smart EMI planning strategies.",
      category: "Finance",
      icon: TrendingUp,
      color: "text-green-600",
      readTime: "5 min read",
      keywords: "home loan tips, emi calculator guide, save money on loans, home loan interest"
    },
    {
      title: "SIP Investment: Complete Guide for Beginners 2024",
      excerpt: "Start your SIP journey with this comprehensive guide. Learn how much to invest, which funds to choose, and achieve your financial goals.",
      category: "Investment",
      icon: TrendingUp,
      color: "text-blue-600",
      readTime: "8 min read",
      keywords: "sip investment guide, mutual fund sip, investment for beginners, sip calculator"
    },
    {
      title: "BMI Explained: Ideal Weight for Your Height",
      excerpt: "Understand BMI categories, calculate your ideal weight, and get personalized health recommendations based on WHO standards.",
      category: "Health",
      icon: Heart,
      color: "text-red-600",
      readTime: "4 min read",
      keywords: "bmi calculator, ideal weight, health tips, weight management"
    },
    {
      title: "Income Tax Saving: 10 Ways to Reduce Tax in 2024",
      excerpt: "Maximize deductions under Section 80C, 80D, and more. Learn legal ways to save income tax and increase your take-home salary.",
      category: "Tax Planning",
      icon: Calculator,
      color: "text-purple-600",
      readTime: "10 min read",
      keywords: "tax saving tips, income tax deduction, tax planning india, section 80c"
    },
    {
      title: "GST Calculator Guide: Understanding GST Rates in India",
      excerpt: "Master GST calculations for your business. Learn about different GST slabs, input tax credit, and reverse GST calculations.",
      category: "Business",
      icon: BookOpen,
      color: "text-orange-600",
      readTime: "6 min read",
      keywords: "gst calculator, gst rates india, input tax credit, reverse gst"
    },
    {
      title: "Pregnancy Calendar: Week by Week Guide",
      excerpt: "Track your pregnancy week by week. Know what to expect, important milestones, and prepare for your baby's arrival.",
      category: "Health",
      icon: Heart,
      color: "text-pink-600",
      readTime: "7 min read",
      keywords: "pregnancy calculator, pregnancy week by week, due date calculator, pregnancy guide"
    },
    {
      title: "Compound Interest vs Simple Interest: Which is Better?",
      excerpt: "Understand the difference between compound and simple interest with real examples. Learn which is better for investments and loans.",
      category: "Finance",
      icon: TrendingUp,
      color: "text-green-600",
      readTime: "5 min read",
      keywords: "compound interest, simple interest, interest calculator, investment returns"
    },
    {
      title: "Best SIP Plans in India 2024: Top Mutual Funds",
      excerpt: "Discover the best SIP mutual funds for 2024. Compare returns, risks, and choose funds aligned with your financial goals.",
      category: "Investment",
      icon: TrendingUp,
      color: "text-blue-600",
      readTime: "12 min read",
      keywords: "best sip plans, top mutual funds india, sip returns, mutual fund comparison"
    },
    {
      title: "Age Calculator Tricks: Calculate Age in Seconds",
      excerpt: "Learn interesting age calculation tricks, find your exact age in different units, and understand age-related milestones.",
      category: "Utility",
      icon: Calendar,
      color: "text-cyan-600",
      readTime: "3 min read",
      keywords: "age calculator, calculate age, age in days, birthday calculator"
    }
  ];

  return (
    <>
      <SEOHead
        title="Calculator Blog - Financial Tips, Health Guides & Money Saving Articles"
        description="Expert articles on financial planning, health tips, tax saving, investment strategies, and calculator guides. Learn how to save money and make smart decisions."
        keywords="calculator blog, financial tips, tax saving tips, investment guide, health tips, money saving, emi calculator guide, sip investment tips, bmi guide"
        canonicalUrl="https://pineapple-calculator-paradise.lovable.app/blog"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              📰 Calculator Blog & Guides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert tips on finance, health, tax planning, and calculator tutorials. Learn how to save money and make informed decisions.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <post.icon className={`w-5 h-5 ${post.color}`} />
                    <span className={`text-sm font-semibold ${post.color}`}>{post.category}</span>
                    <span className="text-sm text-muted-foreground ml-auto">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-3">
                    <strong>Keywords:</strong> {post.keywords}
                  </div>
                  <button className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SEO Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Why Read Our Calculator Blog?</h2>
            <p>
              Welcome to India's most comprehensive calculator blog! We publish expert articles, tutorials, and guides to help you:
            </p>
            <ul>
              <li>Save thousands of rupees on loans and investments</li>
              <li>Understand financial products and make smart money decisions</li>
              <li>Plan your taxes and maximize deductions legally</li>
              <li>Track your health and fitness goals effectively</li>
              <li>Master calculator tools for daily life</li>
            </ul>

            <h2>Popular Topics on Our Blog</h2>
            
            <h3>Financial Planning & Investment</h3>
            <p>
              Learn about EMI calculations, SIP investment strategies, FD returns, compound interest, and retirement planning. Our financial experts share practical tips that Indians can apply immediately to improve their financial health.
            </p>

            <h3>Tax Saving & Planning</h3>
            <p>
              Discover legal ways to save income tax under Section 80C, 80D, 80G, and other deductions. Understand new vs old tax regime, GST calculations for businesses, and tax planning strategies for salaried professionals and business owners.
            </p>

            <h3>Health & Fitness Guides</h3>
            <p>
              Calculate your BMI, BMR, daily calorie needs, and track pregnancy. Our health articles are based on WHO standards and provide personalized recommendations for weight management and fitness goals.
            </p>

            <h3>Calculator Tutorials</h3>
            <p>
              Step-by-step guides on using every calculator on our platform. Learn tips, tricks, and best practices to get accurate results and make the most of our calculator tools.
            </p>

            <h2>Latest Calculator Trends in India</h2>
            <p>
              Based on 2024 search data, here are the trending topics:
            </p>
            <ol>
              <li><strong>Home Loan EMI Calculators:</strong> With rising property prices, Indians are increasingly using EMI calculators to plan home purchases</li>
              <li><strong>SIP Investment Growth:</strong> Young professionals are embracing SIP for wealth creation and retirement planning</li>
              <li><strong>Tax Saving Tools:</strong> New tax regime confusion drives search for tax calculators and comparison tools</li>
              <li><strong>Health Tracking:</strong> Post-pandemic health awareness has increased BMI and calorie calculator usage</li>
              <li><strong>Digital GST Calculations:</strong> SMEs and traders rely on GST calculators for billing and compliance</li>
            </ol>

            <h2>How to Use Our Blog</h2>
            <p>
              Our blog is organized by categories for easy navigation:
            </p>
            <ul>
              <li><strong>Finance:</strong> Loans, investments, savings, FD, compound interest</li>
              <li><strong>Tax & GST:</strong> Income tax, GST, deductions, tax planning</li>
              <li><strong>Investment:</strong> SIP, mutual funds, stocks, retirement planning</li>
              <li><strong>Health:</strong> BMI, BMR, calories, pregnancy, fitness</li>
              <li><strong>Calculator Guides:</strong> How-to tutorials for all calculators</li>
              <li><strong>Money Saving:</strong> Tips and tricks to save money daily</li>
            </ul>

            <h2>Expert Contributors</h2>
            <p>
              Our blog features articles from:
            </p>
            <ul>
              <li>Certified Financial Planners (CFP)</li>
              <li>Chartered Accountants (CA)</li>
              <li>Health & Fitness Experts</li>
              <li>Tax Consultants</li>
              <li>Investment Advisors</li>
            </ul>

            <h2>Subscribe for Updates</h2>
            <p>
              New articles are published every week. Topics include:
            </p>
            <ul>
              <li>Latest tax rule changes and implications</li>
              <li>New investment opportunities and SIP funds</li>
              <li>Health tips and fitness trends</li>
              <li>Money-saving hacks and calculator tutorials</li>
              <li>Real-life case studies and success stories</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Start Calculating Today</h2>
            <p className="text-muted-foreground mb-6">
              Use our free calculators while reading expert articles
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

export default BlogIndex;
