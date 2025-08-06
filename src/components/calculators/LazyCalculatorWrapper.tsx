
import React, { Suspense, memo } from 'react';
import { Calculator } from 'lucide-react';

interface LazyCalculatorWrapperProps {
  children: React.ReactNode;
}

const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center min-h-[300px] animate-fade-in">
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-[#FFE066]/30 border-t-[#00B86B] rounded-full animate-spin"></div>
        <Calculator className="absolute inset-0 m-auto w-6 h-6 text-[#00B86B] animate-pulse" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-sm font-medium text-[#00B86B]">Loading Calculator...</p>
        <p className="text-xs text-muted-foreground">Preparing your financial tools</p>
      </div>
    </div>
  </div>
));

const LazyCalculatorWrapper: React.FC<LazyCalculatorWrapperProps> = memo(({ children }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="animate-fade-in">
        {children}
      </div>
    </Suspense>
  );
});

export default LazyCalculatorWrapper;
