import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-heading font-bold text-sm sm:text-base transition-all duration-200 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-lakshya-yellow text-lakshya-blue hover:bg-[#ffc818] focus:ring-lakshya-yellow",
    secondary: "bg-lakshya-blue text-white hover:bg-[#003e6b] focus:ring-lakshya-blue",
    outline: "border-2 border-lakshya-blue text-lakshya-blue hover:bg-lakshya-blue hover:text-white focus:ring-lakshya-blue",
    white: "bg-white text-lakshya-blue hover:bg-gray-100 focus:ring-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};