import { ReactNode } from "react";

interface SEOContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const SEOContentSection = ({ title, children, className = "" }: SEOContentSectionProps) => {
  return (
    <section className={`space-y-4 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
        {children}
      </div>
    </section>
  );
};

interface SEOBenefitsListProps {
  title: string;
  benefits: string[];
}

export const SEOBenefitsList = ({ title, benefits }: SEOBenefitsListProps) => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-primary mt-1">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SEOFormulaBoxProps {
  title: string;
  formula: string;
  variables: { symbol: string; description: string }[];
  example?: string;
}

export const SEOFormulaBox = ({ title, formula, variables, example }: SEOFormulaBoxProps) => {
  return (
    <div className="glass-card p-6 rounded-xl space-y-4">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="font-mono text-lg bg-primary/10 p-3 rounded-lg text-center">{formula}</p>
      <div className="space-y-2">
        <p className="font-medium text-foreground">Where:</p>
        <ul className="space-y-1">
          {variables.map((v, i) => (
            <li key={i} className="text-muted-foreground">
              <strong>{v.symbol}</strong> = {v.description}
            </li>
          ))}
        </ul>
      </div>
      {example && (
        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-sm font-medium text-foreground">Example:</p>
          <p className="text-muted-foreground text-sm">{example}</p>
        </div>
      )}
    </div>
  );
};

interface SEOComparisonTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export const SEOComparisonTable = ({ title, headers, rows }: SEOComparisonTableProps) => {
  return (
    <div className="glass-card p-6 rounded-xl space-y-4 overflow-x-auto">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, i) => (
              <th key={i} className="py-2 px-3 text-foreground font-semibold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50">
              {row.map((cell, j) => (
                <td key={j} className="py-2 px-3 text-muted-foreground">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface SEOStepGuideProps {
  title: string;
  steps: { step: string; description: string }[];
}

export const SEOStepGuide = ({ title, steps }: SEOStepGuideProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <div className="space-y-3">
        {steps.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
              {index + 1}
            </div>
            <div>
              <p className="font-medium text-foreground">{item.step}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SEOContentSection;
