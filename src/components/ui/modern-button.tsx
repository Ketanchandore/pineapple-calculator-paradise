
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ModernButtonProps extends ButtonProps {
  loading?: boolean;
  glassEffect?: boolean;
  neuroEffect?: boolean;
  ripple?: boolean;
}

const ModernButton = React.forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, children, loading, glassEffect, neuroEffect, ripple, disabled, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && !disabled && !loading) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { x, y, id: Date.now() };
        
        setRipples(prev => [...prev, newRipple]);
        
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 600);
      }
      
      if (onClick && !disabled && !loading) {
        onClick(e);
      }
    };

    const buttonClass = cn(
      "relative overflow-hidden transition-all duration-300 font-semibold",
      glassEffect && "glass-button",
      neuroEffect && "neuro-button",
      !glassEffect && !neuroEffect && "btn-modern",
      "focus-ring",
      (loading || disabled) && "opacity-50 cursor-not-allowed",
      className
    );

    return (
      <Button
        ref={ref}
        className={buttonClass}
        disabled={disabled || loading}
        onClick={handleClick}
        {...props}
      >
        {ripple && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {ripples.map(ripple => (
              <span
                key={ripple.id}
                className="absolute bg-white/30 rounded-full animate-ping"
                style={{
                  left: ripple.x - 10,
                  top: ripple.y - 10,
                  width: 20,
                  height: 20,
                }}
              />
            ))}
          </div>
        )}
        
        {loading && (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        )}
        
        <span className="relative z-10">
          {children}
        </span>
      </Button>
    );
  }
);

ModernButton.displayName = "ModernButton";

export { ModernButton };
export type { ModernButtonProps };
