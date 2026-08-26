import Image from 'next/image';
import Divider from '@/app/components/atoms/Divider';
import ContactItem from '@/app/components/molecules/ContactItem';
import navLinks from '@/lib/data/navLinks';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/Logo-UMC-1.png"
                alt="Logo Universitas Muhammadiyah Cirebon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <p className="font-[family-name:var(--font-sora)] text-sm font-bold">
                  Teknik Informatika
                </p>
                <p className="text-xs text-white/60">
                  Universitas Muhammadiyah Cirebon
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Mencetak lulusan unggul, inovatif, dan berakhlak mulia di bidang
              teknologi informasi.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-[family-name:var(--font-sora)] text-sm font-semibold mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-[family-name:var(--font-sora)] text-sm font-semibold mb-4">
              Program
            </h4>
            <ul className="space-y-2.5">
              {['Rekayasa Perangkat Lunak', 'Jaringan & Keamanan Siber', 'Sistem Informasi & Data'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-white/60">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-[family-name:var(--font-sora)] text-sm font-semibold mb-4">
              Kontak
            </h4>
            <div className="space-y-4">
              <ContactItem
                iconName="mapPin"
                label="Alamat"
                value="Jl. Fatahillah No. 32, Cirebon, Jawa Barat"
                className="!text-white [&_p]:!text-white/60 [&_p:last-child]:!text-white/80 [&>div:first-child]:!bg-white/10 [&>div:first-child]:!text-white/80"
              />
              <ContactItem
                iconName="mail"
                label="Email"
                value="ti@umc.ac.id"
                className="!text-white [&_p]:!text-white/60 [&_p:last-child]:!text-white/80 [&>div:first-child]:!bg-white/10 [&>div:first-child]:!text-white/80"
              />
              <ContactItem
                iconName="phone"
                label="Telepon"
                value="(0231) 123-456"
                className="!text-white [&_p]:!text-white/60 [&_p:last-child]:!text-white/80 [&>div:first-child]:!bg-white/10 [&>div:first-child]:!text-white/80"
              />
            </div>
          </div>
        </div>

        <Divider className="!bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Teknik Informatika — Universitas
            Muhammadiyah Cirebon. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 rounded-full bg-[var(--color-green)]" />
            Pendaftaran Dibuka
          </div>
        </div>
      </div>
    </footer>
  );
}
