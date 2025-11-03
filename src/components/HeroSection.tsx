
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="py-10 px-2 text-center bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/30 rounded-3xl mb-8 shadow-md animate-fade-in">
    <h1 className="text-[2.4rem] sm:text-4xl md:text-5xl font-display font-extrabold text-foreground drop-shadow mb-4">
      🇮🇳 India's #1 FREE Calculator Online
    </h1>
    <p className="text-lg md:text-2xl text-muted-foreground font-medium mb-4 max-w-3xl mx-auto">
      25+ Professional Calculators: EMI, SIP, BMI, GST, Income Tax, Home Loan, Age Calculator & More! Used by 15M+ Indians Daily 🚀
    </p>
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <Link to="/calculator-guide" className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold shadow-md transition-all">
        📚 Calculator Guide
      </Link>
      <Link to="/compare-calculators" className="px-5 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 font-semibold shadow-md transition-all">
        ⚖️ Compare Tools
      </Link>
      <Link to="/blog" className="px-5 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-semibold shadow-md transition-all">
        📰 Tips & Articles
      </Link>
    </div>
    <p className="text-sm text-muted-foreground mt-4">
      ✅ 100% Free • ✅ No Registration • ✅ Mobile Friendly • ✅ Instant Results
    </p>
  </section>
);

export default HeroSection;
