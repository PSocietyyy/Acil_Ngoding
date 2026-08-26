interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <hr
      className={`border-0 h-px bg-[var(--color-gray-200)] ${className}`}
    />
  );
}
