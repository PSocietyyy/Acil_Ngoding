import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Teknik Informatika — Universitas Muhammadiyah Cirebon",
  description:
    "Program Studi S1 Teknik Informatika UMC — Mencetak lulusan unggul, inovatif, dan berakhlak mulia di bidang teknologi informasi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${sora.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
