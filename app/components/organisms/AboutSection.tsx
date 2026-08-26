'use client';

import Image from 'next/image';
import SectionTag from '@/app/components/atoms/SectionTag';
import Heading from '@/app/components/atoms/Heading';
import BodyText from '@/app/components/atoms/BodyText';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function AboutSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="tentang"
      className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="max-w-[1360px] mx-auto px-6 md:px-8 xl:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (5 cols on desktop) */}
          <div className="animate-on-scroll lg:col-span-5">
            <SectionTag label="Tentang Prodi" className="mb-4" />
            <Heading level={2} className="mb-6">
              Membangun Fondasi Kuat di Bidang Teknologi Informasi
            </Heading>
            <BodyText size="lg" className="mb-6">
              Program Studi S1 Teknik Informatika Universitas Muhammadiyah
              Cirebon (UMC) adalah institusi pendidikan tinggi yang berdedikasi
              untuk mencetak lulusan unggul, inovatif, dan berakhlak mulia di
              bidang teknologi informasi.
            </BodyText>
            <BodyText className="mb-8">
              Kami membekali mahasiswa dengan keahlian praktis dan teoretis yang
              relevan dengan kebutuhan industri digital masa kini melalui
              kurikulum berbasis kompetensi dan kerjasama dengan dunia usaha.
            </BodyText>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-gray-200)]">
              <div>
                <p className="font-[family-name:var(--font-sora)] text-xl font-bold text-[var(--color-primary)]">
                  Akreditasi
                </p>
                <p className="text-sm text-[var(--color-gray-600)]">
                  Program Studi Unggul & Terakreditasi
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-sora)] text-xl font-bold text-[var(--color-green)]">
                  Fasilitas
                </p>
                <p className="text-sm text-[var(--color-gray-600)]">
                  Kampus & Lab Komputer Lengkap
                </p>
              </div>
            </div>
          </div>

          {/* Wider Image Column (7 cols on desktop) */}
          <div className="animate-on-scroll stagger-2 lg:col-span-7 flex flex-col gap-5">
            {/* Primary Wide Image: Gedung UMC (Wide Aspect 16/9) */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group border border-[var(--color-gray-200)]">
              <Image
                src="/assets/gedung.jpg"
                alt="Gedung Utama Universitas Muhammadiyah Cirebon"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-sora)] text-lg font-bold">Gedung Utama UMC</p>
                  <p className="text-xs text-white/75">Kampus Universitas Muhammadiyah Cirebon</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs text-white">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-yellow)]" />
                  Pusat Pembelajaran
                </span>
              </div>
            </div>

            {/* Secondary Wide Image Strip (Wide Aspect 21/9 or 2.5/1) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md group border border-[var(--color-gray-200)]">
                <Image
                  src="/assets/Foto-Kegiatan-Prodi/Mahasiswa Teknik Informatika sedang melakukan proses pembelajaran.jpeg"
                  alt="Mahasiswa Teknik Informatika dalam proses pembelajaran"
                  fill
                  sizes="(max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white">
                  <p className="text-xs font-semibold">Pembelajaran Interaktif</p>
                  <p className="text-[10px] text-white/70">Ruang Kelas Modern</p>
                </div>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md group border border-[var(--color-gray-200)]">
                <Image
                  src="/assets/Foto-Kegiatan-Prodi/foto lab komputer.jpg"
                  alt="Laboratorium Komputer UMC"
                  fill
                  sizes="(max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white">
                  <p className="text-xs font-semibold">Lab Komputer</p>
                  <p className="text-[10px] text-white/70">Praktik Hands-on</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
