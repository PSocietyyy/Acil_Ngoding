'use client';

import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import Icon from '@/app/components/atoms/Icon';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function VisionMission() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="visi-misi"
      className="py-16 md:py-20 lg:py-24 bg-[var(--color-gray-50)]"
    >
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16"
      >
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTag label="Visi & Misi" className="justify-center mb-4" />
          <Heading level={2} className="max-w-2xl mx-auto">
            Arah dan Tujuan Prodi Teknik Informatika
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi Card */}
          <div className="animate-on-scroll stagger-1 relative overflow-hidden p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-6">
                <Icon name="eye" size={28} />
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold mb-4">
                Visi
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                &ldquo;Menjadi Program Studi yang Unggul dalam mencetak Tenaga
                terampil yang Islami dan Mandiri di Wilayah Jawa Barat.&rdquo;
              </p>
            </div>
          </div>

          {/* Misi Card */}
          <div className="animate-on-scroll stagger-2 relative overflow-hidden p-10 rounded-3xl bg-gradient-to-br from-[var(--color-green)] to-[#006830] text-white">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-6">
                <Icon name="target" size={28} />
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold mb-4">
                Misi
              </h3>
              <ul className="space-y-3">
                {[
                  'Menanamkan nilai-nilai Islam kepada seluruh civitas akademika secara komprehensif.',
                  'Menyelenggarakan pendidikan berorientasi kompetensi rekayasa teknologi sesuai kebutuhan industri.',
                  'Melaksanakan penelitian bidang rekayasa teknologi melalui kerjasama industri dan pemerintah.',
                  'Menyelenggarakan pengabdian masyarakat di bidang rekayasa teknologi.',
                  'Menumbuhkan sikap kewirausahaan dalam bidang rekayasa teknologi.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-yellow)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
