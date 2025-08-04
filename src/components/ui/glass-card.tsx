
import React from 'react';
import { Card, CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GlassCardProps extends CardProps {
  intensity?: 'light' | 'medium' | 'strong';
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, intensity = 'medium', hover = false, glow = false, ...props }, ref) => {
    const intensityClasses = {
      light: 'backdrop-blur-sm bg-white/10 border-white/10',
      medium: 'backdrop-blur-md bg-white/20 border-white/20',
      strong: 'backdrop-blur-lg bg-white/30 border-white/30',
    };

    return (
      <Card
        ref={ref}
        className={cn(
          'glass-card border rounded-2xl',
          intensityClasses[intensity],
          hover && 'hover:bg-white/25 hover:border-white/25 hover:shadow-2xl hover:scale-[1.02]',
          glow && 'shadow-lg shadow-primary/20',
          'transition-all duration-300 ease-out',
          className
        )}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
export type { GlassCardProps };
