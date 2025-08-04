
import React, { forwardRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  autoFocusFirst?: boolean;
  tooltip?: string;
  onEnterPress?: () => void;
  onValidate?: (value: string) => string | null;
  validateOnChange?: boolean;
  icon?: React.ReactNode;
}

const EnhancedInput = forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ 
    className, 
    label, 
    error, 
    success, 
    autoFocusFirst, 
    tooltip, 
    onEnterPress, 
    onKeyDown, 
    onValidate,
    validateOnChange = false,
    icon,
    onChange,
    onBlur,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [localError, setLocalError] = useState<string | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const displayError = error || localError;

    useEffect(() => {
      if (autoFocusFirst && ref && 'current' in ref && ref.current) {
        const timer = setTimeout(() => {
          ref.current?.focus();
        }, 100);
        return () => clearTimeout(timer);
      }
    }, [autoFocusFirst, ref]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onEnterPress) {
        e.preventDefault();
        onEnterPress();
      }
      onKeyDown?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      
      if (validateOnChange && onValidate) {
        const validationError = onValidate(value);
        setLocalError(validationError);
      }
      
      onChange?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      
      if (onValidate && !validateOnChange) {
        const validationError = onValidate(e.target.value);
        setLocalError(validationError);
      }
      
      onBlur?.(e);
    };

    return (
      <div className="space-y-2 animate-fade-in">
        {label && (
          <div className="flex items-center gap-2">
            <Label htmlFor={props.id} className="font-medium text-sm">
              {label}
            </Label>
            {tooltip && (
              <div className="relative">
                <HelpCircle 
                  className="h-4 w-4 text-muted-foreground cursor-help" 
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                    <div className="bg-popover text-popover-foreground text-xs rounded-md px-3 py-2 shadow-lg border max-w-xs whitespace-pre-wrap">
                      {tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-popover"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          
          <Input
            ref={ref}
            className={cn(
              "transition-all duration-200 hover:shadow-md focus:shadow-lg",
              isFocused && "ring-2 ring-primary/20 scale-[1.01]",
              displayError && "border-red-500 focus:ring-red-200",
              success && "border-green-500 focus:ring-green-200",
              icon && "pl-10",
              className
            )}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            {...props}
          />
          
          {success && !displayError && (
            <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
          )}
          
          {displayError && (
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
          )}
        </div>
        
        {displayError && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {displayError}
          </p>
        )}
      </div>
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";

export { EnhancedInput };
