import { Stat } from '@/types';

const stats: Stat[] = [
  { id: 'mahasiswa', value: 1200, suffix: '+', label: 'Mahasiswa Aktif',       order: 1 },
  { id: 'tahun',     value: 15,   suffix: '+', label: 'Tahun Berpengalaman',   order: 2 },
  { id: 'lulus',     value: 95,   suffix: '%', label: 'Tingkat Kelulusan',     order: 3 },
  { id: 'mitra',     value: 50,   suffix: '+', label: 'Mitra Industri',        order: 4 },
];

export default stats.sort((a, b) => a.order - b.order);
