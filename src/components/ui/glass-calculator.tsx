import React from "react";
import { LucideIcon, Printer, Share2, RefreshCcw, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface GlassCalculatorWrapperProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  children: React.ReactNode;
  onReset?: () => void;
  onCalculate?: () => void;
  calculateDisabled?: boolean;
  showActions?: boolean;
  className?: string;
}

export const GlassCalculatorWrapper: React.FC<GlassCalculatorWrapperProps> = ({
  title,
  subtitle,
  icon: Icon,
  children,
  onReset,
  onCalculate,
  calculateDisabled = false,
  showActions = true,
  className,
}) => {
  const handlePrint = () => window.print();
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Share this calculator with friends." });
  };

  return (
    <div className={cn("glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in", className)}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent 
                      flex items-center justify-center shadow-glow">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-gradient">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>

      {/* Content */}
      {children}

      {/* Actions */}
      {showActions && (
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border/50">
          {onCalculate && (
            <button
              type="button"
              className="btn-gradient flex items-center gap-2 touch-target"
              onClick={onCalculate}
              disabled={calculateDisabled}
            >
              <Sparkles className="w-4 h-4" />
              Calculate
            </button>
          )}
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="glass-button px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 
                       hover:bg-muted/50 transition-colors touch-target"
            >
              <RefreshCcw className="w-4 h-4" />
              Reset
            </button>
          )}
          <button
            type="button"
            onClick={handlePrint}
            className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-2 
                     hover:bg-muted/50 transition-colors touch-target"
            aria-label="Print"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-2 
                     text-primary hover:bg-primary/10 transition-colors touch-target"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

interface GlassResultCardProps {
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
}

export const GlassResultCard: React.FC<GlassResultCardProps> = ({ 
  children, 
  highlight = false,
  className 
}) => (
  <div
    className={cn(
      "glass-hero rounded-2xl p-6 animate-scale-in",
      highlight && "ring-2 ring-primary/50 shadow-glow",
      className
    )}
  >
    {children}
  </div>
);

interface GlassInputGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassInputGroup: React.FC<GlassInputGroupProps> = ({ children, className }) => (
  <div className={cn("space-y-4", className)}>
    {children}
  </div>
);

interface ResultStatProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export const ResultStat: React.FC<ResultStatProps> = ({ label, value, highlight }) => (
  <div className="glass-card rounded-xl p-4 text-center">
    <div className={cn(
      "text-2xl md:text-3xl font-display font-bold",
      highlight ? "text-gradient" : "text-foreground"
    )}>
      {value}
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

interface GlassSectionProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const GlassSection: React.FC<GlassSectionProps> = ({ 
  title, 
  icon: Icon, 
  children,
  className 
}) => (
  <section className={cn("glass-card rounded-2xl p-6 md:p-8 animate-fade-in", className)}>
    <div className="flex items-center gap-3 mb-4">
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      )}
      <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

export default GlassCalculatorWrapper;
