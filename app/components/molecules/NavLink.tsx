import Link from 'next/link';

interface NavLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  label,
  href,
  isActive = false,
  onClick,
  className = '',
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
        isActive
          ? 'text-[var(--color-primary)]'
          : 'text-[var(--color-gray-600)] hover:text-[var(--color-black)]'
      } ${className}`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-200 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}
