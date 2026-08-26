import Link from 'next/link';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  label,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]';

  const variantStyles = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:shadow-[var(--shadow-primary)]',
    outline:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
    ghost:
      'text-[var(--color-gray-600)] hover:text-[var(--color-black)] hover:bg-[var(--color-gray-100)]',
  };

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {label}
    </button>
  );
}
