
import React from 'react';
import { CalculatorExamples, ExampleData } from '@/components/ui/calculator-examples';

const ageExamples: ExampleData[] = [
  {
    title: "Calculate Age for Adult Born in 1990",
    inputs: {
      "Date of Birth": "January 15, 1990"
    },
    output: "34 years, 0 months, 20 days",
    description: "Perfect example for someone born in the early 90s"
  },
  {
    title: "Calculate Age for Young Person",
    inputs: {
      "Date of Birth": "March 22, 2005"
    },
    output: "18 years, 10 months, 13 days", 
    description: "Great for calculating age of teenagers or young adults"
  },
  {
    title: "Calculate Age for Senior Born in 1955",
    inputs: {
      "Date of Birth": "July 8, 1955"
    },
    output: "68 years, 8 months, 27 days",
    description: "Example for calculating senior citizen ages"
  },
  {
    title: "Calculate Age for Child Born in 2015",
    inputs: {
      "Date of Birth": "December 10, 2015"
    },
    output: "8 years, 3 months, 25 days",
    description: "Perfect for calculating children's ages"
  }
];

interface AgeCalculatorExamplesProps {
  onUseExample?: (example: ExampleData) => void;
}

const AgeCalculatorExamples: React.FC<AgeCalculatorExamplesProps> = ({ onUseExample }) => {
  return (
    <CalculatorExamples 
      examples={ageExamples}
      onUseExample={onUseExample}
    />
  );
};

export default AgeCalculatorExamples;
