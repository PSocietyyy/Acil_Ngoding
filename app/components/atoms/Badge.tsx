interface BadgeProps {
  label: string;
  variant?: 'red' | 'yellow' | 'green';
  className?: string;
}

export default function Badge({
  label,
  variant = 'red',
  className = '',
}: BadgeProps) {
  const variantStyles = {
    red: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
    yellow: 'bg-[var(--color-yellow)]/10 text-[var(--color-yellow)]',
    green: 'bg-[var(--color-green)]/10 text-[var(--color-green)]',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
