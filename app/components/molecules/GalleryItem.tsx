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
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <p className="text-white text-sm font-medium">{caption}</p>
      </div>
    </div>
  );
}
