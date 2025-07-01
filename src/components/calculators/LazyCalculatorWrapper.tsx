
import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

interface LazyCalculatorWrapperProps {
  children: React.ReactNode;
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-[#00B86B]" />
      <p className="text-sm text-muted-foreground">Loading calculator...</p>
    </div>
  </div>
);

const LazyCalculatorWrapper: React.FC<LazyCalculatorWrapperProps> = ({ children }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
};

export default LazyCalculatorWrapper;
