interface SectionTagProps {
  label: string;
  className?: string;
}

export default function SectionTag({ label, className = '' }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] ${className}`}
    >
      <span className="inline-block w-8 h-[2px] bg-[var(--color-primary)] rounded-full" />
      {label}
    </span>
  );
}
