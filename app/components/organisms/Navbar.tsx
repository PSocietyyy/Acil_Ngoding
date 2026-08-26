'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import NavLinkComponent from '@/app/components/molecules/NavLink';
import Button from '@/app/components/atoms/Button';
import Icon from '@/app/components/atoms/Icon';
import navLinks from '@/lib/data/navLinks';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-glass shadow-[var(--shadow-sm)]' : 'navbar-transparent'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-16 flex items-center justify-between h-18">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3 shrink-0">
          <Image
            src="/assets/Logo-UMC-1.png"
            alt="Logo Universitas Muhammadiyah Cirebon"
            width={44}
            height={44}
            className="w-11 h-11"
            priority
          />
          <div className="hidden sm:block">
            <p className={`font-[family-name:var(--font-sora)] text-sm font-bold leading-tight ${isScrolled ? 'text-[var(--color-black)]' : 'text-white'}`}>
              Teknik Informatika
            </p>
            <p className={`text-xs ${isScrolled ? 'text-[var(--color-gray-600)]' : 'text-white/70'}`}>
              Universitas Muhammadiyah Cirebon
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLinkComponent
              key={link.id}
              label={link.label}
              href={link.href}
              className={isScrolled ? '' : '!text-white/80 hover:!text-white'}
            />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button label="Daftar Sekarang" size="sm" href="#cta" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${isScrolled ? 'text-[var(--color-black)]' : 'text-white'}`}
          aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
        >
          <Icon name={isMobileOpen ? 'x' : 'menu'} size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-gray-200)] shadow-[var(--shadow-lg)]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLinkComponent
                key={link.id}
                label={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="py-3 text-base"
              />
            ))}
            <div className="pt-3">
              <Button
                label="Daftar Sekarang"
                size="md"
                href="#cta"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
