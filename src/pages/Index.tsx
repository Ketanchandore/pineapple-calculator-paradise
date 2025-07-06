
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CalculatorGrid from "@/components/CalculatorGrid";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pineapple Calculator Hub - Free Online Calculators</title>
        <meta name="description" content="All calculators in one place. Free, accurate, fast and easy to use. Try age, finance, health, loan, investment calculators & more." />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Pineapple Calculator Hub" />
        <meta property="og:title" content="Pineapple Calculator Hub" />
        <meta property="og:description" content="A modern hub for all your calculation needs: finance, health, math & more!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pineapplehub.com/" />
        <link rel="canonical" href="https://pineapplehub.com/" />
        
        {/* JSON-LD Structured Data for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pineapple Calculator Hub - Home",
            "description": "Free online calculators for all your calculation needs",
            "url": "https://pineapplehub.com/",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 19,
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "EMI Calculator",
                  "url": "https://pineapplehub.com/calculators/emi",
                  "description": "Calculate your EMI for loans"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 2,
                  "name": "SIP Calculator", 
                  "url": "https://pineapplehub.com/calculators/sip",
                  "description": "Calculate SIP returns for investments"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-[#FFFDF6]">
        <Header />
        <main className="flex-1 w-full max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-12 pt-6 md:pt-10 animate-fade-in">
          <HeroSection />
          <CalculatorGrid />
          
          {/* SEO Keywords Block 1 - General Calculator Keywords */}
          <div style={{display: 'none'}} aria-hidden="true">
            free calculator, online calculator, financial calculator, scientific calculator, math calculator, 
            percentage calculator, loan calculator, mortgage calculator, investment calculator, retirement calculator, 
            compound interest calculator, simple interest calculator, tax calculator, income tax calculator, 
            salary calculator, hourly wage calculator, budget calculator, savings calculator, debt calculator, 
            credit card calculator, auto loan calculator, personal loan calculator, student loan calculator, 
            refinance calculator, amortization calculator, present value calculator, future value calculator, 
            annuity calculator, bond calculator, stock calculator, dividend calculator, capital gains calculator, 
            roi calculator, profit calculator, break even calculator, markup calculator, discount calculator, 
            tip calculator, currency converter, unit converter, bmi calculator, calorie calculator, 
            pregnancy calculator, ovulation calculator, age calculator, date calculator, time calculator, 
            grade calculator, gpa calculator, square footage calculator, mortgage payment calculator, 
            rent vs buy calculator, inflation calculator, cost of living calculator, net worth calculator
          </div>

          {/* SEO Keywords Block 2 - Business & Finance Keywords */}
          <div style={{display: 'none'}} aria-hidden="true">
            business calculator, accounting calculator, payroll calculator, cash flow calculator, 
            depreciation calculator, inventory calculator, pricing calculator, margin calculator, 
            cost calculator, revenue calculator, expense calculator, budget planner, financial planner, 
            retirement planner, investment planner, tax planner, estate planning calculator, 
            insurance calculator, life insurance calculator, health insurance calculator, 
            car insurance calculator, home insurance calculator, 401k calculator, ira calculator, 
            roth ira calculator, pension calculator, social security calculator, medicare calculator, 
            college savings calculator, education cost calculator, tuition calculator, 
            scholarship calculator, financial aid calculator, student budget calculator, 
            home affordability calculator, down payment calculator, closing cost calculator, 
            property tax calculator, home equity calculator, refinancing calculator, 
            debt consolidation calculator, credit score calculator, bankruptcy calculator
          </div>

          {/* SEO Keywords Block 3 - Health & Lifestyle Keywords */}
          <div style={{display: 'none'}} aria-hidden="true">
            health calculator, fitness calculator, nutrition calculator, diet calculator, 
            weight loss calculator, body fat calculator, muscle mass calculator, metabolic rate calculator, 
            heart rate calculator, blood pressure calculator, cholesterol calculator, 
            diabetes calculator, insulin calculator, medication calculator, dosage calculator, 
            fertility calculator, menstrual cycle calculator, due date calculator, 
            baby growth calculator, child development calculator, growth chart calculator, 
            sleep calculator, water intake calculator, protein calculator, carb calculator, 
            vitamin calculator, supplement calculator, exercise calculator, workout calculator, 
            running calculator, cycling calculator, swimming calculator, hiking calculator, 
            golf handicap calculator, sports calculator, fantasy sports calculator, 
            gambling calculator, lottery calculator, odds calculator, probability calculator, 
            statistics calculator, average calculator, median calculator, standard deviation calculator
          </div>

          {/* SEO Keywords Block 4 - Technical & Specialized Keywords */}
          <div style={{display: 'none'}} aria-hidden="true">
            engineering calculator, construction calculator, electrical calculator, plumbing calculator, 
            hvac calculator, roofing calculator, flooring calculator, paint calculator, 
            concrete calculator, lumber calculator, material calculator, measurement calculator, 
            conversion calculator, metric converter, imperial converter, temperature converter, 
            speed calculator, distance calculator, volume calculator, area calculator, 
            geometry calculator, trigonometry calculator, algebra calculator, calculus calculator, 
            physics calculator, chemistry calculator, biology calculator, environmental calculator, 
            carbon footprint calculator, energy calculator, electricity calculator, gas calculator, 
            fuel economy calculator, mpg calculator, emissions calculator, solar calculator, 
            wind power calculator, battery calculator, generator calculator, power calculator, 
            voltage calculator, current calculator, resistance calculator, frequency calculator, 
            wavelength calculator, decibel calculator, sound calculator, light calculator, 
            color calculator, hex calculator, binary calculator, octal calculator, ascii calculator
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
