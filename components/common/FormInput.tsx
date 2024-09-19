import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  error, 
  className, 
  id,
  ...props 
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId}>{label}</Label>
      <Input
        id={inputId}
        className={cn(
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;