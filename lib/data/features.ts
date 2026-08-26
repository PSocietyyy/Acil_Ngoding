import { Feature } from '@/types';

const features: Feature[] = [
  {
    id: 'kurikulum',
    title: 'Kurikulum Berbasis Industri',
    description:
      'Materi pembelajaran yang dirancang sesuai kebutuhan dunia usaha dan industri teknologi terkini.',
    iconName: 'book',
    order: 1,
  },
  {
    id: 'laboratorium',
    title: 'Laboratorium Modern',
    description:
      'Fasilitas lab komputer, ruang praktik jaringan, dan peralatan canggih untuk menunjang pembelajaran.',
    iconName: 'monitor',
    order: 2,
  },
  {
    id: 'dosen',
    title: 'Dosen Berpengalaman',
    description:
      'Tenaga pengajar bersertifikasi dengan pengalaman profesional di bidang rekayasa teknologi.',
    iconName: 'users',
    order: 3,
  },
  {
    id: 'magang',
    title: 'Program Magang Industri',
    description:
      'Kerjasama dengan industri dan instansi pemerintahan untuk pengalaman kerja nyata mahasiswa.',
    iconName: 'briefcase',
    order: 4,
  },
  {
    id: 'komunitas',
    title: 'Komunitas Aktif',
    description:
      'Kegiatan kemahasiswaan, seminar nasional, dan workshop yang membangun soft skill dan jejaring.',
    iconName: 'community',
    order: 5,
  },
  {
    id: 'lokasi',
    title: 'Lokasi Strategis',
    description:
      'Kampus yang mudah dijangkau di jantung kota Cirebon dengan lingkungan belajar yang kondusif.',
    iconName: 'location',
    order: 6,
  },
];

export default features.sort((a, b) => a.order - b.order);
