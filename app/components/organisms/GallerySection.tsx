'use client';

import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import BodyText from '@/app/components/atoms/BodyText';
import GalleryItemComponent from '@/app/components/molecules/GalleryItem';
import gallery from '@/lib/data/gallery';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function GallerySection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="galeri"
      className="py-24 md:py-32 lg:py-40 bg-[var(--color-gray-50)]"
    >
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16"
      >
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTag label="Galeri Kegiatan" className="justify-center mb-4" />
          <Heading level={2} className="max-w-2xl mx-auto mb-4">
            Momen Kegiatan Mahasiswa
          </Heading>
          <BodyText className="max-w-xl mx-auto">
            Berbagai kegiatan akademik, seminar, pengabdian masyarakat, dan
            praktik lapangan yang memperkaya pengalaman mahasiswa.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <div
              key={item.id}
              className={`animate-on-scroll stagger-${Math.min(i + 1, 6)}`}
            >
              <GalleryItemComponent
                src={item.src}
                alt={item.alt}
                caption={item.caption}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
