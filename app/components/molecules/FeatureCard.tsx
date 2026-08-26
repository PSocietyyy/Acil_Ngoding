import Icon from '@/app/components/atoms/Icon';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  iconName,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`group p-8 rounded-2xl bg-white border border-[var(--color-gray-200)] transition-all duration-250 ease-out hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary)]/8 text-[var(--color-primary)] mb-5 transition-colors duration-200 group-hover:bg-[var(--color-primary)] group-hover:text-white">
        <Icon name={iconName} size={28} />
      </div>
      <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-[var(--color-black)] mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-gray-600)]">
        {description}
      </p>
    </div>
  );
}
