import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md' 
}) => {
  const variants = {
    primary: 'bg-blue-900/50 text-blue-300 border border-blue-700',
    secondary: 'bg-gray-700 text-gray-300 border border-gray-600',
    success: 'bg-green-900/50 text-green-300 border border-green-700',
    warning: 'bg-yellow-900/50 text-yellow-300 border border-yellow-700',
    error: 'bg-red-900/50 text-red-300 border border-red-700',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1.5 text-sm',
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};