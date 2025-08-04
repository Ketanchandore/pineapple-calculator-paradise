
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExampleData {
  title: string;
  inputs: Record<string, string>;
  output: string;
  description?: string;
}

interface CalculatorExamplesProps {
  examples: ExampleData[];
  onUseExample?: (example: ExampleData) => void;
}

const CalculatorExamples: React.FC<CalculatorExamplesProps> = ({ 
  examples, 
  onUseExample 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mt-6 glass-card">
      <div className="p-4">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between hover:bg-transparent"
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <span className="font-semibold">Example Calculations</span>
          </div>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        <div className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="space-y-3">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-2">{example.title}</h4>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div>
                        <span className="font-medium text-muted-foreground">Inputs:</span>
                        <div className="space-y-1 mt-1">
                          {Object.entries(example.inputs).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-muted-foreground">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-muted-foreground">Result:</span>
                        <div className="mt-1 font-semibold text-primary">
                          {example.output}
                        </div>
                      </div>
                    </div>

                    {example.description && (
                      <p className="text-xs text-muted-foreground">{example.description}</p>
                    )}
                  </div>

                  {onUseExample && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onUseExample(example)}
                      className="ml-3"
                    >
                      Try This
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CalculatorExamples };
export type { ExampleData };
