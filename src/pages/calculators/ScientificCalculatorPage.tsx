import { SEOHead } from "@/components/SEOHead";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";
import LazyCalculatorWrapper from "@/components/calculators/LazyCalculatorWrapper";
import ScientificCalculator from "@/components/calculators/ScientificCalculator";

const ScientificCalculatorPage = () => {
  const faqItems = [
    {
      question: "What is a scientific calculator?",
      answer: "A scientific calculator is an advanced calculator that can perform complex mathematical operations including trigonometry, logarithms, exponentials, and statistical functions beyond basic arithmetic."
    },
    {
      question: "What's the difference between radians and degrees?",
      answer: "Radians and degrees are two units for measuring angles. Most scientific contexts use radians (2π radians = 360 degrees), while degrees are more common in everyday use. Our calculator allows you to switch between both modes."
    },
    {
      question: "How do I use the memory functions?",
      answer: "Memory functions help store values: MC (Memory Clear) clears stored value, MR (Memory Recall) displays stored value, M+ adds current display to memory, M- subtracts from memory, and MS (Memory Store) saves current display to memory."
    },
    {
      question: "What mathematical functions are available?",
      answer: "Our scientific calculator includes trigonometric functions (sin, cos, tan), logarithms (ln, log), exponentials (e^x, 10^x), powers (x², x³), square root, factorial, and mathematical constants (π, e)."
    },
    {
      question: "Can I perform complex calculations?",
      answer: "Yes! You can chain operations, use parentheses for order of operations, and combine multiple scientific functions to perform complex mathematical calculations."
    },
    {
      question: "Is this calculator suitable for students?",
      answer: "Absolutely! This scientific calculator is perfect for high school and college students studying mathematics, physics, chemistry, engineering, and other STEM subjects."
    },
    {
      question: "How accurate are the calculations?",
      answer: "Our calculator uses JavaScript's built-in Math library, which provides high precision for most educational and professional calculations. Results are accurate to approximately 15-17 significant digits."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Scientific Calculator",
    "applicationCategory": "UtilityApplication",
    "description": "Advanced scientific calculator with trigonometric functions, logarithms, exponentials, and memory operations for students and professionals.",
    "url": "https://pineapplehub.com/calculators/scientific",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Trigonometric functions (sin, cos, tan)",
      "Logarithmic functions (ln, log)",
      "Exponential functions",
      "Memory operations",
      "Degree/Radian mode switching",
      "Mathematical constants (π, e)",
      "Advanced mathematical operations"
    ]
  };

  return (
    <>
      <SEOHead
        title="Scientific Calculator Online - Advanced Math Functions | PineappleHub"
        description="Free online scientific calculator with trigonometric functions, logarithms, exponentials, and memory operations. Perfect for students, engineers, and professionals. Calculate complex mathematical expressions instantly."
        keywords="scientific calculator, online calculator, trigonometry calculator, logarithm calculator, advanced math calculator, engineering calculator, student calculator, math functions"
        canonicalUrl="https://pineapplehub.com/calculators/scientific"
        structuredData={structuredData}
      />
      <CalculatorPageLayout
        pageTitle="Scientific Calculator"
        description="Advanced mathematical calculator with trigonometric functions, logarithms, exponentials, memory operations, and support for both radians and degrees mode."
        faqItems={faqItems}
      >
        <LazyCalculatorWrapper>
          <ScientificCalculator />
        </LazyCalculatorWrapper>
      </CalculatorPageLayout>
    </>
  );
};

export default ScientificCalculatorPage;