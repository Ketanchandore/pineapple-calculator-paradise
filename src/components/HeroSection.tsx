import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Globe, Users, Zap, Star, Shield } from "lucide-react";

const HeroSection = () => (
  <section className="relative py-16 md:py-24 px-4 overflow-hidden">
    {/* Floating Orbs Background */}
    <div className="floating-orb orb-1" aria-hidden="true" />
    <div className="floating-orb orb-2" aria-hidden="true" />
    <div className="floating-orb orb-3" aria-hidden="true" />
    
    <div className="container mx-auto relative z-10">
      {/* Main Hero Content */}
      <div className="glass-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center animate-fade-in">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full mb-6 text-sm font-medium">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-foreground">Trusted by 15M+ Users Worldwide</span>
          <Globe className="w-4 h-4 text-primary" />
        </div>

        {/* Main Heading - SEO Optimized for Global Traffic */}
        <h1 className="heading-responsive font-display font-extrabold mb-6 leading-tight">
          <span className="text-gradient">#1 Free Online Calculator</span>
          <br />
          <span className="text-foreground">for Finance, Health & Math</span>
        </h1>

        {/* Description - Globally Optimized */}
        <p className="text-responsive text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Professional calculators used by millions in USA, UK, Australia, Canada & 150+ countries. 
          Calculate EMI, Mortgage, SIP, BMI, Compound Interest, Taxes & more — 
          <strong className="text-foreground"> 100% Free, No Sign-up Required!</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link 
            to="/#calculators" 
            className="btn-gradient inline-flex items-center gap-2 touch-target"
          >
            <Calculator className="w-5 h-5" />
            <span>Explore All Calculators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/calculator-guide" 
            className="glass-button px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-primary/10 transition-colors touch-target"
          >
            <span>📚 Learn How to Use</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <StatCard 
            icon={<Calculator className="w-6 h-6" />}
            value="50+"
            label="Calculator Tools"
          />
          <StatCard 
            icon={<Users className="w-6 h-6" />}
            value="15M+"
            label="Monthly Users"
          />
          <StatCard 
            icon={<Globe className="w-6 h-6" />}
            value="150+"
            label="Countries"
          />
          <StatCard 
            icon={<Zap className="w-6 h-6" />}
            value="99.9%"
            label="Accuracy"
          />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Shield className="w-4 h-4 text-primary" /> No Data Stored
          </span>
          <span className="inline-flex items-center gap-1">
            <Zap className="w-4 h-4 text-primary" /> Instant Results
          </span>
          <span className="inline-flex items-center gap-1">
            <Globe className="w-4 h-4 text-primary" /> Works Offline
          </span>
        </div>
      </div>

      {/* SEO Content Section - Hidden but indexed */}
      <div className="sr-only">
        <h2>Best Free Online Calculator Tools for USA, UK, Australia, Canada</h2>
        <p>
          PineappleHub offers the most comprehensive suite of free online calculators. 
          Our tools include EMI Calculator for loan payments, Mortgage Calculator for home buyers, 
          SIP Calculator for mutual fund investments, BMI Calculator for health tracking, 
          Compound Interest Calculator for savings, Tax Calculator for income tax estimation, 
          and 45+ more professional-grade calculators. Used by professionals, students, and 
          businesses across United States, United Kingdom, Australia, Canada, Germany, France, 
          India, and 150+ countries worldwide. No registration required, completely free, 
          mobile-optimized, and works offline.
        </p>
      </div>
    </div>
  </section>
);

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="glass-card p-4 md:p-6 rounded-2xl text-center animate-scale-in">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
      {icon}
    </div>
    <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default HeroSection;
