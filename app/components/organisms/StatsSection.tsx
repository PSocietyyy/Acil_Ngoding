import StatCard from '@/app/components/molecules/StatCard';
import stats from '@/lib/data/stats';

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-[var(--color-black)] via-[#1a1a1a] to-[var(--color-black)] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-yellow)]/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
