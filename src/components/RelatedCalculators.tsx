import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

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
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Related Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {calculators.map((calc, index) => (
          <Link 
            key={index} 
            to={calc.link}
            className="group"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <calc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {calc.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {calc.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
