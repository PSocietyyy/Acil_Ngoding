import Preloader from '@/app/components/molecules/Preloader';
import BackToTop from '@/app/components/molecules/BackToTop';
import Navbar from '@/app/components/organisms/Navbar';
import HeroSection from '@/app/components/organisms/HeroSection';
import AboutSection from '@/app/components/organisms/AboutSection';
import VisionMission from '@/app/components/organisms/VisionMission';
import ProgramSection from '@/app/components/organisms/ProgramSection';
import StatsSection from '@/app/components/organisms/StatsSection';
import WhyUsSection from '@/app/components/organisms/WhyUsSection';
import GallerySection from '@/app/components/organisms/GallerySection';
import TestimonialSection from '@/app/components/organisms/TestimonialSection';
import FaqSection from '@/app/components/organisms/FaqSection';
import CtaSection from '@/app/components/organisms/CtaSection';
import Footer from '@/app/components/organisms/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMission />
        <ProgramSection />
        <StatsSection />
        <WhyUsSection />
        <GallerySection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
