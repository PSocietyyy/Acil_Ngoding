# Landing Page Prodi Teknik Informatika UMC

Landing page statis untuk Program Studi S1 Teknik Informatika, Universitas Muhammadiyah Cirebon (UMC).

---

## Konsep Desain

- **Gaya Visual**: Clean, modern, dan profesional dengan whitespace yang luas agar nyaman dilihat.
- **Warna Branding**:
  - Primary Red: `#DF1A22`
  - Yellow: `#F2A900`
  - Green: `#00853F`
  - Black & White: `#111111` & `#FFFFFF`
- **Tipografi**:
  - Heading: Sora
  - Body: Plus Jakarta Sans
- **Struktur Komponen**: Menggunakan pola Atomic Design (`atoms/`, `molecules/`, `organisms/`).
- **Fitur Utama**:
  - Preloader splash screen dengan progress bar.
  - Sticky navbar dengan efek glassmorphism saat di-scroll.
  - Accordion FAQ.
  - Galeri kegiatan mahasiswa & fasilitas kampus.

---

## Teknologi

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Bahasa**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Font Engine**: `next/font/google` (Sora & Plus Jakarta Sans)
---

## Cara Menginstal dan Menjalankan

### Prasyarat
- Node.js versi `20.x` atau lebih baru
- npm

### Langkah-langkah

1. **Install Dependensi**
   ```bash
   npm install
   ```

2. **Build Proyek**
   ```bash
   npm run build
   ```

3. **Jalankan Website**
   ```bash
   npm run start
   ```

Buka `http://localhost:3000` di browser.

> **Note**: Untuk menjalankan mode pengembang (development), gunakan perintah `npm run dev`.

---

## Referensi Desain

- [Scholaro - University Landing Page](https://dribbble.com/shots/27300446-Scholaro-University-Landing-Page)