
import { useState, useCallback } from 'react';

interface ValidationRule {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface ValidationErrors {
  [key: string]: string | null;
}

export const useInputValidation = (rules: Record<string, ValidationRule>) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = useCallback((name: string, value: string): string | null => {
    const rule = rules[name];
    if (!rule) return null;

    // Required validation
    if (rule.required && (!value || value.trim() === '')) {
      return 'This field is required';
    }

    // Skip other validations if value is empty and not required
    if (!value && !rule.required) return null;

    const numValue = parseFloat(value);

    // Min validation
    if (rule.min !== undefined && !isNaN(numValue) && numValue < rule.min) {
      return `Value must be at least ${rule.min}`;
    }

    // Max validation
    if (rule.max !== undefined && !isNaN(numValue) && numValue > rule.max) {
      return `Value must be at most ${rule.max}`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return 'Invalid format';
    }

    // Custom validation
    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  }, [rules]);

  const validateField = useCallback((name: string, value: string) => {
    const error = validate(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    return error === null;
  }, [validate]);

  const validateAll = useCallback((values: Record<string, string>) => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    Object.keys(rules).forEach(name => {
      const error = validate(name, values[name] || '');
      newErrors[name] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  }, [rules, validate]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const clearError = useCallback((name: string) => {
    setErrors(prev => ({
      ...prev,
      [name]: null
    }));
  }, []);

  return {
    errors,
    validateField,
    validateAll,
    clearErrors,
    clearError
  };
};
