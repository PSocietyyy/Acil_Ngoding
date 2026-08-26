/** Navigasi */
export interface NavLink {
  id: string;
  label: string;
  href: string;
  order: number;
}

/** Statistik angka */
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  order: number;
}

/** Program / konsentrasi studi */
export interface Program {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  badgeVariant: 'red' | 'yellow' | 'green';
  order: number;
}

/** Keunggulan prodi */
export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  order: number;
}

/** Item galeri kegiatan */
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  order: number;
}

/** Testimoni mahasiswa/alumni */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarSrc?: string;
  order: number;
}

/** Item FAQ */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

/** Link footer */
export interface FooterLink {
  id: string;
  label: string;
  href: string;
  order: number;
}

/** Info kontak */
export interface ContactInfo {
  id: string;
  iconName: string;
  label: string;
  value: string;
  order: number;
}
