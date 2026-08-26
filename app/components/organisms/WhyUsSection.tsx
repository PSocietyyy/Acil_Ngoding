'use client';

import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import BodyText from '@/app/components/atoms/BodyText';
import FeatureCard from '@/app/components/molecules/FeatureCard';
import features from '@/lib/data/features';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function WhyUsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="keunggulan"
      className="py-24 md:py-32 lg:py-40 bg-white"
    >
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16"
      >
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTag label="Keunggulan" className="justify-center mb-4" />
          <Heading level={2} className="max-w-2xl mx-auto mb-4">
            Mengapa Memilih Teknik Informatika UMC?
          </Heading>
          <BodyText className="max-w-xl mx-auto">
            Kami menyediakan lingkungan belajar terbaik untuk mengembangkan
            potensi Anda di bidang teknologi informasi.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`animate-on-scroll stagger-${i + 1}`}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
