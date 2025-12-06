import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface RelatedCalculator {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

interface RelatedCalculatorsProps {
  calculators: RelatedCalculator[];
}

export const RelatedCalculators = ({ calculators }: RelatedCalculatorsProps) => {
  return (
    <section className="mt-12 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient mb-6">
        Related Calculators
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {calculators.map((calc, index) => (
          <Link 
            key={index} 
            to={calc.link}
            className="group glass-card rounded-2xl p-5 transition-all duration-300 
                     hover:shadow-glow focus:ring-2 focus:ring-primary"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 
                            flex items-center justify-center group-hover:scale-110 
                            group-hover:shadow-glow transition-all">
                <calc.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2
                                   group-hover:opacity-100 group-hover:translate-x-0 
                                   group-hover:text-primary transition-all" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground 
                         group-hover:text-gradient transition-all mb-2">
              {calc.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {calc.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
