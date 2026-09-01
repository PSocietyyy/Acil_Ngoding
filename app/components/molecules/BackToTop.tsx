'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/atoms/Icon';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Trigger check on initial mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[var(--color-primary)] text-white shadow-lg shadow-red-600/30 hover:bg-[var(--color-primary-dark)] hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/40 active:translate-y-0 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center group ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon name="arrowUp" size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
