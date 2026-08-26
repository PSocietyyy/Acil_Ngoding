import Icon from '@/app/components/atoms/Icon';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  className = '',
}: TestimonialCardProps) {
  return (
    <div
      className={`relative p-8 rounded-2xl bg-white border border-[var(--color-gray-200)] transition-shadow duration-250 hover:shadow-[var(--shadow-md)] ${className}`}
    >
      <div className="text-[var(--color-primary)]/20 mb-4">
        <Icon name="quote" size={40} />
      </div>
      <p className="text-[var(--color-gray-600)] text-base leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-semibold text-sm">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-[family-name:var(--font-sora)] text-sm font-semibold text-[var(--color-black)]">
            {name}
          </p>
          <p className="text-xs text-[var(--color-gray-400)]">{role}</p>
        </div>
      </div>
    </div>
  );
}
