
import React, { forwardRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  autoFocusFirst?: boolean;
  tooltip?: string;
  onEnterPress?: () => void;
}

const EnhancedInput = forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, label, error, success, autoFocusFirst, tooltip, onEnterPress, onKeyDown, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (autoFocusFirst && ref && 'current' in ref && ref.current) {
        ref.current.focus();
      }
    }, [autoFocusFirst, ref]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onEnterPress) {
        e.preventDefault();
        onEnterPress();
      }
      onKeyDown?.(e);
    };

    return (
      <div className="space-y-2 animate-fade-in">
        {label && (
          <div className="flex items-center gap-2">
            <Label htmlFor={props.id} className="font-medium">
              {label}
            </Label>
            {tooltip && (
              <div className="relative group">
                <AlertCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                  <div className="bg-popover text-popover-foreground text-xs rounded-md px-2 py-1 shadow-lg border max-w-xs">
                    {tooltip}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-popover"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="relative">
          <Input
            ref={ref}
            className={cn(
              "transition-all duration-200 hover:shadow-md focus:shadow-lg",
              isFocused && "ring-2 ring-primary/20 scale-[1.02]",
              error && "border-red-500 focus:ring-red-200",
              success && "border-green-500 focus:ring-green-200",
              className
            )}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onKeyDown={handleKeyDown}
            {...props}
          />
          {success && (
            <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
          )}
          {error && (
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
          )}
        </div>
        {error && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";

export { EnhancedInput };
