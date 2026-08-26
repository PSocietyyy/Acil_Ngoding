'use client';

import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import BodyText from '@/app/components/atoms/BodyText';
import FaqItemComponent from '@/app/components/molecules/FaqItem';
import faqs from '@/lib/data/faqs';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function FaqSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="faq"
      className="py-24 md:py-32 lg:py-40 bg-[var(--color-gray-50)]"
    >
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="animate-on-scroll">
            <SectionTag label="FAQ" className="mb-4" />
            <Heading level={2} className="mb-4">
              Pertanyaan yang Sering Diajukan
            </Heading>
            <BodyText className="max-w-md">
              Temukan jawaban atas pertanyaan umum seputar pendaftaran, kurikulum,
              dan kehidupan di Prodi Teknik Informatika UMC.
            </BodyText>
          </div>

          {/* Right: accordion */}
          <div className="animate-on-scroll stagger-2">
            {faqs.map((faq) => (
              <FaqItemComponent
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
