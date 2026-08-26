'use client';

import { useCounter } from '@/app/components/hooks/useCounter';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  className?: string;
}

export default function StatCard({
  value,
  suffix,
  label,
  className = '',
}: StatCardProps) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <p className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-extrabold text-white">
        {count}
        <span className="text-[var(--color-yellow)]">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-white/80">{label}</p>
    </div>
  );
}
