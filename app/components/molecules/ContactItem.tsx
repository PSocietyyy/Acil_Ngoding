import Icon from '@/app/components/atoms/Icon';

interface ContactItemProps {
  iconName: string;
  label: string;
  value: string;
  className?: string;
}

export default function ContactItem({
  iconName,
  label,
  value,
  className = '',
}: ContactItemProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
        <Icon name={iconName} size={18} />
      </div>
      <div>
        <p className="text-xs text-[var(--color-gray-400)] mb-0.5">{label}</p>
        <p className="text-sm font-medium text-[var(--color-black)]">{value}</p>
      </div>
    </div>
  );
}
