import { FaqItem } from '@/types';

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa saja syarat pendaftaran masuk Prodi Teknik Informatika?',
    answer:
      'Calon mahasiswa harus lulusan SMA/SMK/sederajat. Pendaftaran dilakukan secara online melalui website resmi UMC dengan melampirkan berkas seperti ijazah, rapor, dan pas foto.',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Apakah ada beasiswa yang tersedia?',
    answer:
      'Ya, UMC menyediakan beberapa program beasiswa meliputi beasiswa prestasi akademik, beasiswa hafidz Quran, dan beasiswa bantuan ekonomi. Informasi lengkap dapat dilihat di website kampus.',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Berapa lama masa studi di Prodi Teknik Informatika?',
    answer:
      'Masa studi normal adalah 4 tahun (8 semester) untuk meraih gelar Sarjana Teknik (S.T.). Mahasiswa berprestasi dapat menyelesaikan lebih cepat melalui program akselerasi.',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Apa prospek karir lulusan Teknik Informatika?',
    answer:
      'Lulusan dapat berkarir sebagai Software Engineer, Data Analyst, Network Administrator, Cybersecurity Specialist, IT Consultant, atau membangun startup teknologi sendiri.',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Apakah ada program magang atau kerja praktik?',
    answer:
      'Ya, prodi memiliki kerjasama dengan berbagai perusahaan teknologi dan instansi pemerintahan untuk program magang. Mahasiswa wajib menjalani kerja praktik di semester akhir.',
    order: 5,
  },
];

export default faqs.sort((a, b) => a.order - b.order);
