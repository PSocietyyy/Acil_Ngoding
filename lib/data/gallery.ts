import { GalleryItem } from '@/types';

const gallery: GalleryItem[] = [
  {
    id: 'gedung-umc',
    src: '/assets/gedung.jpg',
    alt: 'Gedung Utama Universitas Muhammadiyah Cirebon',
    caption: 'Gedung Utama Kampus UMC',
    order: 1,
  },
  {
    id: 'seminar-nasional-1',
    src: '/assets/Foto-Kegiatan-Prodi/Seminar Nasional Prodi Teknik Informatika.jpeg',
    alt: 'Seminar Nasional Prodi Teknik Informatika UMC',
    caption: 'Seminar Nasional Prodi Teknik Informatika',
    order: 2,
  },
  {
    id: 'praktik-1',
    src: '/assets/Foto-Kegiatan-Prodi/foto mahasiswa teknik informatika yang sedang praktik.jpeg',
    alt: 'Mahasiswa Teknik Informatika sedang melakukan praktik',
    caption: 'Praktik Mahasiswa di Laboratorium',
    order: 3,
  },
  {
    id: 'pembelajaran',
    src: '/assets/Foto-Kegiatan-Prodi/Mahasiswa Teknik Informatika sedang melakukan proses pembelajaran.jpeg',
    alt: 'Mahasiswa Teknik Informatika sedang belajar di kelas',
    caption: 'Proses Pembelajaran di Kelas',
    order: 4,
  },
  {
    id: 'pengabdian',
    src: '/assets/Foto-Kegiatan-Prodi/pengabdian desa tingkat nasional fakultas teknik.jpeg',
    alt: 'Pengabdian desa tingkat nasional oleh Fakultas Teknik UMC',
    caption: 'Pengabdian Masyarakat Tingkat Nasional',
    order: 5,
  },
  {
    id: 'lab-komputer',
    src: '/assets/Foto-Kegiatan-Prodi/foto lab komputer.jpg',
    alt: 'Laboratorium komputer Prodi Teknik Informatika UMC',
    caption: 'Laboratorium Komputer Modern',
    order: 6,
  },
  {
    id: 'jaringan',
    src: '/assets/Foto-Kegiatan-Prodi/mahasiswa sedang melakukan pembelajaran jaringan komputer.jpeg',
    alt: 'Mahasiswa praktik jaringan komputer',
    caption: 'Pembelajaran Jaringan Komputer',
    order: 7,
  },
  {
    id: 'uts',
    src: '/assets/Foto-Kegiatan-Prodi/Mahasiswa Teknik Informatika sedang Ujian Tengah Semester.jpg',
    alt: 'Mahasiswa Teknik Informatika sedang ujian tengah semester',
    caption: 'Ujian Tengah Semester',
    order: 8,
  },
  {
    id: 'peta-desa',
    src: '/assets/Foto-Kegiatan-Prodi/peta administrasi desa cikondang karya mahasiswa prodi teknik informatika.jpeg',
    alt: 'Peta administrasi desa Cikondang karya mahasiswa',
    caption: 'Karya Pemetaan Desa Cikondang',
    order: 9,
  },
];

export default gallery.sort((a, b) => a.order - b.order);
