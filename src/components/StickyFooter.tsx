
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border shadow-lg lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex-1">
          <p className="text-sm font-medium">Need more calculators?</p>
          <p className="text-xs text-muted-foreground">Explore all our free tools</p>
        </div>
        <Button asChild size="sm" className="gap-2">
          <Link to="/">
            <Calculator className="h-4 w-4" />
            Explore
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyFooter;
