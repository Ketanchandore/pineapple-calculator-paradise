
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import FertilizerCalculator from "@/components/calculators/FertilizerCalculator";
import { Helmet } from "react-helmet";

const FertilizerCalculatorPage = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
    <Helmet>
      <title>Fertilizer Calculator - NPK Requirements & Cost Calculator</title>
      <meta name="description" content="Advanced fertilizer calculator for optimal NPK requirements. Calculate fertilizer needs, costs, and get expert recommendations based on crop, soil type, and yield targets." />
      <meta name="keywords" content="fertilizer calculator, NPK calculator, crop nutrition, soil analysis, farming calculator, agricultural calculator, fertilizer cost" />
      <meta property="og:title" content="Advanced Fertilizer Calculator - NPK Requirements" />
      <meta property="og:description" content="Calculate optimal fertilizer requirements for your crops with our advanced NPK calculator" />
      <link rel="canonical" href="https://pineapplehub.com/calculators/fertilizer" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Fertilizer Calculator",
          "description": "Advanced fertilizer calculator for optimal NPK requirements and cost estimation",
          "url": "https://pineapplehub.com/calculators/fertilizer",
          "applicationCategory": "Agricultural Calculator",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </Helmet>
    
    <Header />
    <main className="flex flex-row flex-1 w-full max-w-[1600px] mx-auto">
      <Sidebar />
      <section className="flex-1 px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-[#00B86B] mb-4">
            Advanced Fertilizer Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Calculate optimal fertilizer requirements for your crops with our comprehensive NPK calculator. 
            Get personalized recommendations based on soil type, crop selection, and yield targets.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">🌾 10+ Crops Supported</h3>
              <p className="text-sm text-green-700">Wheat, Rice, Corn, Potato, Tomato, Cotton and more</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">🧪 Soil Analysis</h3>
              <p className="text-sm text-blue-700">Factor in soil test results and pH levels</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">💰 Cost Calculator</h3>
              <p className="text-sm text-purple-700">Get accurate fertilizer cost estimates</p>
            </div>
          </div>
        </div>
        
        <LazyCalculatorWrapper>
          <FertilizerCalculator />
        </LazyCalculatorWrapper>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use the Fertilizer Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Step 1: Basic Information</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Select your crop from the dropdown</li>
                  <li>• Enter cultivated area in hectares</li>
                  <li>• Choose your soil type</li>
                  <li>• Set yield target (optional)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Step 2: Advanced Options</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Enter soil test results if available</li>
                  <li>• Add organic fertilizer usage</li>
                  <li>• Override NPK requirements if needed</li>
                  <li>• Review soil health analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">Important Notes</h2>
            <ul className="text-sm text-amber-700 space-y-2">
              <li>• Results are estimates based on general crop requirements and soil conditions</li>
              <li>• Always conduct soil tests for accurate nutrient management</li>
              <li>• Consult local agricultural experts for region-specific recommendations</li>
              <li>• Consider environmental factors like rainfall and temperature</li>
              <li>• Follow local regulations for fertilizer application rates</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FertilizerCalculatorPage;
