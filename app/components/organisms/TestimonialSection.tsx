'use client';

import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import TestimonialCard from '@/app/components/molecules/TestimonialCard';
import testimonials from '@/lib/data/testimonials';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function TestimonialSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16"
      >
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTag label="Testimoni" className="justify-center mb-4" />
          <Heading level={2} className="max-w-2xl mx-auto">
            Apa Kata Mereka?
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`animate-on-scroll stagger-${i + 1}`}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
