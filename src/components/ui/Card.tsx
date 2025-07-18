import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  const Component = hover ? motion.div : 'div';
  const motionProps = hover ? {
    whileHover: { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 10px 10px -5px rgb(0 0 0 / 0.2)' },
    transition: { duration: 0.2 }
  } : {};

  return (
    <Component
      className={`bg-gray-800 border border-gray-700 rounded-xl shadow-lg ${className}`}
      {...motionProps}
    >
      {children}
    </Component>
  );
};