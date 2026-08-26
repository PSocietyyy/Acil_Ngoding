import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { id: 'beranda',     label: 'Beranda',      href: '#beranda',     order: 1 },
  { id: 'tentang',     label: 'Tentang',      href: '#tentang',     order: 2 },
  { id: 'visi-misi',   label: 'Visi & Misi',  href: '#visi-misi',   order: 3 },
  { id: 'program',     label: 'Program',      href: '#program',     order: 4 },
  { id: 'keunggulan',  label: 'Keunggulan',   href: '#keunggulan',  order: 5 },
  { id: 'galeri',      label: 'Galeri',       href: '#galeri',      order: 6 },
  { id: 'faq',         label: 'FAQ',          href: '#faq',         order: 7 },
];

export default navLinks.sort((a, b) => a.order - b.order);
