import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Ahmad Fauzan',
    role: 'Mahasiswa Angkatan 2022',
    quote:
      'Kuliah di Teknik Informatika UMC membuka wawasan saya tentang dunia teknologi. Dosen-dosennya sangat mendukung dan fasilitas lab-nya lengkap untuk praktik langsung.',
    order: 1,
  },
  {
    id: 'testimonial-2',
    name: 'Siti Nurhaliza',
    role: 'Alumni 2023 — Software Engineer',
    quote:
      'Bekal ilmu dari prodi TI UMC sangat relevan dengan kebutuhan industri. Saya langsung diterima bekerja setelah lulus berkat portofolio yang dibangun selama kuliah.',
    order: 2,
  },
  {
    id: 'testimonial-3',
    name: 'Rizky Pratama',
    role: 'Mahasiswa Angkatan 2024',
    quote:
      'Program magang dan kerjasama industri di sini luar biasa. Saya mendapat kesempatan magang di perusahaan teknologi sebelum semester akhir.',
    order: 3,
  },
];

export default testimonials.sort((a, b) => a.order - b.order);
