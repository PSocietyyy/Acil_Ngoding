import { Program } from '@/types';

const programs: Program[] = [
  {
    id: 'rpl',
    title: 'Rekayasa Perangkat Lunak',
    description:
      'Pelajari pemrograman, pengembangan aplikasi, dan rekayasa sistem perangkat lunak dengan pendekatan industri terkini.',
    iconName: 'code',
    badge: 'Populer',
    badgeVariant: 'red',
    order: 1,
  },
  {
    id: 'jaringan',
    title: 'Jaringan & Keamanan Siber',
    description:
      'Kuasai infrastruktur jaringan komputer, administrasi server, dan teknik keamanan siber untuk melindungi data digital.',
    iconName: 'network',
    badge: 'Dibutuhkan',
    badgeVariant: 'green',
    order: 2,
  },
  {
    id: 'data',
    title: 'Sistem Informasi & Data',
    description:
      'Dalami pengelolaan basis data, analisis data, dan pengembangan sistem informasi untuk pengambilan keputusan bisnis.',
    iconName: 'database',
    badge: 'Tren Baru',
    badgeVariant: 'yellow',
    order: 3,
  },
];

export default programs.sort((a, b) => a.order - b.order);
