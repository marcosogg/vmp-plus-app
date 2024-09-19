import React from 'react';
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false,
  ...props 
}) => {
  return (
    <ShadcnButton
      className={cn(className)}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    />
  );
};

export default Button;