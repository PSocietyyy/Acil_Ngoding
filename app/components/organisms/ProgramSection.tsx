'use client';

import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import BodyText from '@/app/components/atoms/BodyText';
import ProgramCard from '@/app/components/molecules/ProgramCard';
import programs from '@/lib/data/programs';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function ProgramSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="program"
      className="py-24 md:py-32 lg:py-40 bg-white"
    >
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16"
      >
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTag label="Program Studi" className="justify-center mb-4" />
          <Heading level={2} className="max-w-2xl mx-auto mb-4">
            Konsentrasi Keahlian
          </Heading>
          <BodyText className="max-w-xl mx-auto">
            Pilih bidang keahlian yang sesuai dengan minat dan bakat Anda untuk
            membangun karir di dunia teknologi.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div
              key={program.id}
              className={`animate-on-scroll stagger-${i + 1}`}
            >
              <ProgramCard
                title={program.title}
                description={program.description}
                iconName={program.iconName}
                badge={program.badge}
                badgeVariant={program.badgeVariant}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
