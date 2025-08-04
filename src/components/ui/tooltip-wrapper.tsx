
import React from 'react';
import { cn } from '@/lib/utils';
import { HelpCircle } from 'lucide-react';

interface TooltipWrapperProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  showIcon?: boolean;
  className?: string;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  children,
  content,
  position = 'top',
  showIcon = false,
  className
}) => {
  const positionClasses = {
    top: '-top-12 left-1/2 -translate-x-1/2',
    bottom: '-bottom-12 left-1/2 -translate-x-1/2',
    left: 'top-1/2 -left-2 -translate-y-1/2 -translate-x-full',
    right: 'top-1/2 -right-2 -translate-y-1/2 translate-x-full',
  };

  return (
    <div className={cn("relative inline-block tooltip-trigger group", className)}>
      <div className="flex items-center gap-2">
        {children}
        {showIcon && (
          <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-primary cursor-help" />
        )}
      </div>
      
      <div className={cn(
        'tooltip absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg',
        'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
        'transition-all duration-200 ease-out',
        'pointer-events-none whitespace-nowrap',
        positionClasses[position]
      )}>
        {content}
        <div className={cn(
          'absolute w-2 h-2 bg-gray-900 rotate-45',
          position === 'top' && 'bottom-1 left-1/2 -translate-x-1/2',
          position === 'bottom' && 'top-1 left-1/2 -translate-x-1/2',
          position === 'left' && 'top-1/2 right-1 -translate-y-1/2',
          position === 'right' && 'top-1/2 left-1 -translate-y-1/2',
        )} />
      </div>
    </div>
  );
};

export { TooltipWrapper };
