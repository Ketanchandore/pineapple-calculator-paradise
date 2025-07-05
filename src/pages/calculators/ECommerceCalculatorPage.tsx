
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import ECommerceCalculator from "@/components/calculators/ECommerceCalculator";
import { Helmet } from "react-helmet";

const ECommerceCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Helmet>
      <title>eCommerce Profit Margin Calculator - ROI, Markup & Break-Even Analysis</title>
      <meta name="description" content="Advanced eCommerce profit margin calculator. Calculate profit margins, markup, ROI, break-even analysis, and get strategic recommendations for your online business." />
      <meta name="keywords" content="ecommerce calculator, profit margin calculator, markup calculator, ROI calculator, break-even analysis, online business calculator, dropshipping calculator, shopify profit tool, amazon seller calculator, ebay profit calculator, online margin calculator, product selling tool, gross margin tool, pricing calculator for sellers, online business revenue calculator, ecommerce profit tool, selling profit calculator, business margin analyzer, retail profit calculator, wholesale margin calculator" />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="PASTE_YOUR_VERIFICATION_CODE_HERE" />
      
      <meta property="og:title" content="eCommerce Profit Margin Calculator - Complete Business Analysis" />
      <meta property="og:description" content="Calculate profit margins, markup, ROI and get strategic recommendations for your eCommerce business" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pineapplehub.com/calculators/ecommerce" />
      <meta property="og:image" content="https://pineapplehub.com/og-preview.png" />
      
      <link rel="canonical" href="https://pineapplehub.com/calculators/ecommerce" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "eCommerce Profit Margin Calculator",
          "description": "Advanced eCommerce profit margin calculator with ROI, markup, and break-even analysis",
          "url": "https://pineapplehub.com/calculators/ecommerce",
          "applicationCategory": "Business Calculator",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Profit Margin Calculation",
            "Markup Analysis",
            "ROI Calculation", 
            "Break-even Analysis",
            "Multi-currency Support",
            "Export Results",
            "Share Functionality"
          ],
          "author": {
            "@type": "Organization",
            "name": "Pineapple Calculator Hub"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Pineapple Calculator Hub"
          }
        })}
      </script>
    </Helmet>
    
    <Header />
    <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
      <Sidebar />
      <section className="flex-1 px-4 md:px-8 py-8">
        <div className="mb-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-[#00B86B] mb-4">
              eCommerce Profit Margin Calculator
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Calculate your eCommerce profit margins, markup, ROI, and break-even analysis. 
              Get strategic recommendations to optimize your online business profitability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">💰 Profit Analysis</h3>
                <p className="text-sm text-green-700">Calculate exact profit margins and markup percentages</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📊 ROI Tracking</h3>
                <p className="text-sm text-blue-700">Monitor return on investment and efficiency</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">🎯 Break-Even</h3>
                <p className="text-sm text-purple-700">Find your break-even point and minimum sales</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">🌍 Multi-Currency</h3>
                <p className="text-sm text-orange-700">Support for USD, EUR, GBP, INR and more</p>
              </div>
            </div>
          </div>
        </div>
        
        <LazyCalculatorWrapper>
          <ECommerceCalculator />
        </LazyCalculatorWrapper>

        {/* Hidden SEO Keywords for Search Engines */}
        <div style={{display: 'none'}} aria-hidden="true">
          ecommerce profit calculator, online margin calculator, product selling tool, dropshipping calculator, 
          gross margin tool, pricing calculator for sellers, Shopify profit tool, online business revenue calculator,
          Amazon seller calculator, eBay profit calculator, Etsy margin calculator, WooCommerce profit tool,
          BigCommerce calculator, Magento profit analyzer, selling profit calculator, business margin analyzer,
          retail profit calculator, wholesale margin calculator, product pricing tool, cost analysis calculator,
          revenue optimization tool, profit optimization calculator, markup percentage calculator, 
          break even analysis tool, ROI calculator for business, return on investment calculator,
          ecommerce analytics tool, online store profitability, digital marketing ROI, 
          conversion rate profit calculator, customer acquisition cost calculator
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use the eCommerce Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Step 1: Basic Setup</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Select your currency and business type</li>
                  <li>• Enter your selling price per unit</li>
                  <li>• Input your cost price (COGS)</li>
                  <li>• Add quantity for bulk calculations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Step 2: Additional Costs</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Include shipping and handling costs</li>
                  <li>• Add platform fees (Amazon, eBay, etc.)</li>
                  <li>• Factor in advertising expenses</li>
                  <li>• Account for taxes and other expenses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Metrics Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Profit Margin</h4>
                <p className="text-sm text-gray-600 mb-3">Percentage of revenue that remains as profit after all costs</p>
                
                <h4 className="font-semibold text-gray-700 mb-2">Markup</h4>
                <p className="text-sm text-gray-600">Percentage increase from cost price to selling price</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">ROI (Return on Investment)</h4>
                <p className="text-sm text-gray-600 mb-3">Efficiency of your investment - profit relative to costs</p>
                
                <h4 className="font-semibold text-gray-700 mb-2">Break-Even Units</h4>
                <p className="text-sm text-gray-600">Minimum units needed to cover all costs</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">Business Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Increase Margins</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Create product bundles</li>
                  <li>• Add premium versions</li>
                  <li>• Improve perceived value</li>
                  <li>• Negotiate better supplier rates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Reduce Costs</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Optimize shipping methods</li>
                  <li>• Automate processes</li>
                  <li>• Bulk purchasing discounts</li>
                  <li>• Reduce platform dependencies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Scale Effectively</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Focus on high-margin products</li>
                  <li>• Invest in profitable marketing</li>
                  <li>• Monitor competitor pricing</li>
                  <li>• Track performance metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ECommerceCalculatorPage;
