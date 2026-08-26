import Heading from '@/app/components/atoms/Heading';
import BodyText from '@/app/components/atoms/BodyText';
import Button from '@/app/components/atoms/Button';

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16 text-center">
        <Heading level={2} className="!text-white mb-6 max-w-2xl mx-auto">
          Siap Memulai Perjalanan Digital Anda?
        </Heading>
        <BodyText size="lg" className="!text-white/85 max-w-xl mx-auto mb-10">
          Bergabunglah bersama ribuan mahasiswa yang telah memilih Teknik
          Informatika UMC sebagai langkah awal menuju karir cemerlang.
        </BodyText>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            label="Daftar Sekarang"
            size="lg"
            className="!bg-white !text-[var(--color-primary)] hover:!bg-[var(--color-gray-100)]"
          />
          <Button
            label="Hubungi Kami"
            variant="outline"
            size="lg"
            className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)]"
          />
        </div>
      </div>
    </section>
  );
}
