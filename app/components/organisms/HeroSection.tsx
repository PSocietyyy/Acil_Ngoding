import Image from 'next/image';
import Link from 'next/link';

const tickerItems = [
  'Rekayasa Perangkat Lunak',
  'Keamanan Siber',
  'Kecerdasan Buatan',
  'Jaringan Komputer',
  'Sistem Informasi',
  'Pengabdian Masyarakat',
  'Seminar Nasional',
  'Mitra Industri',
];

export default function HeroSection() {
  const allItems = [...tickerItems, ...tickerItems]; // duplicate for seamless loop

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--color-black)' }}
    >
      {/* ── Light GPU-optimized background glows ── */}
      <div
        className="absolute top-0 right-0 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(223,26,34,0.22) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(242,169,0,0.08) 0%, transparent 65%)',
        }}
      />

      {/* ═══════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 xl:px-12 w-full pt-24 pb-8 md:pt-36 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_660px] gap-8 lg:gap-10 xl:gap-14 items-center">

            {/* ─────────────────────────────
                LEFT COLUMN — Content
            ───────────────────────────── */}
            <div className="flex flex-col">

              {/* Tag pill */}
              <div className="hero-tag self-start mb-5 sm:mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.07] border border-white/10 text-white/80 text-[11px] sm:text-xs font-semibold tracking-[0.1em] uppercase backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-green)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-green)]" />
                  </span>
                  PMB 2026 Dibuka
                </span>
              </div>

              {/* ── HEADLINE ── */}
              <div className="hero-headline mb-5 sm:mb-8">
                {/* Eyebrow line */}
                <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-2">
                  Universitas Muhammadiyah Cirebon
                </p>

                {/* Main title */}
                <h1 className="font-[family-name:var(--font-sora)] font-extrabold leading-[1.05] sm:leading-[1.0] tracking-[-0.02em] text-white">
                  {/* Line 1 */}
                  <span className="block text-[2.4rem] sm:text-[3.6rem] md:text-[4.2rem] xl:text-[5rem]">
                    Teknik
                  </span>
                  {/* Line 2 — with red stroke */}
                  <span
                    className="block text-[2.4rem] sm:text-[3.6rem] md:text-[4.2rem] xl:text-[5rem]"
                    style={{
                      WebkitTextStroke: '1.5px var(--color-primary)',
                      color: 'transparent',
                    }}
                  >
                    Informatika
                  </span>
                  {/* Line 3 — subtitle */}
                  <span className="block text-base sm:text-xl md:text-2xl font-semibold text-white/40 mt-1.5 sm:mt-2 tracking-normal">
                    Program Studi S1 — UMC
                  </span>
                </h1>
              </div>

              {/* Subtext */}
              <p className="hero-sub font-[family-name:var(--font-plus-jakarta-sans)] text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-[440px] mb-6 sm:mb-10">
                Kurikulum berbasis industri, laboratorium modern, dan ekosistem
                belajar yang mendorong Anda menjadi profesional digital unggul
                dan berakhlak mulia.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link
                  href="#cta"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm transition-all duration-200 hover:bg-[var(--color-primary-dark)] hover:shadow-[0_0_32px_rgba(223,26,34,0.5)] focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] text-center"
                >
                  Daftar Sekarang
                  <svg
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="#tentang"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-semibold text-white/70 hover:text-white hover:border-white/40 transition-colors duration-200 text-center"
                >
                  Pelajari lebih lanjut
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Link>
              </div>

              {/* ── MOBILE ENHANCED HERO CARD (visible on mobile/tablet) ── */}
              <div className="block lg:hidden mb-8">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                  <Image
                    src="/assets/gedung.jpg"
                    alt="Gedung Utama Universitas Muhammadiyah Cirebon"
                    fill
                    priority
                    quality={85}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Gedung UMC
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--color-yellow)] text-[var(--color-black)] text-[11px] font-bold shadow-md">
                      95% Kelulusan
                    </span>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                    <div>
                      <p className="text-xs font-bold font-[family-name:var(--font-sora)]">Kampus Utama UMC</p>
                      <p className="text-[10px] text-white/70">Fasilitas Pembelajaran Lengkap</p>
                    </div>
                    <span className="text-xs font-extrabold text-[var(--color-yellow)] font-[family-name:var(--font-sora)]">
                      1.200+ Mahasiswa
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Stats Bar ── */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-white/10">
                {[
                  { value: '1.200+', label: 'Mahasiswa Aktif' },
                  { value: '95%',    label: 'Tingkat Lulus' },
                  { value: '50+',    label: 'Mitra Industri' },
                ].map((s, i) => (
                  <div key={s.value} className={`hero-chip-${i + 1}`}>
                    <p className="font-[family-name:var(--font-sora)] text-lg sm:text-2xl font-extrabold text-white">
                      {s.value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/50 mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ─────────────────────────────
                RIGHT COLUMN — Desktop Photo Collage
            ───────────────────────────── */}
            <div className="hero-photo relative hidden lg:block">
              {/* ── Decorative red block behind ── */}
              <div
                className="absolute -bottom-6 -right-6 w-[80%] h-[60%] rounded-3xl"
                style={{ background: 'var(--color-primary)' }}
              />
              {/* ── Decorative yellow dot grid ── */}
              <div
                className="absolute -top-4 -left-4 w-28 h-28 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, var(--color-yellow) 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />

              {/* ── Main WIDER photo: Gedung UMC ── */}
              <div className="relative z-10 w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/10">
                <Image
                  src="/assets/gedung.jpg"
                  alt="Gedung Utama Universitas Muhammadiyah Cirebon"
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 1280px) 560px, 660px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Inner gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.15) 50%, transparent 80%)',
                  }}
                />

                {/* ── Location badge at top left ── */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Gedung Utama Kampus UMC
                </div>

                {/* ── Floating chip inside photo — top right ── */}
                <div className="hero-chip-1 absolute top-4 right-4 z-20 flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-[var(--color-green)]/15 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-base font-extrabold text-[var(--color-black)]">95%</p>
                    <p className="text-[10px] text-[var(--color-gray-600)] leading-tight">Tingkat Kelulusan</p>
                  </div>
                </div>

                {/* ── Floating chip inside photo — bottom right ── */}
                <div className="hero-chip-2 absolute bottom-4 right-4 z-20 flex items-center gap-2.5 bg-[var(--color-yellow)] rounded-2xl px-4 py-2.5 shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-base font-extrabold text-[var(--color-black)]">1.200+</p>
                    <p className="text-[10px] text-[var(--color-black)]/60 leading-tight">Mahasiswa Aktif</p>
                  </div>
                </div>
              </div>

              {/* ── Small floating secondary photo ── */}
              <div className="hero-chip-3 absolute -left-8 -bottom-6 z-30 w-44 h-32 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-white/20 rotate-[-3deg] transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <Image
                  src="/assets/Foto-Kegiatan-Prodi/foto lab komputer.jpg"
                  alt="Lab komputer Teknik Informatika UMC"
                  fill
                  sizes="176px"
                  quality={85}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Lab Komputer</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MARQUEE TICKER (bottom)
      ═══════════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/[0.07] py-3.5 overflow-hidden">
        {/* Left / right fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--color-black), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--color-black), transparent)' }}
        />

        <div className="animate-marquee">
          {allItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 whitespace-nowrap text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-white/30"
            >
              {item}
              <span
                className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background:
                    i % 3 === 0
                      ? 'var(--color-primary)'
                      : i % 3 === 1
                        ? 'var(--color-yellow)'
                        : 'var(--color-green)',
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
