import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'ghost' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-[#700486]/30";

  const sizeClasses = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2.5 font-semibold"
  }[size];

  const variantClasses = {
    primary: "bg-[#700486] text-white hover:bg-[#58036B] shadow-md shadow-[#700486]/20 hover:shadow-lg hover:shadow-[#700486]/30 active:scale-[0.98]",
    secondary: "bg-white text-[#700486] border border-[#700486] hover:bg-[#F3EAF6] shadow-sm active:scale-[0.98]",
    white: "bg-white text-[#700486] hover:bg-[#FAF7FC] shadow-lg shadow-black/10 active:scale-[0.98] font-semibold",
    ghost: "bg-transparent text-[#700486] hover:bg-[#F3EAF6] active:scale-[0.98]",
    'outline-white': "bg-transparent text-white border-2 border-white/60 hover:bg-white/10 active:scale-[0.98]"
  }[variant];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
      {content}
    </button>
  );
};
