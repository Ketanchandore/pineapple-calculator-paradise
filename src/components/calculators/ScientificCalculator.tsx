import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, RotateCcw } from 'lucide-react';

const ScientificCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null as number | null);
  const [operation, setOperation] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);
  const [isRadians, setIsRadians] = useState(true);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation('');
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case '×': return firstValue * secondValue;
      case '÷': return firstValue / secondValue;
      case '=': return secondValue;
      default: return secondValue;
    }
  };

  const scientificOperation = (op: string) => {
    const value = parseFloat(display);
    let result: number;

    switch (op) {
      case 'sin':
        result = Math.sin(isRadians ? value : (value * Math.PI) / 180);
        break;
      case 'cos':
        result = Math.cos(isRadians ? value : (value * Math.PI) / 180);
        break;
      case 'tan':
        result = Math.tan(isRadians ? value : (value * Math.PI) / 180);
        break;
      case 'ln':
        result = Math.log(value);
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'x²':
        result = value * value;
        break;
      case 'x³':
        result = value * value * value;
        break;
      case '1/x':
        result = 1 / value;
        break;
      case 'e^x':
        result = Math.exp(value);
        break;
      case '10^x':
        result = Math.pow(10, value);
        break;
      case 'x!':
        result = factorial(value);
        break;
      case 'π':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      default:
        result = value;
    }

    setDisplay(String(result));
    setWaitingForOperand(true);
  };

  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const memoryOperation = (op: string) => {
    const value = parseFloat(display);
    switch (op) {
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setDisplay(String(memory));
        setWaitingForOperand(true);
        break;
      case 'M+':
        setMemory(memory + value);
        break;
      case 'M-':
        setMemory(memory - value);
        break;
      case 'MS':
        setMemory(value);
        break;
    }
  };

  const ButtonComponent = ({ 
    onClick, 
    children, 
    className = "",
    variant = "outline" as const
  }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "outline" | "default" | "secondary" | "destructive";
  }) => (
    <Button
      onClick={onClick}
      variant={variant}
      className={`h-12 text-sm font-medium ${className}`}
    >
      {children}
    </Button>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calculator className="h-6 w-6 text-primary" />
          Scientific Calculator
        </CardTitle>
        <div className="flex justify-center gap-2 mt-2">
          <Badge variant={isRadians ? "default" : "secondary"}>
            RAD
          </Badge>
          <Badge variant={!isRadians ? "default" : "secondary"}>
            DEG
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Display */}
        <div className="bg-muted p-4 rounded-lg text-right">
          <div className="text-3xl font-mono break-all">
            {display}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-6 gap-2">
          {/* Row 1: Memory and Mode */}
          <ButtonComponent onClick={() => memoryOperation('MC')} variant="secondary">MC</ButtonComponent>
          <ButtonComponent onClick={() => memoryOperation('MR')} variant="secondary">MR</ButtonComponent>
          <ButtonComponent onClick={() => memoryOperation('M+')} variant="secondary">M+</ButtonComponent>
          <ButtonComponent onClick={() => memoryOperation('M-')} variant="secondary">M-</ButtonComponent>
          <ButtonComponent onClick={() => memoryOperation('MS')} variant="secondary">MS</ButtonComponent>
          <ButtonComponent onClick={() => setIsRadians(!isRadians)} variant="secondary">
            {isRadians ? 'RAD' : 'DEG'}
          </ButtonComponent>

          {/* Row 2: Scientific Functions */}
          <ButtonComponent onClick={() => scientificOperation('sin')}>sin</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('cos')}>cos</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('tan')}>tan</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('ln')}>ln</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('log')}>log</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('x!')}>x!</ButtonComponent>

          {/* Row 3: More Functions */}
          <ButtonComponent onClick={() => scientificOperation('sqrt')}>√x</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('x²')}>x²</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('x³')}>x³</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('1/x')}>1/x</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('e^x')}>e^x</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('10^x')}>10^x</ButtonComponent>

          {/* Row 4: Constants and Clear */}
          <ButtonComponent onClick={() => scientificOperation('π')}>π</ButtonComponent>
          <ButtonComponent onClick={() => scientificOperation('e')}>e</ButtonComponent>
          <ButtonComponent onClick={clear} variant="destructive" className="col-span-2">
            <RotateCcw className="h-4 w-4 mr-1" />
            Clear
          </ButtonComponent>
          <ButtonComponent onClick={() => setDisplay(display.slice(0, -1) || '0')}>⌫</ButtonComponent>
          <ButtonComponent onClick={() => performOperation('÷')}>÷</ButtonComponent>

          {/* Row 5: Numbers and Operations */}
          <ButtonComponent onClick={() => inputNumber('7')}>7</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('8')}>8</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('9')}>9</ButtonComponent>
          <ButtonComponent onClick={() => performOperation('×')}>×</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('(')}>(</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber(')')}>)</ButtonComponent>

          {/* Row 6 */}
          <ButtonComponent onClick={() => inputNumber('4')}>4</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('5')}>5</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('6')}>6</ButtonComponent>
          <ButtonComponent onClick={() => performOperation('-')}>-</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('00')}>00</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('%')}>%</ButtonComponent>

          {/* Row 7 */}
          <ButtonComponent onClick={() => inputNumber('1')}>1</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('2')}>2</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('3')}>3</ButtonComponent>
          <ButtonComponent onClick={() => performOperation('+')}>+</ButtonComponent>
          <ButtonComponent onClick={() => inputNumber('0')} className="col-span-2">0</ButtonComponent>

          {/* Row 8 */}
          <ButtonComponent onClick={() => setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)}>±</ButtonComponent>
          <ButtonComponent onClick={inputDecimal}>.</ButtonComponent>
          <ButtonComponent onClick={() => performOperation('=')} variant="default" className="col-span-4">
            =
          </ButtonComponent>
        </div>

        {/* Instructions */}
        <div className="text-sm text-muted-foreground text-center">
          <p>Use trigonometric functions in {isRadians ? 'radians' : 'degrees'}. Memory functions: MC (clear), MR (recall), M+ (add), M- (subtract), MS (store).</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScientificCalculator;