import { type ReactNode } from 'react';

interface BodyTextProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg';
  className?: string;
}

export default function BodyText({
  children,
  size = 'base',
  className = '',
}: BodyTextProps) {
  const sizeStyles = {
    sm: 'text-sm leading-[1.6]',
    base: 'text-base leading-[1.7]',
    lg: 'text-lg leading-[1.75]',
  };

  return (
    <p
      className={`font-[family-name:var(--font-plus-jakarta-sans)] text-[var(--color-gray-600)] ${sizeStyles[size]} ${className}`}
    >
      {children}
    </p>
  );
}
