
import { SEOHead } from "@/components/SEOHead";
import { BackButton } from "@/components/BackButton";

const About = () => {
  return (
    <>
      <SEOHead
        title="About PineappleHub - Your Trusted Online Calculator Platform"
        description="Learn about PineappleHub, your go-to platform for free online calculator tools. We provide accurate, fast, and easy-to-use calculators for all your mathematical and financial needs."
        keywords="about pineapplehub, online calculator platform, free calculator tools, calculator website, mathematical tools"
        canonicalUrl="https://pineapplehub.com/about"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackButton />
        <div className="mt-8 space-y-8">
          <div className="glass rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-primary mb-6">About PineappleHub</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Welcome to PineappleHub, your comprehensive destination for free online calculator tools. 
                We're dedicated to providing accurate, fast, and user-friendly calculators that help you 
                solve everyday mathematical and financial problems with ease.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                Our mission is to make complex calculations simple and accessible to everyone. Whether you're 
                calculating your age, BMI, loan EMI, or investment returns, we provide the tools you need to 
                make informed decisions quickly and accurately.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h2>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• <strong>Health Calculators:</strong> BMI, Age, Calorie, and more</li>
                <li>• <strong>Financial Calculators:</strong> EMI, SIP, Compound Interest, Home Loan</li>
                <li>• <strong>Date Calculators:</strong> Date differences, age calculations, day counters</li>
                <li>• <strong>Utility Calculators:</strong> Percentage, GST, and various other tools</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose PineappleHub?</h2>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• <strong>100% Free:</strong> All our calculators are completely free to use</li>
                <li>• <strong>No Registration:</strong> Start calculating immediately without any signup</li>
                <li>• <strong>Accurate Results:</strong> Precise calculations you can trust</li>
                <li>• <strong>Mobile Friendly:</strong> Works perfectly on all devices</li>
                <li>• <strong>Fast Loading:</strong> Optimized for speed and performance</li>
                <li>• <strong>Privacy Focused:</strong> We don't store your personal data</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground mb-6">
                We are committed to maintaining the highest standards of accuracy and user experience. 
                Our calculators are regularly updated and tested to ensure they provide reliable results 
                that you can depend on for your important calculations.
              </p>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <p className="text-primary font-medium text-center">
                  Thank you for choosing PineappleHub for your calculation needs. 
                  We're here to make your life easier, one calculation at a time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
