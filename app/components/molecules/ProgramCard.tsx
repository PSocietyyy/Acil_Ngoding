import Badge from '@/app/components/atoms/Badge';
import Icon from '@/app/components/atoms/Icon';

interface ProgramCardProps {
  title: string;
  description: string;
  iconName: string;
  badge: string;
  badgeVariant: 'red' | 'yellow' | 'green';
  className?: string;
}

export default function ProgramCard({
  title,
  description,
  iconName,
  badge,
  badgeVariant,
  className = '',
}: ProgramCardProps) {
  return (
    <div
      className={`group relative overflow-hidden p-8 rounded-2xl bg-white border border-[var(--color-gray-200)] transition-all duration-250 ease-out hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 ${className}`}
    >
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-yellow)] to-[var(--color-green)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
          <Icon name={iconName} size={28} />
        </div>
      </div>

      <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[var(--color-black)] mb-3">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-gray-600)]">
        {description}
      </p>
    </div>
  );
}
