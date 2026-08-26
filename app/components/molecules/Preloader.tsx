'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const criticalImages = [
  '/assets/gedung.jpg',
  '/assets/Logo-UMC-1.png',
  '/assets/Foto-Kegiatan-Prodi/Mahasiswa Teknik Informatika sedang Ujian Tengah Semester.jpg',
  '/assets/Foto-Kegiatan-Prodi/Mahasiswa Teknik Informatika sedang melakukan proses pembelajaran.jpeg',
  '/assets/Foto-Kegiatan-Prodi/foto lab komputer.jpg',
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalItems = criticalImages.length;

    // Preload critical images in parallel
    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        const currentProgress = Math.min(
          Math.round((loadedCount / totalItems) * 100),
          100
        );
        setProgress(currentProgress);
      };
    });

    // Fallback progress timer in case images load instantly or take time
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Small delay at 100% for smooth visual completion
      const timer = setTimeout(() => {
        setIsFading(true);
        const hideTimer = setTimeout(() => {
          setIsLoading(false);
        }, 700);
        return () => clearTimeout(hideTimer);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[var(--color-black)] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFading ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/20 blur-[120px] pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo with pulse glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/30 blur-xl animate-pulse" />
          <Image
            src="/assets/Logo-UMC-1.png"
            alt="Logo UMC"
            width={72}
            height={72}
            className="relative w-18 h-18 object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-sora)] text-lg font-bold text-white mb-1">
          Teknik Informatika
        </h2>
        <p className="text-xs text-white/50 mb-8 tracking-wider uppercase">
          Universitas Muhammadiyah Cirebon
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-yellow)] to-[var(--color-green)] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-sora)] text-sm font-semibold text-white/80">
            {progress}%
          </span>
          <span className="text-xs text-white/40">| Mempersiapkan Tampilan...</span>
        </div>
      </div>
    </div>
  );
}
