import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export default function GalleryItem({
  src,
  alt,
  caption,
  className = '',
}: GalleryItemProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Overlay: Always visible on mobile (< lg), hover-trigger on desktop (>= lg) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
        <p className="text-white text-xs sm:text-sm font-medium font-[family-name:var(--font-plus-jakarta-sans)] leading-snug">
          {caption}
        </p>
      </div>
    </div>
  );
}
